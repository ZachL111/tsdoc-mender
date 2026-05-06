# Review Journal

The review surface for `tsdoc-mender` is deliberately narrow: one fixture, one scoring rule, and one local check.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its developer tools focus without claiming live deployment or external usage.

## Cases

- `baseline`: `change width`, score 168, lane `ship`
- `stress`: `diagnostic quality`, score 133, lane `watch`
- `edge`: `review cost`, score 149, lane `ship`
- `recovery`: `safe rewrite`, score 158, lane `ship`
- `stale`: `change width`, score 227, lane `ship`

## Note

The repository should be understandable without pretending it is larger than it is.
