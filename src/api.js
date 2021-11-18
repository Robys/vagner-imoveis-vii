import axios from 'axios'
import {compareTwoStrings} from 'string-similarity'

export const DATA_URL = "https://vagner-imoveis-backend.herokuapp.com"

export async function ADDHOUSE({address,code,num,neighbor,city,postalCode,
    finality,type,size,rooms,bathroom,parking,price,description,gallery}){
   return await axios.post(`${DATA_URL}/graphql`,{
       query:`mutation{
           addHouse(code:"${code}",
            type:"${type}",
            price:"${price}",
            finality:"${finality}",
            address:"${address}",
            city:"${city}",
            neighbor:"${neighbor}",
            postalCode:"${postalCode}",
            number:"${num}",
            parking:"${parking}",
            bathroom:"${bathroom}",
            rooms:"${rooms}",
            size:"${size}",
            description:"${description}",
            gallery:"${gallery}",
         ){
             id
             address
             finality
         }
       }`
   })
    .then(res => res)
    .catch(err => err)

}
export async function UPDATEHOUSE({id,address,code,num,neighbor,city,postalCode,finality,type,size,rooms,bathroom,parking,price,description,gallery}){

   return await axios.post(`${DATA_URL}/graphql`,{
       query:`mutation{
           updateHouse(id:"${id}",code:"${code}",
            type:"${type}",
            price:"${price}",
            finality:"${finality}",
            address:"${address}",
            city:"${city}",
            neighbor:"${neighbor}",
            postalCode:"${postalCode}",
            number:"${num}",
            parking:"${parking}",
            bathroom:"${bathroom}",
            rooms:"${rooms}",
            size:"${size}",
            description:"${description}",
            gallery:"${gallery}"
         ){
             id
             address
             finality
         }
       }`
   })
    .then(res => console.log(res))
    .catch(err => console.log(err))

    
}

export async function ADDGALLERY(gallery){
    return await axios.post(`${DATA_URL}/graphql`,{
        query:`mutation{
            addGallery(url:"${gallery}"){
              id
              url
            }
          }`
    }).then(res => res.data.data.addGallery)
    .catch(err => err)
}

export function DELETEHOUSE(id){
    return axios.post(`${DATA_URL}/graphql`,{
        query:`mutation{
            deleteHouse(id:"${id}"){
                id
                address
                finality
            }
        }`
    }).then(res => console.log(res))
    .catch(err => console.log(err))
}

export const GETHOUSES = async () =>{
    return await axios.post(`${DATA_URL}/graphql`,{
        query:`query{
            houses{
                id
                code
                type
                price
                finality
                address
                city
                neighbor
                postalCode
                number
                parking
                bathroom
                rooms
                size
                createdAt
                description
                gallery{
                    url
                }

            }
        }`
    }).then(res => res.data.data)
    .catch(err => err)
}

export const GETHOUSE = async (id) =>{
    return await axios.post(`${DATA_URL}/graphql`,{
        query:`query{
            house(id:"${id}"){
                id
                code
                type
                price
                finality
                address
                city
                neighbor
                postalCode
                number
                parking
                bathroom
                rooms
                size
                createdAt
                description
                gallery

            }
        }`
    }).then(res => res.data.data)
    .catch(err => err)
}

export async function SearchFilter(keyword){

    const data = await GETHOUSES()
    .then(res => res.houses)
    .catch(err => err)

    
    const response = data.filter(houses => {

        const perAddress = compareTwoStrings(houses.address,keyword)
        if(perAddress >= .52){
            
            return houses
        }
        const perCity = compareTwoStrings(houses.city,keyword)
        if(perCity >= .52){
            return houses
        }
        const perNeighbor = compareTwoStrings(houses.neighbor,keyword)
        if(perNeighbor >= .52){
            return houses
        }
        const perCode = compareTwoStrings(houses.code,keyword)
        if(perCode >= .52){
            
            return houses
        }
        const perPrice = compareTwoStrings(houses.price,keyword)
        if(perPrice >= .52){
            return houses
        }
        
        else return null


    })

    return response
    
}

export const SortFunction = async (type) =>{
    const types = {
        city: 'city',
        neighbor: 'neighbor',
      }; 

      const data = await GETHOUSES()
    .then(res => res.houses)
    .catch(err => err)

      const sortProperty = types[type];
    const sorted = data.sort((a, b) => b[sortProperty] - a[sortProperty]);
    return sorted

}

export const SortContruction = async (keyword)=>{
    const data = await GETHOUSES()
    .then(res => res.data)
    .catch(err => err)

    const result = data.filter(houses => houses.construction === keyword)

    return result

}

export const SortType = async (keyword)=>{

    const data = await GETHOUSES()
    .then(res => res.houses)
    .catch(err => err)

    const result = data.filter(houses => houses.type === keyword)

    return result


} 


/**
 * 
        
 */


