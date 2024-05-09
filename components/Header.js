import React, { useState } from "react";
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
const Header = () => {
    const router = useRouter();

    const [value, setValue] = useState(1);
    const handleChange = (e, val) => {
        setValue(val);
        if (val == 0) {
            router.push("/books");
        }
        else if (val == 1) {
            router.push("/");
        }
        else if (val == 2) {
            router.push("/books/add");
        }
    };

    return <AppBar position="sticky" sx={{ bgcolor: "#9CAF88" }}>
        <Toolbar>
            <FilterVintageIcon sx={{ fontSize: "30px", marginRight: "10px" }}></FilterVintageIcon>
            <Box display="flex" margin={"auto"}>
                <Tabs onChange={handleChange} value={value} textColor="inherit">
                    <Tab label={<Typography variant="h6" fontWeight="bold">Home</Typography>} />
                    <Tab label={<Typography variant="h6" fontWeight="bold">Favorite</Typography>} />
                    <Tab label={<Typography variant="h6" fontWeight="bold">Add book</Typography>} />
                </Tabs>
            </Box>
        </Toolbar>
    </AppBar>
};

export default Header;