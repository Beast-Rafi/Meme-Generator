import logo from "../assets/Logo.png"
export default function NavBar() {
    return (
        <>
            <nav className="flex justify-start align-middle p-2 bg-gradient-to-r from-purple-800 to-sky-500 h-12">
                <img className="h-8" src={logo}/>
            </nav>
        </>
    )
}
