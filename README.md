# Task-Tracker :+1:

### Video Demo: <URL HERE>

## Description:

My project is called ## Task Tracker ## it allowe the user to add and delete tasks, and set remider or remove it as well. In order to develop this app, I used:

- React.js with Hooks for the UI
- JSON server for the backend
- visual code studio as a text editor and google chrome as a browser.

Why React.js?

> React is allowing us to develop and creat a reusable UI. It is more practical than doing it by pure JavaScript.
> Some famous websites are using React // FaceBook // Twiter // Instagram.

Why JSON server?

> Since it is my pesonal app, I decided to use JSON server as a backend server which creates a fake database as a Json file. It saves my tasks and gives each one of them a unique ID.

## React app

In order to install a React app package, we have to install Node.js in our computer.We can then install the React app using the command line or the terminal of VCS. This is helping us to have all the required files we need for our work. By default, it has offers style options. Therefore, we can run the app to see the styles, start editing our files and see the result dirctly.
_Next_ I will explain only the folders and files that I created.

### `SRC Folder and The Components`

The main idea of React is to think about the UI as a bunch of separate components.
I created a new folder in Scr folder called **Components** which contains the files I added for each component in my App.

#### `Header.js`

This file is for the header of my app, it contains the title of the app and an Add/Close button which allows to switch between showing and hidding the input form.

#### `Addtask.js`

This file is for the form of the inputs. It has 4 inputs // Task / Day & time / set Reminder and submit, where the user can add his infos.

#### `Task.js`

This file's function is to write/input a new single task and its date as well as to set reminder. The 'X' icon allows to delete the task.

#### `Tasks.js`

This file aims at managing the tasks, putting each single task in a array, and being able to toggle them or delete them.

#### `Button.js`

This file aims at styling the button and giving it Prop and some dynamic. I also used PropTypes to limit the text as a string, the colour and the functionality of it.

#### `Footer.js`

This file is for the footer of my app, it has a _small paraghraph_ and a link to my **About _page_**.

#### `About.js`

This file displays the project info that I would like the user to see. It has a title, a paragraph and a **Go-back** link to the App.

##### `I used react-router-dom to route my app in order to make it faster when it is loading or when the user is moving from one page to another.`

### `App.jsx`

This file is the root of my all components. I import them there; as well as the following:

```
    - { useState , useEffect } from 'react'.
    - {BrowserRouter as Router, Route} from 'react-router-dom'.
```

In my Function App():

- I wrote all the functions I wanted to use as an arrow function:
  - `fetchTasks`: fetching tasks from the backend -
  - `fetchTask` : fetching task from the backend - // just for fix the reminder in UI.
  - `addTask` : Adding Task - I used the http method "POST" as well as JSON.stringify to make the input as JSON type.
  - `deleteTask` : deleting the date form the UI and the server - I used the http method "DELETE".
  - `toggleReminder` : updating the reminder also in the server - I used the http method "PUT".
    **return**
    As a return, I routed all my components inside my container.

## `db.JSON`

The JSON server created for me a db.JSON file where it takes the data from the , saves it as a JSON object, and gives it a unique ID.

### `styling and Icons`

I always prefer to style my Web pages or Apps myself. Therefore, I wrote this index.css file and I installed react-icons.

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
