import Image from "next/image";
import { InstagramLogo, FacebookLogo, TwitterLogo } from "phosphor-react";
import Logo from "../assets/logo.svg";
import WhatsappLogo from "../assets/whatssapp.svg";

export function Footer() {

    return (
        <>
            <footer className="flex flex-col items-center justify-center py-14 px-0 gap-6">
                <div className="flex gap-2">
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
                <div>
                    <Image 
                        src={Logo}
                        alt="logo"
                    />
                </div>
                <p>Copyright 2023 | Dev Barbearia - Todos os direitos reservados</p>
            </footer>

            <a 
                href="https://wa.me//5588996286530?text=Quero%20fazer%20um%20agendamento!" 
                target="_blank" 
                className="fixed bottom-4 right-6 z-[99] group"
                data-aos="zoom-in-up"
                data-aos-delay="400"
            >
                <Image 
                    src={WhatsappLogo}
                    alt="whatsapp logo"
                    className="max-w-[74px] transition duration-[0.4s] hover:scale-[1.1] mx-768:max-w-[64px]"
                />
                <span className="w-32 top-2 -left-[144px] p-2 rounded-lg text-center opacity-0 transition-opacity duration-[0.4s] bg-blackNormal text-whiteNormal invisible absolute group-hover:visible group-hover:opacity-100">Agende seu horário</span>
            </a>
        </>
    );
}