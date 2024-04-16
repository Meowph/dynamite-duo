const database = {
  heroes: [
      {
          id: 1,
          name: "Dynoguy",
          power: "Fire blasts"
      },
      {
          id: 2,
          name: "Hyperspeed",
          power: "Super speed"
      }
  ],
  villains: [
    {

      id: 3,
      name: "Nuraku",
      power: "Miasma Field"
    },
    {

      id: 4,
      name: "Shredder",
      power: "Weapon Suit"
    }
  ]
}
{

}

export const getVillains = () => {
  return database.villains.map(villain => ({...villain}))
}

export const getHeroes = () => {
  return database.heroes.map(hero => ({...hero}))
}