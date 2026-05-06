function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { classify, score, Signal } from "../src/policy";

type FixtureCase = Signal & { name: string; score: number; decision: "accept" | "review" };

const cases: FixtureCase[] = [
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
  equal(score(item), item.score);
  equal(classify(item), item.decision);
}
