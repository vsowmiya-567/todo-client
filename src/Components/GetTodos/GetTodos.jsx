import React, { useEffect, useState } from 'react';
import './GetTodos.css';
import axios from 'axios';

const GetTodos = () => {
    const [results,setResults] = useState([])
    
    // useEffect(()=>{
    //     try {
    //         axios.get('http://localhost:3000/todos/get')
    //             .then(res => {
    //                 console.log('res----',res)
    //                 setResults(res.data.todo.title)
    //                 console.log("result",results);
                    
    //             })
    //             .catch(err => console.log(err))
        
    //     } catch (error) {
    //         console.log(error);
            
    //     }
        
    // },[])

    return (
        <div className='get__todo'>
          
     
            
        </div>
    );
};

export default GetTodos;