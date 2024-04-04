import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function SingleChess() {
    const params = useParams()
    const [chess, setChess] = useState([])
    const [isFetchPending, setIsFetchPending] = useState(false)
    useEffect(() => {
        setIsFetchPending(true)
        console.log(params.id)
        fetch(`http://localhost:3001/chess/${params.id}`)
        .then(response => response.json())
        .then(data => {
            setChess(data)
        })
        .finally(() => setIsFetchPending(false))
    },[])


    if (isFetchPending) {
        return(<div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>)
    }else{
        return(
            <div>
                <ul className="navbar bg-dark">
                <a className="navbar-Brand text-light" href='/'>Chess</a>
                    <a className="navbar-link text-light" href='/newChess'>New Chess</a>
                </ul>
                <div className="card col-6 mx-auto">
                  <img src={chess.image_url} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{chess.name}</h5>
                    <p className="card-text">Born: {chess.birth_date}</p>
                    <p className="card-text">Champion wins: {chess.world_ch_won}</p>
                    <a href={chess.profile_url} className="btn btn-dark">Wiki</a>
                    <a href={`../ChangeChess/${chess.id}`} className="btn btn-warning m-2">Change</a>
                    <a href={`../DeleteChess/${chess.id}`} className="btn btn-danger">Delete</a>
                  </div>
                </div>
            </div>
            
        )
    }


}