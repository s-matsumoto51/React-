import React from 'react';
import {Card, CardMedia, Box } from '@mui/material';

export const Slideshow = () => {
    return(
    <Box 
        display="flex" 
        flexWrap="wrap" 
        justifyContent="center" 
        gap={1}
    >
        <Box width={{ xs: '100%', sm: '33.33%', md: '10%' }}>
            <Card>
                <CardMedia
                component="img"
                height="100"
                image="https://cdn.pixabay.com/photo/2023/06/26/13/41/wolf-8089783_1280.jpg"
                alt="Image 1"
                />
            </Card>
        </Box>
        <Box width={{ xs: '100%', sm: '33.33%', md: '10%' }}>
            <Card>
                <CardMedia
                component="img"
                height="100"
                image="https://cdn.pixabay.com/photo/2016/04/18/10/17/wolf-1336229_1280.jpg"
                alt="Image 2"
                />
            </Card>
        </Box>
        <Box width={{ xs: '100%', sm: '33.33%', md: '10%' }}>
            <Card>
                <CardMedia
                component="img"
                height="100"
                image="https://cdn.pixabay.com/photo/2017/01/19/16/15/wolf-1992716_1280.jpg"
                alt="Image 3"
                />
            </Card>
        </Box>
        <Box width={{ xs: '100%', sm: '33.33%', md: '10%' }}>
            <Card>
                <CardMedia
                component="img"
                height="100"
                image="https://cdn.pixabay.com/photo/2013/06/29/21/18/wolf-142173_1280.jpg"
                alt="Image 4"
                />
            </Card>
        </Box>
        <Box width={{ xs: '100%', sm: '33.33%', md: '10%' }}>
            <Card>
                <CardMedia
                component="img"
                height="100"
                image="https://cdn.pixabay.com/photo/2018/02/13/23/46/wolf-3151876_1280.jpg"
                alt="Image 5"
                />
            </Card>
        </Box>
    </Box>
    )
}