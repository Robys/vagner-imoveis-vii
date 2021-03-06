import {useState,useEffect} from 'react'


import {
    TextField,
    TextareaAutosize,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, 
    Container,
    Button,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper } from '@material-ui/core'

import HouseTable from './HouseTable'

import {GETHOUSES,UPDATEHOUSE,DELETEHOUSE} from '../api'

import SaveGalleryEdit from './SaveGalleryEdit'

export default function HouseList(){

    const [data,setData] = useState()
    const [show,setShow] = useState(false)
    const [selectedID,setSelectedID] = useState()

    const [code,setCode] = useState()
    const [postalCode,setCEP] = useState()
    const [address,setAddress] = useState()
    const [num,setNum] = useState()
    const [neighbor,setNeighbor]=useState()
    const [city,setCity]=useState()
    const [rooms,setRooms]=useState()
    const [bathroom,setBathrooms]=useState()
    const [parking,setParking]=useState()
    const [price,setPrice]=useState()
    const [size,setSize]=useState()
    const [type,setType]=useState()
    const [finality,setFinality]=useState()
    const [description,setDescription]=useState()
    const [ok, setOk] = useState(false)

      useEffect(()=>{
        const getList = async () =>{
            const res = await GETHOUSES()
            console.log(res)
            setData(res)
        }

        getList()
    
      },[])

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
            maxWidth:"600px",
            height:"100px"
        },
        submit: {
          margin: '20px',
        },
      }
      const OnSaveEdit = async () =>{
        await UPDATEHOUSE({
          id:selectedID,
          address:address,
          code:code,
          num:num,
          neighbor:neighbor,
          city:city,
          postalCode:postalCode,
          finality:finality,
          type:type,
          size:size,
          rooms:rooms,
          bathroom:bathroom,
          parking:parking,
          price:price,
          description:description})
        .then(res => {
          setOk(true)
        })
        .catch(err => console.log(err))
        
      }

      const onDeleteButton = async () =>{
        await DELETEHOUSE(selectedID)
      }

    return (
        <Container>
            <Dialog open={show} onClose={e => setShow(false)} aria-labelledby="form-dialog-title">
              
            <DialogTitle id="form-dialog-title">Editar</DialogTitle>
            <DialogContent>
            <DialogContentText>
            Neste espa??o voc?? pode editar as informa????es referente ao im??vel.
          </DialogContentText>

          <TextField style={Styles.input}
              type="text" label="C??digo" placeholder="XYZ123"onChange={e=>setCode(e.target.value)}/>

          <TextField style={Styles.input}
              type="text" label="CEP" onChange={e=>setCEP(e.target.value)}/>

              <TextField style={Styles.input}
              type="text" 
              id="logradouro"
              label="Logradouro"
              onChange={e => setAddress(e.target.value)}
              />

              <TextField style={Styles.input}
              type="text" label="N??mero" placeholder="123"onChange={e=>setNum(e.target.value)}/>

              <TextField style={Styles.input}
              id="bairro" 
              type="text"
              label="Bairro"
              onChange={e => setNeighbor(e.target.value)}/>

              <TextField style={Styles.input}
              id="localidade"
              label="localidade"
              type="text"
              onChange={e => setCity(e.target.value)}/>

            <TextField style={Styles.input}
              type="text" label="Metragem" placeholder="123x321"onChange={e=>setSize(e.target.value)}/>

              <TextField style={Styles.input}
              type="text" label="Tipo de Im??vel" placeholder="casa/apartamento"onChange={e=>setType(e.target.value)}/>

              <TextField style={Styles.input}
              type="text" label="Finalidade" placeholder="venda/aluguel"onChange={e=>setFinality(e.target.value)}/>

              <TextField style={Styles.input}
              type="number" label="Comodos" onChange={e=>setRooms(e.target.value)}/>

              <TextField style={Styles.input}
              type="number" label="Banheiros" onChange={e=>setBathrooms(e.target.value)}/>

              <TextField style={Styles.input}
              type="number" label="Vagas p/ carros" onChange={e=>setParking(e.target.value)}/>

              <TextField style={Styles.input}
              type="text" label="Valor" onChange={e=>setPrice(e.target.value)}/>
              <TextareaAutosize style={Styles.textarea}
              onChange={e=>setDescription(e.target.value)}
              placeholder="Breve descri????o" />

          
            </DialogContent>
            
            <DialogActions>

            <SaveGalleryEdit selectedID={selectedID} />

            <Button variant="contained" color="primary" onClick={() => {
             OnSaveEdit()
              setShow(false)}}>
              
                Salvar
            </Button>
            <Button variant="contained" color="secondary" onClick={e => setShow(false)}>
              
                Cancelar
            </Button>
                
            <Button variant="contained" color="secondary" onClick={e =>{
              onDeleteButton()
              setShow(false)}}>
              
              Deletar
          </Button>
            </DialogActions>

            </Dialog>
            
            <TableContainer component={Paper}>
            <Table aria-label="customized table">
            <TableHead>
          <TableRow>
                    <TableCell align="center"> - </TableCell>
                    <TableCell align="center">C??digo</TableCell>
                    <TableCell align="center">Tipo</TableCell>
                    <TableCell align="center">Finalidade</TableCell>
                    <TableCell align="center">Endere??o</TableCell>
                    <TableCell align="center">Bairro</TableCell>
                    <TableCell align="center">Cidade</TableCell>
                    <TableCell align="center">Metragem</TableCell>
                    <TableCell align="center">Comodos</TableCell>
                    <TableCell align="center">Pre??o</TableCell>
          </TableRow>
            </TableHead>

            {data!==undefined ? <HouseTable houses={data.houses} setShow={setShow} setSelectedID={setSelectedID}/> : ""}

            </Table>
            </TableContainer>


        </Container>
    )
}

/**
 *            
 */