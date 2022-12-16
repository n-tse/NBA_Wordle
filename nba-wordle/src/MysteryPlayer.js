import playerBank from "./Data.json";

export const boardDefault = [
  []
];

export const generatePlayerSet = async () => {
  let playerSet;
  let todaysPlayer;
  await fetch(playerBank)
    .then((response) => response.text())
    .then((result) => {
      const playerArr = result.split(",");
      todaysPlayer = playerArr[Math.floor(Math.random() * playerArr.length)];
      playerSet = new Set(playerArr);
    });
  return { playerSet, todaysPlayer };
};