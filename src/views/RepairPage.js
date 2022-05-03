import Footer from '../components/Footer'
import {Container,Typography} from '@material-ui/core'

import Build from '@material-ui/icons/Build'

export default function RepairPage(){

      return (
        <div className="home">

          <Container className="header">
            <Typography variant="h1" className="header-title">Negociando imóveis </Typography>
            <Typography variant="h2" className="header-title"> com responsabilidade </Typography>
          </Container>

          <Container className="home-content">

              <div style={{margin:"auto",width:"50%",padding:"10px",textAlign:"center"}}>
                <div style={{margin:"auto",width:"50%"}}>
                  <Build color="secondary" style={{width:"80px",height:"80px"}} />
                </div>
              <Typography variant="h3"> Site em Manutenção </Typography>
              <Typography variant="p"> pedimos desculpas </Typography>
              </div>

          </Container>

          <Footer/>
  
         
        </div>
      );
    
}

