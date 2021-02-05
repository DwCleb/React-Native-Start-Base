# Git flow - branch names and flow

Please use one of the following options as feature name:

## Using JIRA

### Features

Used to new features in App.

- `feature/[jira project key]-[jira number]`
- `feature/[jira project key]-[jira number]_[some description]`

**example:** `feature/KEY-1_xpto_description`

### Fix

Used to fix some error or bug in App.

- `fix/[jira project key]-[jira number]_[some description]`

**example:** `fix/KEY-1_fix_description`

### Setup

Used to setup some configuration in App.

- `setup/[jira project key]-[jira number]_[some description]`

**example:** `setup/KEY-1_setup_description`

## Centralized Branches

### Main

Main branch, when the production code will be deployed.

### HML

HML branch, when the staging code will be validate features and fixes to merge to Main branch.

### Dev

Dev branch, when the developers work in current sprint and compile all work done to merge to HML branch.

## Clone Repository

```sh
git clone [REPOSITORY LINK]
```

### Install dependencies

```sh
yarn install
```
