import React from "react";

const Profile = () => {
    return (
        <>
            <section
                className={'flex gap-4 items-stretch justify-between min-w-[300px] select-none cursor-pointer hover:bg-gray-300 p-2 rounded-lg'}>
                <div className={'w-[50px] h-[50px] rounded-full bg-gray-400 flex items-center justify-center'}>Pic</div>
                <div className={'flex-grow flex justify-between'}>
                    <div>
                        <h3 className={'font-bold'}>Ilon Mask</h3>
                        <span>Senior developer</span>
                    </div>
                    <div className={'w-[20px] flex items-center justify-center'}>
                        <span>v</span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;
