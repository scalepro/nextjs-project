import { useForm, Controller } from 'react-hook-form';
import MaskedInput from 'react-text-mask';
import { classNames, validateCpf } from '@/services/functions';
import Address from './Address';

export default function BillingData() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const errorInputClass =
    "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'";
  const defaultInputClass =
    'bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500';

  return (
    <section className="mt-10" aria-labelledby="billing-data">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg divide-y divide-gray-200 dark:divide-gray-700">
          <div className="px-4 py-5 sm:p-6">
            <div>
              <h2
                id="billing-data"
                className="text-lg leading-6 font-medium text-gray-700 dark:text-gray-200"
              >
                Dados de faturamento
              </h2>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Atualize os detalhes da sua conta e suas informações de
                faturamento.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-6">
              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Primeiro nome
                </label>
                <input
                  type="text"
                  id="first_name"
                  className={classNames(
                    errors.first_name && !errors.first_name.message
                      ? errorInputClass
                      : defaultInputClass
                  )}
                  placeholder="João"
                  {...register('first_name', { required: true })}
                />
                {errors.first_name && errors.first_name.type === 'required' && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    Este campo é obrigatório
                  </p>
                )}
              </div>

              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Último nome
                </label>
                <input
                  type="text"
                  id="last_name"
                  className={classNames(
                    errors.last_name && !errors.last_name.message
                      ? errorInputClass
                      : defaultInputClass
                  )}
                  placeholder="Oliveira"
                  {...register('last_name', { required: true })}
                />
                {errors.last_name && errors.last_name.type === 'required' && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    Este campo é obrigatório
                  </p>
                )}
              </div>

              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="email_address"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Endereço de email
                </label>
                <span
                  type="email"
                  id="email_address"
                  className="bg-gray-100 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  disabled
                >
                  exemplo@hotmail.com
                </span>
              </div>
              <div className="col-span-4 sm:col-span-1">
                <label
                  htmlFor="cpf"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  CPF
                </label>
                <Controller
                  control={control}
                  name="cpf"
                  rules={{
                    required: true,
                    validate: (value) =>
                      validateCpf(value) || 'Digite um CPF válido',
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
                      guide={false}
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      className={classNames(
                        errors.cpf &&
                          (errors.cpf.message || errors.cpf.type === 'required')
                          ? errorInputClass
                          : defaultInputClass,
                        'focus-visible:ring-primary-500 focus-visible:border-primary-500'
                      )}
                      placeholder="000.000.000-00"
                    />
                  )}
                />
                {errors.cpf &&
                  ((errors.cpf.type === 'required' && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      Este campo é obrigatório
                    </p>
                  )) ||
                    (errors.cpf.message && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        <span>{errors.cpf.message}</span>
                      </p>
                    )))}
              </div>

              <div className="col-span-4 sm:col-span-1">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Telefone
                </label>
                <Controller
                  control={control}
                  name="phone"
                  rules={{
                    required: true,
                    minLength: 15,
                    maxLength: 16,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <MaskedInput
                      mask={[
                        '(',
                        /\d/,
                        /\d/,
                        ')',
                        ' ',
                        /\d/,
                        /\d/,
                        /\d/,
                        /\d/,
                        /\d/,
                        '-',
                        /\d/,
                        /\d/,
                        /\d/,
                        /\d/,
                      ]}
                      guide={false}
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      className={classNames(
                        errors.phone &&
                          (errors.phone.message ||
                            errors.phone.type === 'required' ||
                            errors.phone.type === 'minLength' ||
                            errors.phone.type === 'maxLength')
                          ? errorInputClass
                          : defaultInputClass,
                        'focus-visible:ring-primary-500 focus-visible:border-primary-500'
                      )}
                      placeholder="(00) 00000-0000"
                    />
                  )}
                />
                {errors.phone &&
                  (((errors.phone.type === 'minLength' ||
                    errors.phone.type === 'maxLength') && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      Número de telefone incorreto
                    </p>
                  )) ||
                    (errors.phone.type === 'required' && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        Este campo é obrigatório
                      </p>
                    )))}
              </div>

              <Address register={register} errors={errors} control={control} />
            </div>
          </div>
          <div className="px-4 py-3 bg-white dark:bg-gray-800 text-right sm:px-6">
            <button
              type="submit"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Salvar
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
