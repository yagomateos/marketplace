"use client";
import React, { useEffect, useRef, useState } from "react";
import { getStrId } from "../../../lib/actions/stores/getStores";
import { updateStoreParts } from "../../../lib/actions/stores/updateStore";
import PublicPageContainer from "../../../components/containers/publicPageContainer";


export default function EditStore({ params }) {
  const [storeData, setStoreData] = useState(null);
  const [bannerImgPrev, setBannerImgPrev] = useState(null);
  const [newBannerImg, setNewBannerImg] = useState(null);
  const [logoImgPrev, setLogoImgPrev] = useState(null);
  const [logoImg, setLogoImg] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [announcement, setAnnouncement] = useState(null);
  const { id } = params;

  const [toggleLogo, setToglleLogo] = useState(false);
  const [toggleTitle, setToglleTitle] = useState(false);
  const [toggleDesc, setToglleDesc] = useState(false);
  const [toggleAnnounce, setToglleAnnounce] = useState(false);
  const [toggleBanneUpdate , setToggleBannerUpdate] = useState(false)

  const uploadBannerInput = useRef()

  useEffect(() => {
    // get all store data
    console.log(id);

    const getallStoreData = async () => {
      try {
        const storeData = await getStrId(id);

        console.clear();
        console.log(storeData);

        storeData && storeData.store && setStoreData(storeData.store[0]);
        setBannerImgPrev(storeData.store[0].banner_image);
        setLogoImgPrev(storeData.store[0].logo);
        setTitle(storeData.store[0].store_name);
        setDesc(storeData.store[0].intro);
        setAnnouncement(storeData.store[0].announcements);
      } catch (error) {
        console.log(error);
      }
    };

    id && getallStoreData();
  }, [id]);

  const bannerImgUpload = (e) => {
    console.clear();
    console.log(e.target.files[0]);
    const file = e.target.files[0];

    if (file) {
      setNewBannerImg(file);
      // preview image
      const reader = new FileReader();
      reader.onloadend = () => {
        const blob = new Blob([reader.result], { type: file.type });
        const url = URL.createObjectURL(blob);
        setBannerImgPrev(url);
      };
      reader.readAsArrayBuffer(file);
    }

    
  };

  const logoUpload = (e) => {
    console.clear();
    console.log(e.target.files[0]);
    const file = e.target.files[0];

    if (file) {
      setLogoImg(file);
      // preview image
      const reader = new FileReader();
      reader.onloadend = () => {
        const blob = new Blob([reader.result], { type: file.type });
        const url = URL.createObjectURL(blob);
        setLogoImgPrev(url);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  console.log(storeData);

  // save data

  const updateBannerImg = async ()=>{
    console.clear();
    console.log(newBannerImg)

    const imgFormDta = new FormData();
    imgFormDta.append('file' , newBannerImg);

    console.log(imgFormDta)

    try {
      const bannerImgUpdated = await updateStoreParts({type : 'banneImg', data : {id: id , img: imgFormDta}});
      console.log(bannerImgUpdated)
      setToggleBannerUpdate(false)
    } catch (error) {
      console.log(error)
    }
  }

  const updateLogoimg = async ()=>{
    console.clear();
    console.log(newBannerImg)

    const imgFormDta = new FormData();
    imgFormDta.append('file' , logoImg);

    console.log(imgFormDta)

    try {
      const logoImgUpdated = await updateStoreParts({type : 'logoImg', data : {id: id , img: imgFormDta}});
      console.log(logoImgUpdated)
      setToglleLogo(false)
    } catch (error) {
      console.log(error)
    }
  }

  const updateTitle = async ()=>{

    console.clear()
    try {
      const titleUpdated = await updateStoreParts({type : 'title' , data : {id:id , title : title}})
      console.clear()
      console.log(titleUpdated)
      setToglleTitle(false)
    } catch (error) {
      console.log(error)
    }
  }

  const updateDesc = async ()=>{
    try {
      const descUpdated = await updateStoreParts({type : 'desc' , data : {id:id , desc : desc}})
      console.log(descUpdated)
      setToglleDesc(false)
    } catch (error) {
      console.log(error)
    }
  }

  const updateAnnounce = async ()=>{
    try {
      const announceUpdate = await updateStoreParts({type : 'announce' , data : {id:id , announce : announcement}})
      console.log(announceUpdate)
      setToglleAnnounce(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <PublicPageContainer>
      {/* banner image */}
      <div
        className="w-full lg:h-[420px] h-[220px] bg-cover bg-center box-border relative"
        style={{ backgroundImage: `url(${bannerImgPrev})` }}
      >
        <div className="hidden w-full p-4 lg:h-[420px] h-[220px] justify-center items-center bg-[rgba(0,0,0,.5)]  flex-col">
          <h2 className="text-white font-semibold text-2xl mb-5">
            Cambiar imagen
          </h2>
          <input
          ref={uploadBannerInput}
            type="file"
            className="border border-white text-white placeholder-white w-full lg:w-auto"
            onChange={bannerImgUpload}
          />
          <button className="py-2 px-5 mt-3 bg-green-500" onClick={updateBannerImg}>Actualizar</button>
        </div>


        {toggleBanneUpdate&&<div  className="flex w-full p-4 lg:h-[420px] h-[220px] justify-center items-center bg-[rgba(0,0,0,.5)]  flex-col">
          <button className="py-2 px-5 mt-3 bg-green-500" onClick={updateBannerImg}>Actualizar</button></div>}

        
        {!toggleBanneUpdate ? <a href="#" className="absolute right-0 translate-y-1/2 bottom-0 bg-green-500 text-xs py-1 px-6 rounded-full" onClick={e=>{e.preventDefault(); uploadBannerInput.current.click(); setToggleBannerUpdate(true)}}>Editar</a> : 
        <a href="#" className="absolute right-0 translate-y-1/2 bottom-0 bg-green-500 text-xs py-1 px-6 rounded-full" onClick={e=>{e.preventDefault(); updateBannerImg(); setToggleBannerUpdate(true)}}>Actualizar</a>
        }
      </div>

      {/* logo image and other data */}
      <div className="bg-[#f8f8f8]">
        <div className="max-w-7xl mr-auto ml-auto px-4 py-6 flex justify-between gap-5 flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-[25%] relative box-border p-5 overflow-hidden">
            {!toggleLogo && (
              <>
                <img
                  className="w-full object-cover rounded"
                  src={logoImgPrev}
                />

                <a
                  className="absolute right-0 top-0 bg-green-500 text-xs py-1 px-6 rounded-full"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setToglleLogo(!toggleLogo);
                  }}
                >
                  Editar
                </a>
              </>
            )}

            {toggleLogo && (
              <div >
                <input type="file" onChange={logoUpload} />
                <button className="py-2 px-5 mt-3 bg-green-500" onClick={updateLogoimg}>Actualizar</button>
              </div>
            )}
          </div>
          <div className="w-full lg:w-[82%]">
            {!toggleTitle ? (
              <h2 className="text-lg lg:text-3xl relative max-w-max mb-4 lg:mb-0">
                {title}
                <a
                  className="absolute -right-18 -top-2 bg-green-500 text-xs py-1 px-6 rounded-full"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setToglleTitle(!toggleTitle);
                  }}
                >
                  Editar
                </a>
              </h2>
            ) : (
              <div className="flex gap-4 mb-4">
                <input
                value = {title}
                  type="text"
                  className="border border-[#ccc] w-full p-3"
                  onChange={e=>setTitle(e.target.value)}
                />
                <button className="py-2 px-5 bg-green-500" onClick={updateTitle}>Actualizar</button>
              </div>
            )}

            {!toggleDesc ? (
              <p className="text-xs lg:text-sm relative w-full">
                {desc}
                <a
                  className="absolute right-0 -top-2 bg-green-500 text-xs py-1 px-6 rounded-full"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setToglleDesc(!toggleDesc);
                  }}
                >
                  Editar
                </a>
              </p>
            ) : (
              <div className="flex gap-4 mb-4">
                <textarea value={desc} onChange={e=>setDesc(e.target.value)} className="border border-[#ccc] w-full p-3"></textarea>
                <button className="py-2 px-5 bg-green-500" onClick={updateDesc}>Actualizar</button>
              </div>
            )}

            <p className="text-lg">
              Ventas |<span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </p>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mr-auto ml-auto flex px-4 py-6 flex-col lg:flex-row">
        <div class="w-full lg:w-[20%]">
          <h3 class="text-xl font-semibold ">Anuncio</h3>
        </div>
        <div class="w-full lg:w-[80%]">
          {!toggleAnnounce ? (
            <p className="relative">
              {announcement}
              <a
                className="absolute right-0 -top-2 bg-green-500 text-xs py-1 px-6 rounded-full"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setToglleAnnounce(!toggleAnnounce);
                }}
              >
                Editar
              </a>
            </p>
          ) : (
            <div className="flex gap-4 mb-4">
              <textarea value={announcement} onChange={e=>setAnnouncement(e.target.value)} className="border border-[#ccc] w-full p-3"></textarea>
              <button className="py-2 px-5 bg-green-500" onClick={updateAnnounce}>Actualizar</button>
            </div>
          )}
        </div>
      </div>
    </PublicPageContainer>
  );
}
