import { AppBar, Container, Box, Link, Typography, InputBase, Divider, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { FavoriteBorderOutlined, ShoppingBagOutlined } from '@mui/icons-material';
import DesktopLogo from "../assets/logo/ic-desktop-bwkf-trademark-logo.svg";
import { useState } from 'react';

function Navbar() {
    const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
    const [menDropdownAnchor, setMenDropdownAnchor] = useState(null);
    const [womenDropdownAnchor, setWomenDropdownAnchor] = useState(null);
    const [coversDropdownAnchor, setCoversDropdownAnchor] = useState(null);

    const isMobileMenuOpen = Boolean(mobileMenuAnchor);
    const isMenDropdownOpen = Boolean(menDropdownAnchor);
    const isWomenDropdownOpen = Boolean(womenDropdownAnchor);
    const isCoversDropdownOpen = Boolean(coversDropdownAnchor);

    const handleMobileMenuOpen = (event) => {
        setMobileMenuAnchor(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMenuAnchor(null);
    };

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

    return (
        <AppBar sx={{ background: "white", padding: "8px", marginTop: "2.5rem", boxShadow: "none" }}>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                {/* Logo */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Link href="/" sx={{ textDecoration: "none" }}>
                        <img width={180} src={DesktopLogo} alt="Logo" />
                    </Link>
                </Box>

                {/* Hamburger Menu for Mobile */}
                <IconButton
                    sx={{ display: { xs: "flex", md: "none" }, color: "black" }}
                    onClick={handleMobileMenuOpen}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    anchorEl={mobileMenuAnchor}
                    open={isMobileMenuOpen}
                    onClose={handleMobileMenuClose}
                    sx={{ display: { xs: "block", md: "none" } }}
                >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Link href="/" sx={{ textDecoration: "none" }}>
                            <img width={180} src={DesktopLogo} alt="Logo" />
                        </Link>
                    </Box>
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: "24px" }}>
                        <Typography
                            sx={{ fontSize: "14px", color: "grey", cursor: "pointer" }}
                            onClick={handleMenDropdownOpen}
                        >
                            MEN
                        </Typography>
                        <Menu
                            anchorEl={menDropdownAnchor}
                            open={isMenDropdownOpen}
                            onClose={handleMenDropdownClose}
                        >
                            <MenuItem onClick={handleMenDropdownClose}>Shirts</MenuItem>
                            <MenuItem onClick={handleMenDropdownClose}>Pants</MenuItem>
                            <MenuItem onClick={handleMenDropdownClose}>Shoes</MenuItem>
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
                    </Box>

                    {/* Actions Section */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        {/* Search Bar */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                backgroundColor: "#f1f1f1",
                                borderRadius: "4px",
                                padding: "6px 8px",
                                width: "100%",
                                maxWidth: "400px",
                            }}
                        >
                            <SearchOutlinedIcon sx={{ color: "gray", marginRight: "8px" }} />
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
                </Menu>

                {/* Navigation Links */}
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: "24px" }}>
                    <Typography
                        sx={{ fontSize: "14px", color: "grey", cursor: "pointer" }}
                        onClick={handleMenDropdownOpen}
                    >
                        MEN
                    </Typography>
                    <Menu
                        anchorEl={menDropdownAnchor}
                        open={isMenDropdownOpen}
                        onClose={handleMenDropdownClose}
                    >
                        <MenuItem onClick={handleMenDropdownClose}>Shirts</MenuItem>
                        <MenuItem onClick={handleMenDropdownClose}>Pants</MenuItem>
                        <MenuItem onClick={handleMenDropdownClose}>Shoes</MenuItem>
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
                </Box>

                {/* Actions Section */}
                <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    {/* Search Bar */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "#f1f1f1",
                            borderRadius: "4px",
                            padding: "6px 8px",
                            width: "100%",
                            maxWidth: "400px",
                        }}
                    >
                        <SearchOutlinedIcon sx={{ color: "gray", marginRight: "8px" }} />
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
            </Container>
        </AppBar>
    );
}

export default Navbar;
