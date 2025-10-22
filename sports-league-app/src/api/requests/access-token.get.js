import { z } from "zod";

import { api } from "../../config/api";

const getAccessTokenResponseSchema = z.object({
  success: z.boolean(),
  access_token: z.string(),
});

/**
 * Retrieves the access token
 * @returns {Promise<z.infer<typeof getAccessTokenResponseSchema>>} A promise that resolves to the access token response
 */
export async function getAccessToken() {
  const response = await api.get("/v1/getAccessToken");
  return getAccessTokenResponseSchema.parse(response.data);
}
