# giphGallery
This is a prototype for a gallery of web art and commentary from site users.  I used the
MEAN stack -- MongoDB, Express.js, Angular.js, and Node.js.  I also used SASS and Bootstrap for the styling.  As of now, The content comes from the Giphy API.  
Eventually, I want to pull from multiple API's to get content for users to add
commentary to.   

* View a deployed verison here: https://blooming-mesa-51637.herokuapp.com/#/ref


# User Stories
* This is aimed at people who roam around on the web and have an appreciation for
  weird things people make.

* Users are presented with interesting stuff and prompted to critique what they see.

* Users get to checkout an index of all the saved content and commentary saved to the
site.  

# How It Works
Upon first visit to the site, a user hits a page presenting him with content pulled
in from a third party API.  The user is prompted to add commentary about the content.  
When the user presses the save button on the page, the commentary and a url for the content
is saved together as an entry into a database.  The user is then redirected to a
page with an index of all the content and commentaries.  

AngularJS on the client side is making calls to a third party API to pull in content
to be commented.  And it's making GET and POST requests to pull in and save data from
the database and API I built with Mongoose/MongoDB and Express/Node.  


![Alt text](/screenshot1.png)
