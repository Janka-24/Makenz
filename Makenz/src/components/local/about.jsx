import saloon from '@/assets/slnBarbing.jpg';
import saloonChair from '@/assets/saloon.jpg';
import barbing2 from '@/assets/barbing2.jpg';
import homeCover from '@/assets/homeCover.jpg';
import barber from '@/assets/barber.png';
import barbing from '@/assets/barbing.jpg';
import outils from '@/assets/outils.jpg';
import logo from '@/assets/logo.png';
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const images = [saloon, saloonChair, barbing2, homeCover, barber, barbing, outils, logo];


const firstRow = images.slice(0, images.length / 2);
const secondRow = images.slice(images.length / 2);


const ImageCard = ({ img }) => {
    return (
        <div
            className={cn(
                "relative w-[80vw] h-[50vh] md:w-[80vw] md:h-[60vh] lg:w-[30vw] lg:h-[40vh] cursor-pointer overflow-hidden border p-4",
                "border-none bg-black hover:bg-black"
            )}
        >
            <img className="w-full h-full object-cover" alt="" src={img} />
        </div>
    );
};



export default function About() {
    return (
        <main className='flex flex-col items-center gap-20'>

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

            <section
                className="h-fill w-[90%] flex flex-col items-center gap-24 relative overflow-hidden"
            >
                <div className="relative z-10 text-center flex flex-col items-center md:gap-16 gap-8">
                    <h2 className="font-display text-7xl font-bold text-white sm:text-9xl"
                        style={{ textDecorationSkipInk: 'none' }}>MAKENZ</h2>
                    <p className="text-white text-justify tracking-wide font-thin sm:text-2xl text-xl">
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                        Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte.
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                    </p>
                </div>
            </section>



            <section className="h-screen w-[90%] flex lg:flex-row flex-col justify-between items-center md:flex-row">
                <h1 className="font-display text-center text-3xl font-bold text-white self-start lg:text-4xl absolute">Parcours</h1>

                <div className="w-3/4 mr-10 flex flex-col hidden items-center justify-around md:hidden lg:flex">
                    <img src={saloon} alt="makenz" className="rounded-lg hidden lg:flex" />
                </div>



                <div className="lg:w-1/4 lg:h-3/4 flex flex-col justify-center items-start pl-8 w-full h-full md:w-2/4">
                    <div className="relative w-[4px] h-[70%] bg-gradient-to-b from-transparent to-white lg:w-[3px]">
                        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
                            <div className="relative w-8 h-8 bg-white rounded-full ring-2 ring-white ring-offset-4 ring-offset-black lg:w-10 lg:h-10"></div>
                            <p className="absolute left-16 top-1/2 transform -translate-y-1/2 text-white z-10 text-base sm:text-lg lg:text-xl">Solopreneur</p>
                            <p className="w-[20vw] absolute left-16 transform text-white font-thin z-10 text-sm sm:text-base lg:text-lg">2018 - 2019</p>
                        </div>

                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="relative w-8 h-8 bg-white rounded-full ring-2 ring-white ring-offset-4 ring-offset-black lg:w-10 lg:h-10"></div>
                            <p className="absolute left-16 top-1/2 transform -translate-y-1/2 text-white z-10 text-base sm:text-lg lg:text-xl">LifeStyle</p>
                            <p className="w-[20vw] absolute left-16 transform text-white font-thin z-10 text-sm sm:text-base lg:text-lg">2018 - 2019</p>
                        </div>

                        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2">
                            <div className="relative w-8 h-8 bg-orange-600 rounded-full ring-2 ring-white ring-offset-4 ring-offset-black lg:w-10 lg:h-10"></div>
                            <p className="absolute left-16 top-1/2 transform -translate-y-1/2 text-white z-10 text-base sm:text-lg lg:text-xl">CleanCut</p>
                            <p className="w-[20vw] absolute left-16 transform text-white font-thin z-10 text-sm sm:text-base lg:text-lg">2018 - 2019</p>
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex w-2/4 sm:flex justify-center items-center h-full lg:hidden">
                    <img src={saloon} alt="makenz" className="rounded-lg h-3/4 md:hidden" />
                    <img src={saloonChair} alt="makenz" className="rounded-full md:max-h-[70%] hidden md:flex" />
                </div>
            </section>


            <section className="relative w-[90%] flex flex-col items-start py-12 shadow-xl">
                <h1 className="font-display text-left text-3xl font-bold text-white z-20">Galerie</h1>

                <div className="flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-black md:shadow-xl">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {firstRow.map((img, index) => (
                            <ImageCard key={index} img={img} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:20s]">
                        {secondRow.map((img, index) => (
                            <ImageCard key={index} img={img} />
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
                </div>
            </section>



        </main>
    );
}
