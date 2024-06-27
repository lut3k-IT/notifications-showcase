import { configureStore } from '@reduxjs/toolkit';

import notificationsSlice from '../features/notifications/notificationsSlice';

export const store = configureStore({
  reducer: {
    notifications: notificationsSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
