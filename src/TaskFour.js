import React, {useState} from 'react'
import TaskOne from './TaskOne';

const TaskFour = () =>{
    const [color, setColor] = useState('black');

    const changeColor = () => {
      const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
    };
    
    return (
      <div>
        <TaskOne color={color} />
        <h1 style={{ color }}>Task Four </h1>
    
        <button onClick={changeColor}>Change Color</button>
      </div>
    );
  };

export default TaskFour;