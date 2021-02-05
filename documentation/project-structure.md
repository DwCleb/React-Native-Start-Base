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
│ │ └──── /*
│ │ 
│ ├─┬─ /pages                      `[App screen declaration]`
│ │ │
│ │ ├─┬─ /Private
│ │ │ │
│ │ │ ├─┬─ /Home
│ │ │ │ ├── index.tsx
│ │ │ │ └── styles.ts
│ │ │ │
│ │ │ └── /*
│ │ │
│ │ └─┬─ /Public
│ │   │
│ │   ├─┬─ /Home
│ │   │ ├── index.tsx
│ │   │ └── styles.ts
│ │   │
│ │   └── /*
│ │    
│ ├─┬─ /routes
│ │ │
│ │ ├─┬─ /App
│ │ │ └─ index.tsx
│ │ │
│ │ ├─┬─ /Auth
│ │ │ └─ index.tsx
│ │ │
│ │ ├─── RoutesTranslation.tsx
│ │ └─── index.tsx
│ │ 
│ ├─┬── /services
│ │ │
│ │ ├──┬─ /api
│ │ │  │
│ │ │  ├───
│ │ │  └───
│ │ │ 
│ │ └─┬── /helpers
│ │   ├───
│ │   └───
│ │ 
│ └─┬─ /theme
│   │ 
│   ├─┬─ /ThemeContext
│   │ ├─ dark.ts
│   │ ├─ light.ts
│   │ └─ index.tsx
│   │ 
│   ├── colors.ts
│   ├── index.ts
│   ├── metrics.ts
│   └── theme.ts
│ 
└─ index.js
