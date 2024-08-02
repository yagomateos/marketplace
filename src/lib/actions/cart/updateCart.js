'use server'
import { updateFromCart } from "../../middleware/cart/updateCart";

export async function updateFromCartFunc(itemId , newQty) {
    console.clear()
    console.log(itemId)
  try {
    const updated = await updateFromCart(itemId , newQty)
    console.log(updated)
    return updated
  } catch (error) {
    throw error
  }
}
