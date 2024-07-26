'use server'
import { deleteFromCart } from "../../middleware/cart/deleteFromCart";

export async function deleteFromCartFunc(itemId) {
    console.clear()
    console.log(itemId)
  try {
    const deleted = await deleteFromCart(itemId)
    console.log(deleted)
    return deleted
  } catch (error) {
    throw error
  }
}
