import { useForm, Controller } from 'react-hook-form';
import MaskedInput from 'react-text-mask';
import { classNames, validateCpf } from '@/services/functions';
import Address from './Address';
import {
  defaultInput,
  errorInput,
  disabledDefaultInput,
  defaultLabel,
  defaultButton,
  dividedCard,
  cardTitle,
  cardSubtitle,
  errorFormMessage,
} from '@/styles/StyledElements';

export default function BillingData() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="mt-10" aria-labelledby="billing-data">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={dividedCard}>
          <div className="px-4 py-5 sm:p-6">
            <div>
              <h2 id="billing-data" className={cardTitle}>
                Dados de faturamento
              </h2>
              <p className={cardSubtitle}>
                Atualize os detalhes da sua conta e suas informações de
                faturamento.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-6">
              <div className="col-span-4 sm:col-span-2">
                <label htmlFor="first_name" className={defaultLabel}>
                  Primeiro nome
                </label>
                <input
                  type="text"
                  id="first_name"
                  className={classNames(
                    errors.first_name && !errors.first_name.message
                      ? errorInput
                      : defaultInput
                  )}
                  placeholder="João"
                  {...register('first_name', { required: true })}
                />
                {errors.first_name && errors.first_name.type === 'required' && (
                  <p className={errorFormMessage}>Este campo é obrigatório</p>
                )}
              </div>

              <div className="col-span-4 sm:col-span-2">
                <label htmlFor="last_name" className={defaultLabel}>
                  Último nome
                </label>
                <input
                  type="text"
                  id="last_name"
                  className={classNames(
                    errors.last_name && !errors.last_name.message
                      ? errorInput
                      : defaultInput
                  )}
                  placeholder="Oliveira"
                  {...register('last_name', { required: true })}
                />
                {errors.last_name && errors.last_name.type === 'required' && (
                  <p className={errorFormMessage}>Este campo é obrigatório</p>
                )}
              </div>

              <div className="col-span-4 sm:col-span-2">
                <label htmlFor="email_address" className={defaultLabel}>
                  Endereço de email
                </label>
                <span
                  type="email"
                  id="email_address"
                  className={disabledDefaultInput}
                  disabled
                >
                  exemplo@hotmail.com
                </span>
              </div>
              <div className="col-span-4 sm:col-span-1">
                <label htmlFor="cpf" className={defaultLabel}>
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
                          ? errorInput
                          : defaultInput,
                        'focus-visible:ring-primary-500 focus-visible:border-primary-500'
                      )}
                      placeholder="000.000.000-00"
                    />
                  )}
                />
                {errors.cpf &&
                  ((errors.cpf.type === 'required' && (
                    <p className={errorFormMessage}>Este campo é obrigatório</p>
                  )) ||
                    (errors.cpf.message && (
                      <p className={errorFormMessage}>
                        <span>{errors.cpf.message}</span>
                      </p>
                    )))}
              </div>

              <div className="col-span-4 sm:col-span-1">
                <label htmlFor="phone" className={defaultLabel}>
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
                          ? errorInput
                          : defaultInput,
                        'focus-visible:ring-primary-500 focus-visible:border-primary-500'
                      )}
                      placeholder="(00) 00000-0000"
                    />
                  )}
                />
                {errors.phone &&
                  (((errors.phone.type === 'minLength' ||
                    errors.phone.type === 'maxLength') && (
                    <p className={errorFormMessage}>
                      Número de telefone incorreto
                    </p>
                  )) ||
                    (errors.phone.type === 'required' && (
                      <p className={errorFormMessage}>
                        Este campo é obrigatório
                      </p>
                    )))}
              </div>

              <Address register={register} errors={errors} control={control} />
            </div>
          </div>
          <div className="px-4 py-3 bg-white dark:bg-gray-800 text-right sm:px-6">
            <button type="submit" className={defaultButton}>
              Salvar
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
