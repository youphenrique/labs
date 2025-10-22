import * as React from "react";
import { useQuery } from "@tanstack/react-query";

import styles from "./page.module.css";
import { QK_LEADERBOARD } from "../../../utils/constants";
import LeagueService from "../../../services/LeagueService";
import { Spinner } from "../../../ui/components/spinner/spinner";
import { EmptyState } from "../../../ui/components/empty-state/empty-state";
import { ErrorState } from "../../../ui/components/error-state/error-state";

export function LeaderboardPage() {
  React.useEffect(() => {
    document.title = "Leaderboard | Sports League";
  }, []);

  const getLeaderboardQuery = useQuery({
    queryKey: [QK_LEADERBOARD],
    async queryFn() {
      const leagueService = new LeagueService();
      await leagueService.fetchData();
      return leagueService.getLeaderboard();
    },
  });

  /** @type {Array<Team>} */
  const leaderboard = getLeaderboardQuery.data ?? [];

  return (
    <div className={styles.leaderboardPage}>
      <h1 className={styles.leaderboardHeading}>League Standings</h1>
      <div
        className={styles.tableContainer}
        style={{ overflowY: getLeaderboardQuery.isLoading ? "hidden" : "auto" }}
      >
        {getLeaderboardQuery.isLoading ? (
          <div className={styles.spinnerContainer}>
            <Spinner />
          </div>
        ) : getLeaderboardQuery.isError ? (
          <div className={styles.errorState}>
            <ErrorState />
            <p className={styles.errorStateTitle}>Error fetching leaderboard</p>
            <p>The leaderboard listing failed. Please try again in a few minutes.</p>
          </div>
        ) : leaderboard.length === 0 ? (
          <div className={styles.emptyState}>
            <EmptyState />
            <p className={styles.emptyStateTitle}>No standings available</p>
            <p>All team standings will be listed here.</p>
          </div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.teamNameCol}>Team Name</th>
                <th className={styles.rightCol}>MP</th>
                <th className={styles.desktopOnly}>GF</th>
                <th className={styles.desktopOnly}>GA</th>
                <th className={styles.mobileOnly}>GD</th>
                <th className={styles.pointsCol}>Points</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((team, index) => {
                const gd = team.goalsFor - team.goalsAgainst;
                const rowClass = index % 2 === 1 ? styles.row + " " + styles.evenRow : styles.row;
                return (
                  <tr key={team.teamName} className={rowClass}>
                    <td className={styles.teamNameCol}>
                      <div className={styles.teamCell}>
                        <img
                          src={team.teamFlag}
                          alt={`${team.teamName} flag`}
                          className={styles.teamFlag}
                        />
                        <span className={styles.teamName}>{team.teamName}</span>
                      </div>
                    </td>
                    <td className={styles.rightCol}>
                      <span>{team.matchesPlayed}</span>
                    </td>
                    <td className={styles.rightCol + " " + styles.desktopOnly}>
                      <span>{team.goalsFor}</span>
                    </td>
                    <td className={styles.rightCol + " " + styles.desktopOnly}>
                      <span>{team.goalsAgainst}</span>
                    </td>
                    <td className={styles.rightCol + " " + styles.mobileOnly}>{gd}</td>
                    <td className={styles.pointsCol}>
                      <span className={styles.points}>{team.points}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
