import "./style-reset.css"

import { h, render, Fragment } from 'preact';
import {signal, computed, effect} from "@preact/signals"
import {styles} from "./App.styles.js"

import {Navbar} from "./reusables/Navbar.jsx"
import {Modal} from "./reusables/Modal.jsx"
import {BottomSheets} from "./reusables/BottomSheets.jsx"

import {AccordionMinimal} from "./reusables/AccordionMinimal.jsx"
import {AccordionCards} from "./reusables/AccordionCards.jsx"
import {AccordionDark} from "./reusables/AccordionDark.jsx"
import {AccordionBrutalist} from "./reusables/AccordionBrutalist.jsx"

export const App = () => {
    const count = signal(0)
    const double = computed(() => count.value * 2) 

    const increment = () => count.value++

    effect(() => {
        console.log(`${count.value} - ${double.value}`);
    })

    return (
        <div className={`${styles.container} ${styles.animateBg}`}>

        <Navbar/>

            <div className={styles.header}>hello from jsx</div>
            <button className={styles.btn} onClick={increment}>
              click {count} - {double}
            </button>

<Modal/>
            <BottomSheets/>

            <AccordionMinimal/>
            <AccordionCards/>
            <AccordionDark/>
            <AccordionBrutalist/>

        </div>
    )
}

render(<App />, document.getElementById('app'));
