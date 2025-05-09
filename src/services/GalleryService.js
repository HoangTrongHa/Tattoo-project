import axios from '@/utils/axios';

export const galleryService = {
  getGalleryImages: async (category) => {
      try {
          const response = await axios.get(`/wp-json/gallery/v1/images/${category}`);
          return response.data;
      } catch (error) {
          throw error;
      }
  }
};