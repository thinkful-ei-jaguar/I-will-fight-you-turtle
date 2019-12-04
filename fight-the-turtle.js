'use strict';

const movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

const movementsFiltered = movements.filter(move => (move[0] >= 0) && (move[1] >= 0));

const totalSteps = movementsFiltered.map(move => move[0] + move[1]);

const eachMovement = totalSteps.forEach(function(item, index) {
  console.log(`Movement #${index + 1}: ${item} steps`);
});

eachMovement;

// It's working the way I intended based on how I interpreted the directions.
// The way the methods interact and the arrow functions actually make sense now
// Take that you shelled monster