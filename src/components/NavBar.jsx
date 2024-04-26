import React from "react";
import { useContext } from "react";
import { ServerContext } from "../contexts/ServersContext";

function ServerButton({ url, name, handleServerClick }) {
  return (
    <li className="my-1.5" onClick={handleServerClick}>
      <img className="rounded-full" src={url} alt={name} />
    </li>
  );
}

function NavBar() {
  const { dataServers, setDataServers } = useContext(ServerContext);

  const handleClick = (serverId) => {
    setDataServers(() => {
      return dataServers.map((server) => {
        if (server.id === serverId) {
          return { ...server, isDisplayed: !server.isDisplayed };
        }
        return { ...server, isDisplayed: false };
      });
    });
  };

  return (
    <>
      <div className="flex-initial bg-nav-bar-color items-center h-screen text-gray-100">
        <div className="text-center font-bold">
          <h1>Servers</h1>
        </div>
        <ul className="w-14 mx-2">
          {dataServers.map((server) => (
            <ServerButton
              key={server.name}
              url={server.url}
              name={server.name}
              handleServerClick={() => handleClick(server.id)}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default NavBar;
