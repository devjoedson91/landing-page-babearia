
export function Maps() {

    return (
        <>
            <div className="bg-whiteNormal text-blackNormal flex flex-col items-center justify-center py-14 px-4">
                <h2 className="uppercase text-center text-[42px] mb-4">Venha conhecer</h2>
            </div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126866.35736028019!2d-39.4428416!3d-6.4487424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a2fb293a1dfb0b%3A0x776460eecb072fd6!2sS%C3%A3o%20Pedro%20do%20Norte%2C%20Juc%C3%A1s%20-%20CE%2C%2063580-000!5e0!3m2!1spt-BR!2sbr!4v1690313779507!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="450" 
                style={{border: 0}} 
                loading="lazy">
                
            </iframe>
        </>
    );
}