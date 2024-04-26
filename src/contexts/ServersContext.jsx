import { createContext, useState } from "react";

export const ServerContext = createContext();

export const ServerProvider = ({ children }) => {
  const [dataServers, setDataServers] = useState([
    {
      id: 1,
      name: "Server 1",
      url: "https://www.allogarage.fr/images/articles/voyant_moteur.png",
      isDisplayed: false,
    },
    {
      id: 2,
      name: "Server 2",
      url: "https://cdn-s-www.ledauphine.com/images/fdd5a11e-39b6-49d0-99d1-1c3c92056f7d/NW_raw/le-voyant-de-prechauffage-photo-adobe-stock-1579086492.jpg",
      isDisplayed: false,
    },
    {
      id: 3,
      name: "Server 3",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMelCUFCI2efTbpRAxtpHjytvRMr1ZDss-4-gdeOEDOA&s",
      isDisplayed: false,
    },
    {
      id: 4,
      name: "Server 4",
      url: "https://www.idgarages.com/_astro_statics/voyant_ESP_a1f3354e18_23cYt7.webp",
      isDisplayed: false,
    },
    {
      id: 5,
      name: "Server 5",
      url: "https://storage.googleapis.com/cdn-ex-nihilo-nov-19-fast/production/2023/11/Capture-d%C3%A9cran-2023-11-20-151833.png",
      isDisplayed: false,
    },
  ]);

  return (
    <ServerContext.Provider
      value={{
        dataServers,
        setDataServers,
      }}
    >
      {children}
    </ServerContext.Provider>
  );
};
