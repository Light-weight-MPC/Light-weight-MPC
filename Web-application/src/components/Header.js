import React from "react";
import { Box, Typography } from "@mui/material";

import "../css/App.css"

/**
 * Defining the App Header
 */
export default function Header() {
    return (
        <div className="Header">
            <Box sx={{width: "inherit", pt: 1, pb: 1, display: "flex", flexDirection: "row"}}>
                <Box sx={{pl: "40%", width: "25%"}} >
                    <Typography variant="h4" color="#ec4335" sx={{pt: "5%", fontWeight: 'bold'}}>
                        Light-Weight MPC
                    </Typography>
                </Box>
                <Box sx={{pl: "30%"}}>
                    <img src={require("../img/small_logo.png")} alt="small_logo" width="45%"/>
                </Box>
            </Box>
        </div>
    );
}
