import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { appActions } from "../../reducers/appActionsReducer";
import { toyRobotActions } from "../../reducers/toyRobotReducer";
import { handleCommands } from "../../actions/robot";

export default function UserInput() {
  const appIsWorking = useSelector((state) => state.appActions.appIsWorking);
  const dispatch = useDispatch();
  const formRef = useRef();

  function handleFormSubmit(event) {
    event.preventDefault();

    dispatch(appActions.clearErrors());

    const formData = new FormData(event.target);
    const rawData = Object.fromEntries(formData.entries());
    const commandsArr = rawData.commands
      .split("\n")
      .filter((command) => command)
      .map((command) => command.toUpperCase());

    handleCommands(commandsArr);
    event.target.reset();
  }

  function handleReset() {
    formRef.current.reset();
    dispatch(appActions.setAppIsWorking(false));
    dispatch(toyRobotActions.reset());
    dispatch(appActions.clearErrors());
  }

  return (
    <div className="splitWidthInFour flex flex-column">
      <h2>Input your commands:</h2>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-column fg-1"
        ref={formRef}
      >
        <textarea
          name="commands"
          className="height-100 width-100 min-width-100 max-width-100 user-input"
          disabled={appIsWorking ? "disabled" : null}
        />
        <div className="flex user-buttons-container">
          <motion.button
            type="submit"
            className="splitWidthInTwo user-buttons"
            whileTap={appIsWorking ? undefined : { scale: 0.8 }}
            // whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.1 }}
            disabled={appIsWorking ? "disabled" : null}
          >
            Execute
          </motion.button>
          <motion.button
            type="button"
            onClick={handleReset}
            className="splitWidthInTwo user-buttons"
            whileTap={{ scale: 0.8 }}
            // whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.1 }}
          >
            Reset
          </motion.button>
        </div>
      </form>
    </div>
  );
}
