import { useEffect, useState } from "react";
import useWebsocket from "../../hooks/useWebsocket";
import styles from "./styles.module.scss"

export default function Counter() {
  const [count, setCount] = useState(0);
  const { socket } = useWebsocket({ url: "/socket" });

  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => {
        if (event.data === "counter") {
          socket.send(count);
        }
      };
    }
  }, [count, socket]);

  return (
    <div className={styles.counter}>
      <span>{count}</span>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
}
