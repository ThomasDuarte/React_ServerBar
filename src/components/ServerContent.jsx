import { useContext } from "react";
import { ServerContext } from "../contexts/ServersContext";

function ServerContent() {
  const { dataServers, setDataServers } = useContext(ServerContext);

  let numberServerDisplayed = dataServers.filter(
    (server) => server.isDisplayed
  ).length;
  if (numberServerDisplayed === 0) {
    return (
      <div className="flex-initial  w-full text-center h-screen">
        <hr className="h-7 mt-0 ml-0 bg-nav-bar-color border-t-0 "></hr>
        <h1 className="text-3xl font-bold">Bienvenue</h1>
        <p> Veuillez sélectionner un voyant pour afficher les détails.</p>
      </div>
    );
  }
  return dataServers.map((server) => {
    if (server.isDisplayed) {
      return (
        <div
          className="w-full h-screen text-gray-100 bg-body-color overflow-y-auto"
          style={{ marginLeft: "4.5rem" }}
          key={server.name}
        >
          <h1 className="text-base font-bold bg-nav-bar-color pl-2 pb-0.5">
            {server.name}
          </h1>
          <h1 className="text-3xl font-bold text-center">{server.name}</h1>
          <img
            className="mx-auto max-w-60 max-h-60 mt-2"
            src={server.url}
            alt={server.name}
          />
          <h2 className="text-center mt-2 text-lg font-bold">Description:</h2>
          <div className="mt-2 max-w-4xl mx-auto text-center mb-5">
            {server.description
              .split("\n")
              .filter((line) => !line.includes("-"))
              .map((line, i) => (
                <p key={i} className="text-justify">
                  {line}
                </p>
              ))}
            <ul className="list-disc list-inside inline-block text-left">
              {server.description
                .split("\n")
                .filter((line) => line.includes("-"))
                .map((line, i) => (
                  <li key={i}>{line.replace("-", "")}</li>
                ))}
            </ul>
          </div>
        </div>
      );
    }
  });
}
export default ServerContent;
