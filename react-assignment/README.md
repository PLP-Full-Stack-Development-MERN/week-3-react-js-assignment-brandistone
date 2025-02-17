# React.js Fundamentals Assignment

## Overview

This project is a React.js assignment where we practice creating components, managing state, handling events, and using Tailwind CSS for styling.

## Features

- **Header Component:** Displays a title "React Assignment".
- **Profile Component:** Accepts `name` and `email` as props and displays them.
- **Counter Component:** A stateful component that tracks and increments a counter value.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for creating responsive designs.
  
## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine using:

```bash
git clone <repository_url>
```

### 2. Install Dependencies

Navigate to the project folder and install the required dependencies:

```bash
cd react-assignment
npm install
```

### 3. Run the Development Server

Start the development server:

```bash
npm start
```

This will open the application in your default browser at `http://localhost:3000`.

### 4. Open the Application

You should now be able to view the app, which includes:
- The **Header** component displaying the title.
- The **Profile** component displaying the name and email.
- The **Counter** component where you can increment the counter.

## Folder Structure

```
react-assignment/
│-- public/
│-- src/
│    ├── components/
│    │    ├── Header.js
│    │    ├── Profile.js
│    │    └── Counter.js
│    ├── App.js
│    ├── index.js
│    ├── index.css
│-- package.json
│-- tailwind.config.js
│-- postcss.config.js
│-- README.md
```

## Tech Details

### React Components

- **Header.js**: Displays a title using Tailwind CSS.
- **Profile.js**: Displays user profile information using props.
- **Counter.js**: Displays and increments a counter using React's `useState` hook.

### Tailwind CSS

The application is styled using Tailwind CSS, which is configured for use with React through the `tailwind.config.js` and `postcss.config.js` files.

