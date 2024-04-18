import { ITool } from "@/services/api";
import ToolInList from "./tools-list-item";
import styles from "./tools-list.module.scss";

interface ToolsListProps {
  tools: ITool[];
  categoryName: string;
}

function ToolsList({ tools, categoryName }: ToolsListProps) {
  return (
    <section className={styles.tools}>
      <ul className={styles.tools__list}>
        {tools.map((tool) => (
          <li className={styles.tools__item} key={tool.id}>
            <ToolInList
              tool={tool}
              url={"/" + categoryName + "/" + tool.name}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ToolsList;
