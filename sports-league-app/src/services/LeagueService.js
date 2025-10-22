import { getAllMatches } from "../api/requests/all-matches.get";

/**
 * Schema for match response data
 * @typedef {Object} MatchesResponse
 * @property {boolean} success - Whether the request was successful
 * @property {Array<MatchDTO>} matches - Array of match objects
 *
 * @typedef {Object} MatchDTO
 * @property {number} matchDate - Match date as timestamp
 * @property {string} stadium - Stadium name
 * @property {string} homeTeam - Home team name
 * @property {string} awayTeam - Away team name
 * @property {boolean} matchPlayed - Whether the match has been played
 * @property {number} homeTeamScore - Home team score
 * @property {number} awayTeamScore - Away team score
 */

/**
 * A class representing a service that processes the data for match schedule
 * and generates a leaderboard.
 *
 * NOTE: MAKE SURE TO IMPLEMENT ALL EXISTING METHODS BELOW WITHOUT CHANGING THE INTERFACE OF THEM,
 *       AND PLEASE DO NOT RENAME, MOVE OR DELETE THIS FILE.
 *
 *       ADDITIONALLY, MAKE SURE THAT ALL LIBRARIES USED IN THIS FILE ARE COMPATIBLE WITH PURE JAVASCRIPT
 *
 */
class LeagueService {
  /** @type {Array<MatchDTO>} */
  #matches = [];

  /**
   * Sets the match schedule.
   * Match schedule will be given in the following form:
   * [
   *      {
   *          matchDate: [TIMESTAMP],
   *          stadium: [STRING],
   *          homeTeam: [STRING],
   *          awayTeam: [STRING],
   *          matchPlayed: [BOOLEAN],
   *          homeTeamScore: [INTEGER],
   *          awayTeamScore: [INTEGER]
   *      },
   *      {
   *          matchDate: [TIMESTAMP],
   *          stadium: [STRING],
   *          homeTeam: [STRING],
   *          awayTeam: [STRING],
   *          matchPlayed: [BOOLEAN],
   *          homeTeamScore: [INTEGER],
   *          awayTeamScore: [INTEGER]
   *      }
   * ]
   *
   * @param {Array<MatchDTO>} matches List of matches.
   */
  setMatches(matches) {
    this.#matches = matches;
  }

  /**
   * @typedef {Object} Match
   * @property {string} matchDate - The date of the match in the format 'D.M.YYYY hh:mm'.
   * @property {string} stadium - The name of the stadium.
   * @property {string} homeTeam - The name of the home team.
   * @property {string} awayTeam - The name of the away team.
   * @property {boolean} matchPlayed - Whether the match has been played or not.
   * @property {number} homeTeamScore - The score of the home team.
   * @property {number} awayTeamScore - The score of the away team.
   * @property {string} homeTeamFlag - The flag of the home team as an image URL.
   * @property {string} awayTeamFlag - The flag of the away team as an image URL.
   */

