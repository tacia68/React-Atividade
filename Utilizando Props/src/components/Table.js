import React, { Component } from "react";
class Table extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>e-mail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Natacsha</td>
            <td>nat@mail.com</td>
          </tr>
          <tr>
            <td>Shermam Tacia</td>
            <td>tacia@mail.com</td>
          </tr>
          <tr>
            <td>Helen</td>
            <td>helen@mail.com</td>
          </tr>
          <tr>
            <td>Rosa</td>
            <td>roda@mail.com</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default Table;
