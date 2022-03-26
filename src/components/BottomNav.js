
import Box  from '@mui/material/Box'
import Button from '@mui/material/Button'
import React from 'react'

function BottomNav() {

    
  return (

    <Box sx={{bgcolor:"transparent", display:"flex", width:"70%", justifyContent:"center", mx:"auto", py:"5px"}}>
        <Button sx={{color:"white", mx:1, fontSize:"24px", borderColor:"black", fontFamily:"arial"}} variant="text">Outlined</Button>
        <Button sx={{color:"white", mx:1, fontSize:"24px", borderColor:"black", fontFamily:"arial"}} variant="text">Outlined</Button>
        <Button sx={{color:"white", mx:1, fontSize:"24px", borderColor:"black", fontFamily:"arial"}} variant="text">Outlined</Button>
    </Box>
    
  )
}

export default BottomNav