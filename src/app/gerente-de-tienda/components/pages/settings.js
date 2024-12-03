import React, { useEffect, useState } from 'react';
import AdjustSettings from './settingPages/adjust'
import AboutSettings from './settingPages/about'
import OptionsSettings from './settingPages/options'
import DeliverySettings from './settingPages/delivery'
import PoliciesSettings from './settingPages/policy'

export default function Settings({ settingPage, userData }) {

  const [userId, setUserId] = useState(null)

  useEffect(() => {
    if (userData && userData[0] && userData[0].id) {
      setUserId(userData[0].id)
    }
  }, [userData])


  const   renderSettingsPage = () => {
    switch (settingPage) {
      case 1:
        return <AdjustSettings userId={userId} />;
      case 2:
        return <AboutSettings userId={userId} />;
      case 3:
        return <OptionsSettings userId={userId} />;
      case 4:
        return <DeliverySettings userId={userId} />;
      case 5:
        return <PoliciesSettings userId={userId} />;

      default:
        return <div>Settings Page Not Found</div>;
    }
  };

  return (
    <div className='max-w-6xl w-full ml-auto mr-auto'>
      {renderSettingsPage()}
    </div>
  );
}
