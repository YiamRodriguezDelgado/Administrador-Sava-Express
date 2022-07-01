# [SHIPTRACKER FOR SAVAEXPRESS][![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/home?status=Argon%20Dashboard%20is%20a%20Free%20Bootstrap%20and%20Angular%20Dashboard%20made%20using%20angular-cli%20%E2%9D%A4%EF%B8%8F%0Ahttps%3A//demos.creative-tim.com/argon-dashboard-angular%20%23angular%20%23angular-cli%20%23argon%20%23argondesign%20%23angulardashboard%20%23argonangular%20%23angulardesign%20%23bootstrap%20%23design%20%23uikit%20%23freebie%20%20via%20%40CreativeTim)



 ![version](https://img.shields.io/badge/version-1.0.0-blue.svg) [![GitHub issues open]](0) [![GitHub issues closed]](0) 


![Product Gif](https://imgbox.com/Gys1r8Ls)

**Admin and recibe updates for your packages.**

This proyect is create for the company savaexpress, which offers a courier service.
This web allows to manage accounts and packages, and also let clients see the tracking of their packages by reciving notification when their status is update.



## Versions

[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/html-logo.jpg?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/argon-dashboard)[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/react-logo.jpg?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/argon-dashboard-react)[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/angular-logo.jpg?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/argon-dashboard-angular)[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/nodejs-logo.jpg?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/argon-dashboard-nodejs)[<img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/laravel_logo.png" width="60" height="60" style="background:white"/>](https://www.creative-tim.com/product/argon-dashboard-laravel)[<img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/sketch-logo.jpg" width="60" height="60" />]



## Quick start

- [Download from Github](https://github.com/creativetimofficial/argon-dashboard-angular/archive/master.zip).
- [Download from Creative Tim](https://www.creative-tim.com/product/argon-dashboard-angular?ref=ada-github-readme).
- Clone the repo: `git clone https://github.com/creativetimofficial/argon-dashboard-angular.git`.


## File Structure
Within the download you'll find the following directories and files:

```
argon-dashboard-angular
├── CHANGELOG.md
├── README.md
├── angular.json
├── e2e
├── package.json
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.routing.ts
│   │   ├── components
│   │   │   ├── components.module.spec.ts
│   │   │   ├── components.module.ts
│   │   │   ├── footer
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.scss
│   │   │   │   ├── footer.component.spec.ts
│   │   │   │   └── footer.component.ts
│   │   │   ├── navbar
│   │   │   │   ├── navbar.component.html
│   │   │   │   ├── navbar.component.scss
│   │   │   │   ├── navbar.component.spec.ts
│   │   │   │   └── navbar.component.ts
│   │   │   └── sidebar
│   │   │       ├── sidebar.component.html
│   │   │       ├── sidebar.component.scss
│   │   │       ├── sidebar.component.spec.ts
│   │   │       └── sidebar.component.ts
│   │   ├── layouts
│   │   │   ├── admin-layout
│   │   │   │   ├── admin-layout.component.html
│   │   │   │   ├── admin-layout.component.scss
│   │   │   │   ├── admin-layout.component.spec.ts
│   │   │   │   ├── admin-layout.component.ts
│   │   │   │   ├── admin-layout.module.ts
│   │   │   │   └── admin-layout.routing.ts
│   │   │   └── auth-layout
│   │   │       ├── auth-layout.component.html
│   │   │       ├── auth-layout.component.scss
│   │   │       ├── auth-layout.component.spec.ts
│   │   │       ├── auth-layout.component.ts
│   │   │       ├── auth-layout.module.ts
│   │   │       └── auth-layout.routing.ts
│   │   ├── pages
│   │   │   ├── dashboard
│   │   │   │   ├── dashboard.component.html
│   │   │   │   ├── dashboard.component.scss
│   │   │   │   ├── dashboard.component.spec.ts
│   │   │   │   └── dashboard.component.ts
│   │   │   ├── icons
│   │   │   │   ├── icons.component.html
│   │   │   │   ├── icons.component.scss
│   │   │   │   ├── icons.component.spec.ts
│   │   │   │   └── icons.component.ts
│   │   │   ├── login
│   │   │   │   ├── login.component.html
│   │   │   │   ├── login.component.scss
│   │   │   │   ├── login.component.spec.ts
│   │   │   │   └── login.component.ts
│   │   │   ├── maps
│   │   │   │   ├── maps.component.html
│   │   │   │   ├── maps.component.scss
│   │   │   │   ├── maps.component.spec.ts
│   │   │   │   └── maps.component.ts
│   │   │   ├── register
│   │   │   │   ├── register.component.html
│   │   │   │   ├── register.component.scss
│   │   │   │   ├── register.component.spec.ts
│   │   │   │   └── register.component.ts
│   │   │   ├── tables
│   │   │   │   ├── tables.component.html
│   │   │   │   ├── tables.component.scss
│   │   │   │   ├── tables.component.spec.ts
│   │   │   │   └── tables.component.ts
│   │   │   └── user-profile
│   │   │       ├── user-profile.component.html
│   │   │       ├── user-profile.component.scss
│   │   │       ├── user-profile.component.spec.ts
│   │   │       └── user-profile.component.ts
│   │   └── variables
│   │       └── charts.ts
│   ├── assets
│   │   ├── fonts
│   │   ├── img
│   │   ├── scss
│   │   │   ├── angular-differences
│   │   │   ├── argon.scss
│   │   │   ├── core
│   │   │   └── custom
│   │   └── vendor
│   ├── browserslist
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── tslint.json
├── tsconfig.json
└── tslint.json
```


## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64">


## Reporting Issues

We use GitHub Issues as the official bug tracker for the Material Kit. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Material Kit. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/?ref=ada-github-readme).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

### Social Media

Twitter: <https://twitter.com/CreativeTim?ref=creativetim>

Facebook: <https://www.facebook.com/CreativeTim?ref=creativetim>

Dribbble: <https://dribbble.com/creativetim?ref=creativetim>

Instagram: <https://www.instagram.com/CreativeTimOfficial?ref=creativetim>
