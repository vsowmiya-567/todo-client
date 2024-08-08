import React, { useEffect, useState } from 'react';
import './Homepage.css'
// import Button from 'react-bootstrap/Button';
// import {useNavigate } from 'react-router-dom';
// import GetTodos from '../GetTodos/GetTodos';
// import Form from 'react-bootstrap/Form';
import CreateToda from '../Create Todo/CreateTodo.jsx';
import axios from 'axios';
import CreateTodo from '../Create Todo/CreateTodo.jsx';


// const Homepage = () => {
//         const [todos,setTodos] = useState([])

//         useEffect(()=>{
//             (async()=>{
//                 const response = await axios.get('http://localhost:3000/todos/get')
//                 console.log(response.data.todos);
//                 setTodos(response.data.todos)
                
//                 })()          
//             },[])

const Homepage = () => {
    const [todos, setTodos] = useState([]);
    const [flag,setFlag] = useState(false)
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get('http://localhost:3000/todos/get');
                console.log(response.data.todos);
                setTodos(response.data.todos);
                setFlag(true)
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchTodos();
    }, [flag]);

    const handleTodoAdded = (newTodo) => {
        setTodos(prevTodos => [...prevTodos, newTodo]);
    };


    // return (
    //     <div className='homepage__body'>
    //         <h3>
    //             TO---DO List
    //         </h3>            
    //             <CreateToda/>
            
    //         {
    //             todos.length === 0 
    //             ?
    //             <div><h4 className='record'>No Record</h4></div>
    //             :
    //         todos.map((item, index)=>{
    //             return <div className='todo__getdata' key={index}>
    //                 <h5>
    //                     {item.task}
    //                     {/* <FontAwesomeIcon icon="fa-solid fa-trash-can-check" /> */}
    //                 </h5>
    //             </div>
    //             // console.log(item);
                
    //         })}

    //     </div>
    // );
// }

    return (
        <div className='homepage__body'>
            <h3>TO---DO List</h3>
            <CreateTodo onTodoAdded={handleTodoAdded} />
            {todos.length === 0 ? (
                <div><h4 className='record'>No Record</h4></div>
            ) : (
                todos.map((item, index) => {
                    return (
                    <div className='todo__getdata' key={index}>
                        <h5>{item?.task}</h5>
                    </div>
                )}
                ))
            }
        </div>
        
    );
};



export default Homepage;