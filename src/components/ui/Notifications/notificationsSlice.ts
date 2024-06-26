import { createSlice } from '@reduxjs/toolkit';

import { LocalStorageKey } from '../../../constants/enums';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from './../../../utils/storageHelpers';
import { Notification } from './types';

function updateLocalStorage(state: Notification[]) {
  setLocalStorageItem(LocalStorageKey.NOTIFICATIONS, JSON.stringify(state));
}

function getInitialState(): Notification[] {
  const savedNotifications = getLocalStorageItem(LocalStorageKey.NOTIFICATIONS);
  try {
    return savedNotifications ? JSON.parse(savedNotifications) : [];
  } catch (error) {
    console.error('Error parsing notifications from localStorage: ', error);
    return [];
  }
}

const initialState = getInitialState();

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action: { payload: Notification }) => {
      if (
        !state.find((notification) => notification.id === action.payload.id)
      ) {
        state.push(action.payload);
        updateLocalStorage(state);
      }
    },
    removeNotification: (state, action: { payload: number }) => {
      const index = state.findIndex(
        (notification) => notification.id === action.payload
      );
      if (index !== -1) {
        state.splice(index, 1);
        updateLocalStorage(state);
      }
    },
    removeAllNotifications: (state) => {
      state = [];
      updateLocalStorage(state);
    },
    markNotificationAsRead: (state, action: { payload: number }) => {
      const notification = state.find(
        (notification) => notification.id === action.payload
      );
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
  },
});

export const {
  addNotification,
  removeNotification,
  markNotificationAsRead,
  markAllNotificationsAsRead,
} = notificationsSlice.actions;

export default notificationsSlice;
