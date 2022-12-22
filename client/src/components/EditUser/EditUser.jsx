import React, { useState } from 'react'
import { Button, FormGroup, FormLabel, InputLabel, TextField } from '@mui/material'

import ButtonCmp from '../../muiComponents/ButtonCmp/Button'
import { addUser , editUser} from '../../servise/api'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getOneUserAction } from '../../store/action/getUserAction'
import { useNavigate, useParams } from 'react-router-dom'


const defaultValue = {
    name : '',
    userName : '',
    email : '',
    number : ''
}

const EditUser = () => {
    const [user , setUser] = useState(defaultValue)
    const { id }  = useParams()
    console.log(id);
    useEffect(()=>{
        loadUserDetails()

    },[])
const navigate = useNavigate()
    const loadUserDetails =async ()=>{
const response = await addUser(id)
setUser(response.data)
    }
    const  onChangevalue = (e)=>{
        setUser({...user , [e.target.name] : e.target.value})
        // console.log(user);
    }

    const editUserDetails =async () =>{
      await  editUser(user ,id)
      navigate('/add')
    }
    return (

        <FormGroup sx={{ textAlign: 'center', marginTop: 3 }} >
            <FormLabel sx={{ p: 0.5 }}>
                <TextField onChange={(e)=>onChangevalue(e)} sx={{ width: '70%' }} id="standard-basic" label="Name" name='name' variant="standard" placeholder='EnterYour Name' value={user.name} />
            </FormLabel>
            <FormLabel sx={{ p: 0.5 }}>
                <TextField onChange={(e)=>onChangevalue(e)} sx={{ width: '70%' }} id="standard-basic" label="Age" name='age' variant="standard" placeholder='EnterYour Age' value={user.age}  />
            </FormLabel>
            <FormLabel sx={{ p: 0.5 }}>
                <TextField onChange={(e)=>onChangevalue(e)} sx={{ width: '70%' }} id="standard-basic" label="Email" name='email' variant="standard" placeholder='EnterYour Email' value={user.email}/>
            </FormLabel>
            <FormLabel sx={{ p: 0.5 }}>
                <TextField onChange={(e)=>onChangevalue(e)} sx={{ width: '70%' }} id="standard-basic" label="Gender" name='gender' variant="standard" placeholder='EnterYour Gender' value={user.gender}/>
            </FormLabel>
            <FormLabel sx={{ p: 0.5 }}>
                <ButtonCmp style={{
                    bgcolor: 'black', width: '70%', mx: 'auto', '&:hover':  {
                        bgcolor: "black",
                    }
                }}
                 text="EDIT"
                 onClick={editUserDetails}
                />
            </FormLabel>
        </FormGroup>

    )
}

export default EditUser
