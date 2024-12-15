import React from 'react';
import { Box, Card, CardMedia, Link } from '@mui/material';

const FlatTenCard: React.FC = () => {
    return (
        <Box sx={{ width: '100%', padding: ".5rem" }}>
            <Card sx={{ width: '100%', boxShadow: 'none' }}>
                <Link href="#" title="" sx={{ display: 'block' }}>
                    <CardMedia
                        component="img"
                        image="https://images.bewakoof.com/uploads/grid/app/offer-strip-desktop-1733842100.jpg"
                        alt="Offer"
                        sx={{
                            width: '100%',
                            padding: 0,
                            objectFit: 'cover', // Ensure the image is not distorted
                        }}
                    />
                </Link>
            </Card>
        </Box>
    );
};

export default FlatTenCard;
