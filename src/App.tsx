//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { useState } from 'react'
import AddItem from './components/AddItem.tsx'
import './App.css'
import { Todo } from './todo.model.ts';
import ListingItems from './components/ListingItems.tsx';
 

function App() {
  const [todo, setTodo] = useState<Todo[]>([]);
 // const [count, setCount] = useState(0)
  const setter = (text:string) => {
    setTodo(previous => [...previous, {id: Math.random().toString(), text: text}])
  }
  const deleteTheItem = (selected: string) => {
    setTodo(previous =>  {return previous.filter(todoToDelete => todoToDelete.id !== selected )})
  }
  return (
    <>
    <AddItem set = {setter}/>
    <ListingItems items = {todo} remover = {deleteTheItem}/>

    </>
   // <>
      /* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
   // </>
  )
}

export default App
