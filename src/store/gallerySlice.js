// src/store/gallerySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { galleryService } from '@/services/GalleryService';

export const fetchGalleryImages = createAsyncThunk(
    'gallery/fetchGalleryImages',
    async (category) => {
        try {
            const response = await galleryService.getGalleryImages(category);
            return response;
        } catch (error) {
            throw error;
        }
    }
);

const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        images: {
            banner: [],
            about: []
        },
        loading: true,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGalleryImages.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGalleryImages.fulfilled, (state, action) => {
                state.loading = false;
                state.images = action.payload.images;
            })
            .addCase(fetchGalleryImages.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default gallerySlice.reducer;