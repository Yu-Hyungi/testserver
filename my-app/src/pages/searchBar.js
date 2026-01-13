import { useNavigate } from 'react-router-dom';
import contentsData from "./data.json";
import { useState } from 'react';
import * as hangul from 'hangul-js';

function SearchBar(){
    const engList = ['ㅁ', 'ㅠ', 'ㅊ', 'ㅇ', 'ㄷ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅑ', 'ㅓ', 'ㅏ', 'ㅣ', 'ㅡ', 'ㅜ', 'ㅐ', 'ㅔ', 'ㅂ', 'ㄱ', 'ㄴ', 'ㅅ', 'ㅕ', 'ㅍ', 'ㅈ', 'ㅌ', 'ㅛ', 'ㅋ'];
    const navigate = useNavigate();
    const [hoveredId, setHoveredId] = useState(null); 
    const [title, setTitle] = useState("");
    const imege = [];
    let inputTitle = hangul.disassemble(title.split(" ").join(""));
    let titleMatch = false;
    const isAlpha=(char)=>{
        if(char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90){
            return true
        }
        else if(char.charCodeAt(0)>=97 && char.charCodeAt(0)<=122){
            return true
        }
        else return false
    }
    contentsData.movies.map((value)=>{
        let choTitle = hangul.disassemble(value.name.split(" ").join(""));
        for(let i=0;i<inputTitle.length;i++){
            if(isAlpha(inputTitle[i])){
                inputTitle[i]=engList[inputTitle[i].charCodeAt(0)-97];
            }
            console.log(inputTitle)
            if(inputTitle[i]===choTitle[i]){
                titleMatch = true;
            }
            else {
                titleMatch = false;
                break;
            }
        }
        
        if(titleMatch === true){
            imege.push(<img
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
            />);
        }
    })
    contentsData.serises.map((value)=>{
        let choTitle = hangul.disassemble(value.name.split(" ").join(""));
        for(let i=0;i<inputTitle.length;i++){
            if(inputTitle[i]===choTitle[i]){
                titleMatch = true;
            }
            else {
                titleMatch = false;
                break;
            }
        }
        
        if(titleMatch === true){
            imege.push(<img
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
            />);
        }
    })
    return <div>
            <p><input style={{
                backgroundColor:"black", 
                color:"	#808080", 
                height:"40px", 
                width:"20%", 
                borderRadius:"15px", 
                marginLeft:"34%", 
                fontSize:"20px",
                fontWeight:"10px"
            }} 
                type="text" name = "title" placeholder="검색" onChange={(event)=>{setTitle(event.target.value)}}></input></p>
            {imege}
            
        </div>
}

export default SearchBar;