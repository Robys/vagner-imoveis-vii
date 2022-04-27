import {Paper,Button} from '@material-ui/core'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import DriveEtaIcon from '@material-ui/icons/DriveEta';

export default function House ({house}){
    
    return (
        <Paper 
        className="house"
        key={house.id}>


          {house.gallery.url.map(item => {
            const links = item.split(',')
            return <img src={links[0]} style={{height:"280px"}}
            alt="foto-da-casa"/>
          })}

          <div className="house-content">
          <h5>{house.type} em {house.neighbor} - {house.city}</h5>
          <strong>Código : {house.code}</strong>
          <p> <MeetingRoomIcon fontSize="small"/> Quartos: {house.rooms}</p>
          <p><DriveEtaIcon fontSize="small"/> Vagas: {house.parking}</p>
          <p>R$ {house.price}.000</p>
          <Button href={`/detalhes/${house.id}`} variant="contained" color="secondary">
            Ver Mais
          </Button>
          </div>
          </Paper>

    )
}

/**
 * <div>
          {house.gallery !== undefined ? 
          <img src={house.gallery[0]} style={{height:"280px"}}
          alt="foto-da-casa"/>
           :"" }
           </div>
 */