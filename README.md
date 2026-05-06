# tsdoc-mender

`tsdoc-mender` treats developer tools as a local verification problem. The TypeScript implementation is intentionally narrow, but the fixtures and notes make the behavior explicit.

## Tsdoc Mender Checkpoints

Treat the compact fixture as the contract and the extended examples as a scratchpad. The code should stay boring enough that a change in behavior is obvious from the test output.

## What This Is For

This is not a wrapper around a service. It is a self-contained project that shows how the model behaves when demand, capacity, latency, risk, and weight move in different directions.

## Case Study

`degraded` is the first example I would inspect because it lands on the `review` path with a score of -98. The broader file also keeps `degraded` at -98 and `surge` at 194, which gives the model a useful low-to-high spread.

## Architecture Notes

The core is a scoring model over demand, capacity, latency, risk, and weight. That keeps code shape, diagnostics, and safe defaults in one explicit decision path. The threshold is 171, with risk penalty 7, latency penalty 3, and weight bonus 3. The TypeScript project keeps types close to the model and compiles before running its checks.

## Useful Pieces

- Models code shape with deterministic scoring and explicit review decisions.
- Uses fixture data to keep diagnostics changes visible in code review.
- Includes extended examples for safe defaults, including `surge` and `degraded`.
- Documents repeatable output tradeoffs in `docs/operations.md`.
- Runs locally with a single verification command and no external credentials.

## Local Workflow

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

This runs the language-level build or test path against the compact fixture set.

## Quality Gate

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/audit.ps1
```

The audit command checks repository structure and README constraints before it delegates to the verifier.

## Project Layout

- `src`: primary implementation
- `tests`: verification harness
- `fixtures`: compact golden scenarios
- `examples`: expanded scenario set
- `metadata`: project constants and verification metadata
- `docs`: operations and extension notes
- `scripts`: local verification and audit commands
- `package.json`: Node package scripts

## Expansion Ideas

- Add a short report command that prints the score breakdown for a single scenario.
- Add malformed input fixtures so the failure path is as visible as the happy path.
- Split the scoring constants into a typed configuration object and validate it before use.
- Add one more developer tools fixture that focuses on a malformed or borderline input.

## Scope

The repository favors determinism over breadth. It does not pull live data, keep secrets, or depend on network access for verification.

## Tooling

Clone the repository, enter the directory, and run the verifier. No database server, cloud account, or token is required.
