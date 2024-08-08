import React, { useState } from 'react' 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CreateTodo.css'
import axios from 'axios';
import GetTodos from '../GetTodos/GetTodos.jsx';

// const CreateToda = ()=> {

//   const [task,setTask] = useState('')
  
//     const handleclick = async (e) => {
//         console.log('task------',task);
        
//         try {
//             e.preventDefault()
//             await axios.post('http://localhost:3000/todos/create', {task})                     
//                 .then(result => console.log('result', result))
//                 .catch(err => console.log(err))
//         } catch (error) {
//             console.log(error);

//         }

//     }          
//   return (
    
//     <div>
//       <Form.Group className="mb-3 homepage__inp" controlId="exampleForm.ControlInput1">
//         <Form.Control type="email" placeholder="Type your task here"
//           onChange={(e) => { setTask(e.target.value) }} />
//         <Button variant="warning" type='submit' onClick={handleclick}>+Add</Button>

//       </Form.Group>
//     </div>   
//   );
// }

// export default CreateToda;

const CreateTodo = ({ onTodoAdded }) => {
  const [task, setTask] = useState('');

  const handleClick = async (e) => {
      e.preventDefault();

      if (task.trim()) {
          try {
             
              const response = await axios.post('http://localhost:3000/todos/create', { task });
              if (onTodoAdded) {
                  onTodoAdded(response.data.todo); 
              }            
              setTask('');
          } catch (error) {
              console.error('Error adding todo:', error);
          }
      }
  };

  return (
      <div>
          <Form.Group className="mb-3 homepage__inp" controlId="exampleForm.ControlInput1">
              <Form.Control
                  type="text"
                  placeholder="Type your task here"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
              />
              <Button variant="warning" onClick={handleClick}>+Add</Button>
          </Form.Group>
      </div>
  );
};

export default CreateTodo;