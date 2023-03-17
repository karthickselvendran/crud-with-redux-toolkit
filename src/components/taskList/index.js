import React, { useState } from "react";
import { Table } from "../table";
import { UpdateTask } from "../updateTask";
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
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen((status) => !status);
  };

  const handleEdit = () => {
    console.log("handleEdit--");
    setIsOpen((status) => !status);
  };

  const handleDelete = () => {
    console.log("handleDelete--");
  };

  return (
    <div className="taskList">
      <h2>TaskList</h2>
      <Table
        className={"taskListTable"}
        headersList={headersList}
        tableDatas={tableDatas}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <UpdateTask isOpen={isOpen} handleClose={handleEdit} />
    </div>
  );
};
