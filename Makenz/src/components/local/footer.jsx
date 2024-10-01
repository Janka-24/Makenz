import logo from '@/assets/logo.png';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate();

    return (
        <footer className="relative flex flex-col lg:flex-row border-t-2 border-white items-center justify-between w-[90%] mx-auto h-auto lg:h-[30vh] text-green-600 overflow-hidden z-10">
            {/* Boule de shadow responsive */}
            <div className="
                absolute 
                w-[20vw] h-[5px] 
                left-1/2 transform -translate-x-1/2 
                bottom-[-55vh] 
                bg-[rgb(143,0,0)] 
                shadow-[0px_0px_150px_300px_rgba(143,0,0,0.8)] 
                z-0 
                sm:shadow-[0px_0px_180px_320px_rgba(143,0,0,0.8)] 
                md:shadow-[0px_0px_200px_350px_rgba(143,0,0,0.8)] 
                lg:shadow-[0px_0px_250px_400px_rgba(143,0,0,0.8)] 
                xl:shadow-[0px_0px_300px_500px_rgba(143,0,0,0.8)] 
            " />

            <div className='w-full lg:w-2/6 flex justify-center items-center p-5 flex-col'>
                <img
                    src={logo}
                    alt="logo"
                    className="w-1/4 object-contain cursor-pointer"
                    onClick={() => navigate('/')}
                />
                <h3 className='font-display text-3xl font-bold text-white lg:text-4xl'>makenz.ch</h3>
                <span className='font-display text-white text-sm'>slogan slogan</span>
            </div>

            <div className='w-full lg:w-2/6 h-full flex justify-center gap-5 items-start p-5 flex-col mt-5'>
                <h3 className='font-display text-2xl font-bold text-white'>Suivez moi sur</h3>
                <div className='flex flex-col items-start justify-evenly w-full h-full gap-2'>
                    <a href="#" className='text-sm text-white'>Facebook</a>
                    <a href="#" className='text-sm text-white'>Instagram</a>
                    <a href="#" className='text-sm text-white'>TikTok</a>
                </div>
            </div>

            <div className='w-full lg:w-2/6 h-full flex justify-center gap-5 items-start p-5 flex-col mt-5'>
                <h3 className='font-display text-2xl font-bold text-white'>Liens utiles</h3>
                <div className='flex flex-col items-start justify-evenly w-full h-full gap-2'>
                    <a href="/about" className='text-sm text-white'>À propos de moi</a>
                    <a href="/reservation" className='text-sm text-white'>Réservation</a>
                    <a href="/polituq" className='text-sm text-white'>Politique de confidentialité</a>
                </div>
            </div>
        </footer>
    );
}
