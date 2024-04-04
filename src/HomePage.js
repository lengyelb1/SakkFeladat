import { useEffect, useState } from 'react';
import { Route, Router } from 'react-router-dom';



export default function HomePage (params) {

    if (params.isFetchPending) {
        return <div>Loading...</div>
    }else{
        return (
            <div className="">
              <ul className="navbar bg-dark">
                <p className="navbar-Brand text-light">Chess</p>
                <a className="navbar-link text-light" href='newChess'>New Chess</a>
    
              </ul>
              <div className='row mx-auto'>
                <ChessCards chess={params.chess}/>
              </div>
    
            </div>
        )
    }
}


function ChessCards (params){
    return (params.chess.map((chess) => (
      <div className="card col-sm-4 col-lg-3 m-2">
        <a href={`SingleChess/${chess.id}`}><img src={chess.image_url} className="card-img-top" alt="..."/></a>
        <div className="card-body">
          <h5 className="card-title">{chess.name}</h5>
          <p className="card-text">Born: {chess.birth_date}</p>
          <p className="card-text">Champion wins: {chess.world_ch_won}</p>
          <a href={chess.profile_url} className="btn btn-dark">Wiki</a>
        </div>
      </div>
    ))
    )
}