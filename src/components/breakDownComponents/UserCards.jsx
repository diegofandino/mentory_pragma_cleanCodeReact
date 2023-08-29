import React from 'react'
import UserCardHeader from './UserCardHeader'
import UserCardBody from './UserCardBody'

export const UserCards = ({name, level, shortDescription, dateCreation}) => {

  return (
    <div className='card'>
        <UserCardHeader name={name} level={level} dateCreation={dateCreation} />
        <UserCardBody shortDescription={shortDescription} />
    </div>
  )
}
