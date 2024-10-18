import React from 'react';
import SettingsView from './settingsView';

export default function ListView({deleteProduct , copyProductPublicUrl, deactivateProduct , setSelectedproductToEdit, setEditListing, selectedStars, setSelectedStars, selectedProd, selectAll, setSelectedProd, products, settingsOpen, setSettingsOpen }) {

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

    return (
        <div className="flex mt-6 flex-col lg:gap-3">
            {products && products.map((product, key) => {
                const isStarred = selectedStars && selectedStars.includes(product.id); // Check if the product is starred

                return (
                    <div key={key} className="w-full p-2 lg:p-4 ">
                        <div className="border border-[#ccc] relative flex flex-col lg:flex-row p-3">
                            <div className='w-full lg:w-[5%]'>
                                <input
                                    type="checkbox"
                                    checked={selectAll}
                                    onChange={(e) => { selectedProd !== key ? setSelectedProd(key) : setSelectedProd(null); }}
                                />
                            </div>
                            <div className="w-full lg:w-[10%]">
                                <img className="w-full max-h-[130px] object-cover" src={product.main_image_url && product.main_image_url} alt={product.name} />
                            </div>
                            <div className="w-full lg:w-[85%] p-0 py-3 lg:p-3 ">
                                <div className='w-full flex flex-col-reverse lg:flex-row justify-between items-start'>
                                    <div>
                                        <h3 className='w-full font-semibold text-base lg:text-lg leading-tight'>
                                            <a className='underline' target='blank' href={`/listado?pid=${product.id}`}>
                                                {product.name && product.name}
                                            </a>
                                        </h3>
                                    </div>

                                    <div className="flex items-center justify-between gap-5 mb-2 lg:mb-0">
                                        <span onClick={() => handleStarClick(product.id)} style={{ cursor: 'pointer' }}>
                                            {/* Conditionally render the star image based on whether it's selected */}
                                            <img
                                                className="w-[20px] star"
                                                src={isStarred ? "https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/star-filled.png" : "https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-star-50.png"}
                                                alt="star"
                                            />
                                        </span>
                                        <a onClick={(e) => { e.preventDefault(); setSettingsOpen(key); }} href="#">
                                            <img className="w-[20px]" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/icons8-settings-50.png" alt="settings" />
                                        </a>
                                    </div>
                                </div>
                                <div className='flex gap-2 lg:gap-10 flex-col lg:flex-row mt-2 lg:mt-5'>
                                    <p className='underline text-sm'>{product.quantity ? product.quantity : 0} En la tienda</p>
                                    <p className='underline text-sm'>€ {product.regular_price}</p>
                                </div>
                            </div>

                            {settingsOpen === key && (
                                <SettingsView deleteProduct={deleteProduct} copyProductPublicUrl={copyProductPublicUrl} deactivateProduct={deactivateProduct} setSelectedproductToEdit={setSelectedproductToEdit} setEditListing={setEditListing} view="list" product={product} setSettingsOpen={setSettingsOpen} />
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
