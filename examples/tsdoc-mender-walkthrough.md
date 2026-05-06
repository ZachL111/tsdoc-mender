# Tsdoc Mender Walkthrough

This note is the quickest way to read the extra review model in `tsdoc-mender`.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | change width | 168 | ship |
| stress | diagnostic quality | 133 | watch |
| edge | review cost | 149 | ship |
| recovery | safe rewrite | 158 | ship |
| stale | change width | 227 | ship |

Start with `stale` and `stress`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

`stale` is the optimistic case; use it to make sure the scoring path still rewards strong signal.
