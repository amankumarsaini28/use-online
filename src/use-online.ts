import { useSyncExternalStore } from "react";

function getSnapshot(): boolean {
  return navigator.onLine;
}

type Callback = () => void;
function subscribe(callback: Callback) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);

  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

export function useOnline(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot);
}
