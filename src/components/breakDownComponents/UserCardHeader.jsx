import React from 'react'

const UserCardHeader = ({ name, level, dateCreation }) => {
  return (
    <div className='card__header'>
        <h3>{name}</h3>
        <h5>{level}</h5>
        <p>{dateCreation}</p>
    </div>
  )
}

export default UserCardHeader;
