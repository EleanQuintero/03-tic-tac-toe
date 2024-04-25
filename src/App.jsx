/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './componentes/Square'
import { TURNS } from './constantes'
import { checkWinnerFrom } from './Logic/Board'
import { WinnerModal } from './componentes/WinnerModal'
import { checkEndGame } from './Logic/Board'


function App() {
  const [board, setBoard]  = useState(
    Array(9).fill(null))

    const [turn, setTurn] = useState(TURNS.X)
    //null es que no hay ganador, false es que hay empate 
    const [winner, setWinner] = useState(null)

    

    const resetGame = () => {
      setBoard(Array(9). fill(null))
      setTurn(TURNS.X)
      setWinner(null)
    }

    

    const updateBoard = (index) => {
      //no actualizamos la posicion 
      //si ya tiene algo 
      //por eso usamos el if y el return
      // para evaluar la condicion y terminar la sentencia 
      //cuando esta se cumpla =
      if (board[index] || winner) return
      const newBoard = [...board] //Spreed ope para copia superficial y no mutar el array
      newBoard[index] = turn // X u O
      setBoard(newBoard)
      // cambiar el turno 
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X 
      setTurn(newTurn)
      // revisar si hay ganador 
      const newWinner = checkWinnerFrom(newBoard) 
      if (newWinner) {
        confetti()
        // eslint-disable-next-line no-unused-vars
        setWinner((prevWinner) => {
          return newWinner
        }) 
      } else if (checkEndGame(newBoard)){
        setWinner(false)
      }

      
    }

  return ( 
    <main className='board' >
        <h1>tic tac toe</h1>
        <button onClick={resetGame}>Reset del juego</button>
        <section className='game' >
          {
            board.map((_, index)=>{
              return (
               <Square 
               key={index}
               index={index}
               updateBoard={updateBoard}>
                {board[index]}
                
                </Square>
              )
            })
          }
        </section>
        
        <section className='turn' >
          <Square isSelected={turn === TURNS.X}>
             {TURNS.X}
          </Square>
          <Square isSelected={turn === TURNS. O}>
            {TURNS.O}
          </Square>
        </section>
         <WinnerModal  resetGame={resetGame} winner={winner} >

         </WinnerModal>
    </main>
    )
}

export default App
