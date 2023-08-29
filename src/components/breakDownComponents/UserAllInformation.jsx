import React from 'react';
import './styles.scss';
const UserAllInformation = ({ name, level, shortDescription, dateCreation }) => {
  return (
    <div className='card'>
        <div className='card__header'>
            <h3>{name}</h3>
            <h5>{level}</h5>
            <p>{dateCreation}</p>
        </div>
        <div className='card__body'>
            <p className='text-sm text-gray-500'>{shortDescription}</p>
        </div>
    </div>
    
  )
}

export default UserAllInformation;
