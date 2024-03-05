# opensoft_sharvari
This repo consist of code for the url shortner website
+ Aim :
           the aim of this website is to provide a short url of a long url that will redirect you to the original website
+ features :
           the user has the freedom to provide custom strings and the short url will consist of that string
+ tech stack :
             HTML, CSS, Javascript, ExpressJS
+ Pre-requisities :
  - Clone the repository using the following command:
    ```git clone https://github.com/wanjarisharvari/opensoft_sharvari```  
  - Open terminal and navigate to the clone reposiotry using ```cd repository```
  - install dependicies using the command ```pip install npm``` and
    ```npm install express```
  - to run the code type ```node index.js```
  - go to your browswer and type ```localhost:8001```
  - the functional website will open
+ Usage :
  - copy the long URL which needs to be shortened
  - provide a custom string if you want your site to be opened with a particular string in it (optional).
  - click on submit button you will be provided with a link you can click on the link to access the site through shortened url
  - you can even access the site by ```localhost:8001\(string)```
+ error handeling :
  - if the user provide a same custom string for two different url it shows error
  - if the some website is being accessed by a short url which does not exist it shows error
  - a same website can be accessed by two different custom strings
+ deployed website : https://opensoft-sharvari.vercel.app/ (temporarily not working)

