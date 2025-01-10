import { Readable } from 'stream';
import AWS from 'aws-sdk';

export default async function UploadImg(imgFormDta) {
    const s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'eu-west-2',
    });

    try {
        // Extract the image file from FormData
        const imageFile = imgFormDta.get('file'); // Assuming 'file' is the key used in FormData

        // Read the file as a buffer (you might need to read it differently depending on the environment)
        const fileBuffer = await imageFile.arrayBuffer();

        // Define the S3 upload parameters
        const uploadParams = {
            Bucket: 'bucket-qlrc5d', // Your S3 bucket name
            Key: imageFile.name, // The file name to save as in S3
            Body: Buffer.from(fileBuffer), // Convert arrayBuffer to Buffer
            ContentType: imageFile.type, // Set the content type based on the file type
        };

        // Upload the image to S3
        const uploadResult = await s3.upload(uploadParams).promise();
        console.log('Image uploaded successfully:', uploadResult.Location);

        // Optionally, update the user data with the S3 URL
        return uploadResult.Location;

    } catch (error) {
        console.error('Error uploading image or updating user:', error);
        throw error;
    }

}


export async function UploadMultipleImgs(formData) {
    const s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'eu-west-2', // Your region
    });

    try {
        const filesArray = [];
        
        // Collect all file-like entries
        for (let [key, value] of formData.entries()) {
            if (value && typeof value === 'object' && value.arrayBuffer) {
                filesArray.push(value);
            }
        }

        if (filesArray.length === 0) {
            throw new Error('No valid files found in the FormData object.');
        }

        const uploadedLocations = [];

        for (const file of filesArray) {
            const fileBuffer = await file.arrayBuffer();

            const uploadParams = {
                Bucket: 'bucket-qlrc5d', // Your S3 bucket name
                Key: file.name, // File name for S3
                Body: Buffer.from(fileBuffer),
                ContentType: file.type, // Content type
            };

            const uploadResult = await s3.upload(uploadParams).promise();
            uploadedLocations.push(uploadResult.Location);
        }

        console.log('All images uploaded successfully:', uploadedLocations);
        return uploadedLocations;

    } catch (error) {
        console.error('Error uploading images:', error);
        throw error;
    }
}