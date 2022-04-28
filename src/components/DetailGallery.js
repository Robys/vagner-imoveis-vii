import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

export default function DetailGallery ({data,handleOpen}){

    return(
        <GridList cellHeight={120} cols={4}>
                    
                        {data.gallery!==null? data.gallery.url.map(item => {
                            const links = item.split(',')
                            return links.map(url => 
                                (<GridListTile key={url} >
                                    <img src={url} alt={url} 
                                    onClick={e => {
                                    handleOpen()
                                }} />
                                 </GridListTile>))
                        }) : ""}
                </GridList>

    )
}