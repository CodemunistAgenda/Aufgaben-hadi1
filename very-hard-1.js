// Track the Robot (Part 2)
// This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, the robot rotates 90 degrees clockwise. Given the amount the robot has moved each time, you have to calculate the robot's final position.

// To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

// 20 steps North, now at (0, 20)
// 30 steps East, now at (30, 20)
// 10 steps South. now at (30, 10)
// 40 steps West, now at (-10, 10)
// ...and will end up at coordinates (-10, 10).

// Examples
// trackRobot(20, 30, 10, 40) ➞ [-10, 10]

// trackRobot() ➞ [0, 0]
// // No movement means the robot stays at (0, 0).

// trackRobot(-10, 20, 10) ➞ [20, -20]
// // The amount to move can be negative.
// Notes
// Each movement is an integer (whole number)


function trackRobot(...moves) {
    let x = 0, y = 0;
    const directions = ['North', 'East', 'South', 'West'];
  
    for (let i = 0; i < moves.length; i++) {
      const move = moves[i];
      const direction = directions[i % 4];
  
      if (direction === 'North') {
        y += move;
      } else if (direction === 'East') {
        x += move;
      } else if (direction === 'South') {
        y -= move;
      } else if (direction === 'West') {
        x -= move;
      }
    }
  
    return [x, y];
  }