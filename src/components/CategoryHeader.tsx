import React from "react";
import { Box, Typography } from "@mui/material";
const menuItems = [
    "DEALS HUB",
    "MEN",
    "WOMEN",
    "WINTERWEAR",
    "ACCESSORIES",
    "SNEAKERS",
    "BEWAKOOF AIR",
    "HEAVY DUTY",
    "CUSTOMIZATION",
    "OFFICIAL MERCH",
    "PLUS SIZE",
];

const CategoryHeader: React.FC = () => {
    return (
        <Box
            sx={{
                display: "flex",
                overflowX: "auto",
                whiteSpace: "nowrap",
                padding: "1rem",
                borderRadius: "8px",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                    display: "none",
                },
            }}
        >
            {menuItems.map((item, index) => (
                <Box
                    key={index}
                    sx={{
                        margin: "8px",
                        padding: "0px 16px",
                        fontWeight: "500",
                        borderRadius: "4px",
                        textAlign: "center",
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",

                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{ fontWeight: 500, color: "black" }}
                    >
                        {item}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};

export default CategoryHeader;
