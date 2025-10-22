import * as React from "react";
import { useQuery } from "@tanstack/react-query";

import styles from "./page.module.css";
import { QK_MATCHES } from "../../../utils/constants";
import LeagueService from "../../../services/LeagueService";
import { Spinner } from "../../../ui/components/spinner/spinner";
import { EmptyState } from "../../../ui/components/empty-state/empty-state";
import { ErrorState } from "../../../ui/components/error-state/error-state";

export function SchedulePage() {
  React.useEffect(() => {
    document.title = "Schedule | Sports League";
  }, []);

  const getAllMatchesQuery = useQuery({
    queryKey: [QK_MATCHES],
    async queryFn() {
      const leagueService = new LeagueService();
      await leagueService.fetchData();
      return leagueService.getMatches();
    },
  });

  /** @type {Array<Match>} */
  const allMatches = getAllMatchesQuery.data ?? [];

  return (
    <div className={styles.schedulePage}>
      <h1 className={styles.scheduleHeading}>League Schedule</h1>
      <div
        className={styles.scheduleTableContainer}
        style={{ overflowY: getAllMatchesQuery.isLoading ? "hidden" : "auto" }}
      >
        {getAllMatchesQuery.isLoading ? (
          <div className={styles.spinnerContainer}>
            <Spinner />
          </div>
        ) : getAllMatchesQuery.isError ? (
          <div className={styles.errorState}>
            <ErrorState />
            <p className={styles.errorStateTitle}>Error fetching matches</p>
            <p>The matches listing failed. Please try again in a few minutes.</p>
          </div>
        ) : allMatches.length === 0 ? (
          <div className={styles.emptyState}>
            <EmptyState />
            <p className={styles.emptyStateTitle}>No matches available</p>
            <p>All match standings will be listed here.</p>
          </div>
        ) : (
          <table className={styles.scheduleTable}>
            <thead>
              <tr>
                <th className={styles.dateTimeColumn}>Date/Time</th>
                <th className={styles.stadiumColumn}>Stadium</th>
                <th className={styles.homeTeamColumn}>Home Team</th>
                <th className={styles.scoreSeparator}></th>
                <th className={styles.awayTeamColumn}>Away Team</th>
              </tr>
            </thead>
            <tbody>
              {allMatches.map((match, index) => (
                <tr
                  key={index}
                  className={index % 2 === 1 ? styles.row + " " + styles.evenRow : styles.row}
                >
                  <td className={styles.dateTimeColumn}>
                    <div className={styles.dateTime}>
                      <div className={styles.matchDate}>{match.matchDate.split(" ")[0]}</div>
                      <div className={styles.matchTime}>{match.matchDate.split(" ")[1]}</div>
                    </div>
                  </td>
                  <td className={styles.stadiumColumn}>{match.stadium}</td>
                  <td className={styles.homeTeamColumn}>
                    <div className={styles.homeTeam}>
                      <span className={styles.teamName}>{match.homeTeam}</span>
                      <img
                        src={match.homeTeamFlag}
                        alt={`${match.homeTeam} flag`}
                        className={styles.teamFlag}
                      />
                      <span className={styles.teamScore}>
                        {match.matchPlayed ? match.homeTeamScore : "-"}
                      </span>
                    </div>
                  </td>
                  <td className={styles.scoreSeparator}>:</td>
                  <td className={styles.awayTeamColumn}>
                    <div className={styles.awayTeam}>
                      <span className={styles.teamScore}>
                        {match.matchPlayed ? match.awayTeamScore : "-"}
                      </span>
                      <img
                        src={match.awayTeamFlag}
                        alt={`${match.awayTeam} flag`}
                        className={styles.teamFlag}
                      />
                      <span className={styles.teamName}>{match.awayTeam}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
