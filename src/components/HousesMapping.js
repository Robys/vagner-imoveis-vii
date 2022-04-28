import {Container,Paper,Typography, IconButton,InputBase,Button} from '@material-ui/core'
import House from '../components/House'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

export default function HousesMapping({houses,results,keyword}){

    return(
        <div>

            <div>
            {results !== undefined?
              <div>
                <Typography variant="h6" >Resultados sobre {keyword}</Typography>
                <hr style={{margin:"40px",width:"250px"}}/>
                {results.map(house => <House key={house.id} house={house}/>)}
                <hr style={{margin:"40px",width:"250px"}}/>
              </div>
                 : ""}
            </div>

            <div>

            {houses !== null ?
                <GridList cellHeight={300} cols={2}> 
              
                {houses.map((house,i) =>
                  <GridListTile key={i}>
                  <House house={house}/> 
                  </GridListTile>
                  ) }
                </GridList>

                  : <div> imóveis indisponiveis no momento </div>
                }


            </div>

        </div>
    )
}