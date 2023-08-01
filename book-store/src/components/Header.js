import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom';

const Header = () =>{

    const [value,setvalue] = useState();

    return(
        <>
        <AppBar sx={{backgroundColor:"#232F3D"}} position='sticky'>
            <Toolbar>
                <Typography>
                    <LibraryBooksIcon/>
                </Typography>
                <Tabs 
                sx={{ml:'auto'}} 
                textColor='inherit' 
                indicatorColor='secondary' 
                value={value} 
                onChange = {(e,val) => setvalue(val)}>

                    <Tab LinkComponent={NavLink} to="/add" label='Add Product'></Tab>
                    <Tab LinkComponent={NavLink} to="/books" label='Books'></Tab>
                    <Tab LinkComponent={NavLink} to="/about" label='About us'></Tab>
                    
                </Tabs>
            </Toolbar>
        </AppBar>
        </>
    )
};

export default Header;

