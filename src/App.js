import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './views/Home' 
import Login from './views/Login';
import NewGroup from './views/NewGroup';
import NewUser from './views/NewUser';
import { AppProvider } from '../src/context/AppContext';
import Group from './views/Group'

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/newgroup' element={<NewGroup/>}/>
          <Route exact path='/newuser' element={<NewUser/>}/>
          <Route exact path='/group' element={<Group/>}/>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
