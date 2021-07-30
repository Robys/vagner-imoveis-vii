import {useState} from 'react'
//import {GetCurrentUser} from '../utils/utils'
import {AppBar,Toolbar,Menu,MenuItem,IconButton,Link} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

export default function TopBar(){
    
    const [anchorEl, setAnchorEl] = useState(null);
    //const response = GetCurrentUser()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };


    return(
        <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" onClick={handleClick}
            color="inherit" 
            aria-label="menu">
                <MenuIcon/>
            </IconButton>

                <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>

            <MenuItem>
            <Link href="/"> Home </Link>
            </MenuItem>

            <MenuItem>
            <Link href="/about"> Sobre nós </Link>
            
            </MenuItem>
            <MenuItem>
            <Link href="/contact">
             Fale com a gente 
            </Link>
             </MenuItem>

            <MenuItem>
            <Link href="/login">Login</Link>
            </MenuItem>

            </Menu>

            </Toolbar>

        </AppBar>
    )
}