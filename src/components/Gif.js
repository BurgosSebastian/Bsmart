
import React from "react";
import { Link } from "wouter";

export default function Gif ({title,id,url}){
   return(
    <div className="Gif">
    <img src={url}></img>
    <Link to={`/gif/${id}`} >
        <button>Mas Informacion</button>
    </Link>
    </div>
   ) 
}