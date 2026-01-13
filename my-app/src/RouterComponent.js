import logo from './logo.jpeg';
import searchBar from './searchBar.jpg';
import './App.css';
import { Routes, Route, Link, useNavigate} from 'react-router-dom';
import Movies from './pages/movies';
import Categorise from './pages/categorise';
import Series from './pages/series';
import Main from './pages/main';
import Contents from './pages/contents';
import SearchBar from './pages/searchBar';


function RouterComponent() {
  const navigate=useNavigate();
  const imgClick=(adr)=>{
    navigate(adr);
  };

  return (
    <div className="App">
        <div className="TopBar">
          <img onClick={()=>{imgClick("/");}} src={logo} className="App-logo" alt="logo" />
          <h2 className="Menu"><Link className="Menu" to="/movies">영화</Link></h2>
          <h2 className="Menu"><Link className="Menu" to="/series">시리즈</Link></h2>
          <h2 className="Menu"><Link className="Menu" to="/categorise">카테고리</Link></h2>
          <img width={"35px"} onClick={()=>{imgClick("/searchBar")}} src={searchBar} alt="searchBar"></img>
          
        </div>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/movies" element={<Movies/>}></Route>
          <Route path="/categorise" element={<Categorise/>}></Route>
          <Route path="/series" element={<Series/>}></Route>
          <Route path="/contents/:id" element={<Contents/>}></Route>
          <Route path="/searchBar" element={<SearchBar/>}></Route>
        </Routes>
    </div>
  );
}

export default RouterComponent;
