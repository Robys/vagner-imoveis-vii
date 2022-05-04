import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

export default function DetailGallery ({gallery,handleOpen}){

    return(
        <GridList cellHeight={120} cols={4}>
                    
                        {gallery === null ? <p>
                            imagens indisponiveis 
                        </p> : 
                            gallery.map(item => {
                            const links = item.split(',')
                            return links.map(url => 
                                (<GridListTile key={url} >
                                    <img src={url} alt={url} 
                                    onClick={e => {
                                    handleOpen()
                                }} />
                                 </GridListTile>))
                        }) }
                </GridList>

    )
}