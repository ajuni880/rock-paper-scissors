import React, { useContext } from 'react';
import { useGame } from '../hooks/useGame';

export const GameContext = React.createContext();

export default function GameProvider({ children }) {
  const { state, dispatch } = useGame();

  const updateState = (action) => {
    dispatch(action);
  }

  return (
    <GameContext.Provider value={{ state, updateState }}>
      {children}
    </GameContext.Provider>
  );
}

export const withGame = (Comp) => {
  return (props) => {
    const context = useContext(GameContext);
    return <Comp {...props} game={context} />
  }
}