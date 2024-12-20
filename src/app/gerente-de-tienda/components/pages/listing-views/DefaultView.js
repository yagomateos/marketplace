import Loading from '../../../../../components/loading/loading';
import SettingsView from './settingsView';

export default function DefaultView({ deleteProduct, copyProductPublicUrl, deactivateProduct, setSelectedproductToEdit, setEditListing, selectedStars, setSelectedStars, setSelectAll, selectedProd, selectAll, setSelectedProd, products, settingsOpen, setSettingsOpen, currentStatus }) {
    let selectedProds = [];

    console.clear();
    console.log(selectedProd);
    console.log(selectedProds);

    const handleSelect = (prodId) => {
        if (selectedProd && selectedProd.length > 0) {
            selectedProds = [...selectedProd];

            if (selectedProds.includes(prodId)) {
                selectedProds = selectedProds.filter(item => item !== prodId);
            } else {
                selectedProds.push(prodId);
            }
        } else {
            selectedProds = [prodId];
        }

        setSelectedProd(selectedProds);

        if (selectedProds.length >= products.length) {
            setSelectAll(true);
        } else {
            setSelectAll(false);
        }
    };

    const handleStarClick = (prodId) => {
        let updatedStars;

        if (selectedStars && selectedStars.includes(prodId)) {
            // If the product ID is already in selectedStars, remove it
            updatedStars = selectedStars.filter(id => id !== prodId);
        } else {
            // If it's not, add it
            updatedStars = [...(selectedStars || []), prodId];
        }

        setSelectedStars(updatedStars); // Update the selectedStars state
    };

    const returnSelectedProds = (product, key) => {
        const isStatusChecked = currentStatus ? product.status === currentStatus : true;

        if (isStatusChecked) {
            const isStarred = selectedStars && selectedStars.includes(product.id); // Check if the product is starred

            return (
                <div key={key} className="lg:w-[25%] w-[50%] p-2 lg:p-4">
                    <div className="border border-[#ccc] relative">
                        <div>
                            <img className="w-full" src={product.main_image_url} alt={product.name} />
                        </div>
                        <div className="p-2 lg:p-4">
                            <h3 className="font-semibold">{product.name}</h3>
                            <p className='text-sm lg:text-base'>{product.quantity ? product.quantity : 0} En la tienda</p>
                            <p className='text-sm lg:text-base'>€ {product.regular_price}</p>
                        </div>

                        <div className="border-t border-[#ccc] mt-2 lg:mt-6 p-4">
                            <div className="flex items-center justify-between">
                                <input
                                    type="checkbox"
                                    checked={selectedProd && selectedProd.includes(product.id)} // Check if the product is selected
                                    onChange={() => handleSelect(product.id)}
                                />
                                <span onClick={() => handleStarClick(product.id)} style={{ cursor: 'pointer' }}>
                                    {/* Conditionally render the star image based on whether it's selected */}
                                    <img className="w-[20px] star" src={isStarred ? "https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/star-filled.png" : "https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-star-50.png"} alt="star" />
                                </span>
                                <a onClick={(e) => { e.preventDefault(); setSettingsOpen(key); }} href="#">
                                    <img className="w-[20px]" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-settings-50.png" alt="settings" />
                                </a>
                            </div>
                        </div>

                        {/* settings opened */}
                        {settingsOpen === key && (
                            <SettingsView deleteProduct={deleteProduct} copyProductPublicUrl={copyProductPublicUrl} deactivateProduct={deactivateProduct} setSelectedproductToEdit={setSelectedproductToEdit} setEditListing={setEditListing} view="default" product={product} setSettingsOpen={setSettingsOpen} />
                        )}
                    </div>
                </div>
            );
        }
        return null;
    };

    const isLoading = !products;

    return (<>
        {isLoading ? <Loading /> : <>
            <div className="flex mt-6 flex-wrap">
                {products ? products.map((product, key) => returnSelectedProds(product, key)) :
                    (
                        <div className="w-full p-4 text-lg text-center">
                            <img
                                src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/not-found.svg"
                                alt="Not Found"
                                className="mx-auto w-[200px] h-auto"
                            />
                            <p>¡No se encontraron productos!</p>
                        </div>
                    )}
            </div>
        </>}
    </>

    );
}
