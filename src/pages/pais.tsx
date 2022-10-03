import { useState } from 'react';
import { State, City } from 'country-state-city';
import { HiCheckCircle, HiOutlineSelector } from 'react-icons/hi';

export default function Pais() {
  const states = State.getStatesOfCountry('BR');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const updatedCities = (selectedState) => {
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

  return (
    <>
      <h1>Lista</h1>
      <select
        id="location"
        name="location"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        onChange={(event) => onHandleState(event)}
      >
        <option>Selecione um estado...</option>
        {states.map((state, cityIdx) => (
          <option value={state.isoCode}>{state.name}</option>
        ))}
      </select>
      <br />
      <select
        id="location"
        name="location"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        onChange={(event) => onHandleCity(event)}
      >
        <option>Selecione uma cidade...</option>
        {updatedCities(selectedState ? selectedState : null).map(
          (city, cityIdx) => (
            <option value={city.id}>{city.name}</option>
          )
        )}
      </select>
    </>
  );
}
