create pages in pages folder,install react router dom and using routes and route create routes in app.js file for every page

create user folder and add all subpages inside it
userProfilePage.js,userOrderPage.js



step-1: for frontend install react app in frontend folder
command : npx create-react-app .


shortcut for opening terminal 
 control+tilda~


 go to app.js edit it
 delete app.css file you dont need it
 delete setupTests.js,and app.test.js,logo.svg  file also
 open index.css and remove all of its content

 step: 

 create pages folder in src
 add HomePage.js file in it


 for routing install react-router-dom 
 command: npm i react-router-dom@^6.2.1

 add CartPage.js file
 add LoginPage.js file
 add ProductDetails.js file
 add ProductListPage.js file
 add RegisterPage.js file

 add routes in app.js


  install bootstrap: 
  npm install bootstrap@^5.1.3
  install react bootstrap
  npm install react-bootstrap@^2.2.1

  use bootstrap inside index.js


  to stop reloading you need to install new package
  npm i react-router-bootstrap@^0.26.0


  to install bootstrap icons install package
  npm i bootstrap-icons@^1.8.0
  and import that package in index.js file


  for star rating install package
  npm i react-simple-star-rating@^4.0.5


  for mouse hover we need a seprate package 
  js-image-zoom
  npm i js-image-zoom@^0.7.0

  for the analytics in admin page you need to install
  npm i recharts

  ------------------------------------
  backend 
  check node version using node -v
  npm init
  enter+enter+enter+ server.js +enter
  packege.json file will create 
  install express.js
  npm install express@^4.17.2
  npm i nodemon@^2.0.15 --save-dev 
  this means the package is installed for dev enviornment and when you will deploy your backend to heroku or cyclic it will not deploy inside it

 npx nodemon server.js to check

 for .env file install npm i dotenv
 npm i mongoose@^6.2.1