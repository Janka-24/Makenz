import { useState } from 'react';

export default function Reservation() {
    const [selectedHour, setSelectedHour] = useState(null); 

    const handleCardClick = (heure) => {
        if (selectedHour === heure) {
            setSelectedHour(null); 
        } else {
            setSelectedHour(heure); 
        }
    };

    return (
        <main className='flex flex-col items-center gap-8 flex-wrap mb-5'>
            <section className='flex flex-col items-start gap-8 flex-wrap pt-4 h-fit w-[85vw]'>
                <h1 className='text-white relative self-start font-bold text-2xl lg:text-4xl'>Réservation</h1>
                <div className='h-fit w-full flex flex-col lg:flex-row justify-around gap-8 lg:flex-wrap'>
                    <div className='lg:w-1/2 flex flex-col gap-20 h-48'>
                        <div className='h-full flex flex-col justify-evenly items-center'>
                            <h3 className='text-white relative self-start font-bold text-lg lg:text-2xl'>Choisissez une date: </h3>
                            <input
                                type="date"
                                name="datePicker"
                                id="datePicker"
                                placeholder='Choisissez une date'
                                className="lg:w-[70vw] xl:w-3/4 lg:h-16 lg:text-xl h-1/4 pl-8 bg-black text-white w-full rounded-md focus:outline-none focus:text-white shadow-sm ring-1 ring-inset ring-opacity-30 ring-gray-300 appearance-none"
                            />
                        </div>
                    </div>

                    <div className='h-2/4 lg:w-1/2 flex flex-col justify-evenly gap-8'>
                        <h3 className='text-white relative self-start font-bold text-lg lg:text-2xl'>Créneau disponible(s) pour cette date:</h3>
                        <div id='hoursContainer' className='flex flex-wrap items-center justify-evenly gap-5 h-fit'>
                            {["09:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30", "17:30"].map((heure, index) => (
                                <AvailableCard
                                    key={index}
                                    heure={heure}
                                    isSelected={selectedHour === heure}
                                    onClick={() => handleCardClick(heure)}
                                />
                            ))}
                        </div>
                        <button className='bg-custom text-white w-full min-h-10 rounded font-semibold flex items-center justify-center lg:min-w-96 lg:min-h-16 lg:text-xl xl:min-w-72 xl:min-h-14 xl:text-lg self-end'>
                            Réserver
                        </button>
                    </div>
                </div>
            </section>
            <Faq />

        </main>
    );
}

const AvailableCard = ({ heure, isSelected, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`lg:text-2xl lg:w-1/4 lg:h-16 w-1/4 h-10 rounded-md border-0 py-1.5 text-white shadow-sm flex items-center justify-evenly font-extraligth text-sm ${isSelected ? 'bg-custom' : 'ring-1 ring-inset ring-opacity-30 ring-gray-300'
                }`}
        >
            <span>{heure}</span>
        </div>
    );
};

const Faq = () => {
    return (
        <section className='flex flex-col items-center pt-4 h-fit w-fit m-3 p-2'>
            <h3 className='text-white self-start font-bold text-2xl h-fit mb-4'>Questions ? </h3>
            <div className='text-white text-lg h-full w-full flex flex-col justify-evenly gap-8 font-light'>
                <div><span>📞: 078 250 30 92</span></div>
                <span className='underline'>Paiement uniquement sur place</span>
                <span>Merci de me contacter en cas d'annulation de la réservation.</span>
            </div>
        </section>
    );
};
