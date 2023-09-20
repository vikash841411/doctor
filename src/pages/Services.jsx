import { CardMedia, Paper, Typography } from '@mui/material'
import React from 'react'
import doctor from '../assets/Vikash_Kumar.jpeg'
import doctor1 from '../assets/Dr.shankar_Kumar_dalna.jpeg'
import doctor2 from '../assets/Hans_kumar_sonu.jpg'
import doctor3 from '../assets/skr.jpeg'
const Services = () => {

const TeamsData=[
  {name:'Dr. Vikash kumar',position:'Founder',img:doctor},
  {name:'Dr. Shankar Kumar',position:'Founder',img:doctor1},
  {name:'MR.Hans Kumar Sonu',position:'Co-Founder',img:doctor2},
  {name:'MR.Sudhir Kumar Singh',position:'Marketing Head',img:doctor3}
  
  // {name:'Hans kumar sonu',position:'Co-Founder',img:doctor2},
]



  return (
    <div className="aboutContainer">
     <div className="teamBanner">
      <div className="Admin">
        <Paper elevation={10} className='adminImg'>
        <CardMedia
                  component="img"
                  sx={{ width:'100%', height: '100%', objectFit: 'cover' }}
                  image={doctor}
                  alt="about"
                /> 
        </Paper>
        <div className="adminAddress">
        <h2>Dr. Vikash Kumar</h2>
          <p>MD(Pharma)</p>
          <p>New Bank Colony, Pratap Nagar, Chapra, Zail Shahar, Bihar 841301</p>
          <p>+91 9199226410</p>


        </div>
     
      </div>
     </div>
     <div className="ourTeam">
      <h2>Meet Our Team</h2>
     <div className="testimonial">
    {
      TeamsData.map((team,index)=>{
        return(
          <Paper key={index} elevation={10} sx={{width:250,height:320,textAlign:'center',}}>
          <CardMedia
                    component="img"
                    sx={{ width:250, height: 270, objectFit: "cover",objectPosition:"top" }}
                    image={team.img}
                    alt="about"
                  /> 
                  <Typography sx={{fontSize:'1.1rem',fontWeight:'550'}} >{team.name}</Typography>
                  <Typography sx={{fontWeight:'500'}} >{team.position}</Typography>
  
          </Paper>
        )
      })
    }
     </div>
     </div>
      </div>
  )
}

export default Services