import React from 'react';
import LoginPopup from '../../auth/popups/loginPopup';
import RegisterPopup from '../../auth/popups/registerPopup'

export default function Popup({ openedPopup, setOpenedPopup }) {

    // console.log(setOpenedPopup)

    const renderContent = () => {
        switch (openedPopup) {
            case 'login':
                return <LoginPopup setOpenedPopup={setOpenedPopup} />;

                case 'register' : 
                return <RegisterPopup setOpenedPopup={setOpenedPopup}/>;
            default:
                return null;
        }
    };

    return (
        <>
            {openedPopup && (
                <div className='kd-general-popup-wrapper fixed left-0 top-0 w-full h-full bg-[#00000068] flex justify-center items-start lg:items-center z-50 py-6'>
                    <div className='general-popup-inner max-w-[90%] mt-12 lg:max-w-[384px] bg-white rounded-3xl shadow-lg shadow-[#00000060] relative'>
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
