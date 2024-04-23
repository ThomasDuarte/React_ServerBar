import React, { useState } from "react";
import Server_Content from "./Server_Content";

function Server_List({ handleServerClickList }) {
  return (
    <ul className="server-list">
      <li onClick={handleServerClickList}>
        <img src="https://via.placeholder.com/150" alt="Server 1" />
      </li>
      <li onClick={handleServerClickList}>
        <img src="https://via.placeholder.com/150" alt="Server 2" />
      </li>
      <li onClick={handleServerClickList}>
        <img src="https://via.placeholder.com/150" alt="Server 3" />
      </li>
      <li onClick={handleServerClickList}>
        <img src="https://via.placeholder.com/150" alt="Server 4" />
      </li>
      <li onClick={handleServerClickList}>
        <img src="https://via.placeholder.com/150" alt="Server 5" />
      </li>
      <li onClick={handleServerClickList}>
        <img src="https://via.placeholder.com/150" alt="Server 6" />
      </li>
      <li onClick={handleServerClickList}>
        <img src="https://via.placeholder.com/150" alt="Server 7" />
      </li>
      <li onClick={handleServerClickList}>
        <img src="https://via.placeholder.com/150" alt="Server 8" />
      </li>
      <li onClick={handleServerClickList}>
        <img src="https://via.placeholder.com/150" alt="Server 9" />
      </li>
    </ul>
  );
}

function Server_Bar() {
  const [serverContent, setServerContent] = useState(false);

  function handleServerClick(event) {
    setServerContent(true);
  }

  return (
    <>
      <div className="container">
        <div className="server-bar">
          <div className="server-bar__header">
            <h1>Servers</h1>
          </div>
          <div className="server-bar_content">
            <Server_List handleServerClickList={handleServerClick} />
          </div>
        </div>

        {serverContent ? <Server_Content /> : null}
      </div>
    </>
  );
}

export default Server_Bar;
