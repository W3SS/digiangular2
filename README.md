# Digiangular2

Project that uses Semantic UI, ngSemantic, TypeScript, Angular2, and shows different tutorials. Semantic UI does not offer a collapsing menu on mobile, so we have a desktop menu and a mobile sidebar depending on the device.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

### On desktop
![Image on Desktop](images/desktop.png)
### On mobile (with sidebar)
![Image on Mobile](images/mobile.png)

## Content
* __Home__ -- Display static test.
* __Menu Component__ -- Users an array of JSON object to generate a Desktop menu and a Mobile sidebar / hamburger menu.
* __HelloWorld__ -- Mandatory (?) exercise.
* __User Item__ -- Define a component ```<app-user-item name=''></app-user-item>``` that display a name.
* __User List__ -- Loop through an array and display a series of ```<app-user-item>```.
* __Simple Reddit__ -- Add article with form validation and basic voting.

## Prerequisites
```bash
$ sudo npm install -g angular-cli
```

## Install
```bash
$ npm install
```
During the install, 
* select 'Yes, extend my current settings.',
* then 'Automatic'
* then 'Yes'
* Then press Enter.

## Start (Dev)
```bash
$ ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## To add component

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

