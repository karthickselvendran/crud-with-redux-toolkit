import React from "react";
import "./style.css";

export const Table = (props) => {
  const { headersList = [], tableDatas = [] } = props;
  return (
    <>
      <table>
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
                  <td>{tableData.action}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </>
  );
};
