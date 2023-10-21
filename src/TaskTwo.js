import React,{ useState } from 'react'

const TaskTwo = () => {

  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h1>Task Two</h1>
       {isVisible && <p>Текст</p>}
      <button onClick={handleToggle}>Апарекиум</button>
      
    </div>
  );
};




export default TaskTwo;