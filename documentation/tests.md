# Tests

This project are using these libs to component test and unit test:

- [Jest](https://jestjs.io/docs/en/getting-started)
- [react-test-renderer](https://reactjs.org/docs/test-renderer.html)

## Test structure

For include tests in components or unit tests, you need to create a folder called `__tests__` inside the component/function folder.

Inside this folder, create a file name for to test.

For TSX files:

- `Button.test.tsx`

For TS files:

- `Button.test.ts`

## Run tests

```sh
yarn test
```

## Run tests with coverage report

```sh
yarn coverage
```
