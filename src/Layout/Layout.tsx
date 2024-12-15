import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { AppBar, Box, Divider } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CategoryHeader from "../components/CategoryHeader";
import SweeperCard from "../components/SweeperCard";
import DealTimerCard from "../components/DealTimerCard";
import FlatTenCard from "../components/FlatTenCard";
import CategoryCard from "../components/CategoryCard";
import HotPickSaleCards from "../components/HotPickSaleCard";
import CategoryShopMenCard from "../components/CategoryShopMenCard";
import { Footer } from "../components/Footer";

// Mock data for Footer
const customerService = {
    title: "Customer Service",
    links: [
        { label: "Contact Us", href: "/contact-us" },
        { label: "Return Policy", href: "/return-policy" },
        { label: "FAQ", href: "/faq" },
    ],
};

const company = {
    title: "Company",
    links: [
        { label: "About Us", href: "/about-us" },
        { label: "Careers", href: "/careers" },
        { label: "Privacy Policy", href: "/privacy-policy" },
    ],
};

const menClothing = {
    title: "Men's Clothing",
    links: [
        { label: "T-Shirts", href: "/mens/t-shirts" },
        { label: "Jeans", href: "/mens/jeans" },
        { label: "Jackets", href: "/mens/jackets" },
    ],
};

const womenClothing = {
    title: "Women's Clothing",
    links: [
        { label: "Dresses", href: "/womens/dresses" },
        { label: "Tops", href: "/womens/tops" },
        { label: "Skirts", href: "/womens/skirts" },
    ],
};

const mobileCovers = {
    title: "Mobile Covers",
    links: [
        { label: "iPhone Covers", href: "/mobile-covers/iphone" },
        { label: "Samsung Covers", href: "/mobile-covers/samsung" },
        { label: "OnePlus Covers", href: "/mobile-covers/oneplus" },
    ],
};

const socialLinks = [
    { icon: "facebook", href: "/facebook", label: "Follow us on Facebook", followers: "500K" },
    { icon: "instagram", href: "/instagram", label: "Follow us on Instagram", followers: "1M" },
    { icon: "twitter", href: "/twitter", label: "Follow us on Twitter", followers: "200K" },
];

const paymentMethods = [
    { icon: "/path/to/paypal-icon.png", name: "Paypal" },
    { icon: "/path/to/visa-icon.png", name: "Visa" },
    { icon: "/path/to/mastercard-icon.png", name: "MasterCard" },
];

function Layout() {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920,
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <div className="layout">
                <AppBar
                    position="sticky"
                    sx={{
                        background: "white",
                        transition: "background-color 0.3s ease",
                        padding: "1rem",
                        boxShadow: "none",
                    }}
                >
                    <Header />
                </AppBar>

                <Box
                    sx={{
                        position: "relative",
                        width: "100%",
                        backgroundColor: "#FFD033",
                    }}
                >
                    <Navbar />
                </Box>
                <Divider />

                {/* Ensure Navigation Menu is visible on all screen sizes */}
                <Box
                    sx={{
                        display: "block", // Always display block to ensure visibility
                        width: "100%",
                    }}
                >
                    <CategoryHeader />
                    <SweeperCard />
                    <DealTimerCard />
                    <FlatTenCard />
                    <CategoryCard />
                    <HotPickSaleCards />
                    <CategoryShopMenCard />
                    <Footer
                        customerService={customerService}
                        company={company}
                        menClothing={menClothing}
                        womenClothing={womenClothing}
                        mobileCovers={mobileCovers}
                        socialLinks={socialLinks}
                        paymentMethods={paymentMethods}
                    />
                </Box>
            </div>
        </ThemeProvider>
    );
}

export default Layout;
