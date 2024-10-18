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
        region: 'eu-west-2',
    });

    try {
        // Extract files from FormData object
        const filesArray = [];
        for (let [key, value] of formData.entries()) {
            if (value instanceof File) { // Only handle file entries
                filesArray.push(value);
            }
        }

        if (filesArray.length === 0) {
            throw new Error('No files found in the FormData object.');
        }

        // Map over the files array to upload each file
        const promises = filesArray.map(async (file) => {
            if (file instanceof File) { // Ensure it's a File object
                // Read the file as an array buffer
                const fileBuffer = await file.arrayBuffer();

                // Define S3 upload parameters for each file
                const uploadParams = {
                    Bucket: 'bucket-qlrc5d', // Your S3 bucket name
                    Key: file.name, // File name to save as in S3
                    Body: Buffer.from(fileBuffer), // Convert arrayBuffer to Buffer
                    ContentType: file.type, // Set the content type
                };

                // Upload the file and return the promise
                return await s3.upload(uploadParams).promise();
            }
        });

        // Wait for all upload promises to resolve
        const uploadResults = await Promise.all(promises);
        console.log('All images uploaded successfully:', uploadResults);

        // Optionally, return the S3 URLs of the uploaded images
        const uploadedLocations = uploadResults.map(result => result.Location);
        return uploadedLocations;

    } catch (error) {
        console.error('Error uploading images:', error);
        throw error;
    }
}
