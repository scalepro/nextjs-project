import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import MaskedInput from 'react-text-mask';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const validateCpf = (cpf) => {
  cpf = cpf.replace(/\D/g, '');
  console.log(cpf);
  if (cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  var result = true;
  [9, 10].forEach(function (j) {
    var soma = 0,
      r;
    cpf
      .split(/(?=)/)
      .splice(0, j)
      .forEach(function (e, i) {
        soma += parseInt(e) * (j + 2 - (i + 1));
      });
    r = soma % 11;
    r = r < 2 ? 0 : 11 - r;
    if (r != cpf.substring(j, j + 1)) result = false;
  });
  return result;
};

export default function Example() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const valueToken = '123654';

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>React Input Mask</label>
        <Controller
          control={control}
          name="cpf"
          rules={{
            required: true,
            validate: (value) => !validateCpf(value) && 'Digite um CPF válido',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <MaskedInput
              mask={[
                /\d/,
                /\d/,
                /\d/,
                '.',
                /\d/,
                /\d/,
                /\d/,
                '.',
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
              ]}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
            />
          )}
        />
        {errors.cpf && errors.cpf.message}

        <button
          type="submit"
          className="bg-primary-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        >
          Save
        </button>
      </form>
    </section>
  );
}
