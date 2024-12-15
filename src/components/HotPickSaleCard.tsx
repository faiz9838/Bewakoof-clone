import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Paper, Card, CardMedia, Container } from '@mui/material';

const HotPickSaleCards: React.FC = () => {

    const images = [
        "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Hoodies-1734070482.jpg",
        "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Sweatshirts--1--1734070482.jpg",
        "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Jackets--1--1734070483.jpg",
        "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-T-Shirts-1734070511.jpg",
        "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Pyjamas--1--1734070510.jpg",
        "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Shirts-1734070483.jpg",
        "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Dresses-1733924684.jpg",
        "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-1734073121.jpg"
    ];


    const [currentImages, setCurrentImages] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index

    // Function to shuffle the images array
    const shuffleArray = (array: string[]) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
        }
        return shuffled;
    };

    // Change slide every 10 seconds with shuffled images and make it infinite
    useEffect(() => {
        const interval = setInterval(() => {
            const newIndex = (currentIndex + 1) % images.length; // Move to the next image
            setCurrentIndex(newIndex);
            setCurrentImages(shuffleArray(images).slice(newIndex, newIndex + 3)); // Shuffle and pick new images
        }, 10000); // Change every 10 seconds

        // Set the initial images
        setCurrentImages(shuffleArray(images).slice(0, 3));

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [currentIndex]);

    // Function to render the dots for each image
    const renderDots = () => {
        const totalImages = images.length;
        return Array.from({ length: totalImages }).map((_, index) => (
            <Box
                key={index}
                sx={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    backgroundColor: currentIndex === index ? "primary.main" : "grey.400",
                    margin: "0 4px",
                    transition: "background-color 0.3s",
                    cursor: "pointer",
                }}
                onClick={() => {
                    setCurrentIndex(index);
                    setCurrentImages(shuffleArray(images).slice(index, index + 3)); // Set new images on dot click
                }}
            />
        ));
    };
    return (
        <Box sx={{ paddingTop: '10px' }}>
            <Grid container justifyContent="center">
                <Grid item xs={12}>
                    <Paper sx={{ padding: '16px', textAlign: 'center', boxShadow: 'none' }}>
                        <Typography
                            sx={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 700,
                                letterSpacing: '2px',
                                fontSize: '20px',
                                color: 'black',
                            }}
                        >
                            Hot Picks On Sale
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

            {/* You can now add your Hot Pick Sale Cards here */}
            <Container sx={{ display: "flex", justifyContent: "center", overflow: "hidden", flexDirection: "column" }}>
                <Box
                    sx={{
                        mt: 1,
                        display: "flex",
                        justifyContent: "flex-start",
                        padding: "0 16px",
                        gap: "16px",
                        overflow: "hidden", // Hide any overflow
                    }}
                >
                    {currentImages.map((src, index) => (
                        <Card
                            key={index}
                            sx={{
                                borderRadius: 0,
                                overflow: "hidden",
                                width: "70vw", // Set width as 70vw
                                height: "auto", // Set height as 70vh
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                transition: "transform 0.3s ease-in-out", // Smooth transition on slide change
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={src}
                                alt={`Slide ${index + 1}`}
                                sx={{
                                    objectFit: "contain", // Ensures image fits without cropping
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </Card>
                    ))}
                </Box>

                {/* Dots at the bottom */}
                <Box sx={{ mt: 2, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {renderDots()}
                </Box>
            </Container>
        </Box>
    );
};

export default HotPickSaleCards;
