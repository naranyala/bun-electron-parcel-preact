
import { h } from "preact";
import { signal } from "@preact/signals";
import { css } from "goober";

const showModal = signal(false); // modal toggle

const styles = {
  overlay: css`
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  modal: css`
    background: white;
    border-radius: 8px;
    padding: 20px;
    max-width: 400px;
    width: 90%;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    position: relative;
  `,
  closeBtn: css`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
  `,
  triggerBtn: css`
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    background: white;
    cursor: pointer;

    &:hover {
      background: lightgray;
    }
  `
};

export const Modal = () => (
  <div>
    <button
      className={styles.triggerBtn}
      onClick={() => (showModal.value = true)}
    >
      Open Modal
    </button>

    {showModal.value && (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <button
            className={styles.closeBtn}
            onClick={() => (showModal.value = false)}
            aria-label="Close"
          >
            ❌
          </button>
          <h2>Standalone Modal</h2>
          <p>This modal toggles via signals and lives on its own.</p>
        </div>
      </div>
    )}
  </div>
);
