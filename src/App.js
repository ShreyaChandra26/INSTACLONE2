import './App.css';
import Loading from './components/Loading';
import Wrapper from './components/Wrapper';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loading/>}/>
        <Route path="posts" element={<Wrapper/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
