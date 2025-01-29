/**
 * This Api class lets you define an API endpoint and methods to request
 * data and process it.
 *
 * See the [Backend API Integration](https://docs.infinite.red/ignite-cli/boilerplate/app/services/#backend-api-integration)
 * documentation for more details.
 */
import { ApisauceInstance, create } from "apisauce";
import type { ApiConfig } from "./api.types";
import Config from "@/app/modules/config";
// import { getAuthToken } from "@/modules/auth/authSelectors";

/**
 * Configuring the apisauce instance.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: Config.API_URL,
  timeout: 10000,
};

const getToken = () => {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzMjVhYTc4OGNhM2IxYTJkODEyNzYiLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE3Mzc4NzQxODR9.jWRQNSBcRrN6JH21ysp5O2ETF8KijT53MWtH9lebYfk";
};

/**
 * Manages all requests to the API. You can use this class to build out
 * various requests that you need to call from your backend API.
 */
export class Api {
  apisauce: ApisauceInstance;
  config: ApiConfig;

  /**
   * Set up our API instance. Keep this lightweight!
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config;
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + getToken(),
      },
    });
  }

}

// Singleton instance of the API 
export const api = new Api();
