import { useContext } from "react";
import { ServerContext } from "../contexts/ServersContext";

function ServerContent() {
  const { dataServers, setDataServers } = useContext(ServerContext);

  let numberServerDisplayed = dataServers.filter(
    (server) => server.isDisplayed
  ).length;
  if (numberServerDisplayed === 0) {
    return (
      <div className="flex flex-col items-center justify-center w-full text-center h-screen overflow-y-auto text-white max-w-5xl mx-auto bg-black bg-opacity-50 rounded-xl p-5">
        <h1 className="text-6xl font-bold mb-5">Bienvenue</h1>
        <p className="text-xl mt-3">
          Veuillez sélectionner un voyant pour afficher les détails.
        </p>
        <h2 className="text-3xl font-bold mt-10">
          Qu'est-ce que notre application ?
        </h2>
        <p className="text-xl mt-3">
          Nous fournissons une plateforme pour ceux qui souhaitent connaitre la
          signification des voyants pouvant être observés sur leur tableau de
          bord.
        </p>
        <h2 className="text-3xl font-bold mt-10">
          Comment utiliser notre application
        </h2>
        <ol className="text-center text-xl mt-3 ml-6 list-none">
          <li>Étape 1 : Sélectionner un voyant</li>
          <li>Étape 2 : Lire les détails</li>
        </ol>
        <h3 className="text-2xl font-bold mt-10">
          Si vous souhaitez retourner sur cette page, veuillez cliquer sur le
          voyant déjà sélectionné dans la barre de navigation.
        </h3>
      </div>
    );
  }
  return dataServers.map((server) => {
    if (server.isDisplayed) {
      return (
        <div
          className="w-full h-screen text-white overflow-y-auto bg-black bg-opacity-50 max-w-5xl mx-auto rounded-xl"
          key={server.name}
        >
          <h1 className="text-4xl font-bold text-center mt-10 md:mt-5">
            {server.name}
          </h1>
          <img
            className="mx-auto max-w-60 max-h-60 mt-5 mb-5 rounded-full"
            src={server.url}
            alt={server.name}
          />
          <h2 className="text-center mt-2 text-3xl font-bold">Description:</h2>
          <div className="text-xl mt-2 px-5 mx-auto max-w-5xl text-center mb-5">
            {server.description
              .split("\n")
              .filter((line) => !line.includes("-"))
              .map((line, i) => (
                <p key={i} className="text-justify">
                  {line}
                </p>
              ))}

            <ul className="list-image-none list-inside inline-block text-center">
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
