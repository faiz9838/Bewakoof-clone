import React, { useState, useEffect } from "react";
import { Box, Card, CardMedia, Container } from "@mui/material";

// Example images array
const images = [
    "https://images.bewakoof.com/uploads/grid/app/Bewakoofy-Sale-Ends-Today-Common-1x1-HC-Banner--1--1734191772.jpg",
    "https://images.bewakoof.com/uploads/grid/app/HC-1X1-winterwear-comm-1734106193.jpg",
    "https://images.bewakoof.com/uploads/grid/app/HC-1X1-comm-joggers-1734106192.jpg",
    "https://images.bewakoof.com/uploads/grid/app/HC-1x1-CFT-comm-1734108118.jpg",
    "https://images.bewakoof.com/uploads/grid/app/HC-1x1-OS-common-1734108119.jpg",
    "https://images.bewakoof.com/uploads/grid/app/mufasa-Common-Ai-mOdel-HC-banner-1x1-1734061509.jpg",
];

const SweeperCard: React.FC = () => {
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
                            width: "40vw", // Set width as 70vw
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
    );
};

export default SweeperCard;
