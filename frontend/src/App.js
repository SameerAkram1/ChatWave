import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Chatpage from './Pages/Chatpage';

function App() {
  return (
    <div className='BigCont'>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Homepage}/>
        <Route path="/chats" Component={Chatpage}/> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
