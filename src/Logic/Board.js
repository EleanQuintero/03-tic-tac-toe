import { WINNER_COMBOS } from "../constantes"
export const checkWinnerFrom = (boardToCheck) => {
    // se revisan todas las combinaciones ganadoras con el 
    // bucle for a continuacion y este determina el ganador
    // evaluando en us condicion la posc del jugador en a,b,c
    for (const combo of WINNER_COMBOS) {
      const [a,b,c] = combo 
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) 
      {
        return boardToCheck[a]
      }
    }
    // si no hay ganador devuelve null 
    return null 
  } 

  export const checkEndGame = (newBoard) =>{
    //revisamos si hay empate
    //si no hay mas espacios vacios en el tablero
    return newBoard.every((Square) => Square !== null)
  }