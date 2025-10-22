import { delay, http, HttpResponse } from "msw";

import { BASE_API_URL } from "../../utils/constants";

const endpoint = `${BASE_API_URL}/v1/getAllMatches`;

// Create handlers for different scenarios
export const getAllMatchesHandlers = {
  empty() {
    return http.get(endpoint, async () => {
      await delay(500);
      return HttpResponse.json({
        success: true,
        matches: [],
      });
    });
  },
  data() {
    return http.get(endpoint, async () => {
      await delay(500);
      return HttpResponse.json({
        success: true,
        matches: [
          {
            matchDate: 1743166597000,
            stadium: "Maracanã",
            homeTeam: "Brazil",
            awayTeam: "Serbia",
            matchPlayed: true,
            homeTeamScore: 1,
            awayTeamScore: 0,
          },
          {
            matchDate: 1743166597000,
            stadium: "Stade de Suisse",
            homeTeam: "Switzerland",
            awayTeam: "Serbia",
            matchPlayed: false,
            homeTeamScore: 0,
            awayTeamScore: 0,
          },
          {
            matchDate: 1743166597000,
            stadium: "Stadion Rajko Mitic",
            homeTeam: "Serbia",
            awayTeam: "Cameroon",
            matchPlayed: true,
            homeTeamScore: 0,
            awayTeamScore: 1,
          },
          {
            matchDate: 1743166597000,
            stadium: "Maracanã",
            homeTeam: "Brazil",
            awayTeam: "Switzerland",
            matchPlayed: true,
            homeTeamScore: 3,
            awayTeamScore: 0,
          },
          {
            matchDate: 1743166597000,
            stadium: "Maracanã",
            homeTeam: "Brazil",
            awayTeam: "Cameroon",
            matchPlayed: true,
            homeTeamScore: 4,
            awayTeamScore: 4,
          },
          {
            matchDate: 1743166597000,
            stadium: "Stade de Suisse",
            homeTeam: "Switzerland",
            awayTeam: "Cameroon",
            matchPlayed: true,
            homeTeamScore: 2,
            awayTeamScore: 2,
          },
        ],
      });
    });
  },
  error() {
    return http.get(endpoint, async () => {
      await delay(500);
      return HttpResponse.error();
    });
  },
};
