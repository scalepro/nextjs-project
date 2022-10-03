import { createContext, useState, Fragment } from 'react';
import { Modal, Button } from 'flowbite-react';
import { useForm, Controller } from 'react-hook-form';
import { classNames } from '@/services/functions';
import MaskedInput from 'react-text-mask';
import creditCardType from 'credit-card-type';
import PaymentIcon from 'react-payment-icons';

type ModalCardType = {
  modalCard: boolean;
  setModalCard: (value: boolean) => void;
};

export const ModalCard = createContext({} as ModalCardType);
export function ModalCardProvider({ children }) {
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
    <ModalCard.Provider value={{ modalCard, setModalCard }}>
      {children}
    </ModalCard.Provider>
  );
}
