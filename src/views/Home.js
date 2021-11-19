import {useState, useEffect} from 'react'
import Footer from '../components/Footer'
import House from '../components/House' 
import {GETHOUSES,SearchFilter,SortFunction,SortContruction,SortType} from '../api'
import {Container,Paper,Typography, IconButton,InputBase,Button} from '@material-ui/core'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import SearchIcon  from '@material-ui/icons/Search'

export default function Home(){
    const [data,setData] = useState()
    const [result,setResult] = useState()
    const [keyword,setKeyword] = useState()

      useEffect(()=>{
          const getHouses = async () =>{
              const res = await GETHOUSES()
              setData(res)

          }

          getHouses()
      },[])

      const sendKeword = async e =>{
        e.preventDefault()
        if(keyword){
          const res = await SearchFilter(keyword)
         setResult(res)
    
        }
      }

      return (
        <div className="home">

          <Container className="header">
            <Typography variant="h2" className="header-title">Negociando imóveis </Typography>
            <Typography variant="h6" className="header-title"> com responsabilidade </Typography>
          </Container>
  
          <Container className="search-paper">
            <div>
              <ul className="search-paper-buttons">
                <li>
                  <Button onClick={async () =>{
                    const res = await SortFunction('neighbor')
                    setResult(res)
                  }}
                  variant="contained" color="secondary">
                    Por Bairro
                  </Button>
                </li>
                <li>
                  <Button onClick={async () =>{
                    const res = await SortFunction('city')
                    setResult(res)
                  }}
                  variant="contained" color="secondary">
                    Por Cidade
                  </Button>
                </li>
                <li>
                  <Button onClick={async () =>{
                    const res = await SortContruction('Casa')
                    console.log(res)
                    setResult(res)
                  }}
                  variant="contained" color="secondary">
                    Casas
                  </Button>
                </li>
                <li>
                  <Button onClick={async () =>{
                    const res = await SortContruction('Apartamento')
                    setResult(res)
                  }}
                  variant="contained" color="secondary">
                    Apartamentos
                  </Button>
                </li>
                <li>
                  <Button onClick={async () =>{
                    const res = await SortContruction('Empreendimento')
                    setResult(res)
                  }}
                  variant="contained" color="secondary" >
                    Empreendimentos
                  </Button>
                </li>

                <li>
                  <Button onClick={async () =>{
                    const res = await SortType('Venda')
                    setResult(res)
                  }}
                  variant="contained" color="secondary">
                    A Venda
                  </Button>
                </li>
                <li>
                  <Button onClick={async () =>{
                    const res = await SortType('Aluguel')
                    setResult(res)
                  }}
                  variant="contained" color="secondary">
                   Para Aluguel
                  </Button>
                </li>

              </ul>
            </div>

            <Paper component="form" className="search">
            <InputBase className="search-input"
            onChange={e => setKeyword(e.target.value)}
            placeholder="Pesquisar"
            inputProps={{ 'aria-label': 'pesquisa' }} />
            <IconButton aria-label="search" onClick={sendKeword}>
            <SearchIcon />
            </IconButton>
  
            </Paper>
            </Container>
  
            <Container className="home-content">
            {result !== undefined?
              <div>
                <Typography variant="h6" >Resultados sobre {keyword}</Typography>
                <hr style={{margin:"40px",width:"250px"}}/>
                {result.map(house => <House key={house.id} house={house}/>)}
                <hr style={{margin:"40px",width:"250px"}}/>
              </div>
                 : ""}

              {data !== undefined ?
              
              <GridList cellHeight={300} cols={2}> 
              
              {data.houses.map(house =>
                <GridListTile key={house.id}>
                <House house={house}/> 
                </GridListTile>
                ) }
              </GridList>
              
              
              : "" }
          </Container>

          <Footer/>
  
         
        </div>
      );
    
}



/**
 * 
 * {result !== undefined?
              <div>
                <Typography variant="h6" >Resultados sobre {keyword}</Typography>
                <hr style={{margin:"40px",width:"250px"}}/>
                {result.map(house => <House key={house.id} house={house}/>)}
                <hr style={{margin:"40px",width:"250px"}}/>
              </div>
                 : ""}

              {data !== undefined ? data.data.map(house => <House key={house.id} house={house}/> ) : "" }
 */