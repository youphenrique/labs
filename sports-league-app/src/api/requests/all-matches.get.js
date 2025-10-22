import { z } from "zod";

import { api } from "../../config/api";

const getAllMatchesResponseSchema = z.object({
  success: z.boolean(),
  matches: z.array(
    z.object({
      matchDate: z.number(),
      stadium: z.string(),
      homeTeam: z.string(),
      awayTeam: z.string(),
      matchPlayed: z.boolean(),
      homeTeamScore: z.number(),
      awayTeamScore: z.number(),
    }),
  ),
});

/**
 * Retrieves all matches
 * @returns {Promise<z.infer<typeof getAllMatchesResponseSchema>>} A promise that resolves to the all matches response
 */
export async function getAllMatches() {
  const response = await api.get("/v1/getAllMatches");
  return getAllMatchesResponseSchema.parse(response.data);
}
