import logo from '@/assets/logo.png';
import homeCover from '@/assets/homeCover.jpg';
import saloon from '@/assets/saloon.jpg';
import barber from '@/assets/barber.png';
import barbing from '@/assets/barbing.jpg';
import barbing2 from '@/assets/barbing2.jpg';
import outils from '@/assets/outils.jpg';
import arrowSvg from '@/assets/arrow-right-short.svg';
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import TypingAnimation from "@/components/magicui/typing-animation";

export default function Home() {
    return (
        <main className='flex flex-col gap-20'>

            <section className='h-screen'>
                <div
                    className='h-full bg-cover bg-center flex flex-col items-center justify-around'
                    style={{
                        backgroundImage: `linear-gradient(to bottom, 
            rgba(0, 0, 0, 1) 0%,          
            rgba(0, 0, 0, 0.4) 70%,       
            rgba(0, 0, 0, 0.8) 80%,
            rgba(0, 0, 0, 0.9) 90%,       
            rgba(0, 0, 0, 1) 100%),      
            url(${homeCover})`,
                    }}
                >
                    <TypingAnimation
                        className="text-white text-5xl font-bold stroke-white lg:text-8xl"
                        text="Makenz"
                    />
                    <a href="#" className='bg-custom text-white w-60 h-10 rounded font-semibold flex items-center justify-center lg:min-w-96 lg:min-h-16 lg:text-xl mt-16  xl:min-w-72 xl:min-h-14 xl:text-lg'>
                        Prendre un rendez-vous
                    </a>
                </div>
            </section>



            <section className='flex flex-col items-center gap-20 justify-evenly p-6'>
                <h2
                    className='text-white text-2xl font-bold underline decoration-custom decoration-8 underline-offset-0 sm:text-4xl lg:text-6xl'
                    style={{ textDecorationSkipInk: 'none' }}
                >
                    Plus qu'une simple coupe
                </h2>

                <img
                    src={saloon}
                    alt="saloon"
                    className='w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded shadow-custom'
                    style={{
                        boxShadow: '0 10px 90px rgba(113, 72, 10, 0.4)',
                        height: 'auto',
                        objectFit: 'cover'
                    }}
                />
            </section>


            <section className='flex flex-col items-start pl-6 lg:pl-40 gap-20'>
                <h2 className='text-white text-3xl font-bold underline decoration-custom decoration-8 underline-offset-0 lg:text-4xl' style={{ textDecorationSkipInk: 'none' }}>À propos                 </h2>
                <p className='text-white font-extralight w-4/6 whitespace-break-spaces lg:text-xl lg:w-2/6'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte.</p>
                <a href="#" className='rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-opacity-30 ring-gray-300 min-w-48 min-h-10 flex items-center justify-evenly font-extraligth text-sm'><p>En savoir plus</p> <img src={arrowSvg} alt="->" className='min-w-6 max-w-9' /></a>
                <img src={barber} alt="barber things" className='min-w-56 absolute right-0 opacity-10 -z-10' />
            </section>



            {/* <section className="flex items-center justify-center bg-slate-200 py-8">
                <div className="grid grid-cols-4 grid-rows-2 gap-4 max-w-4xl">
                    <div className="col-span-4 row-span-1">
                        <img
                            src={outils}
                            alt="Outils de coiffure"
                            className="object-cover"
                        />
                    </div>
                    <div className="col-span-2 row-span-1">
                        <img
                            src={saloon}
                            alt="Salon de coiffure"
                            className="object-cover"
                        />
                    </div>
                    <div className="col-span-2 row-span-2">
                        <img
                            src={barbing2}
                            alt="Coiffure en cours"
                            className="object-cover"

                        />
                    </div>
                    <div className="col-span-2 row-span-1">
                        <img
                            src={barbing}
                            alt="Outils de rasage"
                            className="object-cover"

                        />
                    </div>


                </div>
            </section> */}



            <section className="flex items-center justify-center h-[60vh] sm:h-[70vh] w-full p-4">
                <div className="grid grid-cols-12 gap-2 grid-rows-12 w-full max-w-4xl h-full sm:w-3/4 lg:w-3/4 md:w-5/6">
                    <div className="col-span-12 row-span-2">
                        <img
                            src={outils}
                            alt="Outils de rasage"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="col-span-6 row-span-5 bg-green-500">
                        <img
                            src={saloon}
                            alt="Outils de rasage"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="col-span-6 row-span-10 bg-yellow-500">
                        <img
                            src={barbing2}
                            alt="Outils de rasage"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="col-span-6 row-span-5 bg-orange-500">
                        <img
                            src={barbing}
                            alt="Outils de rasage"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>








            <section className='h-1/6 flex items-center justify-center sm:h-1/5 py-12 '>
                <VelocityScroll
                    text="Makenz"
                    default_velocity={18}
                    className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white sm:text-6xl md:leading-[5rem]"
                />
            </section>
        </main>
    );
}
