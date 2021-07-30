  
import {Typography,Container,Accordion ,
    AccordionSummary,AccordionDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useState,useEffect} from 'react'
import axios from 'axios'

import {DATA_URL} from '../api'

export default function NotifyList(){
    const [notifies,setNotifies] = useState()

    useEffect(()=>{
        const getNotfs = async () =>{
            const res = await axios.get(`${DATA_URL}/notifies`)
            setNotifies(res)
            console.log(res)
        }

        getNotfs()
    },[])


    return(
        <Container>
            {notifies ? notifies.data.map(itens =>
            <Accordion key={itens.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              
              <Typography >{itens.name} {itens.email}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                 sobre : {itens.about}
                 <br/>
                mensagem: {itens.content}
              </Typography>
            </AccordionDetails>
          </Accordion>

                ) : <Typography variant="h4">Ainda não possuimos notificações :(</Typography>}

        </Container>
    )
}