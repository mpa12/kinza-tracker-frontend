import React from "react";
import {Link} from "react-router-dom";

interface HeaderLinkProps {
    label: string;
    to: string;
    icon: string;
}

const HeaderLink = (props: HeaderLinkProps) => {
    const {
        label,
        to,
        icon
    } = props;

    return (
        <Link
            to={to}
            className={`w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center hover:bg-gray-100 active:bg-gray-300`}
        >
            {label}
        </Link>
    );
};

export default HeaderLink;
