import { createReducer, getType } from '@reduxjs/toolkit';
import * as actions from '../actions';
import * as sendNotificationCases from './send';
import * as removeNotificationCases from './remove';
import * as initMessagesCases from './init';

const INITIAL_STATE = {
  messages: {},
  notifications: {}
};

export const notificationRootReducer = createReducer(
  INITIAL_STATE,
  (builder) => {
    builder
      .addCase(
        getType(actions.sendNotificationSync),
        sendNotificationCases.sendNotificationSyncCase,
      )
      .addCase(
        getType(actions.removeNotification),
        removeNotificationCases.removeNotificationCase,
      )
      .addCase(
        getType(actions.initMessages),
        initMessagesCases.initMessagesCase,
      );
  },
);
