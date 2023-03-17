import React from "react";
import { Table } from "../table";
import "./style.css";

const headersList = [
  {
    key: "s.no",
    value: "S.No",
  },
  {
    key: "name",
    value: "Name",
  },
  {
    key: "phoneNumber",
    value: "Phone Number",
  },
  {
    key: "action",
    value: "Action",
  },
];

const tableDatas = [
  {
    sNo: "1",
    name: "user1",
    phoneNumber: "123",
    action: "Edit",
  },
  {
    sNo: "2",
    name: "user2",
    phoneNumber: "223",
    action: "Edit",
  },
  {
    sNo: "3",
    name: "user3",
    phoneNumber: "323",
    action: "Edit",
  },
  {
    sNo: "4",
    name: "user4",
    phoneNumber: "423",
    action: "Edit",
  },
];

export const TaskList = () => {
  return (
    <div className="taskList">
      <h1>TaskList</h1>
      <Table headersList={headersList} tableDatas={tableDatas} />
    </div>
  );
};
