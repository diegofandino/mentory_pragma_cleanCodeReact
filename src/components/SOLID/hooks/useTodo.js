import axios from 'axios';
import { useEffect, useState } from 'react';

export const useTodo = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getAllTodos = async () => {
            setLoading(true);
            try {
                const { data = [] } = await axios.get('https://jsonplaceholder.typicode.com/todos');
                setTodos(data.splice(0,20));
            } catch (error) {
                console.log(error);   
            } finally {
                setLoading(false);
            }

        };

        getAllTodos();

    }, []);

    return {
        todos,
        loading,
    }
    
}