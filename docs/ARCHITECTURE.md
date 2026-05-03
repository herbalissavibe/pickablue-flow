# Архитектура проекта pickablue flow

## 1. Полная структура файлов и папок (целевое состояние)

```text
Flow/
├── docs/
│   ├── PROJECT_OVERVIEW.md
│   ├── ARCHITECTURE.md
│   ├── TECH_STACK.md
│   └── CURRENT_STATUS.md
├── public/
│   ├── favicon.ico
│   ├── video/
│   │   ├── hero.webm
│   │   ├── hero.mp4
│   │   ├── case-kuladig.webm
│   │   ├── case-kuladig.mp4
│   │   ├── case-regional.webm
│   │   ├── case-regional.mp4
│   │   ├── case-datacycle.webm
│   │   └── case-datacycle.mp4
│   └── images/
│       ├── hero-poster.jpg
│       ├── flow-water/          # опциональные фоны секций
│       └── phone-mockup.png     # или SVG
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── vite-env.d.ts
│   ├── styles/
│   │   └── index.css            # Tailwind entry + глобальные утилиты
│   ├── tokens/
│   │   └── colors.ts            # семантические константы (дубль CSS variables)
│   ├── content/
│   │   ├── de.ts                # весь немецкий копирайт секций
│   │   └── types.ts             # типы для секций/кейсов
│   ├── components/
│   │   ├── layout/
│   │   │   ├── PageShell.tsx           # обёртка страницы, skip link
│   │   │   └── Section.tsx             # секция: id, aria-labelledby, vertical rhythm
│   │   ├── hero/
│   │   │   ├── HeroSection.tsx         # композиция: видео + градиент + волна
│   │   │   ├── HeroVideo.tsx           # full-bleed video + poster + reduced motion
│   │   │   ├── HeroWaveDivider.tsx     # SVG волна снизу hero
│   │   │   └── FlowWordmark.tsx        # цветные буквы F-L-O-W + blend
│   │   ├── intro/
│   │   │   └── IntroContent.tsx        # pickablue flow + headline + lead
│   │   ├── content-journey/
│   │   │   └── ContentJourney.tsx        # «Vom Content zum Erlebnis»
│   │   ├── cases/
│   │   │   ├── LetItFlowSection.tsx    # синий блок + заголовок
│   │   │   ├── CaseStudyGrid.tsx       # сетка 3 колонки
│   │   │   ├── CaseStudyCard.tsx       # карточка + CTA открытия модалки
│   │   │   └── CaseVideoModal.tsx      # Radix Dialog + video
│   │   ├── app-showcase/
│   │   │   └── AppShowcaseSection.tsx  # «Direkt erlebbar» + underwater bg + phone
│   │   ├── value/
│   │   │   └── ValueProposition.tsx    # «Mehr Wirkung…»
│   │   ├── reasons/
│   │   │   ├── ReasonsSection.tsx      # «Drei Gründe…»
│   │   │   ├── ReasonRow.tsx           # круг с номером + заголовок + текст
│   │   │   └── BubbleCircle.tsx        # круг с фоном water + цифра
│   │   ├── audience/
│   │   │   └── AudienceHighlight.tsx   # синий full-bleed «Für wen…»
│   │   ├── statement/
│   │   │   └── ClosingStatement.tsx    # крупная типографика + градиент/пузыри
│   │   ├── contact/
│   │   │   ├── ContactSection.tsx      # тёмный фон + CTA + адрес
│   │   │   └── SiteFooter.tsx          # чёрная полоса: Datenschutz | …
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Container.tsx           # max-width + горизонтальные отступы
│   │       └── VisuallyHidden.tsx
│   ├── hooks/
│   │   ├── usePrefersReducedMotion.ts
│   │   └── useMediaQuery.ts
│   └── lib/
│       └── cn.ts                       # clsx + tailwind-merge
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── eslint.config.js
└── postcss.config.mjs                  # если требуется для Tailwind v4
```

