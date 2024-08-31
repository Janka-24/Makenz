import logo from '@/assets/logo.png'

export default function Header() {
    return (
        <header className="flex items-center justify-between bg-black w-full h-16 lg:h-28 text-green-600">
            <div className="w-1/2 md:w-1/3 h-full flex items-center p-4">
                <img src={logo} alt="logo" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="w-1/2 md:w-1/3 h-full flex items-center justify-end p-4">
                <button className="text-sm md:text-base lg:text-lg">
                    Burger
                </button>
            </div>
        </header>
    );
}
