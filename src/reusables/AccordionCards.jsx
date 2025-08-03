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
    max-width: 700px;
    margin: 30px auto;
    gap: 16px;
    display: flex;
    flex-direction: column;
  `,
  item: css`
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: all 0.2s ease;
    &:hover {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
      transform: translateY(-1px);
    }
  `,
  header: css`
    padding: 20px 24px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #1a1a1a;
    border-radius: 12px;
    transition: background-color 0.2s ease;
    &:hover {
      background: #f8f9fa;
    }
  `,
  headerOpen: css`
    background: #f0f7ff;
    color: #0066cc;
  `,
  arrow: css`
    width: 20px;
    height: 20px;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: rotate(45deg);
    transition: transform 0.2s ease;
  `,
  arrowOpen: css`
    transform: rotate(225deg);
  `,
  panel: css`
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  `,
  panelOpen: css`
    max-height: 300px;
  `,
  content: css`
    padding: 0 24px 24px 24px;
    color: #555;
    line-height: 1.6;
  `
};

export const AccordionCards = () => (
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
            <div className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`} />
          </div>
          <div className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}>
            <div className={styles.content}>{content}</div>
          </div>
        </div>
      );
    })}
  </div>
);
