import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid2, Paper } from '@mui/material';

interface TimeLeft {
    hours: number;
    minutes: number;
    seconds: number;
}

const DealTimerCard: React.FC = () => {
    // Set the target date for the sale end (you can adjust this as needed)
    const targetDate = new Date('2024-12-31T23:59:59').getTime();

    // State to store the time left
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Function to calculate the time left
    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            // Sale has ended, set everything to 0
            setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
            return;
        }

        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
    };

    // Use effect to update the timer every second
    useEffect(() => {
        // Call the function immediately to set the initial time
        calculateTimeLeft();

        // Update the timer every second
        const interval = setInterval(() => {
            calculateTimeLeft();
        }, 1000);

        // Cleanup interval when the component is unmounted
        return () => clearInterval(interval);
    }, []);

    return (
        <Box sx={{ paddingTop: '2rem', textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontSize: '14px' }} gutterBottom>
                Sale Ends In
            </Typography>
            <Paper sx={{ padding: '16px', display: 'inline-block', boxShadow: 'none' }}> {/* Remove box shadow */}
                <Grid2 container spacing={2} justifyContent="center">
                    <Grid2 item>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                                hours
                            </Typography>
                        </Box>
                    </Grid2>
                    <Typography variant="h5" sx={{ mx: 1, fontWeight: 'bold' }}>:</Typography> {/* Colon between hours and minutes */}
                    <Grid2 item>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                                mins
                            </Typography>
                        </Box>
                    </Grid2>
                    <Typography variant="h5" sx={{ mx: 1, fontWeight: 'bold' }}>:</Typography> {/* Colon between minutes and seconds */}
                    <Grid2 item>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                                secs
                            </Typography>
                        </Box>
                    </Grid2>
                </Grid2>
            </Paper>
        </Box>
    );
};

export default DealTimerCard;
