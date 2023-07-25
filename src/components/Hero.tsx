
export function Hero() {

    return (
        <main className="text-white min-h-[80vh] flex flex-col items-center justify-center p-[14px] mx-768:min-h-[60vh]" data-aos="fade-up" data-aos-delay="400">
            <h1 className="uppercase text-center leading-[150%] max-w-[940px] text-[46px] mx-768:text-[34px] mx-768:py-0 mx-768:px-[14px] mx-768:w-full mx-480:text-[24px]">estilo é um reflexo da sua atitude e sua personalidade.</h1>
            <p className="text-center my-[14px] mx-0 mx-768:text-[14px]">Horário de funcionamento: 09:00 ás 19:00</p>
            <a href="https://wa.me//5588996286530?text=Quero%20fazer%20um%20agendamento!" target="_blank" className="py-[14px] px-7 bg-redNormal border-0 text-[18px] font-medium my-[14px] mx-0 hover:animate-scaleButton">Agendar Horário</a>
        </main>
    );
}