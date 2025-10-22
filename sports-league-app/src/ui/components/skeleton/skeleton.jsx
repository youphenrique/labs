import styles from "./skeleton.module.css";

/**
 * @param {Object} props
 * @param {string} [props.width=""]
 * @param {string} [props.height=""]
 * @param {string} [props.className=""]
 */
export function Skeleton(props) {
  const { className = "", width = "100%", height = "1rem" } = props;
  return <div className={`${styles.skeleton} ${className}`} style={{ width, height }} />;
}
