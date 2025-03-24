# TypeScript Path Aliases

These aliases are defined in the `compilerOptions.paths` section of the `tsconfig.json` file.

## Styling Aliases

| Alias              | Path                          | Description    |
| ------------------ | ----------------------------- | -------------- |
| `@scss_variables` | `./src/styles/_variables.scss` | SCSS variables |

## UI Component Aliases

| Alias            | Path              | Description                        |
| ---------------- | ----------------- | ---------------------------------- |
| `@/*`           | `./src/*`         | Root source directory access       |
| `@components/*` | `./src/components/*` | React components directory         |

## Functional Aliases

| Alias     | Path                  | Description        |
| --------- | --------------------- | ------------------ |
| `@utils` | `./src/utils/index.ts` | Utility functions  |
| `@hooks` | `./src/hooks/index.ts` | Custom React hooks |

## Type Definition Aliases

| Alias          | Path                      | Description          |
| -------------- | ------------------------- | -------------------- |
| `@interfaces` | `./src/interfaces/index.ts` | TypeScript interfaces |