import {
    Button,
    TableBody,
    TableCell,
    TableRow } from '@material-ui/core'

export default function HouseTable({houses,setShow,setSelectedID}){

    return(
        <TableBody>
        {houses !== null ? houses.map(house => 
            <TableRow key={house.id}>
                <TableCell align="center"> 
                <Button variant="contained" color="primary" onClick={e =>{
                    e.preventDefault()
                    setShow(true)
                    setSelectedID(house.id)
                }}>
                    Editar
                </Button> 
                </TableCell>
                <TableCell align="center">{house.id}</TableCell>
                {house.code === null ? <TableCell align="center"> nulo </TableCell>
                :<TableCell align="center">{house.code}</TableCell> }
                <TableCell align="center">{house.type} </TableCell>
                <TableCell align="center">{house.finality} </TableCell>
                <TableCell align="center">{house.address} {house.num}</TableCell>
                <TableCell align="center">{house.neighbor}</TableCell>
                <TableCell align="center">{house.city}</TableCell>
                <TableCell align="center">{house.size}</TableCell>
                <TableCell align="center">{house.price}</TableCell>

            </TableRow>
            ) : "" }


        </TableBody>
    )
}