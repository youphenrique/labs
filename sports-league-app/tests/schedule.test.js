import LeagueService from "../src/services/LeagueService";

require("jest-fetch-mock").enableMocks();
// eslint-disable-next-line no-undef
fetchMock.dontMock();

jest.mock("../src/api/requests/all-matches.get", () => {
  return { getAllMatches: jest.fn() };
});

describe("schedule test suite", () => {
  let leagueService;

  beforeEach(() => {
    leagueService = new LeagueService();
  });

  test("should correctly transform match data", () => {
    const timestamp = new Date(2025, 7, 7, 15, 30).getTime(); // August 7, 2025, 15:30

    const matches = [
      {
        matchDate: timestamp,
        stadium: "Maracanã",
        homeTeam: "Brazil",
        awayTeam: "France",
        matchPlayed: true,
        homeTeamScore: 2,
        awayTeamScore: 1,
      },
    ];

    leagueService.setMatches(matches);
    const schedule = leagueService.getMatches();

    expect(schedule.length).toBe(1);
    const match = schedule[0];

    expect(match.stadium).toBe("Maracanã");
    expect(match.homeTeam).toBe("Brazil");
    expect(match.awayTeam).toBe("France");
    expect(match.matchPlayed).toBe(true);
    expect(match.homeTeamScore).toBe(2);
    expect(match.awayTeamScore).toBe(1);
    expect(match.homeTeamFlag).toBe("https://flagsapi.codeaid.io/Brazil.png");
    expect(match.awayTeamFlag).toBe("https://flagsapi.codeaid.io/France.png");
  });

  test("should format match date correctly", () => {
    const timestamp = new Date(2025, 7, 7, 15, 30).getTime(); // August 7, 2025, 15:30

    const matches = [
      {
        matchDate: timestamp,
        stadium: "Maracanã",
        homeTeam: "Brazil",
        awayTeam: "France",
        matchPlayed: true,
        homeTeamScore: 2,
        awayTeamScore: 1,
      },
    ];

    leagueService.setMatches(matches);
    const schedule = leagueService.getMatches();

    // Check date formatting (D.M.YYYY HH:MM format)
    expect(schedule[0].matchDate).toBe("7.8.2025 15:30");
  });

  test("should handle multiple matches", () => {
    const matches = [
      {
        matchDate: new Date(2025, 7, 7, 15, 30).getTime(),
        stadium: "Maracanã",
        homeTeam: "Brazil",
        awayTeam: "France",
        matchPlayed: true,
        homeTeamScore: 2,
        awayTeamScore: 1,
      },
      {
        matchDate: new Date(2025, 7, 18, 18, 0).getTime(),
        stadium: "Wembley",
        homeTeam: "England",
        awayTeam: "Germany",
        matchPlayed: false,
        homeTeamScore: 0,
        awayTeamScore: 0,
      },
    ];

    leagueService.setMatches(matches);
    const schedule = leagueService.getMatches();

    expect(schedule.length).toBe(2);

    // Check first match
    expect(schedule[0].stadium).toBe("Maracanã");
    expect(schedule[0].matchDate).toBe("7.8.2025 15:30");

    // Check the second match
    expect(schedule[1].stadium).toBe("Wembley");
    expect(schedule[1].matchDate).toBe("18.8.2025 18:00");
    expect(schedule[1].matchPlayed).toBe(false);
  });

  test("should return empty array when no matches are set", () => {
    leagueService.setMatches([]);
    const schedule = leagueService.getMatches();

    expect(schedule).toEqual([]);
  });

  test("should handle different match states correctly", () => {
    const matches = [
      {
        matchDate: new Date(2025, 7, 7, 15, 30).getTime(),
        stadium: "Maracanã",
        homeTeam: "Brazil",
        awayTeam: "France",
        matchPlayed: true,
        homeTeamScore: 2,
        awayTeamScore: 1,
      },
      {
        matchDate: new Date(2025, 7, 8, 18, 0).getTime(),
        stadium: "Wembley",
        homeTeam: "England",
        awayTeam: "Germany",
        matchPlayed: false,
        homeTeamScore: 0,
        awayTeamScore: 0,
      },
    ];

    leagueService.setMatches(matches);
    const schedule = leagueService.getMatches();

    // Played match
    expect(schedule[0].matchPlayed).toBe(true);
    expect(schedule[0].homeTeamScore).toBe(2);
    expect(schedule[0].awayTeamScore).toBe(1);

    // Upcoming match
    expect(schedule[1].matchPlayed).toBe(false);
    expect(schedule[1].homeTeamScore).toBe(0);
    expect(schedule[1].awayTeamScore).toBe(0);
  });
});
