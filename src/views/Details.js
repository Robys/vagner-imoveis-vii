import {useState, useEffect} from 'react'
import {Container,Grid,Paper, Typography,Button,IconButton,Modal} from '@material-ui/core'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import DialpadIcon from '@material-ui/icons/Dialpad';
import DescriptionIcon from '@material-ui/icons/Description';
import Footer from '../components/Footer'

import DetailGallery from '../components/DetailGallery'

import {ArrowLeft,ArrowRight,Close} from '@material-ui/icons'

import {GETHOUSE} from '../api'

export default function Details (props){
    const [data,setData] = useState()
    //const [photos,setPhotos] = useState()
    const [open,setOpen] = useState(false) // abre e fecha o modal

    const [images,SetImages] = useState()
    var [index,SetIndex] = useState(0)
  
    const OnSetIndexUp = () =>{
        var value = index <= images.length ? index++ : 0
      SetIndex(value)
        

    }

    const OnSetIndexDown = () =>{
        var value = index >= 0 ? index-- : 0
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

           if(result.house.gallery !== null){
               result.house.gallery.map(item =>{
                      SetImages(item.split(','))
              })
           }

        }
        getHouse()

    },[])


    return (
        <div>
            <Container className="details">

            <Modal
            animation={false}
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
                    
                    <IconButton size="large" style={{margin:"10px"}}
                    onClick={OnSetIndexDown} >
                    <ArrowLeft aria-label="prev-image"  fontSize="inherit" style={{color:"white"}} />    
                    </IconButton>

                    <IconButton size="large" style={{margin:"10px"}}
                    onClick={OnSetIndexUp}>
                    <ArrowRight aria-label="prox-image"  fontSize="inherit" style={{color:"white"}} />    
                    </IconButton>
                    
                    <IconButton size="large" style={{margin:"10px"}}
                    onClick={handleClose}>
                    <Close aria-label="prox-image"  fontSize="inherit" style={{color:"white"}} />    
                    </IconButton>
                </div>

                </div>
            </Modal>


               {data ?
               
               <Paper className="detail-paper">
                   <DetailGallery gallery={data.gallery} handleOpen={handleOpen}/>

                   <div className="detail-info">

                        <p><DialpadIcon fontSize="small"/> C??digo: 
                        <strong> {data.code.toUpperCase()} 
                        </strong></p>

                        {data.hideAddress ? 
                        <div>
                        <Typography variant="p">
                         Bairro: {data.neighbor} {data.city}
                        </Typography>

                        </div>
                        :
                        <div>
                        <p><LocationOnIcon fontSize="small"/> Endere??o: {data.address} {data.number}</p> 

                        <Typography variant="p">
                        Bairro: {data.neighbor} {data.city}
                        </Typography>

                        </div>
                        }
                        
                        <Grid container  className="detail-list" rowSpacing={2}>
                        <Grid item >
                            <p><HomeWorkIcon fontSize="small"/> Tipo: {data.type}</p>
                        </Grid>
                        <Grid item style={{marginLeft:"20px"}} >
                            <p><AspectRatioIcon fontSize="small"/> Metragem: {data.size}</p>
                        </Grid>
                        <Grid item style={{marginLeft:"20px"}} >
                            <p> <MeetingRoomIcon fontSize="small"/> Quartos: {data.rooms}</p>
                        </Grid>
                        <Grid item style={{marginLeft:"20px"}} >
                            <p><DriveEtaIcon fontSize="small"/> Vagas: {data.parking}</p>
                        </Grid>

                        </Grid>
                            
                        <Paper variant="outlined" 
                        style={{height:"120px",padding:"5px",marginBottom:"10px", backgroundColor:"#cfd8dc"}}>
                            <p><DescriptionIcon fontSize="small"/> {data.description}</p>
                        </Paper>
                        
                        <Typography variant="h4">
                            R$  {data.price}.000
                        </Typography>

                        <Button variant="contained" color="primary" href="/contato">
                            Consultar
                        </Button>
                   </div>


               </Paper>
               
               
               : "informa????es indisponiveis no momento."}

            </Container>

            <Footer/>

        </div>
    )
}

/**
 * 
 * 
 * <Paper className="detail-paper">

                   console.log(data)

                 <DetailGallery gallery={data} handleOpen={handleOpen}/>

                   <div className="detail-info">
                        <Typography variant="p">
                            {data.neighbor} {data.city}
                        </Typography>

                        <p><DialpadIcon fontSize="small"/> C??digo: {data.code}</p>

                        {data.hideAddress ? 
                        <div>
                        <Typography variant="p">
                            {data.neighbor} {data.city}
                        </Typography>

                        </div>
                        :
                        <div>
                        <p><LocationOnIcon fontSize="small"/> Endere??o: {data.address}</p> 

                        <Typography variant="p">
                            {data.neighbor} {data.city}
                        </Typography>

                        </div>
                        }
                        
                        
                        
                        <ul className="detail-list">
                            <li>
                            <p><HomeWorkIcon fontSize="small"/> Tipo: {data.type}</p>
                            </li>
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
                        
                        <p><DescriptionIcon fontSize="small"/> {data.description}</p>
                        
                        <Typography variant="h4">
                            R$  {data.price}.000
                        </Typography>

                        <Button variant="contained" color="primary" href="/contact">
                            Consultar
                        </Button>
                   </div>
                        

                    </Paper>
 */