import { z } from "zod";

import { api } from "../../config/api";

const getApiVersionResponseSchema = z.object({
  success: z.boolean(),
  version: z.string(),
});

/**
 * Retrieves the current version of the API
 * @returns {Promise<z.infer<typeof getApiVersionResponseSchema>>} A promise that resolves to the API version response
 */
export async function getApiVersion() {
  const response = await api.get("/version");
  return getApiVersionResponseSchema.parse(response.data);
}
