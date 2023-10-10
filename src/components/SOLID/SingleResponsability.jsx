/* import axios from 'axios'; */
import React from 'react'
import { useTodo } from './hooks/useTodo'
/* import { useEffect } from 'react';
import { useState } from 'react' */

export const SingleResponsability = () => {

    const { todos, loading } = useTodo();

    //HERE NOT ACHIEVE SINGLE RESPONSABILITY
   /*  const [todos, setTodos] = useState([]);
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

    }, []) */
    
    

  return (
    <div>
        {loading ? 
        (<div>Loading...</div>) :
        (<div>
            <ul>
            { todos.map( td => (
                <li key={td.id}>td.title</li>
            )) }
            </ul>
        </div>)
        }
    </div>
  )
}
