

export default function HouseThumbNail({gallery}){

    return (
        <div>

            {gallery.url.map(item => {
                const links = item.split(',')
                return <img src={links[0]} style={{height:"280px"}}
                alt="foto-da-casa"/>
              })}

        </div>

    )
}