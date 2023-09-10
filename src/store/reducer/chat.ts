import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "..";

type TChat = { id: number | string; text: string; SG: boolean; date?: string };

export type CounterState = {
  chatInfo: TChat | null;
  chats: TChat[];
};

const initialState: CounterState = {
  chatInfo: null,
  chats: [],
};

export const counterSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      const isRepeat = state?.chats?.find(
        (item) => item.id == action.payload.id
      );
      if (!isRepeat) {
        state.chats?.push(action.payload);
      }
    },
    setUserChat: (state, action) => {
      state.chats = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { sendMessage, setUserChat } = counterSlice.actions;

export const getChats = (state: RootState) => state.chatReducer.chats;

export default counterSlice.reducer;
