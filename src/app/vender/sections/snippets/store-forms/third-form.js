'use client'

import InventoryFirstStep from './inventory-steps/first-step'
import InventorySecondStep from './inventory-steps/second-step'
import InventoryThirdStep from './inventory-steps/third-step'


import { useState } from "react"

export default function ThirdStoreStepForm({inventoryStep}) {


    const renderInventoryStep = () => {

        switch (inventoryStep) {
            case 0:
                return <InventoryFirstStep />;
            case 1:
                return <InventorySecondStep />;
            case 2:
                return <InventoryThirdStep />;
            default:
                return null;
        }
    };

    // Then call this function inside your JSX:



    return (
        <>
            {renderInventoryStep()}

        </>
    )
}
