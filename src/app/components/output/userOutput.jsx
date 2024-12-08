import { useSelector } from "react-redux";

export default function UserOutput() {
  const commands = useSelector((state) => state.toyRobot.commands);

  return (
    <div className="splitWidthInFour flex flex-column output">
      {commands.map((command, index) => (
        <div key={index} className="">
          {command}
        </div>
      ))}
    </div>
  );
}
