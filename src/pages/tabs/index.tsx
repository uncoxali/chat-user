import { Box, Typography } from "@mui/material";
import React from "react";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { DataEntity } from "@/interface/GetData";
import { Badge } from "@/components/common/Badge";

import dynamic from "next/dynamic";

const ChatNavigator = dynamic(
  () => import("@/components/common/ChatNavigator"),
  { ssr: false }
);

const useStyles = makeStyles({
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: "#5300cf",
      height: 3,
    },
    "& .MuiTab-root.Mui-selected": {
      color: "white",
    },
    color: "white",
  },
  tab: {
    flex: 1,
    color: "white",
    margin: "auto",
  },
  tabpanel: {
    height: "calc(100vh - 121px)",
    background: "#01041f",
    overflowY: "auto",
    color: "white",
  },
  badge: {
    textAlign: "center",
    color: "white",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function TableGroup() {
  const classes = useStyles();

  const [value, setValue] = React.useState("3");
  const [data, setData] = React.useState<DataEntity[]>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const { data } = await axios.get("https://reqres.in/api/users?page=1");
      setData(data?.data);
    } catch (err) {
      console.log("%cindex.tsx line:49 err", "color: #007acc;", err);
    }
  }

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            background: "#1f2247",
          }}
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{ width: "100%", color: "white" }}
            className={classes.tabs}
          >
            <Tab className={classes.tab} label="گروه ها" value="1" />
            <Tab className={classes.tab} label="کانال ها" value="2" />
            <Tab
              className={classes.tab}
              label={
                <Box className={classes.badge}>
                  <Typography ml={1}>کاربرها</Typography>
                  <Badge length={data?.length} />
                </Box>
              }
              value="3"
            />
          </TabList>
        </Box>
        <TabPanel className={classes.tabpanel} value="1">
          صفحه خالی
        </TabPanel>
        <TabPanel className={classes.tabpanel} value="2">
          صفحه خالی
        </TabPanel>
        <TabPanel className={classes.tabpanel} value="3">
          {data?.map((item) => (
            <ChatNavigator
              key={item?.id}
              id={item?.id}
              avatar={item?.avatar}
              name={item?.first_name}
              text="test descriptions"
              // lengthNotification={data?.length}
            />
          ))}
        </TabPanel>
      </TabContext>
    </Box>
  );
}
