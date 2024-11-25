'use server'
import { deleteFromCart } from "../../middleware/cart/deleteFromCart";

export async function deleteFromCartFunc(userId , itemId) {
    console.clear()
    console.log(itemId)
  try {
    const deleted = await deleteFromCart(userId , itemId)
    console.log(deleted)
    return deleted
  } catch (error) {
    throw error
  }
}
