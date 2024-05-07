# eestec-website-ssa-frontend

This repository is responsible for delivering the frontend & content of https://softskillsacademy.pl website. 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## GitHub Actions CI/CD

Every workflow is in .github/workflow folder

When pushing to develop branch, build is deployed onto dev.softskillsacademy.pl

When pushing/pull request to master branch, build is deployed onto softskillsacademy.pl
