import axios from 'axios'
import {compareTwoStrings} from 'string-similarity'

export const DATA_URL = "https://vagner-imoveis-backend.herokuapp.com"
//export const DATA_URL = "http://localhost:4000/graphql"


export async function LOGIN(email,password){
    return await axios.post(`${DATA_URL}/graphql`,{
        query:`mutation{
            login(email:"${email}",password:"${password}")
          }`
    }).then(res => res.data)
    .catch(err => err)
}

export async function ADDHOUSE({address,code,num,neighbor,city,postalCode,
    finality,type,size,rooms,bathroom,parking,price,description,hideAddress}){

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
            hideAddress:"${hideAddress}",
         ){
             address
             finality
         }
       }`
   })
    .then(res => res)
    .catch(err => err)

}
export async function UPDATEHOUSE({id,address,code,num,neighbor,city,postalCode,finality,type,size,rooms,bathroom,parking,price,description}){

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

export async function ADDGALLERY(houseID,gallery){
   return await axios.post(`${DATA_URL}/graphql`,{
        query:`mutation{
            addGallery(houseID:"${houseID}",gallery:"${gallery}"){
                id
                address
                gallery
            }
          }`
    }).then(res => res)
    .catch(err => err)
    
}

export async function REMOVEGALLERY(houseID){
    return await axios.post(`${DATA_URL}/graphql`,{
         query:`mutation{
             removeGallery(houseID:"${houseID}"){
                 id
                 address
                 gallery
             }
           }`
     }).then(res => res)
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
    return await axios.post(`${DATA_URL}`,{
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
                hideAddress
                gallery
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
                parking
                bathroom
                rooms
                size
                createdAt
                description
                hideAddress
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

        const perAddress = compareTwoStrings(
            houses.address.toUpperCase(),keyword.toUpperCase())
        if(perAddress >= .52){
            
            return houses
        }
        const perCity = compareTwoStrings(
            houses.city.toUpperCase(),keyword.toUpperCase())
        if(perCity >= .52){
            return houses
        }
        const perNeighbor = compareTwoStrings(
            houses.neighbor.toUpperCase(),keyword.toUpperCase())
        if(perNeighbor >= .52){
            return houses
        }
        const perCode = compareTwoStrings(
            houses.code.toUpperCase(),keyword.toUpperCase())
        if(perCode >= .52){
            
            return houses
        }
        const perPrice = compareTwoStrings(
            houses.price.toUpperCase(),keyword.toUpperCase())
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
    
    return await axios.post(`${DATA_URL}/graphql`,{
        query:`query{
            type(keyword:"${keyword}"){
                id
                code
                type
                price
                finality
                address
                city
                neighbor
                postalCode
                parking
                bathroom
                rooms
                size
                createdAt
                description
                hideAddress
                gallery

            }
        }`
    }).then(res => res.data.data.type)
    .catch(err => err)

}

export const SortType = async (keyword)=>{

    return await axios.post(`${DATA_URL}/graphql`,{
        query:`query{
            finality(keyword:"${keyword}"){
                id
                code
                type
                price
                finality
                address
                city
                neighbor
                postalCode
                parking
                bathroom
                rooms
                size
                createdAt
                description
                hideAddress
                gallery

            }
        }`
    }).then(res => res.data.data.finality)
    .catch(err => err)


} 


/**
 * 
        
 */


