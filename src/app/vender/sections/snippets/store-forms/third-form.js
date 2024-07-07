'use client'

import InventoryFirstStep from './inventory-steps/first-step'
import InventorySecondStep from './inventory-steps/second-step'
import InventoryThirdStep from './inventory-steps/third-step'


import { useState } from "react"

export default function ThirdStoreStepForm({ inventoryStep, setProductInfo1, setProductInfo2 , productInfo2}) {


    const renderInventoryStep = () => {

        switch (inventoryStep) {
            case 0:
                return <InventoryFirstStep setProductInfo1={setProductInfo1} />;
            case 1:
                return <InventorySecondStep setProductInfo2={setProductInfo2}  />;
            case 2:
                return <InventoryThirdStep productInfo2={productInfo2} />;
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
