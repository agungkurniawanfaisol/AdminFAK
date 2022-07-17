import Exports from "Exports";
import React from "react";
import { BiBell } from "react-icons/bi";
import INC_TOGGLE_THEME from './INC_TOGGLE_THEME';

const INC_HEADER = (props) => {
    const { StateValue, ChangeHandleState } = props;
    const { VAL_TOGGLE_OPEN_MENU } = StateValue;

    return (
        <div>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img
                            src={`data:image/png;base64,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`}
                            className="mr-3 h-6 sm:h-9"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            FAK Admin Tailwind{" "}
                        </span>
                    </a>

                    <div className="relative hidden md:flex items-center ml-auto"></div>

                    <div className="flex border-l border-slate-200 ml-0.5 pl-1 dark:border-slate-800">
                        <INC_TOGGLE_THEME />
                        <button
                            className=" text-xs leading-5 font-semibold bg-slate-400/10 rounded-full py-1 px-2 flex items-center hover:bg-slate-400/20 dark:highlight-white/5 text-white bg-slate-800"
                            id="headlessui-menu-button-18"
                            type="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            v{Exports().VERSION_CODE}
                            <svg
                                width="6"
                                height="3"
                                className="overflow-visible"
                                aria-hidden="true"
                            />
                        </button>

                        {/* NOTIFIKASI */}
                        <button className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <BiBell />
                        </button>

                        {/* LOGOUT */}
                    </div>

                    {/* === A1. AKAN KELUAR JIKA DI MODE HP / TABLET ====*/}
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                        onClick={() =>
                            ChangeHandleState(!VAL_TOGGLE_OPEN_MENU, "VAL_TOGGLE_OPEN_MENU")
                        }
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    {/* === END A1.======================================= */}


                </div>
            </nav>
        </div>
    );
};

export default INC_HEADER;
