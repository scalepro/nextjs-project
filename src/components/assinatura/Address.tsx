import { useState, useEffect } from 'react';
import axios from 'axios';
import { Controller } from 'react-hook-form';
import MaskedInput from 'react-text-mask';
import { State, City } from 'country-state-city';
import { classNames } from '@/services/functions';
import LoadingSpin from '@/components/app/LoadingSpin';
import toast, { Toaster } from 'react-hot-toast';
import Toast from '@/components/app/Toast';
import {
  defaultInput,
  errorInput,
  defaultLabel,
  errorFormMessage,
} from '@/styles/StyledElements';

export default function Address({ register, errors, control }) {
  const states = State.getStatesOfCountry('BR');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('');
  const [loadingCep, setLoadingCep] = useState(false);

  const cities = (selectedState) => {
    return selectedState ? City.getCitiesOfState('BR', selectedState) : [];
  };

  const onHandleState = (event) => {
    let { name, value } = event.target;
    setSelectedState(value);
    setSelectedCity('');
  };

  const onHandleCity = (event) => {
    let { name, value } = event.target;
    setSelectedCity(value);
  };

  const onHandleAddress = (event) => {
    let { name, value } = event.target;
    setSelectedAddress(value);
  };

  const onHandleNeighborhood = (event) => {
    let { name, value } = event.target;
    setSelectedNeighborhood(value);
  };

  function onHandleCep(event) {
    let { name, value } = event.target;
    if (value.length == 9) {
      setLoadingCep(true);
      let cep = value.replace('-', '');
      axios
        .get('https://viacep.com.br/ws/' + cep + '/json/')
        .then(function (response) {
          if (!response.data.erro) {
            setSelectedState(response.data.uf);
            setSelectedCity(response.data.localidade);
            setSelectedAddress(response.data.logradouro);
            setSelectedNeighborhood(response.data.bairro);
          } else {
            toast.custom((t) => (
              <Toast
                type="error"
                title="CEP não encontrado!"
                toast={toast}
                id={t.id}
              />
            ));
          }
        })
        .catch(function (error) {
          toast.custom((t) => (
            <Toast
              type="error"
              title="Erro ao buscar CEP!"
              toast={toast}
              id={t.id}
            />
          ));
        })
        .then(function () {
          setLoadingCep(false);
        });
    }
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="col-span-4 sm:col-span-2">
        <div className="relative">
          <label htmlFor="cep" className={defaultLabel}>
            CEP
          </label>
          <Controller
            control={control}
            name="cep"
            rules={{
              required: true,
              minLength: 9,
              maxLength: 10,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <MaskedInput
                  mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                  guide={false}
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  onKeyUp={(event) => onHandleCep(event)}
                  className={classNames(
                    errors.cep &&
                      (errors.cep.message ||
                        errors.cep.type === 'required' ||
                        errors.cep.type === 'minLength' ||
                        errors.cep.type === 'maxLength')
                      ? errorInput
                      : defaultInput,
                    'focus-visible:ring-primary-500 focus-visible:border-primary-500'
                  )}
                  placeholder="00000-000"
                />
                {loadingCep && <LoadingSpin />}
              </>
            )}
          />
          {errors.cep &&
            (((errors.cep.type === 'minLength' ||
              errors.cep.type === 'maxLength') && (
              <p className={errorFormMessage}>Número de CEP incorreto</p>
            )) ||
              (errors.cep.type === 'required' && (
                <p className={errorFormMessage}>Este campo é obrigatório</p>
              )))}
        </div>
      </div>
      <div className="col-span-4 sm:col-span-2">
        <label htmlFor="state" className={defaultLabel}>
          Estado
        </label>
        <select
          id="state"
          name="state"
          className={classNames(
            errors.state && !selectedState ? errorInput : defaultInput
          )}
          {...register('state', { required: true })}
          onChange={(event) => onHandleState(event)}
          value={selectedState}
        >
          <option value="">Selecione um estado</option>
          {states.map((state, stateIdx) => (
            <option
              suppressHydrationWarning
              value={state.isoCode}
              key={stateIdx}
            >
              {state.name}
            </option>
          ))}
        </select>
        {errors.state && !selectedState && (
          <p className={errorFormMessage}>Este campo é obrigatório</p>
        )}
      </div>
      <div className="col-span-4 sm:col-span-2">
        <label htmlFor="city" className={defaultLabel}>
          Cidade
        </label>
        <select
          id="city"
          name="city"
          className={classNames(
            errors.city && !selectedCity ? errorInput : defaultInput
          )}
          {...register('city', { required: true })}
          onChange={(event) => onHandleCity(event)}
          value={selectedCity}
        >
          <option value="">Selecione uma cidade</option>
          {cities(selectedState ? selectedState : null).map((city, cityIdx) => (
            <option suppressHydrationWarning value={city.id} key={cityIdx}>
              {city.name}
            </option>
          ))}
        </select>
        {errors.city && !selectedCity && (
          <p className={errorFormMessage}>Este campo é obrigatório</p>
        )}
      </div>
      <div className="col-span-4 sm:col-span-2">
        <label htmlFor="address" className={defaultLabel}>
          Endereço
        </label>
        <input
          type="text"
          id="address"
          className={classNames(
            errors.address && !selectedAddress ? errorInput : defaultInput
          )}
          placeholder="Rua da Independência"
          {...register('address', { required: true })}
          onChange={(event) => onHandleAddress(event)}
          value={selectedAddress}
        />
        {errors.address && !selectedAddress && (
          <p className={errorFormMessage}>Este campo é obrigatório</p>
        )}
      </div>

      <div className="col-span-4 sm:col-span-1">
        <label htmlFor="number" className={defaultLabel}>
          Número
        </label>
        <input
          type="text"
          id="number"
          className={classNames(
            errors.number && !errors.number.message ? errorInput : defaultInput
          )}
          placeholder="000"
          {...register('number', { required: true })}
        />
        {errors.number && errors.number.type === 'required' && (
          <p className={errorFormMessage}>Este campo é obrigatório</p>
        )}
      </div>
      <div className="col-span-4 sm:col-span-1">
        <label htmlFor="complement" className={defaultLabel}>
          Complemento
        </label>
        <input
          type="text"
          id="complement"
          className={classNames(
            errors.complement && !errors.complement.message
              ? errorInput
              : defaultInput
          )}
          placeholder="Apto 000"
          {...register('complement')}
        />
      </div>

      <div className="col-span-4 sm:col-span-2">
        <label htmlFor="neighborhood" className={defaultLabel}>
          Bairro
        </label>
        <input
          type="text"
          id="neighborhood"
          className={classNames(
            errors.neighborhood && !selectedNeighborhood
              ? errorInput
              : defaultInput
          )}
          placeholder="Alphaville"
          {...register('neighborhood', { required: true })}
          onChange={(event) => onHandleNeighborhood(event)}
          value={selectedNeighborhood}
        />
        {errors.neighborhood && !selectedNeighborhood && (
          <p className={errorFormMessage}>Este campo é obrigatório</p>
        )}
      </div>
    </>
  );
}
