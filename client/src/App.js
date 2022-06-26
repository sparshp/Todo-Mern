
import { useEffect, useState } from 'react';
import './App.css';
import Item from './components/Item';
import axios from 'axios'

function App() {

  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [time, setTime] = useState("")
  const [isUpdating, setIsUpdating] = useState("")
  const [todo, setTodo] = useState([])
  

  useEffect(() => {
    axios.get("http://localhost:5000/get-todo")
      .then((res) => setTodo(res.data))
      .catch((err) => console.log(err))
  }, []);

  const addUpdate = () => {
    if (isUpdating == "") {
      axios.post("http://localhost:5000/get-todo", { text, category, time })
        .then((res) => {
          setText("")
        })
      .catch((err) => console.log(err))
    }
  }
  
  const deleteToDo = (_id) => {
    
  }
  const updateToDo = (_id, text, category,time) => {
    
  }


  return (
    <div className="App">
      <div className="container">
        <h1>todo app</h1>
        
        <div className="top">
          <input type="text" placeholder="Write Something..." value={text} onChange={(e) => setText(e.target.value)} />
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="">Personal</option>
            <option value="">Work</option>
            <option value="">College</option>
          </select>
          <input className="time_input" type="time"  value={time} onChange={(e) => setTime(e.target.value)} />
          <div className="add" onClick={addUpdate}>Add</div>
        </div>

        <div className="list">
          {
            todo.map(item => <Item key={item._id} text={item.text} category={item.category} time={item.time}
              remove={()=>deleteToDo(item._id)}
              update={()=>updateToDo(item._id,item.text, item.category,item.time)}
            />)
          }
        </div>
      </div>
      
    </div>
  );
}

export default App;
