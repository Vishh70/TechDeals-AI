import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: "30s", target: 50 }, // Ramp up to 50 users
    { duration: "1m", target: 200 }, // Spike to 200 users
    { duration: "30s", target: 1000 }, // Peak at 1000 users
    { duration: "1m", target: 0 }, // Ramp down to 0
  ],
  thresholds: {
    http_req_duration: ["p(99)<2000"], // 99% of requests must complete below 2s
    http_req_failed: ["rate<0.01"], // Less than 1% failure rate
  },
};

const BASE_URL = __ENV.SITE_URL || "http://localhost:3000";

export default function stressTest() {
  const responses = http.batch([
    ["GET", `${BASE_URL}/`],
    ["GET", `${BASE_URL}/deals`],
  ]);

  check(responses[0], {
    "homepage is 200": (r) => r.status === 200,
  });

  check(responses[1], {
    "deals is 200": (r) => r.status === 200,
  });

  sleep(Math.random() * 2);
}
