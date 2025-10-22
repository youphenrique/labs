import * as React from "react";

import { AppLayout } from "./layout";
import styles from "./not-found.module.css";

export function NotFoundPage() {
  React.useEffect(() => {
    document.title = "404: This page could not be found";
  }, []);

  return (
    <AppLayout>
      <div className={styles.container}>
        <img src="/Images/404.png" alt="404 Error" className={styles.image} />
      </div>
    </AppLayout>
  );
}
