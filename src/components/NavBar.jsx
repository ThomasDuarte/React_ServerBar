import React from "react";
import { useState } from "react";
import Server_Content from "./Server_Content";

function ServerButton({ server, handleServerClick }) {
  return (
    <li onClick={handleServerClick}>
      <img src={server.url} alt={server.name} />
    </li>
  );
}

function NavBar() {
  const [serverContent, setServerContent] = useState(false);

  function handleClick() {
    setServerContent(!serverContent);
  }

  const servers = {
    server1: {
      id: 1,
      name: "Server 1",
      url: "https://via.placeholder.com/150",
    },
    server2: {
      id: 2,
      name: "Server 2",
      url: "https://via.placeholder.com/150",
    },
    server3: {
      id: 3,
      name: "Server 3",
      url: "https://via.placeholder.com/150",
    },
    server4: {
      id: 4,
      name: "Server 4",
      url: "https://via.placeholder.com/150",
    },
    server5: {
      id: 5,
      name: "Server 5",
      url: "https://via.placeholder.com/150",
    },
  };

  return (
    <>
      <div className="container">
        <div className="server-bar">
          <div className="server-bar__header">
            <h1>Servers</h1>
          </div>
          <div className="server-bar_content">
            <ul className="server-bar__list">
              {Object.keys(servers).map((server) => (
                <ServerButton
                  key={server}
                  server={servers[server]}
                  handleServerClick={handleClick}
                />
              ))}
            </ul>
          </div>
        </div>
        {serverContent ? <Server_Content /> : null}
      </div>
    </>
  );
}

export default NavBar;
