import React, {useState} from 'react'

const TaskThree =() =>{
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleChange = (event) => {
      setName(event.target.value);
    }
    const handle = (event) =>{
    setAge(event.target.value);
    }
    
  
    return (
      <div>
        <h1>Task Three</h1>
        <label>
          Введи свое имя:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <label>
            и возраст
        <input type="number" value={age} onChange={handle} />
        </label>
        <p>Привет, {name}. Тебе уже {age} лет!</p>
      </div>
    );
  }
    

export default TaskThree;