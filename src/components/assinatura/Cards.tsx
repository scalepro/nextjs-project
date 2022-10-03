import { useState, Fragment } from 'react';
import { Modal, Button } from 'flowbite-react';
import { useForm, Controller } from 'react-hook-form';
import { classNames } from '@/services/functions';
import MaskedInput from 'react-text-mask';
import creditCardType from 'credit-card-type';

export default function Cards() {
  const [modalCard, setModalCard] = useState(false);
  const [cardType, setCardType] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const onClick = () => {};
  const onClose = () => setModalCard(false);

  const onHandleCardNumber = (event) => {
    let { name, value } = event.target;
    if (value.length == 19) {
      console.log(creditCardType(value));
      console.log(value);
    }
  };

  const errorInputClass =
    "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'";
  const defaultInputClass =
    'bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500';

  return (
    <>
      <Fragment>
        <Modal show={true} size="lg" onClose={onClose}>
          <Modal.Header>Cartão de crédito</Modal.Header>
          <Modal.Body>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-4 gap-6">
                  <div className="col-span-4">
                    <label
                      htmlFor="card_number"
                      className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Número do cartão
                    </label>
                    <Controller
                      control={control}
                      name="card_number"
                      rules={{
                        required: true,
                        minLength: 19,
                        maxLength: 19,
                      }}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <>
                          <MaskedInput
                            mask={[
                              /\d/,
                              /\d/,
                              /\d/,
                              /\d/,
                              ' ',
                              /\d/,
                              /\d/,
                              /\d/,
                              /\d/,
                              ' ',
                              /\d/,
                              /\d/,
                              /\d/,
                              /\d/,
                              ' ',
                              /\d/,
                              /\d/,
                              /\d/,
                              /\d/,
                            ]}
                            guide={false}
                            value={value}
                            onBlur={onBlur}
                            onChange={onChange}
                            onKeyUp={(event) => onHandleCardNumber(event)}
                            className={classNames(
                              errors.card_number &&
                                (errors.card_number.message ||
                                  errors.card_number.type === 'required' ||
                                  errors.card_number.type === 'minLength' ||
                                  errors.card_number.type === 'maxLength')
                                ? errorInputClass
                                : defaultInputClass,
                              'focus-visible:ring-primary-500 focus-visible:border-primary-500'
                            )}
                            placeholder="0000 0000 0000 0000"
                          />
                          <div className="absolute right-2.5 bottom-2.5">
                            <PaymentIcon icon="visa" />
                          </div>
                        </>
                      )}
                    />
                    {errors.card_number &&
                      (((errors.card_number.type === 'minLength' ||
                        errors.card_number.type === 'maxLength') && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                          Cartão de crédito inválido
                        </p>
                      )) ||
                        (errors.card_number.type === 'required' && (
                          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                            Este campo é obrigatório
                          </p>
                        )))}
                  </div>
                </div>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onClick}>I accept</Button>
            <Button color="gray" onClick={onClick}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
      <section className="mt-10" aria-labelledby="cards">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-700 dark:text-gray-200">
              Cartão de crédito
            </h3>
            <div className="mt-2 sm:flex sm:items-start sm:justify-between">
              <div className="max-w-xl text-sm text-gray-500 dark:text-gray-400">
                <p>
                  É necessário que sua conta possua ao menos um cartão de
                  crédito configurado como padrão para pagamento.
                </p>
              </div>
              <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
