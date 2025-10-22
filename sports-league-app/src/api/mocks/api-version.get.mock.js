import { delay, http, HttpResponse } from "msw";

import { BASE_API_URL } from "../../utils/constants";

const endpoint = `${BASE_API_URL}/version`;

// Create handlers for different scenarios
export const getApiVersionHandlers = {
  data(version = "1.0") {
    return http.get(endpoint, async () => {
      await delay(500);
      return HttpResponse.json({
        success: true,
        version: version,
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
