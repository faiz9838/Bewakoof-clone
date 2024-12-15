import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Menu,
    Drawer,
    Box,
    List,
    ListItem,
    ListItemText,
    Divider,

    Link,
    MenuItem,
    InputBase
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import logo from "../assets/logo/ic-desktop-bwkf-trademark-logo.svg";
import { FavoriteBorderOutlined, ShoppingBagOutlined, SearchOutlined } from "@mui/icons-material";
import { Typography } from '@mui/material';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
    const [menDropdownAnchor, setMenDropdownAnchor] = useState(null);
    const [womenDropdownAnchor, setWomenDropdownAnchor] = useState(null);
    const [coversDropdownAnchor, setCoversDropdownAnchor] = useState(null);

    // const isMobileMenuOpen = Boolean(mobileMenuAnchor);
    const isMenDropdownOpen = Boolean(menDropdownAnchor);
    const isWomenDropdownOpen = Boolean(womenDropdownAnchor);
    const isCoversDropdownOpen = Boolean(coversDropdownAnchor);

    // const handleMobileMenuOpen = (event) => {
    //     setMobileMenuAnchor(event.currentTarget);
    // };

    // const handleMobileMenuClose = () => {
    //     setMobileMenuAnchor(null);
    // };

    const handleMenDropdownOpen = (event) => {
        setMenDropdownAnchor(event.currentTarget);
    };

    const handleMenDropdownClose = () => {
        setMenDropdownAnchor(null);
    };

    const handleWomenDropdownOpen = (event) => {
        setWomenDropdownAnchor(event.currentTarget);
    };

    const handleWomenDropdownClose = () => {
        setWomenDropdownAnchor(null);
    };

    const handleCoversDropdownOpen = (event) => {
        setCoversDropdownAnchor(event.currentTarget);
    };

    const handleCoversDropdownClose = () => {
        setCoversDropdownAnchor(null);
    };

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <AppBar
            position="sticky"
            sx={{
                background: "white",
                transition: "background-color 0.3s ease",
                padding: ".5rem",
                boxShadow: "none"
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: "3rem",
                    px: { xs: 6, md: 16 },

                }}
            >


                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",


                        flexDirection: "row-reverse", // Keeps the layout in the desired order
                    }}
                >
                    {/* Icons Section */}


                    <Box sx={{ display: "flex", flexDirection: "row-reverse", alignItems: "center" }}>

                        <Link
                            href="/"
                            sx={{
                                display: "flex",
                                alignItems: "center", // Aligns image vertically centered
                                padding: "0", // Removes unnecessary padding
                                marginLeft: "0.5rem", // Adds minimal left margin for spacing
                            }}
                        >
                            <img
                                src={logo}
                                alt="Tathastu Logo"
                                style={{
                                    height: "35px", // Ensures consistent logo size
                                    objectFit: "contain", // Keeps aspect ratio intact
                                }}
                            />
                        </Link>
                        {/* Hamburger Menu (visible on small screens) */}
                        <IconButton
                            onClick={toggleDrawer}
                            sx={{
                                color: "black",
                                display: { xs: "block", md: "none", fontSize: "25px" }, // Hidden on medium+ screens, visible on small
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Box>



                {/* Navbar Items (visible on desktop) */}
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: "1.5rem", alignItems: "center", justifyContent: "space-between", width: "100%", boxShadow: "none" }}>
                    <Typography
                        sx={{ fontSize: "14px", color: "grey", cursor: "pointer" }}
                        onClick={handleMenDropdownOpen}
                    >
                        MEN
                    </Typography>
                    <Menu elevation={0}
                        sx={{
                            width: "100vw",
                            height: "100vh",
                            overflowY: "auto", // Changed from "scroll" to "auto"
                            position: "fixed",
                            top: 0,
                            left: 0,
                            backgroundColor: "transparent",
                            color: "black",
                            display: "flex",
                            flexDirection: 'row',
                            justifyContent: "start",
                            alignItems: "center",
                            zIndex: -"1",
                            padding: "0",
                            margin: "0",
                            boxShadow: "none",
                            scrollbarWidth: "none", // Firefox
                            WebkitScrollbar: "none", // Safari and Chrome
                            msOverflowStyle: "none", // IE and Edge
                            "&::-webkit-scrollbar": {
                                display: "none" // Webkit browsers
                            }
                        }}
                        anchorEl={null}
                        open={isMenDropdownOpen}
                        onClose={handleMenDropdownClose}
                        disableScrollLock
                        MenuListProps={{
                            sx: {
                                width: "100vw",
                                textAlign: "center",
                                padding: 0,
                                boxShadow: "0",
                                display: "flex",
                                flexDirection: "row"

                            },
                        }}
                    >
                        <MenuItem
                            onClick={handleMenDropdownClose}
                            sx={{
                                fontSize: "1.5rem",
                                py: 2,
                                width: "25%",
                                justifyContent: "center",
                                borderBottom: "1px solid #ddd",
                                flexDirection: "row",
                                boxShadow: "none"
                            }}
                        >
                            <Box sx={{ width: "auto" }}>
                                <Typography variant="h6">Male</Typography>
                                <List>
                                    <ListItem><Link>Apple</Link></ListItem>
                                    <ListItem><Link>Apple</Link></ListItem>
                                    <ListItem><Link>Apple</Link></ListItem>


                                </List>
                            </Box>
                        </MenuItem>
                        <MenuItem
                            onClick={handleMenDropdownClose}
                            sx={{
                                fontSize: "1.5rem",
                                py: 2,
                                width: "25%",
                                justifyContent: "center",
                                borderBottom: "1px solid #ddd",
                            }}
                        >
                            Pants
                        </MenuItem>
                        <MenuItem
                            onClick={handleMenDropdownClose}
                            sx={{
                                fontSize: "1.5rem",
                                py: 2,
                                width: "25%",
                                justifyContent: "center",
                            }}
                        >
                            Shoes
                        </MenuItem>
                    </Menu>




                    <Typography
                        sx={{ fontSize: "14px", color: "grey", cursor: "pointer" }}
                        onClick={handleWomenDropdownOpen}
                    >
                        WOMEN
                    </Typography>
                    <Menu
                        anchorEl={womenDropdownAnchor}
                        open={isWomenDropdownOpen}
                        onClose={handleWomenDropdownClose}
                    >
                        <MenuItem onClick={handleWomenDropdownClose}>Dresses</MenuItem>
                        <MenuItem onClick={handleWomenDropdownClose}>Tops</MenuItem>
                        <MenuItem onClick={handleWomenDropdownClose}>Accessories</MenuItem>
                    </Menu>

                    <Typography
                        sx={{ fontSize: "14px", color: "grey", cursor: "pointer" }}
                        onClick={handleCoversDropdownOpen}
                    >
                        COVERS
                    </Typography>
                    <Menu
                        anchorEl={coversDropdownAnchor}
                        open={isCoversDropdownOpen}
                        onClose={handleCoversDropdownClose}
                    >
                        <MenuItem onClick={handleCoversDropdownClose}>Phone Covers</MenuItem>
                        <MenuItem onClick={handleCoversDropdownClose}>Laptop Covers</MenuItem>
                        <MenuItem onClick={handleCoversDropdownClose}>Tablet Covers</MenuItem>
                    </Menu>

                    {/* Actions Section */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: "1rem", width: "80%", justifyContent: "center" }}>
                        {/* Search Bar */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                backgroundColor: "#f1f1f1",
                                borderRadius: "4px",
                                padding: "6px 8px",
                                width: "60%",
                                maxWidth: "400px",
                            }}
                        >
                            <SearchOutlined sx={{ color: "gray", marginRight: "8px" }} />
                            <InputBase
                                sx={{ flex: 1, fontSize: "14px", color: "black" }}
                                placeholder="Search Product"
                                inputProps={{ "aria-label": "search product" }}
                            />
                        </Box>
                        <Divider orientation="vertical" variant="fullWidth" flexItem />
                        <Link href="#" sx={{ textDecoration: "none" }}>
                            <Typography sx={{ fontSize: "15px", color: "grey" }}>LOGIN</Typography>
                        </Link>
                        <Link href="#" sx={{ color: "grey" }}>
                            <FavoriteBorderOutlined />
                        </Link>
                        <Link href="#" sx={{ color: "grey" }}>
                            <ShoppingBagOutlined />
                        </Link>
                    </Box>


                </Box>
                <Box
                    sx={{
                        display: { xs: "flex", md: "none" },
                        alignItems: "center",
                        gap: "1rem",
                    }}
                >
                    <Link href="#" sx={{ color: "grey", display: "flex", alignItems: "center" }}>
                        <SearchOutlined />
                    </Link>
                    <Link href="#" sx={{ color: "grey", display: "flex", alignItems: "center" }}>
                        <FavoriteBorderOutlined />
                    </Link>
                    <Link href="#" sx={{ color: "grey", display: "flex", alignItems: "center" }}>
                        <ShoppingBagOutlined />
                    </Link>
                </Box>

                {/* Actions Section */}

                {/* Hamburger Menu (visible on small screens) */}
                {/* <IconButton
                    onClick={toggleDrawer}
                    sx={{
                        color: "black",
                        display: { xs: "block", md: "none" }, // Hidden on medium+ screens, visible on small
                    }}
                >
                    <MenuIcon />
                </IconButton> */}

                {/* Drawer for Mobile Menu */}
                <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
                    <Box
                        sx={{
                            width: "75vw",
                            backgroundColor: "black",
                            color: "white",
                            height: "100%",
                            p: 3,
                        }}
                    >
                        {/* Mobile Menu Items */}
                        <List>
                            <ListItem component="a" href="/about">
                                <ListItemText primary="About" />
                            </ListItem>
                            <ListItem component="a" href="/services">
                                <ListItemText primary="Services" />
                            </ListItem>
                            <ListItem component="a" href="/contact">
                                <ListItemText primary="Contact" />
                            </ListItem>
                            <Divider sx={{ backgroundColor: "white", my: 2 }} />
                            <ListItem>
                                <PhoneIcon sx={{ mr: 1 }} />
                                <ListItemText primary="+91-9820192970" />
                            </ListItem>
                            <ListItem>
                                <EmailIcon sx={{ mr: 1 }} />
                                <ListItemText primary="chetan@tathastu.global" />
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            </Toolbar>
        </AppBar >
    );
};

export default Navbar;
