import { useState } from 'react';
import './App.css';

function App() {
  const [toDoArray, refreshList] = useState(["Open fancy new to-do list", "Adjust to fancy font", "Start clearing finished tasks"])
  
  
  const removeFromList = (index) => {
    let tempArray=[...toDoArray];
    tempArray.splice(index,1);
    refreshList(tempArray)
  }
  const ToDoItem = (toDoArray) => {
    const SetClass = (index) => {
      switch (index%2){
        case 0:return "light-todoitem";
        case 1:return "dark-todoitem";
        default:return "error-class";
      }};
          return (          
            <>{toDoArray.map((listItem, index) => {
              return (
              <div key={index}  className="to-do-entry"><button onClick={() => {removeFromList(index)}} className={SetClass(index)} >✓</button><li>{listItem}</li></div>
              )})}</>          
          )

}
  const List = (props) => {
    return (
      <ul>
        {ToDoItem(props.list)}
      </ul>
      
    )
  }
  const AddItem = (listArray) => {
    const [animation, setAnimation] = useState(false);
    const [newItem, updateNewItem] = useState("");
    const textChange = (e) => {
      updateNewItem(e.target.value)
    }
    const addToList = (newItem) => {
      let tempArray=[...toDoArray];
      tempArray.push(newItem);
      setAnimation(true);
      refreshList(tempArray);
    }
    return (
      <div 
      setclass="input-area"
      >
      <form
              onSubmit={() => {addToList(newItem)}}
              className={animation ? "spin-once" : ""}
              onAnimationEnd={() => setAnimation(false)}
            
            ><input     
                    id="input-box"
                    autoComplete='off'
                    onChange={textChange} 
                    placeholder="Append an errand"
                  />
      </form>
      </div>
    )
  }
  return (
    <div  className="main-area">
    <h1>Tasks Remaining Unfinished</h1>
    <AddItem />
    <List list={toDoArray}/>
    </div>
  );
}





export default App;