let dispatchGlobal;

export function setToastDispatcher(dispatch) {
  dispatchGlobal = dispatch;
}

export function toast(message, type = "info") {
  if (!dispatchGlobal) return;

  const id = Date.now();
  dispatchGlobal({
    type: "ADD_TOAST",
    payload: { id, message, type },
  });

  setTimeout(() => {
    dispatchGlobal({ type: "REMOVE_TOAST", payload: id });
  }, 4000);
}
