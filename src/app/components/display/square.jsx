import { getBoardWidthDistribution } from "../../../utils/shared";

export default function Square() {
  return (
    <div
      key={"" + rowIndex + squareIndex}
      className={"" + (rowIndex + squareIndex === 0 ? "squareNone" : "square")}
      style={{
        height: getBoardWidthDistribution("y"),
        width: getBoardWidthDistribution("x"),
        backgroundColor:
          (rowIndex + squareIndex) % 2 === 0 ? "#e0dcce" : "#2b2b28",
      }}
    >
      {rowIndex + squareIndex === 0 && <Robot />}
    </div>
  );
}
