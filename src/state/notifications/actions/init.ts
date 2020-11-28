import { createAction } from '@reduxjs/toolkit';
import { InitMessagesPayload, InitMessagesTypes } from '../types/init';

export const initMessages = createAction<InitMessagesPayload>(InitMessagesTypes.SYNC);

