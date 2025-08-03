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
    max-width: 600px;
    margin: 40px auto;
    background: #1a1a1a;
    border-radius: 16px;
    padding: 8px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  `,
  item: css`
    margin-bottom: 4px;
    &:last-child {
      margin-bottom: 0;
    }
  `,
  header: css`
    background: #2d2d2d;
    padding: 18px 20px;
    font-weight: 500;
    cursor: pointer;
    color: #e0e0e0;
    border-radius: 12px;
    transition: all 0.2s ease;
    position: relative;
    overflow: hidden;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #6366f1;
      transform: scaleY(0);
      transition: transform 0.2s ease;
    }
    &:hover {
      background: #363636;
      transform: translateX(4px);
    }
  `,
  headerOpen: css`
    background: #363636;
    color: #6366f1;
    transform: translateX(4px);
    &:before {
      transform: scaleY(1);
    }
  `,
  panel: css`
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 0 0 12px 12px;
  `,
  panelOpen: css`
    max-height: 250px;
  `,
  content: css`
    padding: 20px;
    background: #242424;
    color: #b0b0b0;
    line-height: 1.6;
    margin: 0 12px;
    border-radius: 8px;
    margin-bottom: 8px;
  `
};

export const AccordionDark = () => (
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
