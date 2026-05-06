function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 52, slack: 29, drag: 18, confidence: 89 };
equal(domainReviewScore(item), 168);
equal(domainReviewLane(item), "ship");
