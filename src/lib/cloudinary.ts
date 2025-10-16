import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dgxzna8ux',
  api_key: '762267378439548',
  api_secret: 'kqbOXqNGS-v0bA6sykSAUYfY_M4',
});

export default cloudinary;

// Helper function to upload file to Cloudinary
export async function uploadToCloudinary(fileBuffer: Buffer, fileName: string, mimeType: string) {
  try {
    // Only handle images
    if (!mimeType.startsWith('image/')) {
      throw new Error('Only image files are supported');
    }
    
    // Clean filename for public_id (remove special characters)
    const cleanFileName = fileName.replace(/[^a-zA-Z0-9.-]/g, '_');
    
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          resource_type: 'image',
          public_id: `portfolio-images/${Date.now()}-${cleanFileName}`,
          use_filename: true,
          unique_filename: false,
          transformation: [
            { width: 1200, height: 1200, crop: 'limit', quality: 'auto:good' }
          ]
        },
        (error, result) => {
          if (error) {
            console.error('Cloudinary upload error:', error);
            reject(error);
          } else {
            resolve(result);
          }
        }
      ).end(fileBuffer);
    });
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
}

// Helper function to generate optimized image URLs
export function getOptimizedImageUrl(cloudinaryUrl: string, width = 800, height = 600): string {
  return cloudinaryUrl.replace('/upload/', `/upload/w_${width},h_${height},c_fit,q_auto:good/`);
}
