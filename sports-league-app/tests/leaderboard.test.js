/**
 *
 *  THIS IS A TESTING FILE. YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO TEST YOUR WORK.
 *  PLEASE DON'T CHANGE THE INTERFACE OF leagueService.js METHODS
 *
 */

import LeagueService from "../src/services/LeagueService";

require("jest-fetch-mock").enableMocks();
// eslint-disable-next-line no-undef
fetchMock.dontMock();

jest.mock("../src/api/requests/all-matches.get", () => {
  return { getAllMatches: jest.fn() };
});

describe("leaderboard test suite", () => {
  let leagueService;

  beforeEach(() => {
    leagueService = new LeagueService();
  });

  // Test case 1: Basic sorting by points
  test("should sort teams by points in descending order", () => {
    const matches = [
      {
        matchDate: Date.now(),
        stadium: "Maracanã",
        homeTeam: "Brazil",
        awayTeam: "France",
        matchPlayed: true,
        homeTeamScore: 2,
        awayTeamScore: 1,
      },
    ];

    leagueService.setMatches(matches);
    const leaderboard = leagueService.getLeaderboard();

    const firstTeam = leaderboard[0];
    expect(firstTeam.teamName).toBe("Brazil");
    expect(firstTeam.matchesPlayed).toBe(1);
    expect(firstTeam.goalsFor).toBe(2);
    expect(firstTeam.goalsAgainst).toBe(1);
    expect(firstTeam.points).toBe(3);
    expect(firstTeam.teamFlag).toBe("https://flagsapi.codeaid.io/Brazil.png");

    const secondTeam = leaderboard[1];
    expect(secondTeam.teamName).toBe("France");
    expect(secondTeam.matchesPlayed).toBe(1);
    expect(secondTeam.goalsFor).toBe(1);
    expect(secondTeam.goalsAgainst).toBe(2);
    expect(secondTeam.points).toBe(0);
    expect(secondTeam.teamFlag).toBe("https://flagsapi.codeaid.io/France.png");
  });

  test("should use head-to-head points as first tiebreaker", () => {
    const matches = [
      {
        matchDate: Date.now(),
        stadium: "Maracanã",
        homeTeam: "Brazil",
        awayTeam: "Argentina",
        matchPlayed: true,
        homeTeamScore: 2,
        awayTeamScore: 0,
      },
      {
        matchDate: Date.now(),
        stadium: "Wembley",
        homeTeam: "England",
        awayTeam: "Brazil",
        matchPlayed: true,
        homeTeamScore: 0,
        awayTeamScore: 1,
      },
      {
        matchDate: Date.now(),
        stadium: "Bernabeu",
        homeTeam: "Argentina",
        awayTeam: "England",
        matchPlayed: true,
        homeTeamScore: 2,
        awayTeamScore: 0,
      },
    ];

    leagueService.setMatches(matches);
    const leaderboard = leagueService.getLeaderboard();

    // All teams have 3 points, but Brazil beat Argentina, Argentina beat England, and England lost to both
    expect(leaderboard[0].teamName).toBe("Brazil");
    expect(leaderboard[1].teamName).toBe("Argentina");
    expect(leaderboard[2].teamName).toBe("England");
  });

  // Teams with the same points and head-to-head, test goal difference
  test("should use goal difference as second tiebreaker", () => {
    const matches = [
      {
        matchDate: Date.now(),
        stadium: "Maracanã",
        homeTeam: "Brazil",
        awayTeam: "France",
        matchPlayed: true,
        homeTeamScore: 3,
        awayTeamScore: 3,
      },
      {
        matchDate: Date.now(),
        stadium: "Wembley",
        homeTeam: "England",
        awayTeam: "Brazil",
        matchPlayed: true,
        homeTeamScore: 0,
        awayTeamScore: 2,
      },
      {
        matchDate: Date.now(),
        stadium: "Bernabeu",
        homeTeam: "France",
        awayTeam: "England",
        matchPlayed: true,
        homeTeamScore: 1,
        awayTeamScore: 0,
      },
    ];

    leagueService.setMatches(matches);
    const leaderboard = leagueService.getLeaderboard();

    // Brazil and France both have 4 points, but Brazil has a better goal difference
    expect(leaderboard[0].teamName).toBe("Brazil");
    expect(leaderboard[1].teamName).toBe("France");
  });

  test("should use goals scored as third tiebreaker", () => {
    const matches = [
      {
        matchDate: Date.now(),
        stadium: "Maracanã",
        homeTeam: "Brazil",
        awayTeam: "Argentina",
        matchPlayed: true,
        homeTeamScore: 2,
        awayTeamScore: 1,
      },
      {
        matchDate: Date.now(),
        stadium: "Wembley",
        homeTeam: "Argentina",
        awayTeam: "France",
        matchPlayed: true,
        homeTeamScore: 1,
        awayTeamScore: 0,
      },
      {
        matchDate: Date.now(),
        stadium: "Bernabeu",
        homeTeam: "France",
        awayTeam: "Brazil",
        matchPlayed: true,
        homeTeamScore: 2,
        awayTeamScore: 1,
      },
    ];

    leagueService.setMatches(matches);
    const leaderboard = leagueService.getLeaderboard();

    // All teams have 3 points, same head-to-head (circular wins), same goal difference (0)
    // Brazil scored 3 goals; France and Argentina scored 2 goals
    expect(leaderboard[0].teamName).toBe("Brazil");
    expect(leaderboard[1].teamName).toBe("Argentina");
    expect(leaderboard[2].teamName).toBe("France");
  });

  test("should use alphabetical order as final tiebreaker", () => {
    const matches = [
      {
        matchDate: Date.now(),
        stadium: "Maracanã",
        homeTeam: "Brazil",
        awayTeam: "Argentina",
        matchPlayed: true,
        homeTeamScore: 1,
        awayTeamScore: 1,
      },
      {
        matchDate: Date.now(),
        stadium: "Wembley",
        homeTeam: "Argentina",
        awayTeam: "France",
        matchPlayed: true,
        homeTeamScore: 1,
        awayTeamScore: 1,
      },
      {
        matchDate: Date.now(),
        stadium: "Bernabeu",
        homeTeam: "France",
        awayTeam: "Brazil",
        matchPlayed: true,
        homeTeamScore: 1,
        awayTeamScore: 1,
      },
    ];

    leagueService.setMatches(matches);
    const leaderboard = leagueService.getLeaderboard();

    // All teams have the same points, head-to-head, goal difference, and goals scored
    // Should be sorted alphabetically: Argentina, Brazil, France
    expect(leaderboard[0].teamName).toBe("Argentina");
    expect(leaderboard[1].teamName).toBe("Brazil");
    expect(leaderboard[2].teamName).toBe("France");
  });
});
