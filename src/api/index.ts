/** @format */

import { devApi } from "./dev.api";
import { prodApi } from "./prod.api";

let API;

if (import.meta.env.VITE_PROJECT_ENV === "prod") {
  API = prodApi;
} else {
  API = devApi;
}
const apiList = {};

export default {
  name: API.name,
  address: import.meta.env.VITE_PROJECT_ENV === "dev" ? location.origin : API.address,
  path: apiList
};
