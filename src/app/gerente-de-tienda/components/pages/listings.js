import { useEffect, useState } from "react"
import { getProductsByUserID } from "../../../../lib/actions/products/getProducts";
import ManageListing from './Listing-pages/ManageListing';
import CreateListng from './Listing-pages/CreateListng';
import EditListing from './Listing-pages/EditListing';

export default function Listings({ setSettingsPage, setStep, userData }) {


  const [createListing, setCreateListing] = useState(false)
  const [editListing, setEditListing] = useState(false)
  const [selectedProduct , setSelectedproductToEdit] = useState(null)
  const [createPopup, setCreatePopup] = useState(false)


  return (<>
    {createListing ?
      <CreateListng userData={userData} setCreateListing={setCreateListing} createPopup={createPopup} setCreatePopup={setCreatePopup} /> :
      editListing ?
        <EditListing selectedProduct={selectedProduct} setEditListing={setEditListing} /> :
        <ManageListing setSelectedproductToEdit={setSelectedproductToEdit} setSettingsPage={setSettingsPage} setStep={setStep} userData={userData} setCreateListing={setCreateListing} setEditListing={setEditListing} setCreatePopup={setCreatePopup} />
    }
  </>
  )
}
