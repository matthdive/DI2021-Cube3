import React, {useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {

    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }



    return (
        <div>
            <nav className={`bg-gradient-to-b from-[#1D1D1D] ${showLinks ? "show-nav" : "hide-nav"}`}>
                <div className="container flex w-100 items-center p-3">

                    <a href="#" className="flex items-center">
                        <img src="/images/screaming-logo.webp" className="mr-3 h-14 sm:h-14" alt="Screaming Logo"/>
                        <span
                            className="self-center text-xl font-provoke whitespace-nowrap text-[#E84545]">Screaming</span>
                    </a>

                    <div className="ml-16 w-full flex justify-between">

                        <ul className={`flex flex-col justify-center items-center fixed w-[100vw] lg:relative bottom-0 right-0 h-screen  lg:h-12 lg:absolute lg:flex-row p-2 bg-[#1D1D1D] lg:bg-transparent lg:w-2/5 lg:justify-between`}>
                            <li className="navbar-item elements lg:text-sm  text-white block p-1.5 lg:p-0 lg:mb-0 mb-8 text-[4vw]"><a href="#">Accueil</a></li>
                            <li className="navbar-item elements lg:text-sm text-white block p-1.5 lg:p-0 lg:mb-0 mb-8 text-[4vw]"><a href="#">Films</a></li>
                            <li className="navbar-item elements lg:text-sm text-white block p-1.5 lg:p-0 lg:mb-0 mb-8 text-[4vw]"><a href="#">Séries</a></li>
                            <li className="navbar-item elements lg:text-sm text-white block p-1.5 lg:p-0 lg:mb-0 mb-8 text-[4vw]"><a href="#">Nouveautés</a></li>
                            <li className="navbar-item elements lg:text-sm text-white block p-1.5  lg:p-0  lg:mb-0 text-[4vw]"><a href="#">Ma liste</a></li>
                        </ul>



                    <button className="custom-pointer block absolute right-4 top-6 lg:hidden h-[30px]" onClick={handleShowLinks}>
                        {/*<img src="/icons/hamburger-menu.svg" className="w-7 relative right-0 block" alt=""/>*/}
                        <span className="burger-bar"></span>
                    </button>


                    </div>


                </div>
            </nav>

            <Outlet/>

        </div>
    )
}



export default Layout;