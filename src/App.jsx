import "./style-reset.css"

import { h, render, Fragment } from 'preact';
import {signal, computed, effect} from "@preact/signals"
import {styles} from "./App.styles.js"


export function App() {
    const count = signal(0)
    const double = computed(() => count.value * 2) 

    const increment = () => count.value++

    effect(() => {
        console.log(`${count.value} - ${double.value}`);
    })

    return (
        <div className={`${styles.container} ${styles.animateBg}`}>
            <div className={styles.header}>hello from jsx</div>
            <button className={styles.btn} onClick={increment}>
              click {count} - {double}
            </button>


        </div>
    )
}

render(<App />, document.getElementById('app'));
