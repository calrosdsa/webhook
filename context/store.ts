import authSlice from "./slices/auth-slice";
import {configureStore} from '@reduxjs/toolkit';
import uiSlice from "./slices/ui-slice";

const store = configureStore(
    {
        reducer:{
            auth:authSlice.reducer,
            ui:uiSlice.reducer,
        }
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store