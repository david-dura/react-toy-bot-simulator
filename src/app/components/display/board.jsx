import { useCallback, lazy, Suspense } from "react";
import { BOARD_SIZE } from "../../config/constants";
import {
  getArrayFromKeysFromInt,
  getBoardWidthDistribution,
} from "../../utils/utils";

const Robot = lazy(() => import("./robot"));

export default function Board() {
  const boardRows = getArrayFromKeysFromInt(BOARD_SIZE.x);
  const boardCols = getArrayFromKeysFromInt(BOARD_SIZE.y);

  const generateRows = useCallback(
    (rowIndex) => (
      <div key={rowIndex} className="row flex">
        {boardCols.map((squareIndex) => (
          <div
            key={"" + rowIndex + squareIndex}
            className={"square"}
            style={{
              height: getBoardWidthDistribution("y"),
              width: getBoardWidthDistribution("x"),
              backgroundColor:
                (rowIndex + squareIndex) % 2 === 0 ? "#e0dcce" : "#AAAA28",
            }}
          ></div>
        ))}
      </div>
    ),
    [boardCols]
  );

  return (
    <div className="board splitWidthInTwo flex flex-column height-100">
      {boardRows.reverse().map(generateRows)}
      {
        <Suspense fallback={<p>Loading Robot ...</p>}>
          <Robot />
        </Suspense>
      }
    </div>
  );
}