Секции в `App.tsx` собираются **сверху вниз** в порядке макета; каждая крупная секция — отдельная папка под `components/`.

---

## 2. Цветовая палитра (из макета / скриншотов)

Значения **ориентировочные** (калибровка по финальному Figma/PDF). В коде лучше задать CSS variables в `@theme` и ссылаться на семантические имена.

### Акценты (FLOW wordmark)

| Токен | HEX | Применение |
|-------|-----|------------|
| `flow-blue` | `#009FE3` | Буква F, основной бренд-синий |
| `flow-green` | `#39B54A` | L |
| `flow-pink` | `#E6007E` | O |
| `flow-orange` | `#F7941D` | W |

### Интерфейс и фоны

| Токен | HEX | Применение |
|-------|-----|------------|
| `brand-primary` | `#009EE3` | Заголовки на белом, ссылки, кнопки |
| `brand-primary-alt` | `#0089D0` | Секции с средне-синим фоном (кейсы) |
| `brand-heading-soft` | `#59B2D1` | Светлый подзаголовок («Drei Gründe…») |
| `surface-deep` | `#004B87` | Плейсхолдеры карточек / тёмные панели |
| `navy-deep` | `#002B49` → `#001A33` | Подводный градиент, контактный блок |
| `teal-mid` | `#00A3C1` | Градиент underwater-секций |
| `placeholder-amber` | `#FFD700` | Подписи на плейсхолдерах (до финальных ассетов) |
| `text-body` | `#4D4D4D` / `#333333` | Основной текст на белом |
| `surface-white` | `#FFFFFF` | Основной контентный фон |
| `legal-bar` | `#000000` | Нижняя полоса футера |

### Мобильный мокап (контент внутри телефона)

| Токен | HEX | Примечание |
|-------|-----|------------|
| `accent-red` | `#C41E3A` | Акценты в UI примера на экране |

### Blend / перекрытие букв FLOW

Использовать `mix-blend-mode: multiply` или `screen` (подобрать по PNG) поверх слоя с контролируемым фоном.

---

## 3. Каталог компонентов

### Layout

| Компонент | Назначение |
|-----------|------------|
| **PageShell** | Корневой layout: `min-h-dvh`, фон по умолчанию, **skip to content** ссылка для a11y. |
| **Section** | Обёртка секции: `id` для якорей, `aria-labelledby`, вертикальные отступы (`py-16`/`py-24`), опциональный фон. |

### Hero

| Компонент | Назначение |
|-----------|------------|
| **HeroSection** | Собирает логотип pickablue (white), **HeroVideo**, затемнение/градиент для читаемости, **FlowWordmark**, нижний **HeroWaveDivider**. |
| **HeroVideo** | `position: absolute; inset: 0; width/height 100%; object-fit: cover`. Учёт `prefers-reduced-motion`: показывать только **poster** или статичный кадр. `muted` + `playsInline` для автоплея где разрешено. |
| **HeroWaveDivider** | SVG path, `width: 100%`, прижат к низу hero; заливка белым для стыка с контентом. |
| **FlowWordmark** | Четыре буквы как отдельные слои или SVG с заливками и blend; responsive `clamp()` для font-size. |

### Intro и текстовые блоки

| Компонент | Назначение |
|-----------|------------|
| **IntroContent** | «pickablue flow», главный H1, подзаголовки, первый абзац — данные из `content/de.ts`. |
| **ContentJourney** | Секция «Vom Content zum Erlebnis». |
| **ValueProposition** | «Mehr Wirkung bei weniger Aufwand». |

### Кейсы и модалки

