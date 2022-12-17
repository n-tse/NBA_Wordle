import playerBank from "./PlayerBank.txt";

export const boardDefault = [
  []
];

export const generatePlayerSet = async () => {
  let playerSet;
  let todaysPlayer;
  await fetch(playerBank)
    .then((response) => response.text())
    .then((result) => {
      const playerArr = result.split("\n");
      todaysPlayer = playerArr[Math.floor(Math.random() * playerArr.length)];
      playerSet = new Set(playerArr);
    });

    console.log("today's mysteryPlayer: " + todaysPlayer);
  return { playerSet, todaysPlayer };
};