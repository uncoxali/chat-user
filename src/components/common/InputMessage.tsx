import { Box, FormControl, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { useDispatch, useSelector } from "react-redux";
import { getChats, sendMessage } from "@/store/reducer/chat";
import { useRouter } from "next/router";
import useLocalStorage from "@/hooks/useLocalStorage";


interface Message {
  id: number;
  date: Date;
  text: string;
  SG: boolean;
}

export function InputMessage() {
  const [message, setMessage] = useState("");

  const router = useRouter();

  const { id, name } = router.query;

  const dispatch = useDispatch();
  const getSaveData = localStorage.getItem("data");
  const saved = getSaveData ? JSON.parse(getSaveData) : [];

  const findingUser = saved?.find(
    (item: Message) => Number(item.id) === Number(id)
  );

  const handleMessage = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (message === "") return;

    const newMessage = {
      id: new Date().getTime(),
      date: new Date(),
      text: message,
      SG: false,
    };

    const storedData = JSON.parse(localStorage.getItem("data") || "[]");
    const userIndex = storedData.findIndex(
      (item: { id: number; message: Message[] }) =>
        Number(item.id) === Number(id)
    );

    if (userIndex !== -1) {
      storedData[userIndex].message.push(newMessage);

      localStorage.setItem("data", JSON.stringify(storedData));
    } else {
      const newUser = { id, message: [newMessage] };
      storedData.push(newUser);

      localStorage.setItem("data", JSON.stringify(storedData));
    }

    dispatch(sendMessage(newMessage));
    setMessage("");
  };

  return (
    <form onSubmit={handleMessage}>
      <Box>
        <Box
          sx={{
            background: "#10132e",
            width: "100%",
            position: "absolute",
            bottom: 0,
            height: "70px",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              height: "40px",
              alignItems: "center",
            }}
          >
            <KeyboardVoiceIcon />
            <AttachFileIcon />

            <FormControl sx={{ width: "60%" }}>
              <TextField
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    color: "white",
                  },
                }}
                sx={{
                  height: "40px",
                  width: "100%",
                  background: "#343555",
                  outline: "none",
                  border: "none",
                  borderRadius: "8px",
                  padding: "5px",
                }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormControl>
            <EmojiEmotionsIcon />
          </Box>
        </Box>
      </Box>
    </form>
  );
}
