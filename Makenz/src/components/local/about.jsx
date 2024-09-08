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

export default function About() {
    return (
        <main className='flex flex-col gap-20'>

            <section className='h-screen'>
                <div
                    className='h-full bg-cover bg-center flex flex-col items-start p-8 justify-start'
                    style={{
                        backgroundImage: `linear-gradient(to bottom, 
            rgba(0, 0, 0, 1) 0%,          
            rgba(0, 0, 0, 0.4) 40%,       
            rgba(0, 0, 0, 0.9) 50%,
            rgba(0, 0, 0, 1) 60%,       
            rgba(0, 0, 0, 1) 100%),      
            url(${barbing2})`,
                    }}
                >
                    <h2 className='text-white text-3xl font-bold underline decoration-custom decoration-8 underline-offset-0 lg:text-4xl' style={{ textDecorationSkipInk: 'none' }}>À propos                 </h2>
                    <h2 className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white sm:text-6xl md:leading-[5rem]"
                        style={{ textDecorationSkipInk: 'none' }}>MAKENZ               </h2>
                </div>
            </section>
        </main>
    );
}
