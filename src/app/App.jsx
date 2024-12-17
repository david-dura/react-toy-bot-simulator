import { Provider } from "react-redux";
import store from "./store/store";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import DisplayInfo from "./components/displayInfo/displayInfo";
import Board from "./components/display/board";
import UserInput from "./components/input/userInput";
import UserOutput from "./components/output/userOutput";

import { APP_DESCRIPTIONS, COMMANDS_DESCRIPTIONS } from "./config/constants";

function App() {
  return (
    <>
      <Provider store={store}>
        <main>
          <header>
            <h1>Toy Robot Simulator</h1>
          </header>
          <div className="fg-1-5 flex" id="core-concepts">
            <DisplayInfo
              title="Description"
              contents={APP_DESCRIPTIONS}
              className="splitWidthInTwo"
            />
            <DisplayInfo
              title="Instructions"
              contents={COMMANDS_DESCRIPTIONS}
              className="splitWidthInTwo"
            />
          </div>
          <div className="fg-1 flex">
            <UserInput />
            <Board />
            <UserOutput />
          </div>
          <ToastContainer />
        </main>
      </Provider>
    </>
  );
}

export default App;
