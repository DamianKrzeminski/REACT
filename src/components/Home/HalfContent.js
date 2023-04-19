import React, { useEffect, useState} from 'react';
import './HalfContent.css';
import axios from "axios";

function HalfContent(){
    const [data, setData] = useState({data:[]});
    console.log(data);
    useEffect(()=> {
        axios.get("https://api.github.com/users/phantomjs").then((response) => {
            setData({data: response.data});
        })
    }, [])

    return(
         <div className="HalfContentHome">
             {data.data.map((item, index) => <span key={index}>{item.login}</span>)}
         </div>
    );
}

export default HalfContent;