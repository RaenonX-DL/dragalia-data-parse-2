# dragalia-data-parse-2

[![parser-2-ci]][parser-2-ci-link]
[![parser-2-lgtm-alert-badge]][parser-2-lgtm-alert-link]
[![parser-2-lgtm-quality-badge]][parser-2-lgtm-quality-link]
[![parser-2-lgtm-loc-badge]][parser-2-lgtm-quality-link]
[![parser-2-time-badge]][parser-2-time-link]

Main | Dev
:---: | :---:
[![parser-2-grade-badge-main]][parser-2-cq-link-main] | [![parser-2-grade-badge-dev]][parser-2-cq-link-dev]
[![parser-2-coverage-badge-main]][parser-2-cq-link-main] | [![parser-2-coverage-badge-dev]][parser-2-cq-link-dev]

Rewritten Dragalia Lost data parser.

This parses the Dragalia Lost assets dumped by [dragalia-asset-downloader-2][repo-downloader-2]
to files usable for the [Dragalia Lost info website][website].

> This succeeds the functionality of the [Gen 1 parser][repo-parser-1].

Developed under Python 3.9 (or higher).

[website]: https://dl.raenonx.cc

[repo-parser-1]: https://github.com/RaenonX-DL/dragalia-data-parse
[repo-downloader-2]: https://github.com/RaenonX-DL/dragalia-asset-downloader-2

[parser-2-ci]: https://github.com/RaenonX-DL/dragalia-data-parse-2/workflows/CI/badge.svg
[parser-2-ci-link]: https://github.com/RaenonX-DL/dragalia-data-parse-2/actions?query=workflow%3ACI
[parser-2-lgtm-alert-badge]: https://img.shields.io/lgtm/alerts/g/RaenonX-DL/dragalia-data-parse-2.svg?logo=lgtm&logoWidth=18
[parser-2-lgtm-alert-link]: https://lgtm.com/projects/g/RaenonX-DL/dragalia-data-parse-2/alerts/
[parser-2-lgtm-quality-badge]: https://img.shields.io/lgtm/grade/python/g/RaenonX-DL/dragalia-data-parse-2.svg?logo=lgtm&logoWidth=18
[parser-2-lgtm-quality-link]: https://lgtm.com/projects/g/RaenonX-DL/dragalia-data-parse-2/context:javascript
[parser-2-lgtm-loc-badge]: https://badgen.net/lgtm/lines/g/RaenonX-DL/dragalia-data-parse-2?icon=lgtm
[parser-2-time-badge]: https://wakatime.com/badge/github/RaenonX-DL/dragalia-data-parse-2.svg
[parser-2-time-link]: https://wakatime.com/badge/github/RaenonX-DL/dragalia-data-parse-2
[parser-2-cq-link-main]: https://www.codacy.com/gh/RaenonX-DL/dragalia-data-parse-2/dashboard?branch=main
[parser-2-cq-link-dev]: https://www.codacy.com/gh/RaenonX-DL/dragalia-data-parse-2/dashboard?branch=dev
[parser-2-grade-badge-main]: https://app.codacy.com/project/badge/Grade/f7e64b2119e04d89baabf0cf8840bbb4?branch=main
[parser-2-grade-badge-dev]: https://app.codacy.com/project/badge/Grade/f7e64b2119e04d89baabf0cf8840bbb4?branch=dev
[parser-2-coverage-badge-main]: https://app.codacy.com/project/badge/Coverage/f7e64b2119e04d89baabf0cf8840bbb4?branch=main
[parser-2-coverage-badge-dev]: https://app.codacy.com/project/badge/Coverage/f7e64b2119e04d89baabf0cf8840bbb4?branch=dev

------

# Setup

Install dependencies:

```bash
npm install
```

Pull project dependencies:

```bash
git submodule update --init --recursive
```
