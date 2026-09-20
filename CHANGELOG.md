# Changelog

Все заметные изменения пользовательского сайта публикуются в этом файле. Формат
основан на [Keep a Changelog](https://keepachangelog.com/ru/1.1.0/), версии следуют
SemVer.

## [2.1.0](https://github.com/YaroslavTaranich/monino-tools-user/compare/v2.0.1...v2.1.0) (2026-09-20)


### Новые возможности

* refresh user site visual design ([55bf109](https://github.com/YaroslavTaranich/monino-tools-user/commit/55bf109e9a196df37d43721e02243a41084768ed))
* refresh user site visual design ([caf08de](https://github.com/YaroslavTaranich/monino-tools-user/commit/caf08de5b5b23a059f788cccf3a9b70a32be7b93))

## [2.0.1](https://github.com/YaroslavTaranich/monino-tools-user/compare/v2.0.0...v2.0.1) (2026-09-19)


### Исправления

* export production compose project for backup flow ([ef52823](https://github.com/YaroslavTaranich/monino-tools-user/commit/ef528237cb50c1eb2756cd036516700babc34147))
* export production compose project for backup flow ([b96607e](https://github.com/YaroslavTaranich/monino-tools-user/commit/b96607e2bd65ec4421898470aecf7515b0bf680a))
* load pinned release context for backups ([389f333](https://github.com/YaroslavTaranich/monino-tools-user/commit/389f333043614dc97f6387b120f25dcea28556b7))
* load pinned release context for backups ([a8e3e8e](https://github.com/YaroslavTaranich/monino-tools-user/commit/a8e3e8e6427c63d79ff419d7849df8324c5f014f))
* load production database env for restore test ([d8986d4](https://github.com/YaroslavTaranich/monino-tools-user/commit/d8986d4cbcd2a65b2f68af83ee967d794848542e))
* load production database env for restore test ([e28842d](https://github.com/YaroslavTaranich/monino-tools-user/commit/e28842d9bf8da99c4db1dbe2f512e196807450ec))
* target production compose project for backups ([1a79787](https://github.com/YaroslavTaranich/monino-tools-user/commit/1a797878a97b34374ede0a83a4706ae026fee0f8))
* target production compose project for backups ([ec9590f](https://github.com/YaroslavTaranich/monino-tools-user/commit/ec9590fbe2e9bc2b7c346470b61034595bc50074))


### CI

* automate external backup operations ([4069866](https://github.com/YaroslavTaranich/monino-tools-user/commit/4069866ff06de73a438f1bbf6e978c2063a0931c))
* automate external backup operations ([84cb297](https://github.com/YaroslavTaranich/monino-tools-user/commit/84cb2971a28c7bebb07b23a357403b0592d9246e))

## [Unreleased]

### CI

* Добавлены ежедневные внешние backup, безопасная ротация на Яндекс Диске и
  еженедельный изолированный restore-test.

## [2.0.0](https://github.com/YaroslavTaranich/monino-tools-user/compare/v1.0.4...v2.0.0) (2026-09-18)


### ⚠ BREAKING CHANGES

* consume gallery-only related tool contract

### Новые возможности

* consume gallery-only related tool contract ([85ab7ec](https://github.com/YaroslavTaranich/monino-tools-user/commit/85ab7eca18d939cc9fc394019e82eb3118c7a0ca))

## [1.0.4](https://github.com/YaroslavTaranich/monino-tools-user/compare/v1.0.3...v1.0.4) (2026-09-17)


### Исправления

* derive tool covers from gallery images ([1128d47](https://github.com/YaroslavTaranich/monino-tools-user/commit/1128d47563faa1705eab0f58f6cc22f68caac159))
* derive tool covers from gallery images ([5c57905](https://github.com/YaroslavTaranich/monino-tools-user/commit/5c57905fa504d0c6910f8ba5d8046e52bbacddab))

## [1.0.3](https://github.com/YaroslavTaranich/monino-tools-user/compare/v1.0.2...v1.0.3) (2026-09-16)


### CI

* automate versioned releases ([b6dff38](https://github.com/YaroslavTaranich/monino-tools-user/commit/b6dff3839bea5b3da3522333ad41e34bfe4e574b))

## [1.0.2] — 2026-09-15

- Шрифт Montserrat хранится в репозитории и не загружается из Google Fonts во время сборки или работы сайта.
- Удалено неиспользуемое подключение Roboto.

## [1.0.1] — 2026-09-11

- Исправлена проверка соответствия Git-тега версии пакета в CI.

## [1.0.0] — 2026-09-11

- Зафиксирована первая стабильная версия сайта каталога аренды.
- Добавлены сопутствующие позиции с условиями аренды.
- Добавлена отдельная галерея с модальным просмотром и свайпами.
