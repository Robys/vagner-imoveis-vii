import {Typography,Button,Link} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

export default function Footer (){

    return(
        <div className="footer">
            <div style={{float:"left",marginLeft:"20px",padding:"40px"}}>
            <Typography variant="h5" component="h2">
                Vagner Oliveira
            </Typography>
            <p>nossas redes</p>

            <ul>
                <li>
                <Button variant="contained"color="secondary" startIcon={<FacebookIcon />}>
                    Facebook
                </Button>
                </li>
                <li>
                <Button variant="contained"color="secondary" startIcon={<WhatsAppIcon />}>
                    WhatsApp
                </Button>
                </li>
                <li>
                <Button variant="contained"color="secondary" startIcon={<LinkedInIcon />}>
                    LinkedIn
                </Button>
                </li>
            </ul>
            
        
            </div>

            <div className="footer-links">
            <Typography variant="h6" component="h2">
                Links da página
            </Typography>

            <ul>
                <li>
                    <Link href="/" style={{color:"white"}}> Home </Link>
                </li>
                <li>
                    <Link href="/login" style={{color:"white"}}> Login </Link>
                </li>
                <li>
                    <Link href="/contact" style={{color:"white"}}> Fale com a gente </Link>
                </li>

            </ul>

            </div>

            <div className="copyright">
                Copyright@2021 : <a href="/">Robert Oliveira</a>
            </div>


        </div>
    )
}