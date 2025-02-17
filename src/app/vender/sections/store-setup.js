"use client";

import { useEffect, useState } from "react";
import StoreSetupSteps from "./snippets/store-setup-steps";
import FirstStoreStepForm from "./snippets/store-forms/first-forms";
import SecondStoreStepForm from "./snippets/store-forms/second-form";
import ThirdStoreStepForm from "./snippets/store-forms/third-form";
import PaymentsReceivfeForm from "./snippets/store-forms/payments-receive-form";
import BillingInfoForm from "./snippets/store-forms/billingInfoForm";
import { useSession } from "next-auth/react";
import { updateUserFunc } from "../../../lib/actions/users/updateUser";
import { createNewProduct } from "../../../lib/actions/products/createProduct";
import { useRouter } from "next/navigation";
import { createStr } from "../../../lib/actions/stores/createStore";
import { UploadMultipleImgs, UploadImg } from "../../../lib/utils/uploadImg";
import sendEmail from "../../../lib/utils/sendMail";

export default function Storesetup({ reason, options }) {
  const { data: session } = useSession();
  const router = useRouter();

  // error
  const [err, setErr] = useState(null);

  // store information
  const [storeName, setStoreName] = useState(null);

  // first product
  const [productInfo1, setProductInfo1] = useState(null);
  const [productInfo2, setProductInfo2] = useState(null);

  // billing information
  const [paymentInfo, setPaymentInfo] = useState(null);

  // verify identity
  const [identityInfo, setIdentityInfo] = useState(null);

  // card information
  const [billingInfo, setBillingInfo] = useState(null);

  const [storeStep, setStoreStep] = useState(0);
  const [completedStep, setCompletedStep] = useState(0);
  const [inventoryStep, setInventoryStep] = useState(0);
  const [bankStep, setBankStep] = useState(0);

  const [formEl, setFormEl] = useState(null);

  const [paymentSuceeded, setPaymentSuceeded] = useState(false);

  // console.clear()
  // console.log(completedStep)

  const setSteps = () => {
    // ======================verify store steps

    // check store name in first step
    if (storeStep == 1) {
      console.log(storeName);
      if (storeName) {
        console.clear();
        console.log(completedStep, storeStep);
        setErr(null);
        setStoreStep(storeStep + 1);
        if (completedStep <= storeStep) {
          setCompletedStep(1);
        }
      } else {
        setErr("Por favor agregue el nombre de la tienda");
      }
    } else if (storeStep == 2) {
      if (productInfo1) {
        if (inventoryStep < 2) {
          // setInventoryStep(inventoryStep + 1)
          if (inventoryStep == 0) {
            if (productInfo1) {
              setInventoryStep(inventoryStep + 1);
              setErr(null);
            } else {
              setErr("Por favor complete el formulario anterior");
            }
          } else if (inventoryStep == 1) {
            if (productInfo2) {
              setInventoryStep(inventoryStep + 1);
              setErr(null);
            } else {
              setErr("Por favor complete el formulario anterior");
            }
          }
        } else {
          setStoreStep(storeStep + 1);
          if (completedStep <= storeStep) {
            setCompletedStep(2);
          }
        }
      } else {
        setErr("Por favor complete el formulario anterior");
      }
    } else if (storeStep == 3) {
      if (bankStep == 0) {
        if (paymentInfo) {
          setBankStep(bankStep + 1);
        } else {
          setErr("Por favor complete el formulario anterior");
        }
      } else if (bankStep == 1) {
        if (identityInfo) {
          // setBankStep(bankStep + 1)
          setStoreStep(storeStep + 1);
          if (completedStep <= storeStep) {
            setCompletedStep(3);
          }
        } else {
          setErr("Por favor complete el formulario anterior");
        }
      } else {
        setStoreStep(storeStep + 1);
        if (completedStep <= storeStep) {
          setCompletedStep(3);
        }
      }
    } else if (storeStep == 4) {
      if (billingInfo) {
        // console.clear()
        // console.log(reason, options, storeName, productInfo1, productInfo2, paymentInfo, identityInfo, billingInfo, storeStep, inventoryStep, bankStep)

        if (
          !storeName ||
          !productInfo1 ||
          !productInfo2 ||
          !paymentInfo ||
          !identityInfo ||
          !billingInfo ||
          !storeStep ||
          !inventoryStep ||
          !bankStep
        ) {
          setErr("Faltan algunos campos");
          return;
        }

        if (formEl && formEl.current) {
          console.clear();
          console.log(formEl);
          formEl.current.click();
        }
      } else {
        setErr("Por favor complete el formulario anterior");
      }
    } else {
      setStoreStep(storeStep + 1);
      if (completedStep <= storeStep) {
        setCompletedStep(storeStep);
      }
    }
  };

  // store data to the database

  useEffect(() => {
    console.log("it comes here");

    const updateInfo = async () => {
      console.log("hukapn");
      // upload images

      if (session) {
        // update the user
        const userId = session.user?.id;
        const userData = {
          uerId: userId,
          reason: reason,
          options: options,
          userInfo: paymentInfo,
          identityInfo: identityInfo,
        };

        console.log("first point");

        try {
          const userUpdated = await updateUserFunc(userData);
          console.log("first second");
          console.log(userUpdated);
          if (userUpdated) {
            console.log(productInfo1, productInfo2);

            // store information
            console.log(storeName, billingInfo);
            const storeDta = {
              storeName: storeName,
              billingInfo: billingInfo,
              userId: userId,
            };

            try {
              const storeCreated = await createStr(storeDta);
              console.clear();
              console.log("huttigeputa");
              console.log(storeCreated);

              // insert the product

              if (storeCreated) {
                const productData = {
                  firstPart: productInfo1,
                  secondPart: productInfo2.filter((_, index) => index !== 2),
                  userId: userId,
                  storeId: storeCreated,
                };

                // images object
                console.log("cariya");
                console.log(productData);

                const fileObjectsFormDta = new FormData();
                // fileObjectsFormDta.append('file', productInfo2[2][0])
                productInfo2[2].forEach((file, index) => {
                  fileObjectsFormDta.append(`file${index}`, file); // `file1`, `file2`, etc.
                });

                // const uploadedImages = await UploadMultipleImgs(fileObjectsFormDta)
                // console.clear();
                // console.log(uploadedImages)
                // create product
                try {
                  const productInserted = await createNewProduct(
                    productData,
                    fileObjectsFormDta
                  );
                  console.log(productInserted);
                  if (productInserted) {
                    const mailSent = sendEmail(
                      session.user.email,
                      "storesuccess"
                    );
                    console.clear();
                    console.log('mail test')
                    console.log(session.user.email);
                    console.log(mailSent);

                    if (mailSent) {
                      router.push("/registrado-en-la-tienda");
                    }
                  }
                } catch (error) {
                  console.log(error);
                }
              }
            } catch (error) {
              console.log(error);
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
    };

    if (paymentSuceeded) {
      console.clear();
      updateInfo();
    }
  }, [paymentSuceeded]);

  return (
    <div className="store-setup-wrapper">
      <div className="store-setup-inner">
        <StoreSetupSteps
          storeStep={storeStep}
          setStoreStep={setStoreStep}
          completedStep={completedStep}
        />
        <hr />
        <div className="store-forms-wrapper py-4 flex w-full justify-center">
          <div className="w-full lg:max-w-7xl">
            {storeStep == 0 && <FirstStoreStepForm />}
            {storeStep == 1 && (
              <SecondStoreStepForm
                storeName={storeName}
                setStoreName={setStoreName}
              />
            )}
            {storeStep == 2 && (
              <ThirdStoreStepForm
                inventoryStep={inventoryStep}
                setProductInfo1={setProductInfo1}
                setProductInfo2={setProductInfo2}
                productInfo2={productInfo2}
              />
            )}
            {storeStep == 3 && (
              <PaymentsReceivfeForm
                bankStep={bankStep}
                setPaymentInfo={setPaymentInfo}
                setIdentityInfo={setIdentityInfo}
              />
            )}
            {storeStep == 4 && (
              <BillingInfoForm
                setBillingInfo={setBillingInfo}
                setFormEl={setFormEl}
                setPaymentSuceeded={setPaymentSuceeded}
              />
            )}
          </div>
        </div>

        <hr />
        <div className="py-6 flex w-full justify-center">
          <div className="w-full lg:max-w-7xl flex">
            <a
              href="#"
              onClick={() => {
                setSteps();
              }}
              className="rounded-full bg-black text-white ml-auto mr-auto lg:mr-0 py-4 px-6"
            >
              Guardar y continuar
            </a>
          </div>
        </div>
        {err && (
          <div className="lg:max-w-7xl ml-auto mr-auto pb-5 err-wrapper text-red-700 text-center lg:text-right text-sm">
            {err}
          </div>
        )}
      </div>
    </div>
  );
}
