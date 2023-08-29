import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './styles.scss';

const Posts = () => {

    const [postToShow, setpostToShow] = useState({});
    const [individualPost, setIndividualPost] = useState({});

    const handleAddPost = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products/1');
            setIndividualPost(response.data);
            setpostToShow([]);
        } catch (error) {
            setIndividualPost({});
        }
    }

    console.log(individualPost); 

    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products?limit=5');
                setIndividualPost({});
                setpostToShow(response.data);
            } catch (error) {
                setpostToShow({});
            }
        }

        getAllProducts();
        
    }, [])
    

  return (
    <div className='posts'>
        <div className='posts__add'>
            <button onClick={handleAddPost}> Get specific product </button>
        </div>
        <div className='posts__list'>
            { postToShow.length === 0 && Object.keys(individualPost).length !== 0 && (
                <div className='posts__list__item'>
                    <div className='posts__list__item__image'>
                        <img src={individualPost.image} alt={individualPost.title} />
                    </div>
                    <div className='posts__list__item__content'>
                        <span><h3>{individualPost.title}</h3> - <strong> ${individualPost.price} </strong></span>
                        <p>{individualPost.description}</p>
                    </div>
                </div>
            )}
            {Object.keys(individualPost).length === 0 && Array.isArray(postToShow) && postToShow.map(
                ( { id, title, description, price, image } ) => 
                    <div className='posts__list__item' key={id}>
                        <div className='posts__list__item__image'>
                            <img src={image} alt={title} />
                        </div>
                        <div className='posts__list__item__content'>
                            <span><h3>{title}</h3> - <strong> ${price} </strong></span>
                            <p>{description}</p>
                        </div>
                    </div>
            )}
        </div>
    </div>
  )
}

export default Posts;