import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const hiddenArticlesSlice = createSlice({
    name: 'hiddenArticles',
    initialState,
    reducers: {
        hideArticle: (state, action) => {
            state.value.push(action.payload);
        },
        ShowHiddenArticles: (state) => {
            state.value = [];
        },
    },
});

export const { hideArticle, ShowHiddenArticles } = hiddenArticlesSlice.actions;
export default hiddenArticlesSlice.reducer;