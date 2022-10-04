import { useState, Fragment } from 'react';
import { Modal, Button, Spinner } from 'flowbite-react';
import { useForm, Controller } from 'react-hook-form';
import MaskedInput from 'react-text-mask';
import creditCardType from 'credit-card-type';
import { classNames } from '@/services/functions';
import toast, { Toaster } from 'react-hot-toast';
import Toast from '@/components/app/Toast';
import {
  defaultInput,
  errorInput,
  defaultLabel,
  defaultButton,
  errorFormMessage,
} from '@/styles/StyledElements';

export default function AddCardModal({ modalCard, onCloseModal }) {
  const [cardType, setCardType] = useState('');
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const resetElements = () => {
    reset();
    setCardType('');
  };

  const onSubmit = (data) => {
    setLoadingSubmit(true);
    setTimeout(() => {
      console.log(data);
      onCloseModal();
      resetElements();
      setLoadingSubmit(false);
      toast.custom((t) => (
        <Toast
          type="success"
          title="Cartão salvo com sucesso"
          toast={toast}
          id={t.id}
        />
      ));
    }, 10000);
  };

  const onHandleCardNumber = (event) => {
    let { name, value } = event.target;
    if (value.length == 19) {
      if (creditCardType(value)[0]?.type)
        setCardType(creditCardType(value)[0]?.type);
    } else {
      setCardType('');
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Fragment>
        <Modal show={modalCard} size="lg" onClose={onCloseModal}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Modal.Header>Cartão de crédito</Modal.Header>
            <Modal.Body>
              <div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-4">
                    <div className="relative">
                      <label htmlFor="card_number" className={defaultLabel}>
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
                                  ? errorInput
                                  : defaultInput,
                                'focus-visible:ring-primary-500 focus-visible:border-primary-500'
                              )}
                              placeholder="0000 0000 0000 0000"
                            />
                            <div className="absolute w-7 right-3 bottom-3">
                              {cardType && (
                                <img
                                  className="fill-gray-200"
                                  src={
                                    '/credit-card-icons/flat-rounded/' +
                                    cardType +
                                    '.svg'
                                  }
                                />
                              )}
                            </div>
                          </>
                        )}
                      />
                      {errors.card_number &&
                        (((errors.card_number.type === 'minLength' ||
                          errors.card_number.type === 'maxLength') && (
                          <p className={errorFormMessage}>
                            Cartão de crédito inválido
                          </p>
                        )) ||
                          (errors.card_number.type === 'required' && (
                            <p className={errorFormMessage}>
                              Este campo é obrigatório
                            </p>
                          )))}
                    </div>
                  </div>
                  <div className="col-span-4">
                    <label htmlFor="holder_name" className={defaultLabel}>
                      Nome no cartão
                    </label>
                    <input
                      type="text"
                      id="holder_name"
                      className={classNames(
                        errors.holder_name && !errors.holder_name.message
                          ? errorInput
                          : defaultInput,
                        ' uppercase'
                      )}
                      placeholder="JOÃO P OLIVEIRA"
                      {...register('holder_name', { required: true })}
                    />
                    {errors.holder_name &&
                      errors.holder_name.type === 'required' && (
                        <p className={errorFormMessage}>
                          Este campo é obrigatório
                        </p>
                      )}
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="expiration" className={defaultLabel}>
                      Validade
                    </label>
                    <Controller
                      control={control}
                      name="expiration"
                      rules={{
                        required: true,
                        minLength: 5,
                        maxLength: 5,
                      }}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <MaskedInput
                          mask={[/\d/, /\d/, '/', /\d/, /\d/]}
                          guide={false}
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          onKeyUp={(event) => onHandleCardNumber(event)}
                          className={classNames(
                            errors.expiration &&
                              (errors.expiration.message ||
                                errors.expiration.type === 'required' ||
                                errors.expiration.type === 'minLength' ||
                                errors.expiration.type === 'maxLength')
                              ? errorInput
                              : defaultInput,
                            'focus-visible:ring-primary-500 focus-visible:border-primary-500'
                          )}
                          placeholder="DD/MM"
                        />
                      )}
                    />
                    {errors.expiration &&
                      (((errors.expiration.type === 'minLength' ||
                        errors.expiration.type === 'maxLength') && (
                        <p className={errorFormMessage}>Data inválida</p>
                      )) ||
                        (errors.expiration.type === 'required' && (
                          <p className={errorFormMessage}>
                            Este campo é obrigatório
                          </p>
                        )))}
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="cvv" className={defaultLabel}>
                      Cod. Segurança
                    </label>
                    <Controller
                      control={control}
                      name="cvv"
                      rules={{
                        required: true,
                        minLength: 3,
                        maxLength: 3,
                      }}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <MaskedInput
                          mask={[/\d/, /\d/, /\d/]}
                          guide={false}
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          onKeyUp={(event) => onHandleCardNumber(event)}
                          className={classNames(
                            errors.cvv &&
                              (errors.cvv.message ||
                                errors.cvv.type === 'required' ||
                                errors.cvv.type === 'minLength' ||
                                errors.cvv.type === 'maxLength')
                              ? errorInput
                              : defaultInput,
                            'focus-visible:ring-primary-500 focus-visible:border-primary-500'
                          )}
                          placeholder="123"
                        />
                      )}
                    />
                    {errors.cvv &&
                      (((errors.cvv.type === 'minLength' ||
                        errors.cvv.type === 'maxLength') && (
                        <p className={errorFormMessage}>Código inválido</p>
                      )) ||
                        (errors.cvv.type === 'required' && (
                          <p className={errorFormMessage}>
                            Este campo é obrigatório
                          </p>
                        )))}
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div className="w-full flex justify-end gap-3">
                <Button color="gray" onClick={onCloseModal}>
                  Cancelar
                </Button>
                {!loadingSubmit ? (
                  <Button type="submit">Salvar</Button>
                ) : (
                  <Button>
                    <div className="mr-3">
                      <Spinner size="sm" light={true} />
                    </div>
                    Salvando ...
                  </Button>
                )}
              </div>
            </Modal.Footer>
          </form>
        </Modal>
      </Fragment>
    </>
  );
}
