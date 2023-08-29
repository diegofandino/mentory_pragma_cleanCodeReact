import React, { useState } from 'react'

const DesestructuringObjects = () => {

    const Person = {
        lastname: 'Hank',
        phone: '312684547212',
        level: 'Senior',
        company: 'Pragma S.A',
        address: {
            plate: '150 # 1542 - 50',
        }
    }

    const { name = "default name", lastname, address: { neighborhood } } = Person;

  return (
    <>
    <div>
        USE WITHOUT DESTRUCTURING
        <h3>Name: {Person.name}</h3>
        <h3>Lastname: {Person.lastname}</h3>
        <p>Neighborhood: {Person.address.neighborhood}</p>
    </div>
    <div>
        USE WITH DESTRUCTURING
        <h3>Name: {name}</h3>
        <h3>Lastname: {lastname}</h3>
        <p>Neighborhood: {neighborhood}</p>
    </div>
    </>
  )
}

export default DesestructuringObjects;
