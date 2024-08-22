export default function Header() {
    return (
        <header className="flex items-center justify-between bg-black w-full h-16 text-green-600">
            <div className="w-1/3 h-full flex items-center p-4">
                Logo
            </div>
            <div className="w-1/3 h-full flex items-center justify-end p-4">
                Burger
            </div>
        </header>
    );
}

