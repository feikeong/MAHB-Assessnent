import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserListing from './UserListing';
import UserCreate from './UserCreate';
import UserDetail from './UserDetail';
import UserEdit from './UserEdit';

function App() {
  return (
    <div className="App">
      <h1>Interview Assessment CRUD</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserListing />}></Route>
          <Route path='/user/create' element={<UserCreate />}></Route>

          <Route path='/users/detail/:uid' element={<UserDetail />}></Route>
          <Route path='/users/edit/:uid' element={<UserEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
