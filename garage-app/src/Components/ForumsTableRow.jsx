import React from "react";

const ForumsTableRow = (props) => {
  return (
    <>
      <tr>
        <th scope="row">{props.el.id}</th>
        <td>{props.el.title}</td>
        <td>{props.el.author}</td>
        <td>{props.el.postDate}</td>
        <td>{props.el.postCategory}</td>
        <td>{props.el.content}</td>
      </tr>
    </>
  );
};

export default ForumsTableRow;
