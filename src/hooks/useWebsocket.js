import { useEffect, useRef } from "react";

const useWebsocket = ({ url }) => {
  const ws = useRef(null);

  useEffect(() => {
    const socket = new WebSocket(url);

    ws.current = socket;

    return () => {
      socket.close();
    };
  }, [url]);

  return { socket: ws.current };
};

export default useWebsocket;
