import * as React from 'react';
import Image from 'next/image'
import { useState } from 'react';

import NavBar from '../../components/NavBar';

// mui imports
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';



const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


export default function Services() {
    const [selectedService, setSelectedService] = useState(0);



    const [services, setServices] = useState([
        {
            id: 1,
            title: "service1",
            cost: 20,
            description: "I am a service 1"
        },
        {
            id: 2,
            title: "service2",
            cost: 30,
            description: "I am a service 2"
        },
        {
            id: 3,
            title: "service3",
            cost: 40,
            description: "I am a service 3"
        }

    ]);


    return (
        <main>
            {/* Navbar */}
            <NavBar />
            <Typography variant="h5" className="mt-20 ml-5" component="div" sx={{ flexGrow: 1 }}>
                Book a service 🐾
            </Typography>

            {/* Service cards */}
            <div className="md:flex">
                {services.map((service, i) => {
                    return (
                        <Card className="ml-5 mt-5" onClick={() => setSelectedService(service.id)} style={{ background: service.id == selectedService ? '#87CEEB' : 'white' }} sx={{ maxWidth: 275 }}>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    Service: {service.title}
                                </Typography>
                                <Typography variant="body2">
                                    Description: {service.description}
                                </Typography>
                                <Typography variant="body1">
                                    Cost:$ {service.cost}
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                })
                }
            </div>

            <div className="flex flex-col max-w-xs 	">
                {/* Booking form */}
                <Typography variant="h6" className="mt-20 ml-5 " component="div" sx={{ flexGrow: 1 }}>
                    Booking Details
                </Typography>

                <TextField
                    id="Name"
                    label="Full Name"
                    variant="standard"
                    className="ml-5 mt-2"
                />

                <TextField
                    id="Phone Number"
                    label="Phone Number"
                    variant="standard"
                    className="ml-5 mt-3"
                    type="number"
                />

                <TextField
                    id="email"
                    label="Email"
                    variant="standard"
                    className="ml-5 mt-3"
                />

                <TextField
                    id="pet_name"
                    label="Pet name"
                    variant="standard"
                    className="ml-5 mt-3"
                />

                {/* Pet Type */}
                <Box sx={{ maxWidth: 120 }} className="ml-5 mt-4">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Pet type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Pet type"
                        >
                            <MenuItem value={"dog"}>Dog</MenuItem>
                            <MenuItem value={"cat"}>Cat</MenuItem>
                            <MenuItem value={"rabbit"}>Rabbit</MenuItem>
                            <MenuItem value={"other"}>Otherw</MenuItem>

                        </Select>
                    </FormControl>
                </Box>

                {/* Pet Age by categories */}
                <FormControl fullWidth sx={{ maxWidth: 300 }} className="ml-5 mt-4">
                    <InputLabel id="demo-simple-select-label">Pet Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Pet Age"

                    >
                        <MenuItem value={"< 0.5"}>Less than 6 months</MenuItem>
                        <MenuItem value={"0.5-2"}>Between 6 months and 2 years</MenuItem>
                        <MenuItem value={"2-10"}>Between 2 years and 10 years</MenuItem>
                        <MenuItem value={"10+"}>10 years and older</MenuItem>

                    </Select>
                </FormControl>


            </div>

            <Button variant="contained" size="large" className="mb-20 mt-10 ml-40">Book Now</Button>

        </main>

    );
}

