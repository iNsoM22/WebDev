import './App.css';
import {useState} from 'react';

function App() {
  
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [tasksMemo, settasksMemo] = useState([])
  
  const TitleChange = (elem) => {
    settitle(elem.target.value)
  }  
  
  const DescChange = (elem) => {
    setdesc(elem.target.value)
  }   
  
  const SubmitionHandler = (elem) => {
    elem.preventDefault()
    if(title != "" && desc.length > 0){
      settasksMemo([...tasksMemo, {title, desc}])
      settitle("")
      setdesc("")
    }

  }  
  
  const ToDoList = (props) => {
    return (
      <>
      <div key={props.index}>
        <div className='title-descr'>
          <h5>{props.title}</h5>
          <p>{props.description}</p>
        </div>
        <button className='remove-btn' value={props.index} onClick={DeleteTask}>-</button>
      </div>
    </>
    )  
  }
  
  const DeleteTask = (id) => {
    let temp = [...tasksMemo]
    temp.splice(id.target.value, 1)
    settasksMemo(temp)
  }

  let taskRenderer = <h3>Currently. No tasks are added.</h3>
  if(tasksMemo.length > 0){
    taskRenderer = tasksMemo.map((val, ind) => {
      return <ToDoList title={val.title} description={val.desc} index={ind} />
    })
  }
  
  
  return (
    <>
      <div className='main'>
        <h1>ToDo List</h1>
        <form onSubmit={SubmitionHandler}>
          <div className='input-containers'>
            <input className='title-field' type='text' value={title} onChange={TitleChange} placeholder='Title'/>
            <input className='desc-field' type='text' value={desc} onChange={DescChange} placeholder='Description'/>
          </div>
          <button className='add-btn' type='submit'>Add to the List</button>
        </form>
        <hr />
        <div className='tasks-container'>
          {taskRenderer}
        </div>
      </div>
    </>
  );
}

export default App;