| Компонент | Назначение |
|-----------|------------|
| **LetItFlowSection** | Синий full-width фон, заголовок «Let it flow – so einfach geht's:». |
| **CaseStudyGrid** | CSS Grid: `1fr` на мобиле, `repeat(3, 1fr)` от `md+`; gap по макету. |
| **CaseStudyCard** | Плейсхолдер/превью, подпись «Screenvideo + Fullscreen-Modal», заголовок кейса (#1 KuLaDig и т.д.); `onOpen` → модалка. |
| **CaseVideoModal** | Radix `Dialog`: fullscreen overlay, фокус внутри, закрытие по Escape; внутри `<video controls>` с источниками из props. |

### Витрина «без приложения»

| Компонент | Назначение |
|-----------|------------|
| **AppShowcaseSection** | Двухколоночный layout: слева белый текст на подводном фоне/градиенте, справа **изображение телефона** (или CSS mockup). Фон — image или CSS gradient близкий к макету. |

### Причины и аудитория

| Компонент | Назначение |
|-----------|------------|
| **ReasonsSection** | Заголовок секции + список из **ReasonRow**. |
| **ReasonRow** | Flex/grid: **BubbleCircle** + текстовый столбец (H3 + p). |
| **BubbleCircle** | Круг `aspect-square`, фон — вода/пузыри (image или CSS), крупная белая цифра. |
| **AudienceHighlight** | Сплошной ярко-синий блок, белый текст, **жирное** выделение отраслей внутри абзаца (через разметку в контенте или отдельные spans). |

### Закрытие и контакт

| Компонент | Назначение |
|-----------|------------|
| **ClosingStatement** | Крупный текст в два ряда; градиент фона от белого к лёгкому bubble-фону внизу. |
| **ContactSection** | Тёмный underwater фон, H2 «Kontaktieren Sie uns», синяя кнопка/плашка (контакт или якорь на форму), реквизиты. |
| **SiteFooter** | Полоса с ссылками: `Datenschutz \| Nutzungsbedingungen \| Impressum` (как в PDF-макете). |

### UI primitives

| Компонент | Назначение |
|-----------|------------|
| **Container** | `max-w-6xl` (или по макету) + горизонтальные `px`. |
| **Button** | Варианты: primary (синий), ghost на тёмном фоне. |
| **VisuallyHidden** | Скрытые подписи для иконок/кнопок закрытия модалки. |

---

## 4. Организация кода (рекомендации)

1. **Контент отдельно от разметки** — весь немецкий текст в `src/content/de.ts` (или `de.json`), компоненты получают строки через props или маленькие хуки `useSiteContent()`.
2. **Семантический HTML** — один `h1` на страницу; далее иерархия `h2`/`h3` по секциям.
3. **Доступность модалок** — только Radix (или эквивалент); не блокировать скролл страницы без `inert` на фоне через API диалога.
4. **Анимации** — через Motion с `useReducedMotion`; избегать обязательного motion для понимания контента.
5. **Именование** — PascalCase для компонентов; файлы компонентов совпадают с именем; секции суффикс `Section` где это полноэкранный блок.
6. **Пути** — alias `@/` на `src/` в `vite.config` + `tsconfig`.
7. **Статические ассеты** — только в `public/`; импорт изображений из `src/assets` если нужен hash Vite.

---

## 5. Поток данных

- **Нет глобального серверного состояния.** Локальный state: открытая модалка (`caseId | null`), опционально `videoPlaying`.
- Контент **иммутабельный**; кейсы — массив объектов `{ id, title, subtitle, video: { webm, mp4 }, poster }`.

---

## 6. Зависимости между секциями (скролл)

Порядок в `App.tsx` (сверху вниз):

1. HeroSection  
2. IntroContent  
3. ContentJourney  
4. LetItFlowSection (+ модалки на уровне секции или портал в `body`)  
5. AppShowcaseSection  
6. ValueProposition  
7. ReasonsSection  
8. AudienceHighlight  
9. ClosingStatement  
10. ContactSection + SiteFooter  

Модалку лучше рендерить **один раз** на уровне `LetItFlowSection` или `App` с контролируемым `activeCaseId`.
