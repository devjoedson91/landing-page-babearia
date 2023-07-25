import Image from "next/image";
import Cut1 from "../assets/corte1.png";
import Cut2 from "../assets/corte2.png";
import Cut3 from "../assets/corte3.png";

export function Services() {

    return (
        <section className="bg-whiteNormal text-blackNormal flex flex-col items-center justify-center py-14 px-4">
            <div className="max-w-[1220px] my-0 mx-auto py-0 px-6">
                <h2 className="uppercase text-center text-[42px] mb-4">Serviços</h2>
                <p className="leading-7 mb-4 text-center max-w-3xl">You can also provide multiple ranges per screen. This is useful in situations where you have a sidebar navigation and want to maintain consistent content breakpoints, regardless of the navigation being visible or not</p>
            </div>

            <section className="flex justify-center items-center gap-4 pt-0 px-11 pb-9 mx-768:flex-col">
                <div 
                    className="flex-1 flex flex-col rounded-lg shadow-haircut overflow-hidden" 
                    data-aos="fade-up"
                    data-aos-delay="150"
                >
                    <Image 
                        src={Cut1}
                        alt="corte normal"
                        className="w-full max-w-[354px] transition duration-[0.2s] hover:scale-[1.2] hover:z-[1] mx-768:max-w-[740px]"
                    />
                    <div className="w-full flex justify-between p-4 bg-whiteNormal z-[99]">
                        <strong>Corte 1</strong>
                        <button className="bg-redNormal py-1 px-2 rounded-md border-0 text-white cursor-default">R$ 45,00</button>
                    </div>
                </div>
                <div 
                    className="flex-1 flex flex-col rounded-lg shadow-haircut overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay="250"
                >
                    <Image 
                        src={Cut2}
                        alt="corte normal"
                        className="w-full max-w-[354px] transition duration-[0.2s] hover:scale-[1.2] hover:z-[1] mx-768:max-w-[740px]"
                    />
                    <div className="w-full flex justify-between p-4 bg-whiteNormal z-[99]">
                        <strong>Corte 2</strong>
                        <button className="bg-redNormal py-1 px-2 rounded-md border-0 text-white cursor-default">R$ 45,00</button>
                    </div>
                </div>
                <div 
                    className="flex-1 flex flex-col rounded-lg shadow-haircut overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <Image 
                        src={Cut3}
                        alt="corte normal"
                        className="w-full max-w-[354px] transition duration-[0.2s] hover:scale-[1.2] hover:z-[1] mx-768:max-w-[740px]"
                    />
                    <div className="w-full flex justify-between p-4 bg-whiteNormal z-[99]">
                        <strong>Corte 3</strong>
                        <button className="bg-redNormal py-1 px-2 rounded-md border-0 text-white cursor-default">R$ 45,00</button>
                    </div>
                </div>
            </section>
        </section>
    );
}