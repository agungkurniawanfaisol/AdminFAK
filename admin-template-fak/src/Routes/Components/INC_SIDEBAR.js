/* eslint-disable jsx-a11y/alt-text */

import React, { useState } from 'react'
import { BiRightArrow, BiFoodMenu } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';


const Menus = [
    { title: "Dashboard", src: "Chart_fill", url: '/' },
    { title: "Login", src: "Chat", url: "/Login" },
    { title: "Components", src: "User", gap: true, url: '/Components' },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
];

const INC_SIDEBAR = (props) => {
    const [open, setOpen] = useState(true);
    const Navigate = useNavigate()

    // console.log(window.innerWidth)
    // alert(window.innerWidth)

    if (window.innerWidth < 500) {
        return <div />
    }

    return (
        <div
            className={`${open ? "w-72" : "w-16"} bg-sky-800 h-screen p-5  pt-8 relative duration-300 dark:bg-gray-900 `}
        >
            <button
                className={`absolute bg-white cursor-pointer -right-3 top-9  border-sky-800
           border-2 rounded-full  ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)}
            >
                <BiRightArrow className="text-lg" />
            </button>
            <div className="flex gap-x-4 items-center">
                <img
                    src="https://i1.sndcdn.com/artworks-000141268629-7qc9bz-t240x240.jpg"
                    className={`cursor-pointer rounded-full duration-500 ${open && "rotate-[360deg] w-16 h-16 "}`}
                />
                <h1
                    className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}
                >
                    Designer
                </h1>
            </div>
            <ul className="pt-6">
                {Menus.map((Menu, index) => (
                    <li
                        key={index}
                        className={`flex  rounded-md p-1 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
                    >
                        <button className="cursor-pointer hover:bg-white rounded-full p-0.5" onClick={() => Navigate(`${Menu.url}`)}>
                            <BiFoodMenu className="text-2xl" />
                        </button>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            {Menu.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default INC_SIDEBAR