import { h } from "preact";
import { signal } from "@preact/signals";
import { css } from "goober";

const sections = [
  { id: "one", title: "Section 1", content: "Content for section one." },
  { id: "two", title: "Section 2", content: "Content for section two." },
  { id: "three", title: "Section 3", content: "Content for section three." },
];

const openSection = signal(null);

const styles = {
  accordion: css`
    max-width: 800px;
    margin: 20px auto;
    font-family: 'Courier New', monospace;
    background: #000;
    border: 2px solid #00ff00;
    padding: 20px;
  `,
  item: css`
    border: 1px solid #00ff00;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  `,
  header: css`
    background: #000;
    color: #00ff00;
    padding: 15px;
    font-weight: bold;
    cursor: pointer;
    border-bottom: 1px solid #00ff00;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 1px;
    &:before {
      content: '> ';
    }
    &:hover {
      background: #003300;
    }
  `,
  headerOpen: css`
    background: #003300;
    &:before {
      content: '▼ ';
    }
  `,
  panel: css`
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s linear;
    background: #000;
  `,
  panelOpen: css`
    max-height: 200px;
  `,
  content: css`
    padding: 15px;
    color: #00ff00;
    line-height: 1.4;
    &:before {
      content: '$ ';
      color: #ffff00;
    }
  `
};

export const AccordionBrutalist = () => (
  <div className={styles.accordion}>
    {sections.map(({ id, title, content }) => {
      const isOpen = openSection.value === id;
      return (
        <div className={styles.item} key={id}>
          <div
            className={`${styles.header} ${isOpen ? styles.headerOpen : ""}`}
            onClick={() => (openSection.value = isOpen ? null : id)}
          >
            {title}
          </div>
          <div className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}>
            <div className={styles.content}>{content}</div>
          </div>
        </div>
      );
    })}
  </div>
);
