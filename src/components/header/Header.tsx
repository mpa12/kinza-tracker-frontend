import React from "react";
import WhiteLabel from "../../logic/white-label/store";
import HeaderLink from "./HeaderLink";
import Profile from "../profile/Profile";

interface HeaderProps {
    children: React.ReactNode;
}

const Header = ({children}: HeaderProps) => {
    return (
        <div className={`flex flex-col h-screen w-screen bg-gray-200`}>
            <div className={'h-[80px] flex items-center justify-between px-[15px] gap-5'}>
                <div>Logo</div>
                <div className={'flex-grow'}>Search bar</div>
                <div>
                    <Profile/>
                </div>
            </div>
            <div className={'flex-grow flex'}>
                <div className={'w-[80px] flex flex-col items-center gap-3'}>
                    <HeaderLink to={'/'} label={'Home'} icon={'home'}/>
                    <HeaderLink to={'/login'} label={'Login'} icon={'login'}/>
                </div>
                <div className={`flex-grow p-3 ${WhiteLabel.getLightBgColor()} rounded-tl-2xl`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Header;
