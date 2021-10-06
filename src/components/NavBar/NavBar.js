import React from 'react'
import {
    AppBar,
    Box,
    Toolbar,
    IconButton
} from '@mui/material';


export default function NavBar({
    history,
    children
}) {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            onClick={() => history.push('/')}
                        >
                            <p>หน้าหลัก</p>
                        </IconButton>
                        <IconButton
                            color="inherit"
                            onClick={() => {
                                const win = window.open("/report", "_blank");
                                win.focus();
                            }}
                        >
                            <p>ดูรายงาน</p>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
            {children}
        </div>
    )
}
