# Текущий статус

**Последнее обновление:** 2026-05-04

## Фаза

**Скелет + контентные секции** — Vite/React/Tailwind one-pager; hero, intro (Roboto, чипы после lead), кейсы «Let it flow» с **видео-превью** и **модалкой** (Radix + motion scale), остальные секции по макету. Туннельный scroll-intro **снят** по запросу.

## Сделано

- [x] `PROJECT_OVERVIEW.md`, `TECH_STACK.md`, `ARCHITECTURE.md`, `CURRENT_STATUS.md`.
- [x] Сборка и dev: Vite 6, React 19, TS, Tailwind v4, alias `@/`, Motion, Radix Dialog.
- [x] Hero 800px, видео + poster, dev-fallback подводного ролика (Pexels) в `src/content/de.ts`.
- [x] Intro: Roboto, подзаголовок как H1 серым, чипы select… после абзаца с «Content-Aufwand», 2-й и 4-й чип со сдвигом, блок слева.
- [x] Секция кейсов: три карточки — **превью-видео** (muted loop), низ с градиентом, play + описание; **aspect 8/9** (высота в 2× от 16:9); **gap** между карточками уменьшен вдвое; клик → **попап** с увеличением (motion) и закрытием.
- [x] Process pills из hero убраны; волны между всеми секциями — откат по запросу.

## В работе

- Полировка визуала под финальный макет; реальные ролики в `public/video/`.

## Следующие задачи

1. **Контент:** `src/content/de.ts` по RTF/PDF; финальный текст Datacycle вместо lorem.
2. **Медиа:** `public/video/hero.*`, `case-kuladig.*`, `case-regional.*`, `case-datacycle.*` для production.
3. **Визуал:** сетка/типографика по Figma, phone mockup, точные цвета.
4. **Полировка:** a11y, Lighthouse, Open Graph, рабочие ссылки в футере.

## Блокеры / вопросы

| Вопрос | Статус |
|--------|--------|
| Финальные видео hero + кейсы | Ожидаются |
| Цвета из Figma | Сверить с PDF |
| Контакт: форма или только реквизиты | Уточнить |

## Как использовать эти файлы в Cursor

Ссылка на `docs/` в начале задачи: **ARCHITECTURE**, **TECH_STACK**, **PROJECT_OVERVIEW**, **CURRENT_STATUS** — для продолжения с актуального этапа.
