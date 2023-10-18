'use client';

import {Navbar} from 'flowbite-react';
import Link from "next/link";
import Image from "next/image";

export default function SiteNavbar() {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand as={Link} href="https://www.nahbaste.com">
                <Image src="/logo.png" width={1024} height={1024}  alt="Nahbaste Logo" className="mr-3 h-10 w-10 sm:h-9"/>
                <span
                    className="self-center text-blue-950 whitespace-nowrap text-xl font-semibold dark:text-white">Nahuel Basterretche</span>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link as={Link} href="#">
                    About
                </Navbar.Link>
                <Navbar.Link href="#">Services</Navbar.Link>
                <Navbar.Link href="#">Pricing</Navbar.Link>
                <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}