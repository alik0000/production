import styles from "../../styles/button.module.scss";
import {useState} from "react";

export default function MainPage() {

    const [count, setCount] = useState(0)
    const increase = () => setCount(count + 1)
    const decrease = () => setCount(count - 1)

    return(
        <div>
            <h2>Main page</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ut!
            </p>
            <div>
                <h2>Counter: {count}</h2>
                <button className={styles.accent} onClick={increase}>increase</button>
                <button className={styles.danger} onClick={decrease}>decrease</button>
            </div>
        </div>
    )
}
