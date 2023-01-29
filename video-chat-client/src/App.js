import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Room from "./components/Room";
import styled from "styled-components";
import Chat from "./components/Chat";
import BottomBar from "./components/BottomBar";
import VideoCard from "./components/VideoCard";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "calc(8px + 2vmin)",
          textAlign: "center",
        }}
      >
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/room/:roomId" component={Room} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/videocard" component={VideoCard} />
          {/* <Route exact path="/bottombar" component={BottomBar} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
