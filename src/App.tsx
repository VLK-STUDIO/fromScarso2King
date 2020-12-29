import React from "react";
import "./App.css";
import { Layout, MainTitle, Creator } from "./components";
import { setConfiguration } from "react-grid-system";
import { GoodMorningList } from "./components/GoodMorningList/GoodMorningList";
import { NotificationList } from "./components/Notifications";

setConfiguration({ containerWidths: [540, 740, 960, 1140, 1240] });

function App() {
  return (
    <>
      <NotificationList />
      <Layout>
        <MainTitle />
        <Creator />
        <GoodMorningList />
      </Layout>
    </>
  );
}

export default App;
