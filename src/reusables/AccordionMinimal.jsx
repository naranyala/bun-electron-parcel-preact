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
   container: css`
     border: 1px solid gray;
        background: white;
padding: 20px;
border-radius: 20px;
  `,
  accordion: css`
    max-width: 500px;
    margin: 40px auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  `,
  item: css`
    border-bottom: 1px solid #e5e5e5;
    &:last-child {
      border-bottom: none;
    }
  `,
  header: css`
    padding: 20px 0;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #333;
    transition: color 0.2s ease;
    &:hover {
      color: #000;
    }
    &:after {
      content: '+';
      font-size: 18px;
      font-weight: 300;
      transition: transform 0.2s ease;
    }
  `,
  headerOpen: css`
    &:after {
      transform: rotate(45deg);
    }
  `,
  panel: css`
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  `,
  panelOpen: css`
    max-height: 200px;
  `,
  content: css`
    padding-bottom: 20px;
    color: #666;
    line-height: 1.6;
  `
};

export const AccordionMinimal = () => (
  <div className={`${styles.accordion} ${styles.container}`}>
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
