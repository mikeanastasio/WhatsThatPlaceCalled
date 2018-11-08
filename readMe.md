# What's that place?

## Overview

Finding where to eat your next meal is always a struggle, especially if you live in a big city with so many options, but we all walk by places that seem interesting and then forget about them ten minutes later or go somewhere and enjoy it but never go back. This web app is meant to mitagate that. It will let you aggregate all the places you see, have been to, or otherwise. 

The user will be able to sign in and see their lists of places that they've been to and enjoyed or places they thought seemed interesting but haven't been able to go to yet. At anytime the user can quickly come in and look through their lists of places or add a new place to any list they choose. They will also have a spot to write their own personalized description for themselves so future them will be able to more easily remember the place that they are looking at.

## Data Model

The application will store Users and lists of places.

* Users can have multiple lists of places based on whether they are new restaurants or ones they have previously been to.
* Each place will store it's name, location, and description as well as any other necessary information

An Example User:

```javascript
{
  username: 'Mike Anastasio'
  hash: //password hash,
  email: 'ma4976@nyu.edu',
  favoriteColor: 'blue'
  placesToGo: //array of restaurants they are looking to go to,
  placesBeen: //an arraty of restaurants they have already been to
}
```

An Example Place:

```javascript
{
  name: 'Sweet restaurant',
  description: 'Looked neat outside!',
  timePosted: '2018-11-07',
  address: '1 University Place, New York, NY 10003',
  hasBeen: false
}
```


## [Link to Commented First Draft Schema](/:src/db.js) 

## Wireframes

(___TODO__: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc._)

/ - page with main views of all current list for a user when already signed in

![list create](Documentation/main.jpg)

/signin - page for sign in and sign up. The first page that will display if the user is not already signed in

![list](Documentation/signIn.jpg)

/userSlug/placeSlug - page for showing all information about a specific place

![list](documentation/place.jpg)

## Site map

(___TODO__: draw out a site map that shows how pages are related to each other_)

Here's a [complex example from wikipedia](https://upload.wikimedia.org/wikipedia/commons/2/20/Sitemap_google.jpg), but you can create one without the screenshots, drop shadows, etc. ... just names of pages and where they flow to.

## User Stories or Use Cases

(___TODO__: write out how your application will be used through [user stories](http://en.wikipedia.org/wiki/User_story#Format) and / or [use cases](https://www.mongodb.com/download-center?jmp=docs&_ga=1.47552679.1838903181.1489282706#previous)_)

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can create a new grocery list
4. as a user, I can view all of the grocery lists I've created in a single list
5. as a user, I can add items to an existing grocery list
6. as a user, I can cross off items in an existing grocery list

## Research Topics

(___TODO__: the research topics that you're planning on working on along with their point values... and the total points of research topics listed_)

* (5 points) Integrate user authentication
    * I'm going to be using passport for user authentication
    * And account has been made for testing; I'll email you the password
    * see <code>cs.nyu.edu/~jversoza/ait-final/register</code> for register page
    * see <code>cs.nyu.edu/~jversoza/ait-final/login</code> for login page
* (4 points) Perform client side form validation using a JavaScript library
    * see <code>cs.nyu.edu/~jversoza/ait-final/my-form</code>
    * if you put in a number that's greater than 5, an error message will appear in the dom
* (5 points) vue.js
    * used vue.js as the frontend framework; it's a challenging library to learn, so I've assigned it 5 points

10 points total out of 8 required points (___TODO__: addtional points will __not__ count for extra credit_)


## [Link to Initial Main Project File](app.js) 

(___TODO__: create a skeleton Express application with a package.json, app.js, views folder, etc. ... and link to your initial app.js_)

## Annotations / References Used

(___TODO__: list any tutorials/references/etc. that you've based your code off of_)

1. [passport.js authentication docs](http://passportjs.org/docs) - (add link to source code that was based on this)
2. [tutorial on vue.js](https://vuejs.org/v2/guide/) - (add link to source code that was based on this)