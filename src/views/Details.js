import {useState, useEffect} from 'react'
import {Container,Paper, Typography,Button,Modal} from '@material-ui/core'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import DialpadIcon from '@material-ui/icons/Dialpad';
import DescriptionIcon from '@material-ui/icons/Description';
import Footer from '../components/Footer'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


import {GETHOUSE} from '../api'

export default function Details (props){
    const [data,setData] = useState()
    //const [photos,setPhotos] = useState()
    const [open,setOpen] = useState(false) // abre e fecha o modal

    const [images,SetImages] = useState()
    var [index,SetIndex] = useState(0)
  
    const OnSetIndexUp = () =>{
        var value = index < images.length ? index++ : images.length
      SetIndex(value)
        

    }

    const OnSetIndexDown = () =>{
        var value = index < 0 ? 0 : index--
        SetIndex(value)
    
      }
  

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };


    useEffect(()=>{
        const getHouse = async () =>{
           const result = await GETHOUSE(props.match.params.id)
           setData(result.house)

           result.house.gallery.url.map(item =>{
               SetImages(item.split(','))
           })

        }
        getHouse()

    },[])


    return (
        <div>
            <Container className="details">

            <Modal
            open={open}
            onClose={handleClose}
            style={{textAlign:"center"}}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">
                <div  style={{width:"100%",height:"100vh",border:"none",color:"white"}}>
                {images ? <img src={images[index]} 
                 style={{width:"600px",height:"400px",margin:'40px auto'}}/>
                 :""}
                <div>
                    <Button variant="contained" style={{margin:"10px"}}
                    onClick={OnSetIndexDown} >prev </Button>
                    <Button variant="contained" style={{margin:"10px"}}
                    onClick={OnSetIndexUp}>prox </Button>
                </div>

                </div>
            </Modal>


               {data? <Paper className="detail-paper">

               <GridList cellHeight={160} cols={4}>
                    
                        {data.gallery.url.map(item => {
                            const links = item.split(',')
                            return links.map(url => 
                                (<GridListTile key={url} >
                                    <img src={url} alt={url} 
                                    onClick={e => {
                                    handleOpen()
                                }} />
                                  </GridListTile>))
                        })}
                </GridList>

                   <div className="detail-info">
                        <Typography variant="h5">
                            {data.neighbor}
                        </Typography>
                        <Typography variant="h6">
                            {data.city}
                        </Typography>

                        <p><DialpadIcon fontSize="small"/> Código: {data.code}</p>
                        <p><HomeWorkIcon fontSize="small"/> Tipo: {data.type}</p>

                        <ul className="detail-list">
                            <li>
                            <p><AspectRatioIcon fontSize="small"/> Metragem: {data.size}</p>
                            </li>
                            <li>
                            <p> <MeetingRoomIcon fontSize="small"/> Quartos: {data.rooms}</p>
                            </li>
                            <li>
                            <p><DriveEtaIcon fontSize="small"/> Vagas: {data.parking}</p>
                            </li>
                            

                        </ul>
                    
                        <p><LocationOnIcon fontSize="small"/> Endereço: {data.address} - {data.number}
                        - CEP: {data.postalCode}</p>
                        
                        
                        
                        <p><DescriptionIcon fontSize="small"/> {data.description}</p>
                        
                        <Typography variant="h4">
                            R$  {data.price}
                        </Typography>

                        <Button variant="contained" color="primary" href="/contact">
                            Consultar
                        </Button>
                   </div>
                        

                    </Paper> : ""}

            </Container>

            <Footer/>

        </div>
    )
}

/**
 * <li key={item} style={{display:"inline-block"}}>
                            <Card  style={Styles.card} onClick={e => {
                                setModal(item)
                                handleOpen()
                                }} >
                                <img src={item} 
                                alt={item} 
                                style={{width:"150px",height:"150px"}}/>
    
                            </Card> 
    
                        </li> 
 */