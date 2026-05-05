import * as assert from "node:assert/strict";
import { classify, score, Signal } from "../src/policy";

const cases: Array<Signal & { score: number; decision: "accept" | "review" }> = [
  {
    "name": "case_1",
    "demand": 93,
    "capacity": 73,
    "latency": 14,
    "risk": 24,
    "weight": 9,
    "score": 76,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 68,
    "capacity": 96,
    "latency": 13,
    "risk": 19,
    "weight": 11,
    "score": 93,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 107,
    "capacity": 71,
    "latency": 18,
    "risk": 9,
    "weight": 6,
    "score": 186,
    "decision": "accept"
  }
];

for (const item of cases) {
  assert.equal(score(item), item.score);
  assert.equal(classify(item), item.decision);
}
