# Task-Tracker :+1

### Video Demo: <URL HERE>

## Description:

My project is called ## Task Tracker ## it allowe the User to Add and delete tasks and sit remider or remove it as well. for devoloping this app I used

- React.js with Hooks for the UI
- JSON server for the backend
- visaual code studio as text editor and google chrome as a browser.

Why React.js?

> react is allowing us to devolop and creat a reusable UI which is more practical and easer than doing it by pure JavaScript.
> . Some famouse websites using React // FaceBook // Twiter // Insatgram.

Why JSON server?

> Since it my pesonal app I decied to use JSON server as backend server which created a fake db as a Json file where it save my tasks and give each one of them a uniqe ID.

## React app

first step to install a react app package is to install Node.js in our computer, this to install for the commend line or the terminal of VCS react app. This is helping as to have all the required files we need for our work. and by defualt it has some style and we can run the app to see the style and start editing our files and see the result dirctly.
_Next_ I will explain just the folders and files that I created.

### `React app`

- first step to install a react app package is to install Node.js in our computer, this to install for the commend line or the terminal of VCS react app. This is helping as to have all the required files we need for our work.
- it has by defualt some style and we can run the app to see the style and start editing our files and see the result dirctly.
  _Next_ I will explain just the folders and files that I created.

### `SRC Folder and The Components`

The main idea of react is thinking about the UI as a bunch of many separate components.
I created a new folder in Scr folder called Components which contain the files I added for each component in my App.

#### `Header.js`

This file is for the header of my app, it has the Title of the app and an Add/Close button which allow to toggel between showing and hiddning the input form.

#### `Addtask.js`

This file is for Form of the inputs. it has 4 inputs // Task / Day & time / set Reminder and submit. where can the user add his infos.

#### `Task.js`

This file is to write/input a new single task and its date also to set reminder and it has icon of X to delete the task.

#### `Tasks.js`

This file is to mange the tasks and put each single task in arr and to give it a key as index and
to be able to toggle them or delete them.

#### `Button.js`

This file is for styling the button and give it Prop and some dynamic. also I used PropTypes to limit the Text, the color and the functionalty of it.

#### `Footer.js`

This file is for the footer of my app and it has a _small paraghraph_ and a link to my About _page_.

#### `About.js`

this file is for the Project info that I would like the User to see. it has a tilte / paraghraph and a Go-back link to the App.

##### `I used react-router-dom to route my app to make faster when it loading or moving from page to another`

### `App.jsx`

this file is the father of my all components, where I import them all, as well also import

```
    - { useState , useEffect } from 'react'.
    - {BrowserRouter as Router, Route} from 'react-router-dom'.
```

In my Function App():

- I wrote all the Functions I wanted to use as Arrow function:
  - `fetchTasks`: Fetching Tasks from the backend -
  - `fetchTask` : Fetching Task from the backend - // just for fix the reminder in UI.
  - `addTask` : Adding Task - I used http method "POST" and also JSON.stringify to make the input as JSON type.
  - `deleteTask` : deleting the date form the UI and the server - I used http method "DELETE".
  - `toggleReminder` : updating the reminder also in the server - I used http method "PUT".
    **return**
    Here where I return and routed all my components inside my container.

## `db.JSON`

After installing JSON server, it cearted for me a db.JSON file where take the data from the user and save it as a JSON object give it a unique ID.
_I can also write me defualt data there_

### `styling and Icons`

I like as always to style my Web pages or Apps myself so I worte this index.css file and I installed
react= icons.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run server`

Open [http://localhost:5000/tasks](http://localhost:5000/tasks) to view it in the browser.
The page will reload if you make edits.\
You will also see all the tasks that the user wrote.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
