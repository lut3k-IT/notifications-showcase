import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LocalStorageKey } from '../../constants/enums';
import { getLocalStorageItem, setLocalStorageItem } from '../../utils/storageHelpers';
import { INotification } from './types';

function updateLocalStorage(state: INotification[]) {
  setLocalStorageItem(LocalStorageKey.NOTIFICATIONS, JSON.stringify(state));
}

function getInitialState(): INotification[] {
  const savedNotifications = getLocalStorageItem(LocalStorageKey.NOTIFICATIONS);
  try {
    return savedNotifications ? JSON.parse(savedNotifications) : [];
  } catch (error) {
    console.error('Error parsing notifications from localStorage: ', error);
    return [];
  }
}

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: getInitialState(),
  reducers: {
    addNotification: (state, action: PayloadAction<INotification>) => {
      if (!state.find((notification) => notification.id === action.payload.id)) {
        state.push(action.payload);
        updateLocalStorage(state);
      }
    },
    removeNotification: (state, action: PayloadAction<INotification['id']>) => {
      const index = state.findIndex((notification) => notification.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        updateLocalStorage(state);
      }
    },
    removeAllNotifications: (state) => {
      state.length = 0;
      updateLocalStorage(state);
    },
    markNotificationAsRead: (state, action: PayloadAction<INotification['id']>) => {
      const notification = state.find((notification) => notification.id === action.payload);
      if (notification) {
        notification.status = 'read';
        updateLocalStorage(state);
      }
    },
    markAllNotificationsAsRead: (state) => {
      state.forEach((notification) => {
        notification.status = 'read';
      });
      updateLocalStorage(state);
    },
    markNotificationAsUnread: (state, action: PayloadAction<INotification['id']>) => {
      const notification = state.find((notification) => notification.id === action.payload);
      if (notification) {
        notification.status = 'unread';
        updateLocalStorage(state);
      }
    }
  }
});

export const {
  addNotification,
  removeNotification,
  removeAllNotifications,
  markNotificationAsRead,
  markAllNotificationsAsRead,
  markNotificationAsUnread
} = notificationsSlice.actions;

export default notificationsSlice;
