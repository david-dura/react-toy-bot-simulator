import { useSelector } from "react-redux";
import robot_vacuum from "../../assets/robot_vacuum.png";
import { getBoardWidthDistribution } from "../../utils/utils";
import { BOARD_SIZE } from "../../config/constants";
import { motion } from "framer-motion";

export default function Robot() {
  const robotState = useSelector((state) => state.toyRobot);

  if (!robotState.isPlaced) return null;

  return (
    <motion.div
      className="row flex robotContainer"
      style={{
        height: getBoardWidthDistribution("y"),
        width: getBoardWidthDistribution("x"),
      }}
      animate={{
        rotate: robotState.orientationDegree,
        x: `${robotState.coordinates.x * 100}%`,
        y: `${(BOARD_SIZE.y - 1 - robotState.coordinates.y) * 100}%`,
        scale: 1,
      }}
    >
      <img
        src={robot_vacuum}
        alt="A little Robot vacuum"
        className="width-100"
      ></img>
    </motion.div>
  );
}
