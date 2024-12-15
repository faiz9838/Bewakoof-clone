import { AppBar, Container, Typography, Box, Link } from '@mui/material';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
function Header() {
    return (
        <AppBar sx={{ background: "#EEEEEE", padding: "10px", boxShadow: "none" }}>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    boxShadow: "none"
                }}
            >
                {/* First Row of Links */}
                <Box sx={{ display: "flex", gap: "16px" }}>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                        <Typography sx={{ fontSize: "12px", color: "grey", }}>Offers</Typography>
                    </Link>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                        <Typography sx={{ fontSize: "12px", color: "grey" }}>Fanbook</Typography>
                    </Link>
                    <Link href="#" sx={{ textDecoration: "none", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "3px", }}>
                        <PhoneAndroidOutlinedIcon fontSize="small" sx={{ fontSize: "15px", color: "grey" }} /> <Typography sx={{ fontSize: "12px", color: "grey" }}>Download App</Typography>
                    </Link>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                        <Typography sx={{ fontSize: "12px", color: "grey" }}>Find a store near me</Typography>
                    </Link>
                </Box>

                {/* Second Row of Links */}
                <Box sx={{ display: "flex", gap: "16px" }}>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                        <Typography sx={{ fontSize: "12px", color: "grey" }}>Contact Us</Typography>
                    </Link>
                    <Link href="#" sx={{ textDecoration: "none" }}>
                        <Typography sx={{ fontSize: "12px", color: "grey" }}>Track Order</Typography>
                    </Link>
                </Box>
            </Container>
        </AppBar>
    );
}

export default Header;
