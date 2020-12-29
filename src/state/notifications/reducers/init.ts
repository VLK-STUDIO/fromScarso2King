import { NotificationState, InitMessages } from "../types";

export const initMessagesCase = (
  state: NotificationState,
  action: InitMessages
) => ({
  ...state,
  messages: {
    ...state.messages,
    ...action.payload,
  },
});
