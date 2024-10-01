import React from 'react';
import AdjustSettings from './settingPages/adjust'
import AboutSettings from './settingPages/about'
import OptionsSettings from './settingPages/options'
import DeliverySettings from './settingPages/delivery'
import PoliciesSettings from './settingPages/policy'

export default function Settings({ settingPage }) {
  const renderSettingsPage = () => {
    switch (settingPage) {
      case 1:
        return <AdjustSettings/>;
      case 2:
        return <AboutSettings />;
      case 3:
        return <OptionsSettings />;
      case 4:
        return <DeliverySettings />;
      case 5:
        return <PoliciesSettings />;

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
