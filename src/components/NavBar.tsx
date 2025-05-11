import { useState } from "react";

const NavBar = () => {
    const navTopic: [string, string][] = [
        ["Inicio", "#"],
        ["Projetos", "#projetos"],
        ["Habilidades", "#habilidades"],
        ["Experiências", "#experiencias"],
        ["Contato", "#contato"],
    ];

    const [open, setOpen] = useState(false);

    return (
        <div className="shadow-lg w-full fixed top-0 left-0 z-[9999]">
            <div className="lg:flex items-center justify-between bg-gray-200 py-4 lg:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
                    <span className="text-3xl text-indigo-600 mr-1 pt-1">
                        <ion-icon name="desktop-outline"></ion-icon>
                    </span>
                    João Calsavara
                </div>
                <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden">
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul className={`lg:flex lg:items-center lg:pb-0 
                pb-12 absolute lg:static bg-gray-200 lg:z-auto z-[-1]
                left-0 lg:w-auto w-full lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] opacity-0'} lg:opacity-100 opacity-0`}>
                    {navTopic.map((topic) => (
                        <li key={topic[1]} className="lg:ml-8 text-xl lg:my-0 my-7">
                            <a href={topic[1]} className="text-gray-800 hover:text-gray-400 duration-500">{topic[0]}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;