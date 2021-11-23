import * as React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image'
import Link from 'next/link'


import NavBar from '../components/NavBar';

// mui imports
import Typography from '@mui/material/Typography';

export default function Home() {

  return (
    <main>
      {/* Navbar */}
      <NavBar />

      {/* Banner */}
      <div className="mt-52 ml-5 mr-5 md:flex">
        <Image
          src="/assets/landing/puppy.jpg"
          alt="Picture of a person holding a puppy"
          width={640}
          height={427}
        />

        <div className="ml-10 mt-20">
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Book an appointment today for best Health care of your furry friend! 🐾
          </Typography>
          <div className="flex justify-center">
            <Link href="/services">
              <Button variant="contained" className="mt-5 justify-self-center	" size="large">Book a Service</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>

  );
}

