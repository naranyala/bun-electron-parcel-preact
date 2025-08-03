
import { h } from "preact";
import { signal } from "@preact/signals";
import { css } from "goober";

const isSheetOpen = signal(false);

const styles = {
  sheetOverlay: css`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0;
    pointer-events: none;
    transition: height 0.3s ease;
    z-index: 1000;
  `,
  sheetVisible: css`
    height: 100vh;
    pointer-events: auto;
    background: rgba(0, 0, 0, 0.3);
  `,
  sheet: css`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    max-height: 60vh;
    background: white;
    border-radius: 16px 16px 0 0;
    padding: 20px;
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(100%);
    transition: transform 0.3s ease;
  `,
  sheetSlideUp: css`
    transform: translateY(0%);
  `,
  triggerBtn: css`
    margin-top: 40px;
    padding: 10px 20px;
    border-radius: 20px;
    background: white;
    border: none;
    cursor: pointer;

    &:hover {
      background: lightgray;
    }
  `
};

export const BottomSheets = () => (
  <div>
    <button
      className={styles.triggerBtn}
      onClick={() => (isSheetOpen.value = true)}
    >
      Show Bottom Sheet
    </button>

    <div
      className={`${styles.sheetOverlay} ${
        isSheetOpen.value ? styles.sheetVisible : ""
      }`}
      onClick={() => (isSheetOpen.value = false)}
    >
      <div
        className={`${styles.sheet} ${
          isSheetOpen.value ? styles.sheetSlideUp : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Bottom Sheet</h2>
        <p>This drawer slides up from the bottom.</p>
        <button
          className={styles.triggerBtn}
          onClick={() => (isSheetOpen.value = false)}
        >
          Close
        </button>
      </div>
    </div>
  </div>
);
