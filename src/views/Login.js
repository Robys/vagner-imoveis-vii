import {useState} from 'react'
import {Redirect} from 'react-router-dom'
import {LOGIN} from '../api'
import {Container,Paper,TextField,Button,Snackbar} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
//import axios from 'axios'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Login (){
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [ready,setReady] = useState(false)
    const [error,setError] = useState({onError:false,message:""})

    

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setError({onError:false,message:""});
    };

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

    const login = async (email,password) =>{
      const res = await LOGIN(email,password)
        if(res.data !== null){
          if(res.data.login === "usuário autorizado, bem vindo"){
            setReady(true)
          }
          else{
            setError({onError:true,message:res.data.login})
          }
        }
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



            </Paper>
              <Snackbar open={error.onError} autoHideDuration={6000} onClose={handleClose}>
                      <Alert onClose={handleClose} severity="warning">
                        {error.message}
                      </Alert>
              </Snackbar>

            {ready ? <Redirect to="/adm"/> : ""}

        </Container>
    )
}