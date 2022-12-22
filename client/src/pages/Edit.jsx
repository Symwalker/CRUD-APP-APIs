import { Typography } from '@mui/material'
import React from 'react'
import EditUser from '../components/EditUser/EditUser'

const Edit = () => {
  return (
    <div>
      <Typography variant='h3' sx={{textAlign:'center'}}>
        Edit User 
      </Typography>
      <EditUser/>
    </div>
  )
}

export default Edit
