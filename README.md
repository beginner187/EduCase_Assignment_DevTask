# Here is flow of assignment
1. I made educase-devTask using fronted library React.js , it is used for making    single page application . Also i used Tailwind.css which is compact version of css  and in responsive in nature.
2. Application has 4 components Home,Signup,Login,Profile.I made like as given in assignment. Signup have signup functionality many input field and also applied mannual validation on them using regex expression .
3. Login has login functionality with email and password input field and applied mannual validation on them using regex expression.
4. Home is the simple page . there are two button . one go for signup and other go for login.
5. Profile page has name and email . it is used in localStorage while signup and login.

# Further improvements
1. Using node.js as a backend and jwt token(security token) authentication also help to protect some route .
2. Store data like name,email,password (bcrypt.js -> hash password) in mongodb using mongoose odm model. in login it can also be validated from backend like used is already regsitered or not. if yes then do login else do signup.
3. Can compared password using bcrypt.js hash password.
4. Can be used redux and Context Api for better store management than localStorage.
5. I applied validation mannually , can be used react-hook-form or other libraries to apply validation much better. 
