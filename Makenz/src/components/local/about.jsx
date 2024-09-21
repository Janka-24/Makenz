import saloon from '@/assets/saloon.jpg';
import barbing2 from '@/assets/barbing2.jpg';
import logo from '@/assets/logo.png';


export default function About() {
    return (
        <main className='flex flex-col items-center gap-10'>

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
                className="h-fill w-[90%] flex flex-col items-center gap-24 relative overflow-hidden" // Ajoutez overflow-hidden
                style={{
                    backgroundImage: `url(${logo})`,
                    backgroundSize: 'cover', // Couvre la section
                    backgroundPosition: 'center', // Positionnez l'image à droite
                    width: '100%', // Assurez-vous que la section prend toute la largeur
                }}
            >
                <div className="relative z-10 text-center"> {/* Conteneur pour le texte */}
                    <h2 className="font-display text-7xl font-bold text-white sm:text-9xl"
                        style={{ textDecorationSkipInk: 'none' }}>MAKENZ</h2>
                    <p className="text-white text-justify tracking-wide font-thin sm:text-2xl text-xl">
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                        Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte.
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                    </p>
                </div>
            </section>



            <section className="h-screen w-[90%] flex flex-row justify-around items-center gap-20">
                <div className="w-full h-full flex flex-col items-center lg:w-1/2">
                    <h1 className="font-display text-center text-3xl font-bold text-white self-start lg:text-4xl">Parcours</h1>
                    <div className="relative w-[4px] h-3/4 bg-gradient-to-b from-transparent to-white lg:w-[3px]">
                        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
                            <div className="relative w-8 h-8 bg-white rounded-full ring-2 ring-white ring-offset-4 ring-offset-black lg:w-10 lg:h-10"></div>
                            <p className="absolute left-16 top-1/2 transform -translate-y-1/2 text-white z-10 text-base sm:text-lg lg:text-xl">Solopreneur</p>
                            <p className="w-[20vw] absolute left-16 transform text-white font-thin z-10 text-sm sm:text-base lg:text-lg">2018 - 2019</p>
                        </div>

                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="relative w-8 h-8 bg-white rounded-full ring-2 ring-white ring-offset-4 ring-offset-black lg:w-10 lg:h-10"></div>
                            <p className="absolute left-16 top-1/2 transform -translate-y-1/2 text-white z-10 text-base sm:text-lg lg:text-xl">LifeStyle</p>
                            <p className="w-[20vw] absolute left-16 transform text-white font-thin z-10 text-sm sm:text-base lg:text-lg">2020 - 2022</p>
                        </div>

                        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2">
                            <div className="relative w-8 h-8 bg-orange-600 rounded-full ring-2 ring-white ring-offset-4 ring-offset-black lg:w-10 lg:h-10"></div>
                            <p className="absolute left-16 top-1/2 transform -translate-y-1/2 text-white z-10 text-base sm:text-lg lg:text-xl">CleanCut</p>
                            <p className="w-[20vw] absolute left-16 transform text-white font-thin z-10 text-sm sm:text-base lg:text-lg">2022 - 2025</p>
                        </div>
                    </div>
                </div>

                <img src={saloon} alt="makenz" className="rounded-lg w-1/4 h-fit hidden lg:flex" />
            </section>

        </main>
    );
}
