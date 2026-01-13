import './pages.css';
import { useNavigate } from 'react-router-dom';
import contentsData from "./data.json";
import { useState } from 'react';

function Imege(props){
    const imege=[];
    const navigate = useNavigate();
    const [hoveredId, setHoveredId] = useState(null); 
    contentsData.movies.map((value)=>{imege.push(<img
        //className='scale-in-center'
        style={{
            width: '200px', 
            transition: 'transform 0.3s ease',
            transform: hoveredId === value.id ? 'scale(1.2)' : 'scale(1)',
            position: 'relative', // z-index를 적용하기 위해 추가
            zIndex: hoveredId === value.id ? 10 : 1, // hovered된 이미지만 위로
            padding: "5px"
        }} 
        onMouseEnter={() => setHoveredId(value.id)}
        onMouseLeave={() => setHoveredId(null)}
        onClick={()=> navigate('/contents/'+[value.id])}
        src={process.env.PUBLIC_URL +[value.imgPath]} 
        alt="오류"
    />)})
    contentsData.serises.map((value)=>{imege.push(<img
        //className='scale-in-center'
        style={{
            width: '200px', 
            transition: 'transform 0.3s ease',
            transform: hoveredId === value.id ? 'scale(1.2)' : 'scale(1)',
            position: 'relative', // z-index를 적용하기 위해 추가
            zIndex: hoveredId === value.id ? 10 : 1, // hovered된 이미지만 위로
            padding: "5px"
        }} 
        onMouseEnter={() => setHoveredId(value.id)}
        onMouseLeave={() => setHoveredId(null)}
        onClick={()=> navigate('/contents/'+[value.id])}
        src={process.env.PUBLIC_URL +[value.imgPath]} 
        alt="오류"
    />)})
    return <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {imege}
    </div>

}

function Main(){
    return <div className="Poster">
        <Imege></Imege>
    </div>
}

export default Main;