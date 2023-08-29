import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss'

const GenericCard = ({ title, imageName }) => {
  return (
    <div className='genericCard'>
        <img src={require(`../../assets/${imageName}.png`)} alt={imageName} srcset="" />
        <h3>{ title }</h3>        
    </div>
  )
}

GenericCard.propTypes = {
    title: PropTypes.string.isRequired,
    imageName: PropTypes.string.isRequired,
}

export default GenericCard