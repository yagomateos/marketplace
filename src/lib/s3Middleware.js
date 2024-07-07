// lib/s3Middleware.js
import formidable from 'formidable';

export const parseForm = (req) => {
    return new Promise((resolve, reject) => {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            resolve({ fields, files });
        });
    });
};

export const config = {
    api: {
        bodyParser: false,
    },
};
