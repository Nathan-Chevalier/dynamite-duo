const database = {
  heroes: [
    {
      id: 1,
      name: "Dynoguy",
      power: "Fire Blasts",
    },
    {
      id: 2,
      name: "Hyperspeed",
      power: "Super speed",
    },
  ],
  villains: [
    {
      id: 1,
      name: "Hamhock",
      power: "Instant Human Marination",
    },
    {
      id: 2,
      name: "Barbenheimer",
      power: "Pink Radiation",
    },
  ],
};

export const getHeroes = () => {
  return database.heroes.map((hero) => ({ ...hero }));
};

export const getVillains = () => {
  return database.villains.map((villain) => ({ ...villain }));
};
