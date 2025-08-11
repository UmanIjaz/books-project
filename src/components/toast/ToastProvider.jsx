import { useReducer, useEffect } from "react";
import { toastReducer, initialState } from "./toastReducer";
import { setToastDispatcher } from "./toast";
import ToastContainer from "./ToastContainer";

function ToastProvider({ children }) {
  const [toasts, dispatch] = useReducer(toastReducer, initialState);

  useEffect(() => {
    setToastDispatcher(dispatch);
  }, []);

  return (
    <>
      {children}
      <ToastContainer toasts={toasts} />
    </>
  );
}

export default ToastProvider;
