import dbConnection from "../../base/db";

export const updateStoreInfo = async (userId, storedata) => {
  try {
    if (
      !storedata ||
      !storedata.title ||
      !storedata.buyerMsg ||
      !storedata.announcement
    ) {
      return storedata;
      //   throw new Error("Missing required fields in storedata" + storedata);
    }

    const db = await dbConnection();

    const logoPart = storedata?.images?.[0]
      ? `logo = '${storedata.images[0]}',`
      : "";
    const bannerPart = storedata?.images?.[1]
      ? `order_recypt_banner = '${storedata.images[1]}',`
      : "";

    const query = `
      UPDATE marketplace.stores 
      SET 
        ${logoPart}
        sttore_title = ?, 
        ${bannerPart}
        message_to_buyers = ?, 
        announcements = ? 
      WHERE userid = ?;
    `;

    const values = [
      storedata.title,
      storedata.buyerMsg,
      storedata.announcement,
      userId,
    ];

    const [storeUpdated] = await db.execute(query, values);

    if (storeUpdated.affectedRows > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error updating store info:", error);
    throw error;
  }
};

export const updateStoreHistory = async (userId, dta) => {
  try {
    const db = await dbConnection();
    const [storeUpdated] = await db.execute(
      `UPDATE stores SET history_title = '${dta.title}', history_desc = '${dta.desc}' WHERE (userid = '${userId}');`
    );
    if (storeUpdated.affectedRows > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

export const updateStorePartials = async (what, dta) => {
  if (what == "updateMainBanner") {
    try {
      const db = await dbConnection();
      const [storeUpdated] = await db.execute(
        `UPDATE stores SET banner_image = '${dta.img}' WHERE (id = '${dta.id}');`
      );
      if (storeUpdated.affectedRows > 0) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return error;
    }
  }
  else if (what == "updateLogo") {
    try {
      const db = await dbConnection();
      const [storeUpdated] = await db.execute(
        `UPDATE stores SET logo = '${dta.img}' WHERE (id = '${dta.id}');`
      );
      if (storeUpdated.affectedRows > 0) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return error;
    }
  }
  else if (what == "updateTitle") {
    try {
      const db = await dbConnection();
      const [storeUpdated] = await db.execute(
        `UPDATE stores SET store_name = '${dta.title}' WHERE (id = '${dta.id}');`
      );
      if (storeUpdated.affectedRows > 0) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return error;
    }
  }
  else if (what == "updateDesc") {
    try {
      const db = await dbConnection();
      const [storeUpdated] = await db.execute(
        `UPDATE stores SET intro = '${dta.desc}' WHERE (id = '${dta.id}');`
      );
      if (storeUpdated.affectedRows > 0) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return error;
    }
  }
  else if (what == "updateAnnounce") {
    try {
      const db = await dbConnection();
      const [storeUpdated] = await db.execute(
        `UPDATE stores SET announcements = '${dta.announce}' WHERE (id = '${dta.id}');`
      );
      if (storeUpdated.affectedRows > 0) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return error;
    }
  }
};
