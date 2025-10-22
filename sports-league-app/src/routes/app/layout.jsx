import PropTypes from "prop-types";
import { Link, Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import styles from "./layout.module.css";
import { QK_API_VERSION } from "../../utils/constants";
import { Skeleton } from "../../ui/components/skeleton/skeleton";
import { getApiVersion } from "../../api/requests/api-version.get";

/**
 * AppLayout component
 * @param {Object} props - The props object
 * @param {React.ReactNode} [props.children] - Optional child components to render
 * @returns {JSX.Element} The rendered AppLayout component
 */
export function AppLayout(props) {
  const getApiVersionQuery = useQuery({
    queryKey: [QK_API_VERSION],
    queryFn: getApiVersion,
  });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="/Images/logo.svg" alt="Logo" className={styles.logo} />
        <nav className={styles.navContainer}>
          <Link to="/schedule" className={styles.navItem}>
            <img src="/Images/schedule.png" alt="Schedule icon" className={styles.navItemIcon} />
            <span className={styles.navItemLabel}>Schedule</span>
          </Link>
          <Link to="/leaderboard" className={styles.navItem}>
            <img
              src="/Images/leaderboard.png"
              alt="Leaderboard icon"
              className={styles.navItemIcon}
            />
            <span className={styles.navItemLabel}>Leaderboard</span>
          </Link>
        </nav>
      </header>
      <main className={styles.main}>{props.children ?? <Outlet />}</main>
      <footer className={styles.footer}>
        <div className={styles.footerApiVersion}>
          API Version:{" "}
          {getApiVersionQuery.isLoading ? (
            <Skeleton width="2rem" height="1.125rem" />
          ) : getApiVersionQuery.isError ? (
            "Unknown"
          ) : (
            getApiVersionQuery.data?.version || "Unknown"
          )}
        </div>
      </footer>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node,
};
