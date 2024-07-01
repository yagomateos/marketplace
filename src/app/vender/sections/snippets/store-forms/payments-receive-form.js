import PaymentFirstStep from './payment-forms/first-step'
import PaymentSecondStep from './payment-forms/second-step'
import PaymentThirdStep from './payment-forms/third-step'

export default function PaymentsReceivfeForm({ bankStep }) {


    const selectStep = () => {
        switch (bankStep) {
            case 0:
                return <PaymentFirstStep />
                break;
            case 1:
                return <PaymentSecondStep />
                break;
            case 2:
                return <PaymentThirdStep />
                break;
            default:
                break;
        }
    }

    return (
        <>
            {selectStep()}
        </>
    )
}