  /**
   * Returns the full list of matches.
   *
   * @returns {Array<Match>} Array of match objects containing match details
   */
  getMatches() {
    return this.#matches.map((match) => {
      const matchDate = new Date(match.matchDate);
      // Format date as D.M.YYYY (no leading zeros) with time as HH:MM
      const day = matchDate.getDate();
      const month = matchDate.getMonth() + 1;
      const year = matchDate.getFullYear();
      const hours = String(matchDate.getHours()).padStart(2, "0");
      const minutes = String(matchDate.getMinutes()).padStart(2, "0");
      const matchDateFormatted = `${day}.${month}.${year} ${hours}:${minutes}`;

      return {
        matchDate: matchDateFormatted,
        stadium: match.stadium,
        homeTeam: match.homeTeam,
        awayTeam: match.awayTeam,
        matchPlayed: match.matchPlayed,
        homeTeamScore: match.homeTeamScore,
        awayTeamScore: match.awayTeamScore,
        homeTeamFlag: `https://flagsapi.codeaid.io/${match.homeTeam}.png`,
        awayTeamFlag: `https://flagsapi.codeaid.io/${match.awayTeam}.png`,
      };
    });
  }

  /**
   * @typedef {Object} Team
   * @property {string} teamName - The name of the team.
   * @property {number} matchesPlayed - The number of matches played by the team.
   * @property {number} goalsFor - The number of goals scored by the team.
   * @property {number} goalsAgainst - The number of goals conceded by the team.
   * @property {number} points - The total points scored by the team.
   * @property {string} teamFlag - The flag of the team as an image URL.
   */

  /**
   * Returns the leaderboard in the form of a list of JSON objects.
   *
   * [
   *      {
   *          teamName: [STRING]',
   *          matchesPlayed: [INTEGER],
   *          goalsFor: [INTEGER],
   *          goalsAgainst: [INTEGER],
   *          points: [INTEGER]
   *      },
   * ]
   *
   * @returns {Array<Team>} List of teams representing the leaderboard.
   */
  getLeaderboard() {
    const teamNames = new Set();

    this.#matches.forEach((match) => {
      teamNames.add(match.homeTeam);
      teamNames.add(match.awayTeam);
    });

    // Retrieve stats for each team
    const teams = Array.from(teamNames).map((teamName) => {
      const stats = this.#calculateTeamStats(teamName);
      return {
        teamName,
        matchesPlayed: stats.matchesPlayed,
        goalsFor: stats.goalsFor,
        goalsAgainst: stats.goalsAgainst,
        points: stats.points,
        teamFlag: `https://flagsapi.codeaid.io/${teamName}.png`,
      };
    });

    /**
     * Function to calculate head-to-head points between teams.
     * @param {string} teamA - The name of the first team.
     * @param {string} teamB - The name of the second team.
     * @returns {number} The total points scored by the team.
     */
    const calculateHeadToHeadPoints = (teamA, teamB) => {
      const headToHeadMatches = this.#matches.filter((match) => {
        return (
          match.matchPlayed &&
          ((match.homeTeam === teamA && match.awayTeam === teamB) ||
            (match.homeTeam === teamB && match.awayTeam === teamA))
        );
      });

      let points = 0;

      headToHeadMatches.forEach((match) => {
        if (match.homeTeam === teamA) {
          if (match.homeTeamScore > match.awayTeamScore) {
            points += 3;
          } else if (match.homeTeamScore === match.awayTeamScore) {
            points += 1;
          }
        } else {
          if (match.awayTeamScore > match.homeTeamScore) {
            points += 3;
          } else if (match.awayTeamScore === match.homeTeamScore) {
            points += 1;
          }
        }
      });

      return points;
    };

    return teams.sort((a, b) => {
      // Primary sort: Points (descending)
      if (a.points !== b.points) {
        return b.points - a.points;
      }

      // First tiebreaker: Head-to-head points
      // Find all teams with the same number of points
      const teamsWithSamePoints = teams.filter((team) => team.points === a.points);

      if (teamsWithSamePoints.length > 1) {
        // Create a mini-leaderboard for teams with the same points
        const headToHeadPointsA = teamsWithSamePoints
          .filter((team) => team.teamName !== a.teamName)
          .reduce((total, team) => total + calculateHeadToHeadPoints(a.teamName, team.teamName), 0);

        const headToHeadPointsB = teamsWithSamePoints
          .filter((team) => team.teamName !== b.teamName)
          .reduce((total, team) => total + calculateHeadToHeadPoints(b.teamName, team.teamName), 0);

        if (headToHeadPointsA !== headToHeadPointsB) {
          return headToHeadPointsB - headToHeadPointsA;
        }
      }

      // Second tiebreaker: Goal difference (descending)
      const goalDiffA = a.goalsFor - a.goalsAgainst;
      const goalDiffB = b.goalsFor - b.goalsAgainst;

      if (goalDiffA !== goalDiffB) {
        return goalDiffB - goalDiffA;
      }

      // Third tiebreaker: Goals scored (descending)
      if (a.goalsFor !== b.goalsFor) {
        return b.goalsFor - a.goalsFor;
      }

      // Final tiebreaker: Alphabetical order by name (ascending)
      return a.teamName.localeCompare(b.teamName);
    });
  }

  /**
   * Asynchronic function to fetch the data from the server and set the matches.
   */
  async fetchData() {
    /** @type {MatchesResponse} */
    const allMatchesResponse = await getAllMatches();
    this.setMatches(allMatchesResponse.matches);
  }

  /**
   * Calculates the team stats based on the given team name.
   * @param {string} teamName - The name of the team.
   * @returns {{ matchesPlayed: number, goalsFor: number, goalsAgainst: number, points: number }} - An object containing the team stats.
   */
  #calculateTeamStats(teamName) {
    const teamMatches = this.#matches.filter(
      (match) => match.homeTeam === teamName || match.awayTeam === teamName,
    );

    const stats = {
      matchesPlayed: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
    };

    teamMatches.forEach((match) => {
      if (match.matchPlayed) {
        stats.matchesPlayed++;

        if (match.homeTeam === teamName) {
          stats.goalsFor += match.homeTeamScore;
          stats.goalsAgainst += match.awayTeamScore;

          if (match.homeTeamScore > match.awayTeamScore) {
            stats.points += 3;
          } else if (match.homeTeamScore === match.awayTeamScore) {
            stats.points += 1;
          }
        } else {
          stats.goalsFor += match.awayTeamScore;
          stats.goalsAgainst += match.homeTeamScore;

          if (match.awayTeamScore > match.homeTeamScore) {
            stats.points += 3;
          } else if (match.awayTeamScore === match.homeTeamScore) {
            stats.points += 1;
          }
        }
      }
    });

    return stats;
  }
}

export default LeagueService;
