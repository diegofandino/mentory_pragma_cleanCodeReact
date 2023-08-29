import axios from 'axios';
import { useState } from 'react'

export const usePost = () => {

    const [postToShow, setpostToShow] = useState([]);
    const [individualPost, setIndividualPost] = useState({});

    const getAllPost = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products?limit=5');
            setpostToShow(response.data);
            setIndividualPost({})
        } catch (error) {
            setpostToShow({});
        }
    }

    const getOnlyOnePost = async (id) => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setIndividualPost(response.data);
            setpostToShow([])
        } catch (error) {
            setIndividualPost({});
        }
    }

  return {
    getAllPost,
    getOnlyOnePost,
    postToShow,
    individualPost,
  }
}
