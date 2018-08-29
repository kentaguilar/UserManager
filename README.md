# User Manager

A basic authentication workflow using NodeJS and MongoDB<br/>

## How to Use
The purpose of this app is to showcase the basic registration and authentication workflow using NodeJS.<br/>
Tip: If you have trouble finding a desired user detail, you can grab one at -> https://randomuser.me<br/>

First off, you need to register a user via the user registration page -> http://deepmirage.com:3000/register<br/>
<img src="http://deepmirage.com/git/register.png" alt="User Registration" width="576px"/><br/>
Once registered, you can now use the entered username and password on the login page -> http://deepmirage.com:3000<br/>
<img src="http://deepmirage.com/git/login.png" alt="User Login" width="579px"/><br/>
Hit the "Login Now" button<br/>
You should be redirected to the dashboard page. Your name should be displayed on the page. Like so,<br/>
<img src="http://deepmirage.com/git/dashboard.png" alt="Dashboard" width="668px"/>

## Backend
- Mongo DB

## Technologies
- NodeJS
- Bootstrap
- Vanilla JS
- Gulp
- Nodemon
- Uglify(minifier)
- Imagemin
- Sass
- Concat

## Main Pages
- Login -> http://deepmirage.com:3000
- Registration Page -> http://deepmirage.com:3000/register
- Dashboard -> http://deepmirage.com:3000/dashboard

Note: the dashboard page is protected so you can access it via login authentication

## API endpoints
- Get User List(publicly available for demo/testing/reference purposes) [GET Method] -> http://deepmirage.com:3000/api/get-users
- Authenticate User [POST Method] -> http://deepmirage.com:3000/api/auth-user
- Register User [POST Method] -> http://deepmirage.com:3000/api/register-user



