import { NotificationState } from '../types/general';
import { InitMessages } from '../types/init';

export const initMessagesCase = (state: NotificationState, action: InitMessages) => ({
  ...state,
  messages: {
    ...state.messages,
    ...action.payload,
  }
})