import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import Home from './pages/Home';
// import Pagination from './pages/Pagination';

function App({ currentPage }) {
  console.log(currentPage);
  return (
    <>
      <Router>
          <Navbar />
          <div className='container'>
            <Routes currentPage={currentPage} >
              <Route exact path="/" element={<Home />} />
              <Route exact path="/page1" element={<FirstPage />} />
              <Route exact path={`/page2/${currentPage>1? currentPage : ''}`} element={<SecondPage />} />
            </Routes>
          </div>
        </Router>
    </>
  );
}

export default App;
