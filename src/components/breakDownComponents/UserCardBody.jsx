import React from 'react'

const UserCardBody = ({ name, level, shortDescription }) => {
  return (
      <div className='card__body'>
          <p className='text-sm text-gray-500'>{shortDescription}</p>
      </div>
  )
}

export default UserCardBody;