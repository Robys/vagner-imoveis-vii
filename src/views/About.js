import Footer from '../components/Footer'
import {Container,Card, CardContent ,Typography,Avatar} from '@material-ui/core'
import hands from '../img/hands.jfif'
import road from '../img/road.jfif'
import docs from '../img/docs.jfif'

import vagner from '../img/vagner.jpg'
import ariane from '../img/ariane.jpg'
import thomaz from '../img/thomaz.jpg'

export default function About(){

  const Styles ={
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },

  }

  const bull = <span className={Styles.bullet}>•</span>;

    return(
        <div>
            <Container className="header">
            <Typography variant="h1" className="about-title">Nossa Imobiliária</Typography>
            </Container>

            <Container className="about-content">
            <Typography variant="h2" className="header-title">Tradição e Respeito</Typography>

            <Card className="about-card">
                <img src={hands} alt="confiança"/>
                <CardContent>
                <Typography variant="h5" component="h2">
                     {bull} Confiança {bull}
                </Typography>
                <Typography variant="body2" component="p">
                    Atuando na área des de 20xx, com competência
                    e ética com todos os clientes.
                </Typography>
                </CardContent>

            </Card>

            <Card className="about-card">
                <img src={road} alt="confiança"/>
                <CardContent>
                <Typography variant="h5" component="h2">
                     {bull} Tranquilidade {bull}
                </Typography>
                <Typography variant="body2" component="p">
                    Atuando na área des de 20xx, com competência
                    e ética com todos os clientes.
                </Typography>
                </CardContent>

            </Card>

            <Card className="about-card">
                <img src={docs} alt="confiança"/>
                <CardContent>
                <Typography variant="h5" component="h2">
                     {bull} Ética e Agilidade {bull}
                </Typography>
                <Typography variant="body2" component="p">
                    Atuando na área des de 20xx, com competência
                    e ética com todos os clientes.
                </Typography>
                </CardContent>

            </Card>

            </Container>

            <Container className="about-content">
            <Typography variant="h2" className="about-title">Nosso Time</Typography>
            <div className="about-avatar">
            <Avatar src={vagner} alt="Vagner Oliveira" className="avatar"/>
            <p>{bull} Vagner Oliveira {bull}</p>
            </div>
            <div className="about-avatar">
            <Avatar src={ariane} alt="Ariane Junqueira" className="avatar"/>
            <p>{bull} Ariane Junqueira {bull}</p>
            </div>
            <div className="about-avatar">
            <Avatar src={thomaz} alt="Thomaz Oliveira" className="avatar"/>
            <p>{bull} Thomaz Oliveira {bull}</p>
            </div>

            </Container>

            <Container className="about-content">
            <Typography variant="h2" className="about-title">Nossos Serviços</Typography>

            <Card style={Styles.card}>
                <CardContent>
                <Typography variant="h5" component="h2">
                     {bull} Compra {bull}
                </Typography>
                <Typography variant="body2" component="p">
                    Tabalhamos com imóveis residenciais, comerciais,
                    galpões, terrenos e afins.
                    Encontramos e negociamos as melhores opções que cabem
                    no seu bolso
                </Typography>
                </CardContent>

            </Card>

            <Card style={Styles.card}>
                <CardContent>
                <Typography variant="h5" component="h2">
                     {bull} Venda {bull}
                </Typography>
                <Typography variant="body2" component="p">
                    Buscamos compradores e intermediamos de forma resposável
                    sua venda.
                </Typography>
                </CardContent>

            </Card>
            <Card style={Styles.card}>
                <CardContent>
                <Typography variant="h5" component="h2">
                     {bull} Alugel {bull}
                </Typography>
                <Typography variant="body2" component="p">
                    Realizamos contratos de aluguel. 
                </Typography>
                </CardContent>

            </Card>


            </Container>

            <Footer/>

        </div>
    )
}