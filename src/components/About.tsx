import Image from "next/image";
import Images from "../assets/images.svg";

export function About() {

    return (
        <section className="overflow-hidden">
            <div className="flex items-center justify-center gap-[14px] pt-[34px] px-6 pb-[64px] mx-768:flex-col">
                <div className="flex-1" data-aos="zoom-in" data-aos-delay="100">
                    <Image src={Images} alt="imagens sobre a barbearia" className="max-w-[570px]" />
                </div>
                <div className="flex-1" data-aos="zoom-out-left" data-aos-delay="250">
                    <h2 className="text-[42px] mb-6 uppercase">Sobre</h2>
                    <p className="mb-[14px] leading-7">
                        Tailwind also allows for more complex screen definitions, which can be useful in certain situations. For example, if you wanted to define both the minimum and maximum size for your screens, you could do that like this:
                    </p>
                    <p>Horário de funcionamento: <strong>09:00</strong> as <strong>19:00</strong></p>
                </div>
            </div>
        </section>
    );
}