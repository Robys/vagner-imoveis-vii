import {useState} from 'react'
import {Paper,Button,FormGroup,
  TextField,TextareaAutosize,Snackbar,Grid,
  FormControlLabel,Checkbox} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import {ADDHOUSE,ADDGALLERY} from '../api'
import axios from 'axios'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AddHouse(){

    const [postalCode,setCEP] = useState()
    const [code,setCode] = useState()
    const [address,setAddress] = useState()
    const [hideaddress,setHideAddress] = useState(false)
    const [num,setNum] = useState()
    const [neighbor,setNeighbor]=useState()
    const [city,setCity]=useState()
    const [rooms,setRooms]=useState()
    const [bathroom,setBathrooms]=useState()
    const [parking,setParking]=useState()
    const [price,setPrice]=useState()
    const [size,setSize]=useState()
    const [finality,setFinality]=useState()
    const [type,setType]=useState()
    const [description,setDescription]=useState()

    const [cepres,setCEPRes] = useState() /** resultado da pesquisa por CEP **/

    const [ok, setOk] = useState(false);

    const [onLoading,setOnLoading] = useState({loading:false,message:""})

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOk(false);
    };

    const getByCEP = e =>{
        e.preventDefault()
        axios.get(`https://viacep.com.br/ws/${postalCode}/json`)
        .then(res => setCEPRes(res.data))
    }

    const Styles ={
        paper: {
          margin:"40px",
          width:"720px",
          alignItems: 'left',
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          padding:"40px"
        },
        input:{
            margin:'10px'
        },
        textarea:{
            margin:"20px",
            width:"480px",
            height:"100px"
        },
        submit: {
          margin: '20px',
        },
      }


      const SubmitForm = async (e) =>{
        e.preventDefault()
        const adr = document.getElementById('logradouro').value
        const neig = document.getElementById('bairro').value
        //const cty = document.getElementById('localidade').value

        setTimeout(()=>{
          
        },3000)
        
         await ADDHOUSE({
          address:adr,
          code:code,
          num:num,
          neighbor:neig,
          city:city,
          postalCode:postalCode,
          finality:finality,
          type:type,
          size:size,
          rooms:rooms,
          bathroom:bathroom,
          parking:parking,
          price:price,
          description:description,
          hideAddress:hideaddress})
        .then(res => {
          setOk(true)
        })
        .catch(err => console.log(err))
        
      }

  return (
      <Paper style={Styles.paper}>
          <form style={Styles.form}>

          <h2>Informa????es de Endere??o</h2>
        <Grid container rowSpacing={2}>
          <Grid item xs={6} md={8}>
          <TextField style={Styles.input}
                            type="text" 
                            id="logradouro"
                            label={cepres !==undefined ? cepres.logradouro :"Logradouro"}
                            value={cepres !==undefined? cepres.logradouro : address}
                            onChange={e => setAddress(e.target.value)}
                            />
                <TextField style={Styles.input}
                type="number" label="N??mero" placeholder="123"onChange={e=>setNum(e.target.value)}/>

                  <TextField style={Styles.input}
                  id="bairro" 
                  type="text"
                  value={cepres !==undefined? cepres.bairro : neighbor}
                  label={cepres !==undefined ? cepres.bairro :"Bairro"}
                  onChange={e => setNeighbor(e.target.value)}/>
                  
                  <TextField style={Styles.input}
                  id="localidade"
                  type="text" value={cepres !==undefined? cepres.localidade : city}
                  label={cepres !==undefined ? cepres.localidade :"Localidade"}
                  onChange={e => setCity(e.target.value)}/>

                <FormGroup>

                <TextField style={Styles.input}
                type="text" label="CEP" onChange={e=>setCEP(e.target.value)}/>

                <Button style={{width:"120px"}}
                onClick={getByCEP}>buscar cep</Button>
                </FormGroup>



                  <FormControlLabel label="Ocultar" control={
                    <Checkbox checked={hideaddress}
                    onChange={e => setHideAddress(!hideaddress)}
                    inputProps={{ 'aria-label': 'controlled' }}/>}>
                  </FormControlLabel>
                
                </Grid>

        </Grid>

        <h2>Informa????es Gerais</h2>

        <Grid container rowSpacing={2}>
        
          <Grid item xs={6} md={8}>
              <TextField style={Styles.input}
              type="text" label="Metragem" placeholder="123x321"onChange={e=>setSize(e.target.value)}/>

              <TextField style={Styles.input}
              type="text" label="Tipo de Im??vel" placeholder="casa/apartamento"onChange={e=>setType(e.target.value)}/>

              <TextField style={Styles.input}
              type="text" label="Finalidade" placeholder="venda/aluguel"onChange={e=>setFinality(e.target.value)}/>
              
              <TextField style={Styles.input}
              type="number" label="Comodos" onChange={e=>setRooms(e.target.value)}/>
          </Grid>

          <Grid item xs={6} md={8}>

              <TextField style={Styles.input}
              type="number" label="Banheiros" onChange={e=>setBathrooms(e.target.value)}/>

              <TextField style={Styles.input}
              type="number" label="Vagas p/ carros" onChange={e=>setParking(e.target.value)}/>

              <TextField style={Styles.input}
              type="text" label="Valor" onChange={e=>setPrice(e.target.value)}/>

              <TextField style={Styles.input}
              type="text" label="C??digo" placeholder="XYZ123"onChange={e=>setCode(e.target.value)}/>

          </Grid>

          <Grid item xs={6} md={8}>

              <TextareaAutosize style={Styles.textarea}
              onChange={e=>setDescription(e.target.value)}
              placeholder="Breve descri????o" />

          </Grid>


        </Grid>

          <div style={{marginLeft:"20px"}}>

          <Button variant="contained" color="primary" 
          style={Styles.submit} onClick={SubmitForm}>Salvar</Button>


          </div>
          
          </form>


          {ok ?
          <Snackbar open={ok} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Im??vel carregado com sucesso
            </Alert>
            </Snackbar>

         :""}

         
        {onLoading.loading ?
          <Snackbar open={onLoading.loading } autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="info">
              {onLoading.message}
            </Alert>
            </Snackbar>

         :""}

      </Paper>
  )  
}


/**
 *               <FormControlLabel
            label="Mostrar Endere??o"
            control={
              <Checkbox
                checked={hideaddress}
                onChange={setHideAddress(!hideaddress)}
              />
            }/>
 */

/**
 *       const SendData = response =>{
        console.log(response)
        const adr = document.getElementById('logradouro').value
          const neig = document.getElementById('bairro').value
          const cty = document.getElementById('localidade').value
          
          axios.post('/graphql',{
              query: `mutation{
                  addHouse(address:"${adr}",
                    code:"${code}",
                    num:"${num}",
                    neighbor:"${neig}",
                    city:"${cty}",
                    postalCode:"${postalCode}",
                    rooms:"${rooms}",
                    parking:"${parking}",
                    price:"${price}",
                    description:"${description}",
                    gallery:"${response}"){
                        id
                        address
                        price
                        gallery
                    }
              }`,

              headers: {
                "Content-Type": 'application/json'
              }
            
          })
          .then(res => console.log(res))
          .catch(err => console.log(err))

      }
 */