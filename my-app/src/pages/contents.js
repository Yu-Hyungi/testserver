import { useParams, useNavigate } from "react-router-dom";
import ContentsData from "./data.json";

function Contents(){
    const {id} = useParams();
    let content=[];
    const navigate = useNavigate();
    if(id%2===0){
        content = ContentsData.movies.find((value) => value.id === Number(id));
    }
    else{
        content = ContentsData.serises.find((value) => value.id === Number(id));
    }
    return <div>
        <img src={process.env.PUBLIC_URL+[content.imgPath]} alt="오류"></img>
        <h1 style={{color:"white"}}>{content.name}</h1>
        <button style={{width: "100px", height: "30px"}} onClick={()=> navigate('/')}>나가기</button>
    </div>
}

export default Contents;