import React, { useEffect } from 'react'
import './styles.scss';
import { usePost } from '../../hooks/usePost';

const PostsWithHooks = () => {

    const { getAllPost, getOnlyOnePost, individualPost, postToShow} = usePost();

    useEffect(() => {
        getAllPost();
    }, [])


  return (
    <div className='posts'>
        <div className='posts__add'>
            <button onClick={() => getOnlyOnePost(1)}> Get specific product </button>
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

export default PostsWithHooks;