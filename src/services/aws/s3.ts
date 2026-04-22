import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import slugify from "slugify";

const s3 = new S3Client({
  region: process.env.AWS_S3_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_KEY_ID!,
  },
});

export const generateImageURL = async (
  file: File,
  title: string,
): Promise<string> => {
  const slugify_title = slugify(title, { lower: true });
  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `${slugify_title}-${Date.now()}-${file.name}`;

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET!,
    Key: fileName,
    Body: buffer,
    ContentType: file.type,
  });

  await s3.send(command);

  const imageURL = `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_S3_REGION}.amazonaws.com/${fileName}`;

  return imageURL; // Final image url
};
