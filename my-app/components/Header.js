import React, { useState } from "react";
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import { AppBar, Box, Tab, Tabs, Toolbar } from "@mui/material";
import { useRouter } from "next/router";
const Header = () => {
    const router = useRouter();

    const [value, setValue] = useState();
    const handleChange = (e, val) => {
        setValue(val);
        if (val == 0) {
            router.push("/");
        }
        else if (val == 1) {
            router.push("/books");
        }
    };

    return <AppBar position="sticky" sx={{bgcolor:"#9CAF88"}}>
        <Toolbar>
            <LaptopChromebookIcon sx={{ fontSize: "30px" }}></LaptopChromebookIcon>
            <Box display="flex" margin={"auto"}>
                <Tabs onChange={handleChange} value={value} textColor="inherit">
                    <Tab label="Home" />
                    <Tab label="All books" />
                </Tabs>
            </Box>
        </Toolbar>
    </AppBar>
};

export default Header;