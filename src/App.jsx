import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from './Pages/Home';
import Films from './Pages/films';
import People from './Pages/people';


const App = () => {


    return (



       <BrowserRouter>
       <Routes>

       <Route path="/home" element={<Home />} />
       <Route path="/films" element={<Films />} />
       <Route path="/people" element={<People />} />
        </Routes>
       </BrowserRouter>



    );
};

export default App;
