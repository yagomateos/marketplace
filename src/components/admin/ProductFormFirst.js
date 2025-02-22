import React, { useEffect } from "react";

export default function ProductFormFirst({
  setProductType,
  setProductVendor,
  setWhatProduct,
  setProductAge,
  allStores,
  setStore
}) {
  useEffect(() => {
    console.clear();
    console.log('first form')
    console.log(allStores);
  }, [allStores]);
  return (
    <form>
      <div>
        <label className="mb-3 block font-semibold">
          ¿Qué tipo de artículo es? <span className="text-red-700">*</span>
        </label>
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="w-full lg:w-[49%] border border-[#000] p-4 rounded-2xl">
            <div className="text-right">
              <input
                value="physical"
                onChange={(e) => setProductType(e.target.value)}
                name="product-type"
                type="radio"
              />
            </div>
            <div>
              <img
                src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/physical-product.svg"
                className="w-20"
              />
              <h4 className="text-xl mt-3 font-medium">Artículo físico</h4>
              <p className="text-sm">
                Un artículo tangible que enviarás a los compradores.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[49%] border border-[#000] p-4 rounded-2xl">
            <div className="text-right">
              <input
                value="digital"
                onChange={(e) => setProductType(e.target.value)}
                name="product-type"
                type="radio"
              />
            </div>
            <div>
              <img
                src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/digital-product.svg"
                className="w-20"
              />
              <h4 className="text-xl mt-3 font-medium">Artículo digital</h4>
              <p className="text-sm">
                Un producto digital que los compradores podrán descargar.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <label className="mb-3 block font-semibold">
          Seleccionar tienda <span className="text-red-700">*</span>
        </label>
        {/* <select > */}
        <select className="w-full p-4 border border-[#ccc] rounded-xl" onChange={(e) => setStore(e.target.value)}>
          {allStores &&
            allStores.map((stor, key) => {
              return <option key={key} value={stor.sId}>
                {stor.stName}
              </option>;
            })}
        </select>
      </div>

      <div className="mt-6">
        <label className="mb-3 block font-semibold">
          ¿Quién lo hizo? <span className="text-red-700">*</span>
        </label>
        <ul>
          <li>
            <input
              value="me"
              type="radio"
              name="who-did-it"
              onChange={(e) => setProductVendor(e.target.value)}
            />{" "}
            &nbsp; Lo hice yo
          </li>
          <li>
            <input
              value="Store-member"
              type="radio"
              name="who-did-it"
              onChange={(e) => setProductVendor(e.target.value)}
            />{" "}
            &nbsp; Un miembro de mi tienda
          </li>
          <li>
            <input
              value="another-person"
              type="radio"
              name="who-did-it"
              onChange={(e) => setProductVendor(e.target.value)}
            />{" "}
            &nbsp; Otra empresa o persona
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <label className="mb-3 block font-semibold">
          ¿Qué es? <span className="text-red-700">*</span>
        </label>
        <ul>
          <li>
            <input
              type="radio"
              value="finished-product"
              onChange={(e) => setWhatProduct(e.target.value)}
              name="what-is-it"
            />{" "}
            &nbsp; Un producto acabado
          </li>
          <li>
            <input
              type="radio"
              value="material"
              onChange={(e) => setWhatProduct(e.target.value)}
              name="what-is-it"
            />{" "}
            &nbsp; Un material o una herramienta para hacer cosas
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <label className="mb-3 block font-semibold">
          ¿Cuándo se hizo? <span className="text-red-700">*</span>
        </label>
        <select
          onChange={(e) => setProductAge(e.target.value)}
          name="when-it-done"
          className="w-full p-4 border border-[#ccc] rounded-xl"
        >
          <option value="">¿Cuándo lo hiciste?</option>
          <optgroup label="Aún no se ha hecho">
            <option value="made_to_order">Hecho por encargo</option>
          </optgroup>
          <optgroup label="Recientemente">
            <option value="2020_2024">2020 - 2024</option>
            <option value="2010_2019">2010 - 2019</option>
            <option value="2005_2009">2005 - 2009</option>
          </optgroup>
          <optgroup label="Vintage">
            <option value="before_2005">Antes de 2005</option>
            <option value="2000_2004">2000 - 2004</option>
            <option value="1990s">Década de 1990</option>
            <option value="1980s">Década de 1980</option>
            <option value="1970s">Década de 1970</option>
            <option value="1960s">Década de 1960</option>
            <option value="1950s">Década de 1950</option>
            <option value="1940s">Década de 1940</option>
            <option value="1930s">Década de 1930</option>
            <option value="1920s">Década de 1920</option>
            <option value="1910s">Década de 1910</option>
            <option value="1900s">1900 - 1909</option>
            <option disabled="" value="1800s">
              Siglo XIX
            </option>
            <option disabled="" value="1700s">
              Siglo XVIII
            </option>
            <option disabled="" value="before_1700">
              Antes de XVIII
            </option>
          </optgroup>
        </select>
      </div>
    </form>
  );
}
