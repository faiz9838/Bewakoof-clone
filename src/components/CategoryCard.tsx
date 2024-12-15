import React from 'react';
import { Box, Grid, Card, CardMedia, Link } from '@mui/material';

const CategoryCard: React.FC = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container spacing={1}>
                {/* First Image */}
                <Grid item xs={6}>
                    <Card sx={{ boxShadow: 'none', paddingRight: '5px' }}>
                        <Link href="#" title="" sx={{ display: 'block' }}>
                            <CardMedia
                                component="img"
                                image="https://images.bewakoof.com/uploads/grid/app/shopHimHer-desktop-thin-RM-1733842100.gif"
                                alt="Shop Him"
                                sx={{
                                    width: '100%',
                                    padding: 0,
                                    objectFit: 'cover', // Ensures image maintains aspect ratio
                                }}
                            />
                        </Link>
                    </Card>
                </Grid>

                {/* Second Image */}
                <Grid item xs={6}>
                    <Card sx={{ boxShadow: 'none', paddingLeft: '5px' }}>
                        <Link href="#" title="" sx={{ display: 'block' }}>
                            <CardMedia
                                component="img"
                                image="https://images.bewakoof.com/uploads/grid/app/shopHimHer-desktop-thin-IK--1--1733842099.gif"
                                alt="Shop Her"
                                sx={{
                                    width: '100%',
                                    padding: 0,
                                    objectFit: 'cover', // Ensures image maintains aspect ratio
                                }}
                            />
                        </Link>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CategoryCard;
