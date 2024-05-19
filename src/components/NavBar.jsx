import React, { useContext, useState } from "react";
import { ServerContext } from "../contexts/ServersContext";

function ServerButton({ url, name, handleServerClick }) {
  return (
    <li className="my-1.5" onClick={handleServerClick}>
      <img className="rounded-full w-14 h-14" src={url} alt={name} />
    </li>
  );
}

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickMenu = () => {
    setIsOpen(!isOpen);
  };

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
      <button
        className="md:hidden text-white ml-2 mt-1 absolute bg-white bg-opacity-10 rounded-xl w-14 h-8"
        onClick={handleClickMenu}
      >
        Menu
      </button>
      <div
        className={`fixed flex flex-col items-center bg-nav-bar-color overflow-y-auto overflow-x-hidden text-gray-100 bg-opacity-20 w-14 mt-10 md:mt-40 ml-1.5 md:ml-16 rounded-full transform transition-transform duration-200 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:translate-y-0 ${isOpen ? "visible" : "invisible"} md:visible`}
        style={{
          scrollbarWidth: "none" /* Firefox */,
          "-ms-overflow-style": "none" /* IE and Edge */,
          maxHeight: "-webkit-fill-available",
          marginBottom: "10rem",
        }}
      >
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
