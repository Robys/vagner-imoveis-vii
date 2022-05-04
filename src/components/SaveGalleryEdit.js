import {useState} from 'react'
import {REMOVEGALLERY,ADDGALLERY} from '../api'
import axios from 'axios'

import {Button,Snackbar} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SaveGalleryEdit({selectedID}){
    const [gallery,setGallery] = useState([])
    const [onLoading,setOnLoading] = useState({loading:true,message:""})


    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
    }

    const HandleFilesUpload = e =>{
        e.preventDefault()
        setOnLoading({loading:true,message:"enviando imagens..."})
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
                UpdateGallery(fileURL)
              }) 
            });
            
          }
          
          const UpdateGallery = async (url)=>{
            setTimeout(()=>{ },5000)
            await ADDGALLERY(selectedID,url)
            setOnLoading({loading:false,message:"imagens enviadas"})
        }

        const HandleRemove = async ()=>{
          await REMOVEGALLERY(selectedID)
        }

    return (
      <>
        <label htmlFor="contained-button-file">
                  <input
                  accept="image/*"
                  style={{display:"none"}}
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={HandleFilesUpload}
                  //onChange={UpdateGallery}
                />
                  <Button variant="contained" color="primary" component="span"  >
                    +fotos
                  </Button>
            </label>

            <Button onClick={HandleRemove}
            variant="contained" color="primary" component="span"  >
                    -fotos
            </Button>

            {onLoading.loading === false ?
          <Snackbar open={onLoading.loading } autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              {onLoading.message}
            </Alert>
            </Snackbar>

         :""}
      
      </>
    )
}