import React from "react";
import { useContext } from "react";
import { ServerContext } from "../contexts/ServersContext";

function ServerButton({ url, name, handleServerClick }) {
  return (
    <li className="my-1.5" onClick={handleServerClick}>
      <img className="rounded-full w-14 h-14" src={url} alt={name} />
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
      <div
        className="fixed top-0 left-0 flex flex-col items-center bg-nav-bar-color h-screen overflow-y-auto text-gray-100"
        style={{
          scrollbarWidth: "none" /* Firefox */,
          "-ms-overflow-style": "none" /* IE and Edge */,
        }}
      >
        <div className="text-center font-bold">
          <h1>Voyants</h1>
        </div>
        <ul className="w-14 mx-2 mt-1">
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
