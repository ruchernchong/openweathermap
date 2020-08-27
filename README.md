# OpenWeatherMap Demo

## Summary

Build a weather app using OpenWeatherMap API using the Gatsby framework. This framework was chose to reduce some boilerplate, and a good way to serve SSR applications. This app uses the feature branches and pull requests (PRs) instead of working from the master branch. Because there are some big features, the PR will allow the CI/CD to check for errors before work is merged into master.

## Motivation

- To demo the understanding of building a React frontend app
- To demo the understanding of Redux
- To demo the basic understanding of Typescript
- To demo the understanding of Github CI/CD

## Getting Started

`.env.example` is the sample file for the expected environment variables. I have split the environment variables into 3 different types in this demo. The motivation for splitting into 3 different environments is to allow each environment to have different values. This is the practice for a bigger project with different variables for testing and production although this should not be of significant difference for this demo.

- `.env.development` - This is needed for development to work when firing `yarn develop`
- `.env.test` - This is needed for test to work when firing `yarn test`
- `.env.production` - This is the environment where the final variables used for `yarn build`

Assuming the above 3 environment files are ready, we can go ahead and run the application
accordingly.

- `yarn develop` - Fires the development server with hot-reloading
- `yarn test` or `yarn test:watch` - Runs the units testing suite
- `yarn build` - Builds the application into production ready code with minification and smaller bundle sizes. This also builds the Typescript documentation
