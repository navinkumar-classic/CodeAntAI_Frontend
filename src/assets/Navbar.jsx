import Codeantlogo from "./icons/Codeantlogo";
import { useState } from 'react';
import InnerNavbar from "./InnerNavbar";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return ( 
        <>
            <div class = "hidden md:fixed w-[225px] md:flex md:flex-col md:h-screen">
                <div class = "pt-5 px-4">
                    <Codeantlogo/>
                </div>
                <div class = "flex flex-col md:justify-between h-full">
                    <InnerNavbar/>     
                </div>  
                           
            </div>

            <div class = "relative md:hidden w-full flex flex-col">
                <div class = "z-20 bg-white flex flex-row justify-between">
                    <div class = "py-5 px-4">
                        <Codeantlogo/>
                    </div>  
                    <div onClick={toggleNavbar} style={{ color: "inherit" }} class = "cursor-pointer">
                        {isOpen ? (<div class = "text-5xl py-1 px-3">×</div>): (<div class = "text-3xl py-3 px-3">☰</div>)}
                    </div>    
                </div>
                {isOpen && (
                    <div class = "top-full absolute bg-white w-full z-50 border-b border-[rgba(233,234,235,1)] shadow-sm">
                        <InnerNavbar/>     
                    </div>  
                )}       
                {isOpen && (
                    <div class = "top-0 left-0 h-screen w-full bg-[rgba(0,0,0,0.3)] z-0 fixed"></div>  
                )}  
            </div>
        </>
     );
}

export default Navbar;