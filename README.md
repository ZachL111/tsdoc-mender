# tsdoc-mender

`tsdoc-mender` is a compact TypeScript repository for developer tools, centered on this goal: Audit exported APIs for missing examples and stale comments.

## Purpose

I want this repository to be useful as a quick reading exercise: fixtures first, implementation second, verifier last.

## Tsdoc Mender Review Notes

Start with `change width` and `diagnostic quality`. Those cases create the widest score spread in this repo, so they are the best quick check when the model changes.

## What Is Covered

- `fixtures/domain_review.csv` adds cases for change width and diagnostic quality.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/tsdoc-mender-walkthrough.md` walks through the case spread.
- The TypeScript code includes a review path for `change width` and `diagnostic quality`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Implementation Notes

The fixture data drives the tests. The code stays thin, while `metadata/domain-review.json` and `config/review-profile.json` explain what each case is meant to protect.

The TypeScript addition stays small enough to inspect in one sitting.

## Command

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Audit Path

The check exercises the source code and the review fixture. `stale` is the high score at 227; `stress` is the low score at 133.

## Limits

The repository is intentionally scoped to local checks. I would expand it by adding adversarial fixtures before adding features.
