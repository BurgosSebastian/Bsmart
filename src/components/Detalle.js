import { useContext } from "react"
import GifsContextProvider from "../contexto/GifsContext"



export default function Detalle({params}){
    const {gifs} = useContext(GifsContextProvider)
    const gif = gifs.find( singleGif => singleGif.id === params.id)
    console.log(gif)
    return(
        <div className="cont-detalle">
            <h3>Informacion Del Gif</h3>
            <div className="detalle-text"><h3>Nombre</h3><h4>{gif.title}</h4></div>
            <div className="detalle-text"><h3>ID</h3><h4>{gif.id}</h4></div>
            <img src={gif.url} alt="" />
            
            
        </div>
    )
}