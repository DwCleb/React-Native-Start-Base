# Project Structure


```sh
┬─ /android/*
│ 
├─ /ios/*
│ 
├─ /node_modules/*
│ 
├─┬ /src
│ │ 
│ ├─┬─ /components                 `[Centralized components]`
│ │ │ 
│ │ ├─┬─── /Navigation             `[Components to be used in navigation]`
│ │ │ │ 
│ │ │ ├─┬── /BackButton
│ │ │ │ ├─── index.tsx
│ │ │ │ └─── styles.ts
│ │ │ │
│ │ │ ├──── /*
│ │ │ │
│ │ │ └──── index.ts               `[Export all components, enums, props]`
│ │ │
│ │ ├─┬─── /Structure              `[Components to be used to build pages and high structure]`
│ │ │ │ 
│ │ │ ├─┬── /View
│ │ │ │ │
│ │ │ │ ├──── AnimatedView.tsx
│ │ │ │ └──── index.ts             `[Export all components, enums, props]`
│ │ │ │ 
│ │ │ └──── index.ts               `[Export all components, enums, props]`
│ │ │
│ │ ├─┬─── /UI                     `[Components to be used to show ui elements]`
│ │ │ │ 
│ │ │ ├─┬── /Buttons
│ │ │ │ │ 
│ │ │ │ ├─┬─ /Button
│ │ │ │ │ ├─── index.tsx
│ │ │ │ │ └─── styles.ts
│ │ │ │ │
│ │ │ │ └──── index.ts             `[Export all components, enums, props]`
│ │ │ │ 
│ │ │ ├─┬── /Typography
│ │ │ │ │
│ │ │ │ ├─┬─ /Button
│ │ │ │ │ ├─── index.tsx
│ │ │ │ │ └─── styles.ts
│ │ │ │ │
│ │ │ │ └── /*
│ │ │ │ 
│ │ │ └──── index.ts               `[Export all components, enums, props]`
│ │ │
│ │ │ 
│ │ │ 
│ │ │ 
│ ├─┬─ /pages
│ │ │
│ │ ├─┬─ /Private
│ │ │ │
│ │ │ ├─── */
│ │ │ │
│ │ │ └─┬─ /Home
│ │ │   ├── index.tsx
│ │ │   └── styles.tsx
│ │ │
│ │ └─┬─ /Public
│ │   ├─── */
│ │   ├─┬─ /Welcome
│ │   │ ├── index.tsx
│ │   │ └── styles.tsx
│ │   ├─── /Register/*
│ │   └─── */
│ ├─┬─ /routes/
│ │ ├── authLoading.tsx
│ │ └── index.tsx
│ ├─┬─ /services/
│ │ └── auth.tsx
│ └─┬─ /theme/
│   ├── colors.tsx
│   ├── general.tsx
│   ├── index.tsx
│   └── metrics.tsx
├─ /*
└─ index.js
