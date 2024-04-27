import { createContext, useState } from "react";

export const ServerContext = createContext();

export const ServerProvider = ({ children }) => {
  const [dataServers, setDataServers] = useState([
    {
      id: 1,
      name: "Voyant moteur",
      url: "https://www.allogarage.fr/images/articles/voyant_moteur.png",
      description: `Le voyant moteur indique un dysfonctionnement du moteur ou du système d'émission. Il est crucial de consulter un professionnel pour diagnostiquer la panne.\n
      Il est possible de continuer à rouler avec le voyant moteur allumé, mais il est recommandé de consulter un professionnel rapidement. Si le voyant clignote, cela peut indiquer un problème grave qui pourrait endommager le convertisseur catalytique. Il est recommandé de s'arrêter immédiatement.\n
      Voici quelques causes possibles:\n
      - Problème de bougies d'allumage\n
      - Problème de bobine d'allumage\n
      - Problème de sonde lambda\n
      - Problème de catalyseur\n
      - Problème de vanne EGR\n
      - Problème de débitmètre d'air\n
      - Problème de capteur de température\n
      - Problème de capteur PMH (Point Mort Haut)\n
      - Problème de capteur PMB (Point Mort Bas)\n
      - Problème de capteur de pression d'air\n
      - Problème de capteur de pression de suralimentation\n
      - Problème de capteur de position papillon\n
      - Problème de capteur de position d'arbre à came\n
      - Problème de capteur de position vilebrequin\n
      - Problème de capteur de pression de carburant\n
      - Problème de capteur de pression de rail\n
      - Problème de capteur de pression de climatisation\n
      - Problème de capteur de pression de boîte de vitesse\n
      - Problème de capteur de pression d'huile\n
      - Problème de capteur de pression de direction assistée\n
      - Problème de capteur de pression de suspension pneumatique\n
      - Problème de capteur de pression de suspension hydraulique\n
      - Problème de capteur de position de pédale d'accélérateur\n
      - Problème de capteur de position de pédale de frein\n
      - Problème de capteur de vitesse du véhicule\n
      - Problème de capteur de pression absolue du collecteur\n
      - Problème de capteur de température du liquide de refroidissement du moteur\n
      - Problème de capteur de température de l'air d'admission\n
      - Problème de capteur de débit d'air massique\n
      - Problème de capteur de pression de carburant\n
      - Problème de capteur de pression de turbo\n`,
      isDisplayed: false,
    },
    {
      id: 2,
      name: "Prechauffage moteur (Diesel)",
      url: "https://cdn-s-www.ledauphine.com/images/fdd5a11e-39b6-49d0-99d1-1c3c92056f7d/NW_raw/le-voyant-de-prechauffage-photo-adobe-stock-1579086492.jpg",
      description: `Le voyant de préchauffage indique que le moteur diesel est en cours de préchauffage. Il est recommandé d'attendre que le voyant s'éteigne avant de démarrer le moteur.\n`,
      isDisplayed: false,
    },
    {
      id: 3,
      name: "Liquide de refroidissement moteur (Température moteur basse)",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMelCUFCI2efTbpRAxtpHjytvRMr1ZDss-4-gdeOEDOA&s",
      description: `Le voyant de liquide de refroidissement indique que la température du moteur est trop basse. Il est recommandé de laisser le moteur tourner jusqu'à ce que la température du moteur augmente.\n`,
      isDisplayed: false,
    },
    {
      id: 4,
      name: "ESP (Contrôle de stabilité)",
      url: "https://www.idgarages.com/_astro_statics/voyant_ESP_a1f3354e18_23cYt7.webp",
      description: `Le voyant ESP indique un dysfonctionnement du système de contrôle de stabilité.
      Il est possible de continuer à rouler avec le voyant ESP allumé, mais il est recommandé de consulter un professionnel rapidement.\n
      Ce voyant peut également s'allumer en cas de perte d'adhérence. Il est recommandé de réduire la vitesse et de conduire prudemment.\n
      Il peut aussi s'allumer si vous avez désactivé le système ESP. Il est recommandé de réactiver le système pour une conduite plus sûre.\n
      Voici quelques causes possibles:\n
      - Problème de capteur de vitesse de roue\n
      - Problème de capteur de lacet\n
      - Problème de capteur de braquage\n
      - Problème de capteur d'accélération transversale\n
      - Problème de capteur de pression de frein\n
        `,
      isDisplayed: false,
    },
    {
      id: 5,
      name: "Plein phares allumés",
      url: "https://storage.googleapis.com/cdn-ex-nihilo-nov-19-fast/production/2023/11/Capture-d%C3%A9cran-2023-11-20-151833.png",
      description: `Le voyant de plein phares indique que les pleins phares sont allumés. Si vous rencontrez un autre véhicule, il est recommandé de passer en feux de croisement pour ne pas éblouir le conducteur.\n`,
      isDisplayed: false,
    },
    {
      id: 6,
      name: "Batterie",
      url: "https://autobacs-autobacs-fr-storage.omn.proximis.com/Imagestorage/images/0/220/6141a19a7ae34_327190_ring_chargeur_batterie_12v_4a_3.jpg",
      description: `Le voyant de batterie indique un dysfonctionnement du système de charge de la batterie. Il est recommandé de consulter un professionnel pour diagnostiquer la panne.\n
      Il est possible de continuer à rouler avec le voyant de batterie allumé, mais il est recommandé de consulter un professionnel rapidement. Si le voyant clignote, cela peut indiquer un problème grave qui pourrait endommager la batterie. Il est recommandé de s'arrêter immédiatement.\n
      Voici quelques causes possibles:\n
      - Problème de batterie\n
      - Problème d'alternateur\n
      - Problème de courroie d'alternateur\n
      - Problème de régulateur de tension\n
      - Problème de fusible\n
      - Problème de câblage\n
      - Problème de connecteur\n
      - Problème de capteur de température de batterie\n
      - Problème de capteur de température d'alternateur\n
      - Problème de capteur de température de régulateur de tension\n
      - Problème de capteur de température de fusible\n
      - Problème de capteur de température de câblage\n
      - Problème de capteur de température de connecteur\n
      - Problème de capteur de tension de batterie\n
      - Problème de capteur de tension d'alternateur\n
      - Problème de capteur de tension de régulateur de tension\n
      - Problème de capteur de tension de fusible\n
      - Problème de capteur de tension de câblage\n
      - Problème de capteur de tension de connecteur\n
      - Problème de capteur de courant de batterie\n
      - Problème de capteur de courant d'alternateur\n
      - Problème de capteur de courant de régulateur de tension\n
      - Problème de capteur de courant de fusible\n
      - Problème de capteur de courant de câblage\n
      - Problème de capteur de courant de connecteur\n
      - Problème de capteur de puissance de batterie\n
      - Problème de capteur de puissance d'alternateur\n
      `,
      isDisplayed: false,
    },
    {
      id: 7,
      name: "Frein à main",
      url: "https://www.trodo.fr/media/magefan_blog/1_4-Brake_Warning_Light.png",
      description: `Le voyant de frein à main indique que le frein à main est serré. Il est recommandé de desserrer le frein à main avant de conduire.\n
      Si le voyant reste allumé alors que le frein à main est desserré, il est recommandé de consulter un professionnel pour diagnostiquer la panne.\n
      Voici quelques causes possibles:\n
      - Problème de câble de frein à main\n
      - Problème de levier de frein à main\n
      - Problème de capteur de frein à main\n
      - Problème de contacteur de frein à main\n
      - Problème de fusible de frein à main\n
      - Problème de relais de frein à main\n
      - Problème de connecteur de frein à main\n
      - Problème de capteur de température de frein à main\n
      - Problème de capteur de tension de frein à main\n
      - Problème de capteur de courant de frein à main\n
      - Problème de capteur de puissance de frein à main\n
      `,
      isDisplayed: false,
    },
    {
      id: 8,
      name: "Huile moteur - voyant rouge",
      url: "https://cdn-s-www.lalsace.fr/images/505e6f82-adc7-48f1-8241-c96e81525c51/NW_raw/l-huile-est-primordiale-pour-le-moteur-si-ce-voyant-est-rouge-arretez-vous-1636472095.jpg",
      description: `Le voyant d'huile moteur rouge indique un niveau d'huile moteur trop bas ou une pression d'huile moteur trop basse. Il est recommandé de s'arrêter immédiatement et de vérifier le niveau d'huile moteur.\n
      Si le niveau d'huile moteur est bas, il est recommandé de rajouter de l'huile moteur. Si le voyant reste allumé après avoir rajouté de l'huile moteur, il est recommandé de consulter un professionnel pour diagnostiquer la panne.\n
      Voici quelques causes possibles:\n
      - Problème de fuite d'huile\n
      - Problème de joint de carter d'huile\n
      - Problème de joint de cache-culbuteurs\n
      - Problème de joint de filtre à huile\n
      - Problème de joint de bouchon de vidange\n
      - Problème de joint de pompe à huile\n
      - Problème de joint de filtre à huile\n
      - Problème de joint de jauge à huile\n
      - Problème de joint de sonde de pression d'huile\n
      - Problème de joint de sonde de température d'huile\n
      - Problème de joint de sonde de niveau d'huile\n
      - Problème de joint de sonde de qualité d'huile\n
      - Problème de joint de sonde de débit d'huile\n
      - Problème de joint de sonde de viscosité d'huile\n
      - Problème de joint de sonde de densité d'huile\n
      - Problème de joint de sonde de couleur d'huile\n
      - Problème de joint de sonde de pureté d'huile\n
      `,
      isDisplayed: false,
    },
    {
      id: 9,
      name: "Huile moteur - voyant orange",
      url: "https://www.oovango.com/wp-content/uploads/2022/07/Voyant-huile-moteur-jaune.jpeg",
      description: `Le voyant d'huile moteur orange indique un dysfonctionnement du système de lubrification. Il est recommandé de consulter un professionnel pour diagnostiquer la panne.\n
      Il est possible de continuer à rouler avec le voyant d'huile moteur orange allumé, mais il est recommandé de consulter un professionnel rapidement. Si le voyant clignote, cela peut indiquer un problème grave qui pourrait endommager le moteur. Il est recommandé de s'arrêter immédiatement.\n
      Voici quelques causes possibles:\n
      - Problème de capteur de pression d'huile\n
      - Problème de capteur de température d'huile\n
      - Problème de capteur de niveau d'huile\n
      - Problème de capteur de qualité d'huile\n
      - Problème de capteur de débit d'huile\n
      - Problème de capteur de viscosité d'huile\n
      - Problème de capteur de densité d'huile\n
      - Problème de capteur de couleur d'huile\n
      `,
      isDisplayed: false,
    },
    {
      id: 10,
      name: "Filtre à particules",
      url: "https://www.firststop.fr/adobe/dynamicmedia/deliver/dm-aid--cbd90f6c-eb9a-4e05-a8ce-1fe3b8063c22/voyant-fap.jpg?preferwebp=true&quality=100",
      description: `Le voyant de filtre à particules indique un dysfonctionnement du système de filtration des particules. Il est recommandé de consulter un professionnel pour diagnostiquer la panne.\n
      Il est possible de continuer à rouler avec le voyant de filtre à particules allumé, mais il est recommandé de consulter un professionnel rapidement. Si le voyant clignote, cela peut indiquer un problème grave qui pourrait endommager le moteur. Il est recommandé de s'arrêter immédiatement.\n
      Voici quelques causes possibles:\n
      - Problème de capteur de pression de filtre à particules\n
      - Problème de capteur de température de filtre à particules\n
      - Problème de capteur de niveau de filtre à particules\n
      - Problème de capteur de qualité de filtre à particules\n
      - Problème de capteur de débit de filtre à particules\n
      - Problème de capteur de viscosité de filtre à particules\n
      - Problème de capteur de densité de filtre à particules\n
      - Problème de capteur de couleur de filtre à particules\n
      `,
      isDisplayed: false,
    },
    {
      id: 11,
      name: "Airbag",
      url: "https://wordpress-content.vroomly.com/wp-content/uploads/2023/03/shutterstock_1162493965.jpg",
      description: `Le voyant d'airbag indique un dysfonctionnement du système d'airbag. Il est recommandé de consulter un professionnel pour diagnostiquer la panne.\n
      Il est possible de continuer à rouler avec le voyant d'airbag allumé, mais il est recommandé de consulter un professionnel rapidement. Si le voyant clignote, cela peut indiquer un problème grave qui pourrait endommager le système d'airbag. Il est recommandé de s'arrêter immédiatement.\n
      Voici quelques causes possibles:\n
      - Problème de capteur de choc\n
      - Problème de capteur de décélération\n
      - Problème de capteur de position\n
      - Problème de capteur de pression\n
      - Problème de capteur de température\n
      - Problème de capteur de qualité\n
      - Problème de capteur de débit\n
      - Problème de capteur de viscosité\n
      - Problème de capteur de densité\n
      - Problème de capteur de couleur\n
      `,
      isDisplayed: false,
    },
    {
      id: 12,
      name: "Direction assistée",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO2jiupfe8V8zOlvaWGut3R0a0EJUwQ79Bs3A-ovwYgGnsn_sU4M79-CueXoCBhVXXVKQ&usqp=CAU",
      description: `Le voyant de direction assistée indique un dysfonctionnement du système de direction assistée. Il est recommandé de consulter un professionnel pour diagnostiquer la panne.\n
      Il est possible de continuer à rouler avec le voyant de direction assistée allumé, mais la conduite peut être plus difficile. Il est recommandé de conduire prudemment et de faire réparer le système dès que possible.\n
      Voici quelques causes possibles:\n
      - Problème de pompe de direction assistée\n
      - Problème de courroie de direction assistée\n
      - Problème de fluide de direction assistée\n
      - Problème de capteur de direction assistée\n
      - Problème de crémaillère de direction\n
      - Problème de colonne de direction\n
      - Problème de cardan de direction\n
      - Problème de boîtier de direction\n
      - Problème de rotule de direction\n
      - Problème de biellette de direction\n
      `,
      isDisplayed: false,
    },
    {
      id: 13,
      name: "Filtre à carburant",
      url: "https://cdn.actronics.nl/image/art-systeme-de-carburant.png",
      description: `Le voyant de filtre à carburant indique un dysfonctionnement du système de filtration du carburant. Il est recommandé de consulter un professionnel pour diagnostiquer la panne.\n
      Il est possible de continuer à rouler avec le voyant de filtre à carburant allumé, mais il est recommandé de conduire prudemment et de faire réparer le système dès que possible.\n
      Voici quelques causes possibles:\n
      - Problème de filtre à carburant encrassé\n
      - Problème de capteur de pression de carburant\n
      - Problème de capteur de température de carburant\n
      - Problème de capteur de débit de carburant\n
      - Problème de capteur de qualité de carburant\n
      - Problème de capteur de viscosité de carburant\n
      - Problème de capteur de densité de carburant\n
      - Problème de capteur de couleur de carburant\n
      `,
      isDisplayed: false,
    },
    {
      id: 14,
      name: "Niveau de carburant bas",
      url: "https://cdn.actronics.nl/image/art-niveau-de-carburant.png",
      description: `Le voyant de niveau de carburant bas indique que le niveau de carburant dans le réservoir est bas. Il est recommandé de faire le plein dès que possible.\n
      Si le voyant reste allumé après avoir fait le plein, il peut indiquer un dysfonctionnement du capteur de niveau de carburant. Il est recommandé de consulter un professionnel pour diagnostiquer la panne.\n
      Voici quelques causes possibles:\n
      - Problème de capteur de niveau de carburant\n
      - Problème de flotteur de carburant\n
      - Problème de jauge de carburant\n
      - Problème de connecteur de capteur de carburant\n
      - Problème de câblage de capteur de carburant\n
      - Problème de fusible de capteur de carburant\n
      `,
      isDisplayed: false,
    },
    {
      id: 15,
      name: "Antiblocage des roues (ABS)",
      url: "https://www.garage-du-faubourg.fr/blog/wp-content/uploads/2022/12/abs.png",
      description: `Le voyant ABS indique un dysfonctionnement du système antiblocage des roues. Il est recommandé de consulter un professionnel pour diagnostiquer la panne.\n
      Il est possible de continuer à rouler avec le voyant ABS allumé, mais il est recommandé de conduire prudemment, car le système antiblocage des roues peut ne pas fonctionner correctement.\n
      Voici quelques causes possibles:\n
      - Problème de capteur de vitesse de roue\n
      - Problème de calculateur ABS\n
      - Problème de câblage du système ABS\n
      - Problème de fusible ABS\n
      - Problème de connecteur ABS\n
      - Problème de relais ABS\n
      - Problème de pompe ABS\n
      `,
      isDisplayed: false,
    },
    {
      id: 16,
      name: "Feux de détresse",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/A19_Hazard_warning.svg/640px-A19_Hazard_warning.svg.png",
      description: `Le voyant de feux de détresse indique que les feux de détresse sont activés. Il est recommandé d'utiliser les feux de détresse uniquement en cas d'urgence ou de panne pour signaler votre présence aux autres conducteurs.\n
      Laissez les feux de détresse activés jusqu'à ce que la situation d'urgence soit résolue ou que la panne soit réparée.\n`,
      isDisplayed: false,
    },
    {
      id: 17,
      name: "Régulateur de vitesse",
      url: "https://upload.wikimedia.org/wikipedia/commons/1/15/Cruise_Control.svg",
      description: `Le voyant de régulateur de vitesse indique que le régulateur de vitesse est activé. Il est recommandé d'utiliser le régulateur de vitesse uniquement sur les routes appropriées et dans des conditions de circulation sûres.\n
      Assurez vous de désactiver le régulateur de vitesse lorsque vous conduisez dans des zones de circulation dense ou lorsque les conditions de la route sont mauvaises.\n`,
      isDisplayed: false,
    },
    {
      id: 18,
      name: "Phares antibrouillard",
      url: "https://www.outilsobdfacile.fr/blog/image/voyant-anti-brouillard-arriere.jpg",
      description: `Le voyant de phares antibrouillard indique que les phares antibrouillard sont activés. Il est recommandé d'utiliser les phares antibrouillard uniquement par temps de brouillard intense ou de forte pluie pour améliorer la visibilité.\n
      Assurez vous de désactiver les phares antibrouillard lorsque les conditions météorologiques s'améliorent pour éviter d'éblouir les autres conducteurs.\n`,
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
