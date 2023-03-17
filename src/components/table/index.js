import React from "react";
import "./style.css";

export const Table = (props) => {
  const {
    headersList = [],
    tableDatas = [],
    className = "",
    handleEdit = () => {},
    handleDelete = () => {},
  } = props;
  return (
    <>
      <table className={className}>
        <thead>
          <tr>
            {headersList?.length
              ? headersList.map((tableHead) => <th>{tableHead.value}</th>)
              : null}
          </tr>
        </thead>
        <tbody>
          {tableDatas?.length
            ? tableDatas.map((tableData) => (
                <tr>
                  <td>{tableData.sNo}</td>
                  <td>{tableData.name}</td>
                  <td>{tableData.phoneNumber}</td>
                  {/* <td>{tableData.action}</td> */}
                  <td className="actions">
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </>
  );
};
