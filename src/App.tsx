import styles from "./styles/button.module.scss";
import {useState} from "react";

export const App = () => {
    const [count, setCount] = useState(0)
    const increase = () => setCount(count + 1)
    const decrease = () => setCount(count - 1)

    return(
        <div className={'app'}>
            <h2>Counter: {count}</h2>
            <button className={styles.accent} onClick={increase}>increase</button>
            <button className={styles.danger} onClick={decrease}>decrease</button>
        </div>
    )
}
