import {useContext, useEffect, useState } from "react"
import getGifs from "../servicios/getGifs"
import GifsContext from "../contexto/GifsContext"

export function useGifs({keyword}){

const{gifs,setGifs} = useContext(GifsContext)

    useEffect(function(){
        getGifs({keyword}).then(ele => {
         setGifs(ele)
       }) 
       },[keyword, setGifs])

       return {gifs}

}