import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const showSideBar = (state: RootState) => state.ui.showSideBar;
export const getRole = (state:RootState) =>state.auth.user.role
export const getAuthenticated = (state:RootState) => state.auth.isAuthenticated
export const getUser = (state:RootState) => state.auth.user

// export const countSelector = createSelector(showSideBar, state => state);
