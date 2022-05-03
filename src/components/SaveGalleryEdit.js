import {useState} from 'react'
import {GETHOUSE,DATA_URL} from '../api'
import axios from 'axios'

import {Button} from '@material-ui/core'


export default function SaveGalleryEdit({selectedID}){
    const [gallery,setGallery] = useState([])

    const HandleFilesUpload = e =>{
        e.preventDefault()
        //setOnLoading({loading:true,message:"enviando imagens..."})
        const files = Object.values(e.target.files)
        files.map(file => {
          // Initial FormData
          const formData = new FormData();
          formData.append("file", file);
          //formData.append("tags", `dahwijw8w, medium, gist`);
          formData.append("upload_preset", "uv4ucb9s"); // Replace the preset name with your own
          formData.append("api_key", "316375736115726"); // Replace API key with your own Cloudinary key
         // formData.append("signature", "UyTJCwsJ89rr1ajiPEvWIvz3egc");
          formData.append("timestamp", (Date.now() / 1000) | 0);
      
          // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
          return axios.post("https://api.cloudinary.com/v1_1/dahwijw8w/image/upload", formData, {
            headers: { "X-Requested-With": "XMLHttpRequest" },
          }).then(response => {
            const data = response.data;
            const fileURL = data.secure_url
            setGallery(prevItens => 
                [...prevItens, fileURL])
              updateGallery(gallery)

            }) 
        });
          
      }

        const updateGallery = async (gallery)=>{
            setTimeout(()=>{ },3000)
            console.log(gallery)
            const data = await GETHOUSE(selectedID)
            return await axios.post(`${DATA_URL}/graphql`,{
                query:`mutation{
                    updateGallery(id:"${data.house.gallery.id}",url:"${gallery}"){
                      id
                      url
                    }
                  }`
            }).then(res => console.log(res))
            .catch(err => err)
        }

    return (
        <label htmlFor="contained-button-file">
                  <input
                  accept="image/*"
                  style={{display:"none"}}
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={HandleFilesUpload}
                  //onChange={updateGallery}
                />
                  <Button variant="contained" color="primary" component="span"  >
                    Editar Fotos
                  </Button>
            </label>
    )
}