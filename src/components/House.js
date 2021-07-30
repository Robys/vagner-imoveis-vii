//import {useState,useEffect} from 'react' 
import {Paper,Button} from '@material-ui/core'

export default function House ({house}){
    
    return (
        <Paper 
        className="house"
        key={house.id}>

          <div>
          {house.gallery !== undefined ? 
          <img src={house.gallery[0]}
          alt="foto-da-casa"/>
           :"" }
           </div>

          <div className="house-content">
              <strong>código : {house.code}</strong>
          <p>{house.address} {house.num}</p>
          <p>{house.neighbor} - {house.city}</p>
          <p>{house.price}</p>
          <Button href={`/details/${house.id}`} variant="contained" color="secondary">
            Ver Mais
          </Button>
          </div>
          </Paper>

    )
}