import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import ButtonCmp from '../../muiComponents/ButtonCmp/Button';
import { useDispatch, useSelector } from 'react-redux'
import { getUserAction } from '../../store/action/getUserAction';
import { useEffect } from 'react';


import { Link, Navigate, Navlink, useNavigate } from 'react-router-dom'
import { deleteUser } from '../../servise/api';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BasicCardCmp() {
    const dispatch = useDispatch()
    const { data , dataLoading} = useSelector((data) => data.getUserReducer)
    // const date = data.data

    // console.log(data.data,"ui wala");
    useEffect(() => {
        dispatch(getUserAction())
    }, [])
    const deleteUserpro = (id) => {
        deleteUser(id);
    }
     const deletReload = ()=>{
  window.location.reload()
}

    return (
        <>

{
    dataLoading ?(
        <div>Loading</div>
    ) :(
        <Grid container spacing={2} mx='auto' width='90%'>
                {
                    data.map((product, index) => {

                        return (
                            <Grid item xs={12} sm={6} key={index}>
                                <Card sx={{ minWidth: '250px', bgcolor: 'black' }}>
                                    <CardContent>
                                        <Typography sx={{ color: 'white' }}>
                                            Name : {product.name}
                                        </Typography>
                                        <Typography sx={{ color: 'white' }}>
                                            Age : {product.age}

                                        </Typography>
                                        <Typography sx={{ color: 'white' }}>
                                            Email : {product.email}

                                        </Typography>
                                        <Typography sx={{ color: 'white' }}>
                                            Gender : {product.gender}

                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link to={`/about/${product._id}`}>
                                            <ButtonCmp text='edit' />
                                        </Link>
                                        <ButtonCmp text='delete' onClick={() => {
                                            deleteUserpro(product._id);
                                            deletReload()
                                        }} style={{
                                            bgcolor: 'red', '&:hover': {
                                                bgcolor: 'red'
                                            }

                                        }} />
                                    </CardActions>

                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
    )
}

            
        </>
    );
}