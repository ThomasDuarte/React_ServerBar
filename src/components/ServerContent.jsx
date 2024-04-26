import { useContext } from "react";
import { ServerContext } from "../contexts/ServersContext";

function ServerContent() {
  const { dataServers, setDataServers } = useContext(ServerContext);

  let numberServerDisplayed = dataServers.filter(
    (server) => server.isDisplayed
  ).length;
  if (numberServerDisplayed === 0) {
    return (
      <div className="flex-initial  w-full text-center">
        <hr className="h-7 mt-0 ml-0 bg-nav-bar-color border-t-0 "></hr>
        <h1 className="text-3xl font-bold">Welcome</h1>
        <p>Please select a server to view its content.</p>
      </div>
    );
  }
  return dataServers.map((server) => {
    if (server.isDisplayed) {
      return (
        <div className="w-full" key={server.name}>
          <h1 className="text-base font-bold bg-nav-bar-color pl-2 pb-0.5">
            {server.name}
          </h1>
          <img src={server.url} alt={server.name} />
        </div>
      );
    }
  });
}
export default ServerContent;
