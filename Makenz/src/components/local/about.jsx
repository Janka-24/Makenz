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
        <main className='flex flex-col items-center'>

            <section className='h-[75vh] w-full'>
                <div
                    className='h-full bg-cover bg-center flex flex-col justify-end items-center p-8'
                    style={{
                        backgroundImage: `linear-gradient(to bottom, 
            rgba(0, 0, 0, 1) 0%,          
            rgba(0, 0, 0, 0.4) 40%,       
            rgba(0, 0, 0, 0.6) 60%,
            rgba(0, 0, 0, 0.9) 80%,       
            rgba(0, 0, 0, 1) 100%),      
            url(${barbing2})`,
                    }}
                >
                </div>
            </section>

            <section className="h-fit w-[90%] flex flex-col items-center gap-10 bg-slate-900">
                <h2 className="font-display text-center text-7xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white sm:text-6xl md:leading-[5rem]"
                    style={{ textDecorationSkipInk: 'none' }}>MAKENZ               </h2>
                <p className="text-white text-justify font-thin"> Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte.Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte.Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. </p>
            </section>

            <section className="w-[90%] flex flex-col md:flex-row justify-between bg-slate-950">

                <ol class="relative border-s border-gray-200 dark:border-gray-700">
                    <li class="mb-3 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h3 class="text-lg font-semibold text-white">Solopreneur</h3>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                    </li>
                    <li class="mb-10 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h3 class="text-lg font-semibold text-white">LifeStyle</h3>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                    </li>
                    <li class="ms-4">
                        <div class="absolute w-3 h-3 bg-orange-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h3 class="text-lg font-semibold text-white">Clean Cut</h3>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                    </li>
                </ol>


            </section>







        </main>
    );
}


