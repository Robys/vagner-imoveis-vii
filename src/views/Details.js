import {useState, useEffect} from 'react'
import {Container,Paper, Typography,Card,CardMedia,Button,Modal} from '@material-ui/core'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import DialpadIcon from '@material-ui/icons/Dialpad';
import DescriptionIcon from '@material-ui/icons/Description';
import Footer from '../components/Footer'
import {GETHOUSE} from '../api'

export default function Details (props){
    const [data,setData] = useState()
    //const [photos,setPhotos] = useState()
    const [open,setOpen] = useState() // abre e fecha o modal
    const [modal,setModal] = useState() //seta a imagem a ser mostrada no modal

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const Styles ={

        card:{
            float:"left",
            width:"150px",
            height:"150px",
            margin:"10px"
        }
      }

    useEffect(()=>{
        const getHouse = async () =>{
           const result = await GETHOUSE(props.match.params.id)
           setData(result.house)

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
                <img src={modal} 
                alt={modal} 
                style={{width:"600px",height:"400px",margin:'40px auto'}}/>

                <p>pressione "esc" para voltar</p>

                </div>
            </Modal>


               {data? <Paper className="detail-paper">

                    <div style={{width:"70%", display:"inline-flex" }}>
                    
                        {data.gallery.url.map(item => {
                            const links = item.split(',')
                            return links.map(url => 
                            <img src={url}
                            onClick={e => {
                                setModal(url)
                                handleOpen()
                                }} 
                            style={{height:"auto",width:"200px",margin:"10px"}}/>
                            )
                        })}
                    </div>

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