import React from 'react';
import LoginPopup from '../../auth/popups/loginPopup';
import RegisterPopup from '../../auth/popups/registerPopup'

export default function Popup({ openedPopup, setOpenedPopup }) {

    const renderContent = () => {
        switch (openedPopup) {
            case 'login':
                return <LoginPopup setOpenedPopup={setOpenedPopup} />;

                case 'register' : 
                return <RegisterPopup/>;
            default:
                return null;
        }
    };

    return (
        <>
            {openedPopup && (
                <div className='kd-general-popup-wrapper fixed left-0 top-0 w-full h-full bg-[#00000038] flex justify-center items-center z-50'>
                    <div className='general-popup-inner max-w-full lg:max-w-md bg-white rounded-xl shadow-lg shadow-[#00000060] relative'>
                        <span
                            className='close-popup absolute right-0 lg:-right-16 -top-12 lg:top-0 rounded-full w-12 h-12 hover:bg-[#ffffff45] flex justify-center items-center cursor-pointer'
                            onClick={() => setOpenedPopup(false)}
                        >
                            <img className='w-7' src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/close-icon-white.svg" alt="Close" />
                        </span>
                        {renderContent()}
                    </div>
                </div>
            )}
        </>
    );

}
