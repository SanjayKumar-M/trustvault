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
          <Route  path="/" element={<Home />} />
          <Route  path="/upload" element={<UploadForm />} />
          <Route  path="/recent" element={<Recent />} />
          <Route  path="verify" element={<Verify />} />
        </Routes>
      </BrowserRouter>
    </div>
  );  
}

export default App;
