import React from "react";
import { Header, AddTask, TaskList, UpdateTask } from "./components";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <AddTask />
      <TaskList />
      {/* <UpdateTask /> */}
    </div>
  );
}

export default App;
