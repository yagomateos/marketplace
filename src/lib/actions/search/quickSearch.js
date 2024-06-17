'use server'

import { QuickSearchMiddleware } from "../../middleware/search/quickSearchMiddleware";

export const quickSearch = async (query) => {
    try {
        let result = await QuickSearchMiddleware(query)
        return result;
    } catch (error) {
        throw error;
    }
}