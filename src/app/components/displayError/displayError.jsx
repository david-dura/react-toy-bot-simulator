import { useSelector } from "react-redux";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const DisplayErrorModal = forwardRef(function ResultModal(
  { onReset },
  ref
) {
  const error = useSelector((state) => state.appActions.errorMessage);
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You {result}!</h2>}
      {!userLost && <h2>Your score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime}</strong> second
        {targetTime > 1 ? "s" : ""}
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainigTime} seconds left.</strong>
      </p>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
