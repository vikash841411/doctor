import { CardMedia, Paper } from '@mui/material'
import React from 'react'
import doctor from '../assets/Certificate.jpeg'
import doctor1 from '../assets/Temp1.jpeg'

const Gallery = () => {

  const TeamsData=[
    {name:'ABHAY PANDEY',position:'Founder',img:doctor},
    {name:'ABHAY PANDEY',position:'Founder',img:doctor1},
    {name:'ABHAY PANDEY',position:'Founder',img:doctor},
    {name:'ABHAY PANDEY',position:'Founder',img:doctor},
    {name:'ABHAY PANDEY',position:'Founder',img:doctor},
    {name:'ABHAY PANDEY',position:'Founder',img:doctor},

  ]
  return (
    <div className="aboutContainer">
      <div className="galleryContainer">
        <h1>Gallery</h1>
     <p>स्वास्थ्य क्षेत्र में अग्रणी संस्था होने के नाते हम समाज के प्रति अपनी जिम्मेदारियों को समझते हैं 
      हमारी निरंतर यही कोशिश रहती है कि हम अपने कार्यों के सकारात्मक प्रभाव से एक बेहतर समाज
       का निर्माण करें हमारी कुछ झलकियां |</p>

       <div className="gallery">
        <div className="galleryImg">
        {
      TeamsData.map((team,index)=>{
        return(
          <Paper key={index} elevation={10} 
          >
          <CardMedia
                    component="img"
                    sx={{ width:250, height: 270, objectFit: "fill"}}
                    image={team.img}
                    alt="about"
                  /> 
  
          </Paper>
        )
      })
    }
        </div>
       </div>

      </div>

    </div>
  )
}

export default Gallery