import axios from '@/utils/axios';
// import { blobFrom } from 'node-fetch';

const uploadFile = async (imagePath, mimeType) => {
  // Chuyển đổi tệp hình ảnh thành blob
  const file = await blobFrom(imagePath, mimeType);
  const randomFileName = `image-${Date.now()}-${Math.floor(Math.random() * 1000)}.png`;

  // Tạo đối tượng FormData
  const form = new FormData();
  
  // Đính kèm tệp vào FormData với tên 'files' (tên này có thể thay đổi tùy thuộc vào backend của bạn)
  form.append('files', file, randomFileName);

  // Trả về form data đã được chuẩn bị
  return form;
};
export const registerUser = async (formData) => {
  try {
    const response = await axios.post('wp-json/tattoo/v1/booking', formData);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export const uploadFiles = async (files) => {
  const formData = new FormData();

  // Chỉ cho phép các định dạng ảnh phổ biến
  const allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/jpg',
  ];

  files.forEach((file) => {
    if (allowedTypes.includes(file.type)) {
      formData.append('file[]', file);
    } else {
      console.warn(`File ${file.name || ''} không phải là ảnh hợp lệ, sẽ bị bỏ qua.`);
    }
  });

  try {
    // Gửi yêu cầu POST lên API upload của Strapi
    const response = await axios.post('wp-json/tattoo/v1/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Đảm bảo gửi đúng Content-Type
      },
    });

    console.log('Files uploaded successfully:', response.data);
    return response.data; // Trả về thông tin về các tệp đã tải lên (bao gồm URL, ID,...)
  } catch (error) {
    console.error('Error uploading files:', error.response ? error.response.data : error.message);
    throw error;
  }
};