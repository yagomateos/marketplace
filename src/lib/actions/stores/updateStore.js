"use server";

import {
  updateStoreHistory,
  updateStoreInfo,
  updateStorePartials,
} from "../../middleware/store/updateStore";
import UploadImg, { UploadMultipleImgs } from "../../utils/uploadImg";

export async function updateImagesFunc(images) {
  try {
    const uploadedImages = await UploadMultipleImgs(images);
    // const updated = await updateProduct(productData);
    return uploadedImages;
  } catch (error) {
    throw error;
  }
}

export const updateStoreInfoFunc = async (userId, storedata) => {
  try {
    const userInfoUpdated = await updateStoreInfo(userId, storedata);
    return userInfoUpdated;
  } catch (error) {
    throw error;
  }
};

export const updateStoreHistoryFunc = async (userId, dta) => {
  try {
    const storeHistryUpdated = await updateStoreHistory(userId, dta);
    return storeHistryUpdated;
  } catch (error) {
    throw error;
  }
};

export const updateStoreParts = async (dtaObject) => {
  if (dtaObject.type == "banneImg") {
    try {
      const imgUploaded = await UploadImg(dtaObject.data.img);
      if (imgUploaded) {
        try {
          const bannerUpdated = await updateStorePartials("updateMainBanner", {
            img: imgUploaded,
            id: dtaObject.data.id,
          });
          return bannerUpdated;
        } catch (error) {
          return error;
        }
      } else {
        return new Error("upload failed");
      }
    } catch (error) {
      return error;
    }
  } else if (dtaObject.type == "logoImg") {
    try {
      const imgUploaded = await UploadImg(dtaObject.data.img);
      if (imgUploaded) {
        try {
          const bannerUpdated = await updateStorePartials("updateLogo", {
            img: imgUploaded,
            id: dtaObject.data.id,
          });
          return bannerUpdated;
        } catch (error) {
          return error;
        }
      } else {
        return new Error("upload failed");
      }
    } catch (error) {
      return error;
    }
  } else if (dtaObject.type == "title") {
    try {
      const titleUpdated = await updateStorePartials("updateTitle", {
        title: dtaObject.data.title,
        id: dtaObject.data.id,
      });
      return titleUpdated;
    } catch (error) {}
  } else if (dtaObject.type == "desc") {
    try {
      const descUpdated = await updateStorePartials("updateDesc", {
        desc: dtaObject.data.desc,
        id: dtaObject.data.id,
      });
      return descUpdated;
    } catch (error) {}
  } else if (dtaObject.type == "announce") {
    try {
      const announceUpdated = await updateStorePartials("updateAnnounce", {
        announce: dtaObject.data.announce,
        id: dtaObject.data.id,
      });
      return announceUpdated;
    } catch (error) {}
  }
};
