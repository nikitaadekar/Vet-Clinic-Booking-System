import * as React from 'react';
import Link from 'next/link'

// mui imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function NavBar() {
    return (

        <Box sx={{ flexGrow: 1 }}>
            
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" className="font-serif" component="div" sx={{ flexGrow: 1 }}>
                        Healthy 🐾
                        <Link href="/">
                        <Button className="ml-10" color="inherit" >Home</Button>
                        </Link>
                        <Link href="/services">
                         <Button className="ml-10" color="inherit">Services</Button>
                        </Link>
                    </Typography>
                    <Link href="/login">
                    <Button className="mr-10" color="inherit">Login</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
