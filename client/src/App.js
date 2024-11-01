import   { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { getUsers } from './redux/actions';
import UserList from './components/UserList';
import "./App.css";
import AddUser from './components/AddUser';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  
  return (
  <div className="App">
    <AddUser /> 
    <UserList />
  </div>
  );
}

export default App;