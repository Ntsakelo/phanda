import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Grid from '@mui/material/Grid2';
import pic from '../../../images/photoshoot1.jpg'
import './style.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState,useEffect } from 'react';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const Uploads = () => {
    const [upload,setUpload] = useState<any>()
    const [image, setImage] = useState<any>()
    
    useEffect(() => {
        console.log(image)
    },[image])

    const readImageUrl = (e:any) =>{
       // setImage(URL.createObjectURL(e.target.files[0]))
       const image = e.target.files[0]
       const filereader = new FileReader
       

       filereader.onload = () => {
         let base64string = filereader.result
         let base64Data = base64string?.toString().replace(/^data:image\/\w+;base64,/, "")
         //let bufferData = Buffer.from(base64Data!,'base64')
         let fileType = base64string?.toString().split(';')[0].split('/')[1]
      
         let data = {
            Key: e.target.files[0].name,
            Body:base64Data,
            ContentType:`image/${fileType}`

         }
         console.log()
       }
       console.log(image)
       filereader.readAsDataURL(image)
    }

    return (
        <div className="uploads-section">
            <h1 className="main-header">Uploads</h1>
            <p>Upload pictures that would give evidence of the services you provide. Though this section is optional, we highly recommend it as it would provide potential clients with more visibility to your work</p>
            <div className='uploads'>
                 <Grid container>
                    <Grid size={{xs:12,md:3,lg:4}}>
                        <div className="upload-container">
                            <img src={image} alt="upload" className="upload-pic"/>
                            <CheckCircleIcon className='check-upload'/>
                        </div>
                    </Grid>
                    <Grid size={{xs:12,md:3,lg:4}}>
                        <div className="upload-container">
                        <img src={pic} alt="upload" className="upload-pic"/>
                        <CheckCircleIcon className='check-upload'/>
                        </div>
                    </Grid>
                 </Grid>
             </div>
            <div className="fit-content-container">   
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                sx={{margin:'auto',marginBottom:'30px'}}
            >
                Upload files
                <VisuallyHiddenInput
                    type="file"
                    accept='.jpeg,.png'
                    onChange={(event) => readImageUrl(event)} 
                />
            </Button>

            </div>
        </div>
    )
}

export default Uploads;