import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/layout/Header';
import ScrollToTop from './components/layout/ScrollToTop';
import Login from './components/pages/Login';
import Main from './components/layout/Main';

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
