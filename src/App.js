import { Outlet } from 'react-router-dom';
import './App.scss';
import HeaderNav from './components/Header/Header';

const App = (props) => {
  return (
    <>
      <HeaderNav />
      <Outlet></Outlet>
     
    </>
  )
}

export default App;
