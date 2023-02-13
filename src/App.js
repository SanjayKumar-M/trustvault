import Home from './Pages/Home';
import UploadForm from './Pages/Upload'
import Recent from './Pages/Recent';
import Verify from './Pages/Verify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route exact path='Home' element={<Home />} />
          <Route exact path='UploadForm' element={<UploadForm />} />
          <Route exact path='Recent' element={<Recent />} />
          <Route exactpath='Verify' element={<Verify />} />
        </Routes>
      </BrowserRouter>
    </div>
  );  
}

export default App;
