import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
    endpoint: process.env.LIGHTSAIL_ENDPOINT,
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

export const uploadFileToS3 = async (file) => {
    const fileName = `${Date.now()}-${file.originalFilename}`;
    const command = new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: fileName,
        Body: file.filepath,
        ContentType: file.mimetype,
    });

    try {
        await s3Client.send(command);

        const getObjectCommand = new GetObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: fileName,
        });

        const url = await getSignedUrl(s3Client, getObjectCommand, { expiresIn: 3600 });
        return url;
    } catch (err) {
        console.error("Error uploading file to S3", err);
        throw err;
    }
};
