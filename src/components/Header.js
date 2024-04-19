import React from "react";
import { HEADER_DISPLAY_NAME } from "../config";

const Header = () => {
    return (
        <div
            className={`text-white sticky top-0 p-4 font-bold rounded-md z-[100] bg-black bg-opacity-80 border-[#2b3c47] border-l border-r`}
        >
            <h1>{HEADER_DISPLAY_NAME}</h1>
        </div>
    );
};

export default Header;
