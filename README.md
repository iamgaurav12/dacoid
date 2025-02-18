# Interactive Quiz Platform

An interactive quiz platform that allows users to take quizzes, view their scores, and toggle between dark and light themes.

## Deployed App
You can access the deployed app [here](https://dacoid-iota.vercel.app/).

## Features
- **Dark Mode**: Toggle between dark and light themes.
- **Quiz Functionality**: Answer multiple-choice and integer-based questions.
- **Timer**: Countdown timer for each question.
- **Scoreboard**: View past quiz attempts and scores.
- **Responsive Design**: Optimized for various screen sizes.

## Instructions to Run Locally
1. **Clone the repository**:
    ```bash
    git clone https://github.com/iamgaurav12/dacoid
    cd dacoid
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Install Tailwind CSS**:
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

4. **Configure Tailwind CSS**:
    Add the paths to all of your template files in the `tailwind.config.js` file:
    ```javascript
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

5. **Add Tailwind directives to your CSS**:
    In your `src/index.css` file, add the following:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

6. **Start the development server**:
    ```bash
    npm start
    ```

7. **Open the app**:
    Open your browser and navigate to `http://localhost:5173`.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework.
- **IndexedDB**: Client-side storage for saving quiz history.
- **Vite**: Next-generation frontend tooling.


