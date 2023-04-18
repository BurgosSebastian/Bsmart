import React from "react"
import Gif from "./Gif"
import { useGifs } from "../hooks/useGifs";

export default function ListOfGifs({params}){

    const {keyword} = params
    
    const{gifs} = useGifs({keyword})

    return(gifs.map(ele => 
        <Gif 
          id={ele.id}
          title={ele.title} 
          url={ele.url}
        ></Gif>))

}