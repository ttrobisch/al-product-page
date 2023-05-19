import React, { useState } from "react";
import LinkIcon from "@heroicons/react/20/solid/LinkIcon";

function Header() {
    const [showSubMenu, setShowSubMenu] = useState(false);

    const handleMouseEnter = () => {
        setShowSubMenu(true);
    };

    const handleMouseLeave = () => {
        setShowSubMenu(false);
    };

    return (
        <>
            <div className="grid grid-cols-[auto_1fr_auto] m-6 mx-16">
                <a href="/">
                    <img className="w-20 h-auto" src="/images/logo_magenta.png" alt="header" />
                </a>
                <div className="grid grid-cols-[1fr_auto_auto_1fr] gap-x-4 justify-items-center text-lg text-gray-400 font-bold uppercase">
                    <div></div>
                    <a className="hover:text-magenta" href="/">Home</a>
                    <a
                        className="hover:text-magenta"
                        href="/#amrs"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Modelle
                    </a>
                    {showSubMenu && (
                        <div className="absolute bg-white p-4 shadow rounded mt-2">
                            <a className="block hover:text-magenta" href="/model-1">Modell 1</a>
                            <a className="block hover:text-magenta" href="/model-2">Modell 2</a>
                            <a className="block hover:text-magenta" href="/model-3">Modell 3</a>
                        </div>
                    )}
                    <div></div>
                </div>
                <a
                    className="grid grid-cols-[1fr_auto] items-center justify-items-start gap-3 rounded bg-[#96B0B3] px-3 py-2 shadow hover:bg-[#E80381] hover:text-white"
                    href={`mailto:${"props.mail_address"}?subject=${encodeURIComponent(
                        "props.mail_subject"
                    )}&body=${encodeURIComponent("props.mail_body")}`}
                >
                    <LinkIcon className="inline w-4" />
                    contact
                </a>
            </div>
        </>
    );
}

export { Header };
