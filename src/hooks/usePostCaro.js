import React,{useState} from 'react'
import axios from 'axios';

const usePostCaro = () => {
    const [individualPost,  setIndividualPost] = useState({})
    const [postToShow, setpostToShow] = useState([])

    const getNewProduct = async (id) => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setIndividualPost(response.data);
            setpostToShow([]);
        } catch (error) {
            setIndividualPost({});
        }
    }

        const getAllProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products?limit=5');
                setIndividualPost({});
                setpostToShow(response.data);
            } catch (error) {
                setpostToShow({});
            }
        }
        
  

  return {individualPost, postToShow, getNewProduct, getAllProducts}
}

export default usePostCaro