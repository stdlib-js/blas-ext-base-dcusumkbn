# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-06-26)

<section class="features">

### Features

-   [`5774557`](https://github.com/stdlib-js/stdlib/commit/5774557e951cb1ae566fc0587cbf03d47b067620) - add C `ndarray` API and refactor `blas/ext/base/dcusumors`
-   [`a13603b`](https://github.com/stdlib-js/stdlib/commit/a13603b556defa762f7fe1d25fbfa3b621404f69) - add C `ndarray` API and refactor `blas/ext/base/dcusum` [(#2954)](https://github.com/stdlib-js/stdlib/pull/2954)
-   [`62a5c3a`](https://github.com/stdlib-js/stdlib/commit/62a5c3ad48fc4b0d2757ecea35ae7893ae452ea6) - add C `ndarray` API and refactor `blas/ext/base/dcusumkbn` [(#2951)](https://github.com/stdlib-js/stdlib/pull/2951)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`499ac6a`](https://github.com/stdlib-js/stdlib/commit/499ac6abb988bb6e28cd350976d5fee2fd77cf90) - propagate sign to the accumulated sum
-   [`8355a12`](https://github.com/stdlib-js/stdlib/commit/8355a12db3136d06875016a248eb6f8410672bd2) - preserve the sign of zero

</section>

<!-- /.bug-fixes -->

<section class="commits">

### Commits

<details>

-   [`c221279`](https://github.com/stdlib-js/stdlib/commit/c2212790b0118b7787b5e292244b4364c08ea05a) - **docs:** minor clean-up _(by Philipp Burckhardt)_
-   [`499ac6a`](https://github.com/stdlib-js/stdlib/commit/499ac6abb988bb6e28cd350976d5fee2fd77cf90) - **fix:** propagate sign to the accumulated sum _(by Athan Reines)_
-   [`8355a12`](https://github.com/stdlib-js/stdlib/commit/8355a12db3136d06875016a248eb6f8410672bd2) - **fix:** preserve the sign of zero _(by Athan Reines)_
-   [`189249b`](https://github.com/stdlib-js/stdlib/commit/189249b59813ed32ab40c4bafb5a827859fb7032) - **docs:** update `blas/ext/base/dcusumkbn` to follow current project conventions [(#5167)](https://github.com/stdlib-js/stdlib/pull/5167) _(by Muhammad Haris)_
-   [`62364f6`](https://github.com/stdlib-js/stdlib/commit/62364f62ea823a3b52c2ad25660ecd80c71f8f36) - **style:** fix C comment alignment _(by Philipp Burckhardt)_
-   [`0e887d5`](https://github.com/stdlib-js/stdlib/commit/0e887d567344c8a31a382266389022ec26f2bcca) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`5774557`](https://github.com/stdlib-js/stdlib/commit/5774557e951cb1ae566fc0587cbf03d47b067620) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dcusumors` _(by Muhammad Haris, Athan Reines)_
-   [`a13603b`](https://github.com/stdlib-js/stdlib/commit/a13603b556defa762f7fe1d25fbfa3b621404f69) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dcusum` [(#2954)](https://github.com/stdlib-js/stdlib/pull/2954) _(by Muhammad Haris)_
-   [`62a5c3a`](https://github.com/stdlib-js/stdlib/commit/62a5c3ad48fc4b0d2757ecea35ae7893ae452ea6) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dcusumkbn` [(#2951)](https://github.com/stdlib-js/stdlib/pull/2951) _(by Muhammad Haris, Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Muhammad Haris
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.2">

## 0.2.2 (2024-07-28)

<section class="commits">

### Commits

<details>

-   [`272ae7a`](https://github.com/stdlib-js/stdlib/commit/272ae7ac5c576c68cfab1b6e304c86407faa20cd) - **docs:** remove comment _(by Athan Reines)_
-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_
-   [`d04dcbd`](https://github.com/stdlib-js/stdlib/commit/d04dcbd6dc3b0bf4a89bd3947d317fa5ff15bb38) - **docs:** remove private annotations in C comments _(by Philipp Burckhardt)_
-   [`ceb4943`](https://github.com/stdlib-js/stdlib/commit/ceb494351d42c2505e559a2c8aad9a120c76d0db) - **docs:** remove comments _(by Athan Reines)_
-   [`47cc515`](https://github.com/stdlib-js/stdlib/commit/47cc5154b1535d8d200f6cb3f6a776c282fb2711) - **refactor:** update `blas/ext/base/dcusumkbn` to follow current project conventions _(by Krishnendu Das, Pranav Goswami, Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 4 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Krishnendu Das
-   Philipp Burckhardt
-   Pranav Goswami

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="commits">

### Commits

<details>

-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`df3c9b3`](https://github.com/stdlib-js/stdlib/commit/df3c9b368d8a3dd7dd38f8768deb53c2a780c055) - **build:** remove tslint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`42c921a`](https://github.com/stdlib-js/stdlib/commit/42c921ab62b8cdf789a9e76b06b18074e850af5e) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`28e1c84`](https://github.com/stdlib-js/stdlib/commit/28e1c84390d88044883c9ef940a12f38d66ea3ef) - **docs:** resolve C lint errors _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.9">

## 0.0.9 (2022-08-29)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.8">

## 0.0.8 (2022-07-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2022-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-23)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

