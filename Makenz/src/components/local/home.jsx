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
        <>
            <section className='h-full'>
                <div
                    className='h-full bg-cover bg-center flex flex-col items-center justify-between'
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
                        className="relative top-16 text-white text-5xl font-bold stroke-white"
                        text="Makenz"
                    />

                    <a href="#" className='relative bottom-56 bg-custom text-white w-60 h-10 rounded font-semibold flex items-center justify-center mt-14'>Prendre un rendez-vous</a>
                </div>
            </section>

            <section className='h-3/4 flex flex-col items-center justify-evenly mb-9'>



                <h2
                    className='text-white text-2xl font-bold underline decoration-custom decoration-8 underline-offset-0'
                    style={{ textDecorationSkipInk: 'none' }}
                >
                    Plus qu'une simple coupe
                </h2>


                <img
                    src={saloon}
                    alt="image"
                    className='max-w-72 rounded shadow-custom'
                    style={{ boxShadow: '0 10px 90px rgba(113, 72, 10, 0.4)' }}
                />

            </section>


            <section className='h-2/4 flex flex-col items-start pl-10 justify-around mb-9'>
                <h2 className='text-white text-3xl font-bold underline decoration-custom decoration-8 underline-offset-0' style={{ textDecorationSkipInk: 'none' }}>À propos                 </h2>
                <p className='text-white font-extralight w-4/6 whitespace-break-spaces'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte.</p>
                <a href="#" className='rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-opacity-30 ring-gray-300 min-w-48 min-h-10 flex items-center justify-evenly font-extraligth text-sm'><p>En savoir plus</p> <img src={arrowSvg} alt="->" className='min-w-6 max-w-9' /></a>
                <img src={barber} alt="barber things" className='min-w-56 absolute right-0 opacity-10' />
            </section>

            <section className='h-2/4 flex items-center justify-center'>
                <div className='h-full grid grid-cols-4 grid-rows-2 gap-4 max-w-96 bg-slate-900'>
                    <div className='col-span-4 row-span-1'>
                        <img
                            src={outils}
                            alt="image"
                            className='w-full h-full object-cover' />
                    </div>
                    <div className='col-span-2 row-span-1'>
                        <img
                            src={saloon}
                            alt="image"
                            className='w-full h-full object-cover'
                        />
                    </div>

                    <div className='col-span-2 row-span-2'>
                        <img
                            src={barbing2}
                            alt="image"
                            className='w-full h-full object-cover'

                        />
                    </div>

                    <div className='col-span-2 row-span-1'>
                        <img
                            src={barbing}
                            alt="image"
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </section>

            <section className='h-1/6 flex items-center justify-center'>
                <VelocityScroll
                    text="Makenz"
                    default_velocity={5}
                    className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
                />
            </section>
        </>
    );
}

