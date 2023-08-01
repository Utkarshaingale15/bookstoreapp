import React, { useEffect,useState } from 'react';
import axios from "axios";
import { useParams,useNavigate } from 'react-router-dom';
import { FormLabel,TextField,Box, Button,FormControlLabel,Checkbox } from "@mui/material";

const BookDetail = () => {

    const [inputs,setinputs] = useState();

    const history = useNavigate();

    const [checked, setchecked] = useState(false);

    const id = useParams().id;

    useEffect(() => {
        const fetchHandler = async() => {
            await axios.get(`http://localhost:5000/books/${id}`).then((res) => res.data).then((data) => setinputs(data.book));
        };
        fetchHandler();
    },[id]);

    const sendRequest = async() => {
        await axios.put(`http://localhost:5000/books/${id}`,{
            name: String(inputs.name),
            author: String(inputs.author),
            description: String(inputs.description),
            price: Number(inputs.price),
            image: String(inputs.image),
            available: Boolean(checked),
        }).then(res => res.data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history('/books'));
    };

    const handleChange = (e) => {
        setinputs((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    };

    

    return(
        <>

        {inputs && (

            <form onSubmit={handleSubmit}>

            <Box display="flex" 
                flexDirection="column" 
                justifyContent={'center'} 
                maxWidth={700} 
                marginLeft={'auto'}
                marginRight={'auto'}
                marginTop={10}>

                <FormLabel>Name</FormLabel>
                <TextField value={inputs.name} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='name'></TextField>
                
                <FormLabel>Author</FormLabel>
                <TextField value={inputs.author} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='author'></TextField>
                
                <FormLabel>Description</FormLabel>
                <TextField value={inputs.description} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='description'></TextField>
                
                <FormLabel>Price</FormLabel>
                <TextField value={inputs.price} onChange={handleChange} type={'number'} margin='normal' fullWidth variant='outlined' name='price'></TextField>

                <FormLabel>Image</FormLabel>
                <TextField value={inputs.image} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='image'></TextField>
                <FormControlLabel control={<Checkbox checked={checked} onChange={() => setchecked(!checked)}/>} label="Available" />

                <Button variant='contained' type='submit'>Update Book</Button>

            </Box>

            </form>

        )}

        </>
    );
}

export default BookDetail;
