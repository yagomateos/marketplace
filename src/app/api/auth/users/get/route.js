// src/app/api/auth/users/get/route.js
import {getData} from '../../../../../lib/middleware/getData';

export async function GET(req) {
    try {
        const data = await getData();
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Internal Server Error', message: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
