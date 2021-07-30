import {useState} from 'react'
import {Paper,Button,TextField,TextareaAutosize,Typography,Container } from '@material-ui/core'
import axios from 'axios'
import {DATA_URL} from '../api'

export default function AddNotify(){
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [about,setAbout] = useState()
    const [content,setContent] = useState()
    const [ok,setOk] = useState(false)

    const Styles ={
        container:{
            textAlign: 'center',

        },
        header: {
          margin:"20px",
          width:"100%",
          height: "240px",
        },
        title:{
          marginTop:'40px'
        },
        paper:{
            margin:'20px auto',
            width:"600px",
            height:"520px",
            padding:"40px"
        },

        input:{
            margin:"10px",
            width:"400px"
        },
        textarea:{
            margin:"20px",
            maxWidth:"720px",
            width:"520px",
            height:"100px"
        },
      }

      const SendForm = e =>{
          e.preventDefault()
          axios.post(`${DATA_URL}/notifies`,{
            name:name,email:email,about:about,content:content      
            })
          .then(res => setOk(true))
          .catch(err => console.log(err))
      }

    return(
        <Container style={Styles.container}>
            <div style={Styles.header}>
            <Typography variant="h3"style={Styles.title}>Envie uma Mensagem </Typography>
            <hr style={{width:"40px",marginTop:"20px"}}/>
            <Typography variant="h6" style={Styles.title}>Nossa equipe responderá o mais rápido possível 
            </Typography>

            </div>

            <Paper style={Styles.paper}>
            <Typography variant="h6" style={Styles.title}>Você pode nos encontrar pelos números: 
            </Typography>
            <p>Vagner Oliveira: (11) 95915-4978 </p>
            <p>Thomaz Oliveira: (11) 98205-3139 </p>
            <p>Ariane Junqueira: (11)98333-8779 </p>
                <form>
                <TextField style={Styles.input}
              type="text" placeholder="digite seu nome" onChange={e=>setName(e.target.value)}/>
                <TextField style={Styles.input}
              type="text" placeholder="digite seu email" onChange={e=>setEmail(e.target.value)}/>
                <TextField style={Styles.input}
              type="text" placeholder="assunto" onChange={e=>setAbout(e.target.value)}/>

              <TextareaAutosize style={Styles.textarea}
              onChange={e=>setContent(e.target.value)}
              placeholder="qual a sua duvida?" />

              <Button onClick={e => SendForm(e)}
              variant="contained" color="primary">Enviar</Button>

                </form>
            </Paper>

            {ok ? <Typography variant="p" style={{color:"green"}}>sua mensagem foi enviada com sucesso</Typography> : ""}

            
        </Container>
    )

}