
export default function HouseThumbNail({gallery}){

    return (
        <div>
           <img src={gallery[0]} style={{height:"280px"}}alt="foto-da-casa"/>
        </div>

    )
}

//

/**
 *             {gallery.map(item => {
                const links = item.split(',')
                console.log(links[0])
                return 
              })}
 */