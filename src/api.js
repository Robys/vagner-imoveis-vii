import axios from 'axios'
import {compareTwoStrings} from 'string-similarity'

export const DATA_URL = "https://vagner-imoveis-backend.herokuapp.com"

export function AddHouses(address,code,num,neighbor,city,postalCode,construction,type,size,rooms,parking,price,description,gallery){

   return axios.post(`${DATA_URL}/houses`,{address:address,
   code:code,
   num: num,
   neighbor: neighbor,
   city:city,
   postalCode:postalCode,
   rooms:rooms,
   construction:construction,
   type:type,
   size:size,
   parking:parking,
   price:price,
   description:description,
   gallery: gallery
})
    .then(res => console.log(res))
    .catch(err => console.log(err))

    
}


export async function SearchFilter(keyword){

    const data = await axios.get(`${DATA_URL}/houses`)
    .then(res => res.data)
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

      const data = await axios.get(`${DATA_URL}/houses`)
    .then(res => res.data)
    .catch(err => err)

      const sortProperty = types[type];
    const sorted = data.sort((a, b) => b[sortProperty] - a[sortProperty]);
    return sorted

}

export const SortContruction = async (keyword)=>{
    const data = await axios.get(`${DATA_URL}/houses`)
    .then(res => res.data)
    .catch(err => err)

    const result = data.filter(houses => houses.construction === keyword)

    return result

}

export const SortType = async (keyword)=>{

    const data = await axios.get(`${DATA_URL}/houses`)
    .then(res => res.data)
    .catch(err => err)

    const result = data.filter(houses => houses.type === keyword)

    return result


} 


/**
 * 
        
 */


