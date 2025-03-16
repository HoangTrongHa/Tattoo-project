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
    const data = {
      data: formData // Bao bọc formData trong trường 'data'
    };
    const response = await axios.post('/api/user-registrations', data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export const uploadFiles = async (files) => {
  const formData = new FormData();

  // Lặp qua từng tệp và thêm vào FormData
  files.forEach((file) => {
    formData.append('files', file); // 'files' là trường mà Strapi yêu cầu trong API
  });

  try {
    // Gửi yêu cầu POST lên API upload của Strapi
    const response = await axios.post('/api/upload', formData, {
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