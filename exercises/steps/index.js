// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (cols = 0; cols < n; cols++) {
    step = '';
    for (rows = 0; rows < n; rows++){
      if (rows <= cols) {
        step = step + '#';
      } else {
        step = step + ' ';
      }
    }
    console.log(step);
  }
}


// function steps(n) {
//   for (cols = 0; cols < n; cols++) {
//     for (rows = 0; rows < n; rows++){
//       if (rows <= cols) {
//         console.log('#');
//       } else {
//         console.log(' ');
//       }
//     }
//   }
// }

module.exports = steps;
