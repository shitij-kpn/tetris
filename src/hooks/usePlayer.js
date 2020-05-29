import { useState, useCallback } from "react";

import { randomTetromino, TETROMINOS } from "./../tetrominos";
import { stage_width } from "../gameHelpers";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  const updatePlayerPos = ({ x, y, collided = false }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: {
        x: stage_width / 2 - 2,
        y: 0,
      },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);
  return [player, resetPlayer, updatePlayerPos];
};
