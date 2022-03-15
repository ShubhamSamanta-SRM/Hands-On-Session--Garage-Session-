import React from 'react'

const APITableRow = (props) => {
    console.log("APITableRow has been called")
  return (
    <tr>
    <th scope="row">{props.el.id}</th>
    <td>{props.el.userId}</td>
    <td>{props.el.title}</td>
    <td>{props.el.body}</td>
  </tr>
  )
}

export default APITableRow