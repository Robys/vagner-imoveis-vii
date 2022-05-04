

export default function HouseThumbNail({gallery}){

    return (
        <div>

            {gallery.map(item => {
                const links = item.split(',')
                console.log(links)
                return <img src={links[0]} style={{height:"280px"}}
                alt="foto-da-casa"/>
              })}

        </div>

    )
}