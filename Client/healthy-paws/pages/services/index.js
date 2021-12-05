import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link'

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
import { BookingService, ServicesService } from '../../services';



const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


export default function Services({ services }) {
    // init api
    const bookingService = new BookingService;

    // date error
    const [dateError, setDateError] = useState(false);

    // states for form
    const [selectedService, setSelectedService] = useState(0);
    const [selectedServiceName, setSelectedServiceName] = useState("");
    const [name, setName] = useState("");
    const [phNo, setPhNo] = useState("");
    const [email, setEmail] = useState("");
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petAge, setPetAge] = useState("");
    const [appointmentTime, setAppointmentTime] = useState("");

    // booking confirmed state
    const [bookingConfirmed, setBookingConfirmed] = useState(false);


    const addBooking = async () => {
        const data = {
            clientInformation: {
                clientName: name,
                clientPhone: phNo,
                petName: petName,
                petType: petType,
                clientEmail: email
            },
            serviceName: selectedServiceName,
            serviceId: selectedService,
            bookedTime: appointmentTime
        }
        try {
            const res = await bookingService.addBooking(data);
            console.log(res)
            setBookingConfirmed(true)
        } catch (e) {
            console.log(e);
        }
    }

    const selectService = (id, name) => {
        setSelectedService(id);
        setSelectedServiceName(name);
    }

    const checkAppointmentTime = (time) =>{
        // checking date and time
        const bookingTime = parseInt(time.slice(11,13));
        const todaysDate = new Date();
        const pickedDate = new Date(time);

        if((pickedDate > todaysDate) && (bookingTime >= 9 && bookingTime <= 17)){
            setAppointmentTime(time);
            setDateError(false);
        }else{
            setDateError(true);
        }

    }
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
                        <Card key={i} className="ml-5 mt-5" onClick={() => selectService(service._id, service.name)} style={{ background: service._id == selectedService ? '#87CEEB' : 'white' }} sx={{ maxWidth: 275 }}>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    Service: {service.name}
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <TextField
                    id="Phone Number"
                    label="Phone Number"
                    variant="standard"
                    className="ml-5 mt-3"
                    type="number"
                    value={phNo}
                    onChange={(e) => setPhNo(e.target.value)}

                />

                <TextField
                    id="email"
                    label="Email"
                    variant="standard"
                    className="ml-5 mt-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                />

                <TextField
                    id="pet_name"
                    label="Pet name"
                    variant="standard"
                    className="ml-5 mt-3"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}

                />

                {/* Pet Type */}
                <Box sx={{ maxWidth: 120 }} className="ml-5 mt-4">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Pet type</InputLabel>
                        <Select
                            value={petType}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Pet type"
                            onChange={(e) => setPetType(e.target.value)}

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
                        value={petAge}
                        onChange={(e) => setPetAge(e.target.value)}

                    >
                        <MenuItem value={"< 0.5"}>Less than 6 months</MenuItem>
                        <MenuItem value={"0.5-2"}>Between 6 months and 2 years</MenuItem>
                        <MenuItem value={"2-10"}>Between 2 years and 10 years</MenuItem>
                        <MenuItem value={"10+"}>10 years and older</MenuItem>

                    </Select>
                </FormControl>

                <TextField
                    id="datetime-local"
                    label="Appointment date and time"
                    type="datetime-local"
                    value={appointmentTime}
                    onChange={(e) => checkAppointmentTime(e.target.value)}
                    className="mt-4 ml-5"
                    sx={{ width: 250 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                {dateError && <h4 className="italic mt-4 ml-5 text-red-400">Date must be after today and time must be between 9 am to 5 pm!</h4>}
            </div>
                <Button variant="contained" onClick={addBooking} disabled={!(selectedService !== 0 && name && phNo && petAge && petType && email)} size="large" className="mt-10 mb-4 ml-40">Book Now</Button>

                {/* booking confirmed message */}
                { bookingConfirmed && <h2 className="italic ml-5 mb-20 text-green-400 font-bold">Your booking is confirmed! See you and your FurBaby Soon!</h2>}

        </main>

    );
}

export async function getServerSideProps(context) {
    const servicesService = new ServicesService;
    try {
        const res = (await servicesService.getServices());
        const services = res.data;
        return {
            props: {
                services: services
            }, // will be passed to the page component as props
        }
    } catch (e) {
        console.log(e);
        return {
            props: {}, // will be passed to the page component as props
        }
    }

}