import Header from './components/Header.jsx';
import Home from './views/Home.jsx';
import './App.scss';
import { TodosProvider } from './TodosContext.jsx';



export function App() {


  return (
    <>
      <main>
        <TodosProvider>
          <Header appName="To-Do List With React"/>
          <Home/> 
        </TodosProvider>


      </main>
    </>
  )
}


export default App
