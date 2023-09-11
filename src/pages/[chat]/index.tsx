import React, { useEffect, useRef } from "react";
import ProfileHeader from "./ProfileHeader";
import dynamic from "next/dynamic";
import { InputMessage as BoxMessage } from "@/components/common/InputMessage";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getChats, setUserChat } from "@/store/reducer/chat";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Message from "@/components/common/Message";

const useStyles = makeStyles({
  chatBox: {
    height: "calc(100vh - 70px)",
    background: "#01041f",
    backgroundImage: `url(/images/bag-chat.jpg)`,
    overflowY: "auto",
    position: "relative",
  },
});

interface Message {
  id: number;
  date: Date;
  text: string;
  SG: boolean;
}

export default function Main() {
  const classes = useStyles();

  const getMessage = useSelector(getChats);

  const router = useRouter();

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  });

  const { id, name } = router.query;

  const getHistoryChat = localStorage.getItem("data");
  const historyChat = getHistoryChat ? JSON.parse(getHistoryChat) : [];
  const findHistory = historyChat.find(
    (item: { id: number; message: Message[] }) => Number(item.id) === Number(id)
  );

  return (
    <div>
      <ProfileHeader />
      <Box className={classes.chatBox}>
        <Box
          ref={chatContainerRef}
          sx={{ maxHeight: "calc(100vh - 140px)", overflowY: "auto" }}
        >
          {findHistory?.message?.map((item: Message) => (
            <Message
              SG={item.SG}
              date={item.date}
              text={item.text}
              key={item.id}
            />
          ))}
          <BoxMessage />
        </Box>
      </Box>
    </div>
  );
}
