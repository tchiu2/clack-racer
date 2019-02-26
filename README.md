# ClackRacer

### ClackRacer

[ClackRacer](http://terencechiu.me/clack-racer/) is typing gaming inspired by the multiplayer browser game TypeRacer. The goal of the game is to type a short passage as quickly as possible. Players must type each letter correctly in order to continue the race, so accuracy is required. At the end of each race, players will see their accuracy and typing speed (words per minute).

### Instructions
To start a race, simply click the button to display the passage and start the countdown. Once the countdown turns green and displays "GO", start typing the passage. 

After completing a round, your score will be displayed and automatically saved to a local highscores table if it falls within the top 10 fastest rounds (locally stored). You can start another race by clicking the "Start Race" button again.

#### Notes
You do not need to backspace/delete incorrect characters as you will always stay on the current character until you type it correctly.

In order for the game to receive user input, the passage must be focused (indicated by passage text being black). In the event that you accidentally unfocus the game (indicated by passage turning light grey), you can refocus the game by clicking on the passage.

Users can toggle the sound effects and on-screen keyboard using the sliders below the passage/racetrack.

### Technologies

The project was built using the following technologies:
- `JavaScript` for game logic
- `Canvas API` for rendering progress
- `Webpack` for bundling JavaScript files

### Implementation 

The game is structured as follows:

`game.js`: Tracks and updates game state (number of keystrokes, time, position is passage, etc).

`game_view.js`: Processes user input and composes game state in various views (racetrack, passage, on-screen keyboard) via different modules.

`passages.js`: Handles storing and selecting passage for game.

`keyboard.js`, `racer.js`: Handle rendering on-screen keyboard and racetrack Canvas elements, respectively.

`results.js`, `util.js`: Handle converting game state data into consistent, human readable format.

`sound.js`: Handles game audio (included in the game view).
