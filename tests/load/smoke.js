import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 10, // Virtual Users
  duration: "30s", // 30 seconds
  thresholds: {
    http_req_duration: ["p(95)<500"], // 95% of requests must complete below 500ms
  },
};

const BASE_URL = __ENV.SITE_URL || "http://localhost:3000";

export default function smokeTest() {
  // 1. Visit homepage
  let res = http.get(`${BASE_URL}/`);
  check(res, {
    "homepage status is 200": (r) => r.status === 200,
  });
  sleep(1);

  // 2. Visit deals page
  res = http.get(`${BASE_URL}/deals`);
  check(res, {
    "deals page status is 200": (r) => r.status === 200,
  });
  sleep(1);
}
