import {useState} from 'react'
import {Redirect} from 'react-router-dom'
import {Container,Paper,TextField,Button} from '@material-ui/core'
//import axios from 'axios'

export default function Login (){
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [ready,setReady] = useState(false)
    const [error,setError] = useState()

    const Styles ={
        paper: {
          margin:"80px",
          width:"480px",
          height:"240px",
          alignItems: 'center',
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          padding:"20px"
        },
        input:{
            margin:"10px",
            width:"200px"
        },
        submit: {
          margin: '20px',
        },
      }

    const login = (email,password) =>{
        setReady(true);
    }

    return (
        <Container maxWidth="sm">
            <Paper style={Styles.paper}>
            <form style={Styles.form}
            onSubmit={e => {
                e.preventDefault()
                login(email,password)
            }}>
                <TextField style={Styles.input}
                 id="standard-basic" label="Email" onChange={e => setEmail(e.target.value)} />
                <TextField style={Styles.input}
                 id="" type='password' label="Senha" onChange={e => setPassword(e.target.value)}/>
                <Button style={Styles.submit}
                variant="contained" color="primary"
                type="submit">Entrar</Button>


            </form>

            {error?
            <p style={{color:"red"}}>{error.message}</p>
            :ready===true ? <Redirect to='/adm'/> : "" }


            </Paper>

        </Container>
    )
}