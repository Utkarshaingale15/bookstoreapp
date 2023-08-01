import React from 'react';
import {Box,Typography} from '@mui/material';

const About = () => {
    return(
        <>

        <Box display="flex" flexDirection="column" alignItems="center">

            <Typography sx={{ fontFamily: "fantasy" }} variant="h4" marginTop={20}>
            This is a CRUD Application
            </Typography>

            <Typography sx={{ fontFamily: "fantasy" }} variant="h5" marginTop={2}>
            By MERN STACK
            </Typography>

        </Box>

        </>
    );
}

export default About;
