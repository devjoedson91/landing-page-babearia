import Image from "next/image";
import { InstagramLogo, FacebookLogo, TwitterLogo } from "phosphor-react";
import Logo from "../assets/logo.svg";
import { Hero } from "./Hero";

export function Header() {

    // ajeitar o hover dos icons

    return (
        <header>
            <nav className="flex items-center justify-between mx-768:w-full mx-768:flex-col mx-768:items-center mx-768:justify-center max-w-[1220px] my-0 mx-auto py-0 px-6">
                <div className="flex gap-[14px]" data-aos="fade-down">
                    <a href="#" className="hover:animate-translateY mx-768:mt-4">
                        <InstagramLogo color="#fff" size={32} />
                    </a>
                    <a href="#" className="hover:animate-translateY mx-768:mt-4">
                        <FacebookLogo color="#fff" size={32} />
                    </a>
                    <a href="#" className="hover:animate-translateY mx-768:mt-4">
                        <TwitterLogo color="#fff" size={32} />
                    </a>
                </div>

                <div className="flex items-center justify-center mt-[14px]" data-aos="fade-up" data-aos-delay="300">
                    <Image 
                        src={Logo}
                        alt="logo da barbearia" 
                        className="mx-768:mt-[46px] mx-768:w-[160px]" 
                        data-aos="flip-up"
                        data-aos-delay="300"
                        data-aos-duration="1500"
                    />
                </div>

                <div className="border-[1px] border-white py-2 px-6 rounded hover:border-redLight hover:bg-redLight transition duration-[0.8s] mx-768:hidden" data-aos="fade-down">
                    <a href="https://wa.me//5588996286530?text=Quero%20fazer%20um%20agendamento!">Agendar horário</a>
                </div>
            </nav>

            <Hero />
        </header>
    );
}