import React from "react";
import WhiteLabel from "../../logic/white-label/store";

const Login = () => {
    const submitHandler = (evt: any) => {
        evt.preventDefault();
    }

    return (
        <div className={`w-screen h-screen ${WhiteLabel.getMainBgColor()} flex items-center justify-center flex-col`}>
            <div className={'w-full h-[100px] flex items-center justify-center'}>
                <div className={`${WhiteLabel.getLightTextColor()}`}>Logo</div>
            </div>
            <section className={'w-full max-w-lg bg-white rounded-lg'}>
                <form className={'p-5'} onSubmit={submitHandler}>
                    <div className={'w-full pt-1 pb-3'}>
                        <h3 className={`${WhiteLabel.getDarkTextColor()}`}>Sign in</h3>
                    </div>
                    <div className={''}>
                        <div className={'w-full flex flex-col mb-3'}>
                            <label className={`mb-1 ${WhiteLabel.getDarkTextColor()}`}>E-mail</label>
                            <input
                                type={'email'}
                                placeholder={'Input your e-mail'}
                                className={`px-2 py-1 rounded-s ${WhiteLabel.getLightBgColor()} ${WhiteLabel.getDarkTextColor()}`}
                            />
                        </div>
                        <div className={'w-full flex flex-col mb-4'}>
                            <label className={`mb-1 ${WhiteLabel.getDarkTextColor()}`}>Password</label>
                            <input
                                type={'password'}
                                placeholder={'Input your password'}
                                className={`px-2 py-1 rounded-s ${WhiteLabel.getLightBgColor()} ${WhiteLabel.getDarkTextColor()}`}
                            />
                        </div>
                        <div>
                            <button
                                type={'submit'}
                                className={`px-2 py-1 ${WhiteLabel.getMainBgColor()} hover:${WhiteLabel.getHoverBgColor()} active:${WhiteLabel.getActiveBgColor()} rounded-lg ${WhiteLabel.getLightTextColor()}`}
                            >Sign in
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Login;
