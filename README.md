
<p align="center">
  <a href="https://www.chromatic.com/">
    <img alt="Chromatic" src="https://avatars2.githubusercontent.com/u/24584319?s=200&v=4" width="60" />
  </a>
</p>

<h1 align="center">
  SuperZorah
</h1>

This project runs on Vue, Storybook and uses the Buefy CSS library. Firebase(Firestore) is used as database and Firebase/Storage for Images.

## About

SuperZorah is the working title of this project. It's named after my daughter Zorah and the fact she is a super girl.
The project is inspired by her and all the things she experiences together with the people close to her.
There are so many pictures and videos, that I wanted to collect them in one place, where eventually more people with access can upload stories, images and videos. It would be nice to be able to customize so other users can make it there own and even control multiple instances for more kids.

Styling is based on Buefy components for now, this is in progress to be changed to own css library with Storybook.
The routing (VueRouter) is not working yet.
Storybook runs but The current files are only examples at the moment.

## Current coverage

- Home page
- Home page: The latest adventure, Read more button leads to modal with the entire story
- Bottom NavBar
- Adventures page: list of all adventures and mod
  - Adventure modal: Read more buttons lead to modal with the entire story
  - New adventure modal: author, date and text can be entered and saved
- Albums page: list of albums
  - Album modal: modal with images (Firebase/storage)
  - New album modal: upload and save images

## 🔎 What's inside?

A quick look at the top-level files and directories included in this project.

    .
    ├── .storybook
    ├── node_modules
    ├── public
    ├── src
    ├── tests
    ├── .browserslistrc
    ├── .eslintrc.js
    ├── .gitignore
    ├── babel.config.js
    ├── jest.config.js
    ├── LICENSE
    ├── yarn.lock
    ├── package.json
    └── README.md
