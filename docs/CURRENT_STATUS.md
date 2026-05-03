# Текущий статус

**Последнее обновление:** 2026-05-04

**Репозиторий:** https://github.com/herbalissavibe/pickablue-flow

## Фаза

**Скелет + контентные секции** — Vite/React/Tailwind one-pager; hero с **волной** внизу блока (без лишней тёмной полосы), intro (Roboto, чипы), кейсы с видео-превью и модалкой; туннельный scroll-intro снят.

## Сделано

- [x] `PROJECT_OVERVIEW.md`, `TECH_STACK.md`, `ARCHITECTURE.md`, `CURRENT_STATUS.md`.
- [x] Сборка и dev: Vite 6, React 19, TS, Tailwind v4, alias `@/`, Motion, Radix Dialog.
- [x] **Hero:** 800px, видео + poster, dev-fallback подводного ролика (Pexels) в `src/content/de.ts`.
- [x] **Hero → intro:** SVG-волна **внутри** того же flex-контейнера (`mt-auto`), прозрачная часть над кривой показывает **видео**; убрана отдельная тёмно-синяя полоса под волной.
- [x] Intro: Roboto, подзаголовок как H1 серым, чипы после абзаца с «Content-Aufwand», 2-й и 4-й чип со сдвигом, блок слева.
- [x] Секция кейсов: превью-видео, градиент + play + текст, aspect 8/9, уменьшенный gap, модалка с motion и закрытием.
- [x] GitHub: `origin` → `pickablue-flow`, ветка `main`.

## В работе

- Полировка визуала; реальные ролики в `public/video/` для production.

## Следующие задачи

1. **Контент:** `src/content/de.ts` по RTF/PDF; Datacycle без lorem.
2. **Медиа:** `public/video/hero.*`, `case-*` для деплоя без внешнего fallback.
3. **Визуал:** Figma-сетка, phone mockup, цвета.
4. **Полировка:** a11y, Lighthouse, Open Graph, ссылки в футере.

## Блокеры / вопросы

| Вопрос | Статус |
|--------|--------|
| Финальные видео hero + кейсы | Ожидаются |
| Цвета из Figma | Сверить с PDF |
| Контакт: форма или реквизиты | Уточнить |

## Как использовать эти файлы в Cursor

Ссылка на `docs/` в начале задачи: **ARCHITECTURE**, **TECH_STACK**, **PROJECT_OVERVIEW**, **CURRENT_STATUS**.
