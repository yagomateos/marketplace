import dbConnection from "../../base/db";

export const getOrder = async (userId) => {
  try {
    const db = await dbConnection();
    // change this later
    const [results] = await db.execute(`SELECT 
    o.id AS order_id,
    o.user_id,
    o.date_time,
    o.status,
    o.shipping_date, -- Include other necessary fields from orders
    GROUP_CONCAT(oi.product_id SEPARATOR ', ') AS item_names, -- Aggregates item names from order_items
    GROUP_CONCAT(p.name SEPARATOR ', ') AS product_names, -- Aggregates product names from products
    GROUP_CONCAT(oi.qty SEPARATOR ', ') AS item_quantities, -- Aggregates item quantities
    GROUP_CONCAT(p.regular_price SEPARATOR ', ') AS product_prices, -- Aggregates product prices
    GROUP_CONCAT(p.main_image_url SEPARATOR ', ') AS product_images,
    GROUP_CONCAT(p.description SEPARATOR ', ') AS product_desc
FROM 
    marketplace.orders o
LEFT JOIN 
    marketplace.order_items oi 
ON 
    o.id = oi.order_id
LEFT JOIN 
    marketplace.products p
ON 
    oi.product_id = p.id
WHERE 
    o.user_id = ${userId}
GROUP BY 
    o.id, o.user_id;
`);
    await db.end();

    if (results.length > 0) {
      return results;
    } else {
      throw new Error("no orders found");
    }
  } catch (error) {
    throw error;
  }
};

export const getOrderStatus = async (orderId) => {
  try {
    const db = await dbConnection();
    const [results] = await db.execute(`SELECT * FROM  marketplace.orders WHERE ID = ${orderId}`);
    await db.end();

    if (results.length > 0) {
      return results;
    } else {
      throw new Error("no orders found");
    }
  } catch (error) {
    throw error;
  }
};
