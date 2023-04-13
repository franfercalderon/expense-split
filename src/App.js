import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './views/Home' 
import Login from './views/Login';
import { AppProvider } from '../src/context/AppContext';
// import Login from './views/Login';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/home' element={<Home/>}/>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
