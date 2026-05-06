import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 52, slack: 29, drag: 18, confidence: 89 };
assert.equal(domainReviewScore(item), 168);
assert.equal(domainReviewLane(item), "ship");
