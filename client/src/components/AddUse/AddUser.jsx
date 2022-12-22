import React, { useState } from 'react'
import { Button, FormGroup, FormLabel, InputLabel, TextField } from '@mui/material'
import ButtonCmp from '../../muiComponents/ButtonCmp/Button'

import { addUsers } from "../../servise/api"


const defaultValue = {
    name: '',
    userName: '',
    email: '',
    number: ''
}

const AddUser = () => {
    const [user, setUser] = useState(defaultValue)
    const onChangevalue = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        // console.log(user);
    }

    const addUserDetails = async () => {
        await addUsers(user)

    }
    const postReload = () => {

        window.location.reload()
    }
    return (

        <FormGroup sx={{ textAlign: 'center', marginTop: 3 }} >
            <FormLabel sx={{ p: 0.5 }}>
                <TextField onChange={(e) => onChangevalue(e)} sx={{ width: '50%' }} id="standard-basic" label="Name" name='name' variant="standard" placeholder='EnterYour Name' />
            </FormLabel>
            <FormLabel sx={{ p: 0.5 }}>
                <TextField onChange={(e) => onChangevalue(e)} sx={{ width: '50%' }} id="standard-basic" label="Age" name='age' variant="standard" placeholder='EnterYour Age' />
            </FormLabel>
            <FormLabel sx={{ p: 0.5 }}>
                <TextField onChange={(e) => onChangevalue(e)} sx={{ width: '50%' }} id="standard-basic" label="Email" name='email' variant="standard" placeholder='EnterYour Email' />
            </FormLabel>
            <FormLabel sx={{ p: 0.5 }}>
                <TextField onChange={(e) => onChangevalue(e)} sx={{ width: '50%' }} id="standard-basic" label="Gender" name='gender' variant="standard" placeholder='EnterYour Gender' />
            </FormLabel>
            <FormLabel sx={{ p: 0.5 }}>
                <ButtonCmp style={{
                    bgcolor: 'black', width: '70%', mx: 'auto', '&:hover': {
                        bgcolor: "black",
                    }
                }}
                    text="POST"
                    onClick={() => {
                        addUserDetails;
                        postReload()
                    }}
                />
            </FormLabel>
        </FormGroup>

    )
}

export default AddUser
