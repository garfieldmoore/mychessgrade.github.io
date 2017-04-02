angular.module('app', []).config(function() {});

// angular.module('app').controller('RatingCalculatorController', function($scope) {
//
//   $scope.games = [];
//
//   $scope.addNewGame = function() {
//     console.log("Adding new game");
//       var newItemNo = $scope.games.length + 1;
//       $scope.games.push({
//           'id': 'choice' + newItemNo
//       });
//   };
//
//   $scope.removeChoice = function(index) {
//       $scope.games.splice(index, 1);
//   };
//
// });

function RatingCalculatorController($scope){

  $scope.games = [];
  for (var i = 0; i < 5; i++) {
      var g = {
          id: "game"+i,
          grade: "0",
          result: 1
      };
      $scope.games[i] = g;
  }

  $scope.addNewGame = function() {
    console.log("Adding new game");
      var newItemNo = $scope.games.length + 1;
      $scope.games.push({
          'id': 'game' + newItemNo

      });
  };

  $scope.removeChoice = function(index) {

      $scope.games.splice(index, 1);
  };

  // fields description of entity
  $scope.fields = [
    {
      name: 'grade',
      title: 'Grade',
      required: true,
      cssClassing:'testing',
      type: {
        view: 'input'
      }
    },
    {
      name: 'result',
      title: 'Result`',
      required: true,
      cssClassing:'testing',
      type: {
        view: 'radio'
      }
    },


  ];

  $scope.calculate = function () {
      console.log('Calculating Grade...')

      var currentgrade = parseInt($('#currentgrade').val());

      console.log('Current Grade:' + currentgrade);

      console.log('Grades:');
      for (var i = 0; i < $scope.games.length; i++) {
          console.log($scope.games[i].grade);
      }

      console.log('Results:');;
      for (var i = 0; i < $scope.games.length; i++) {
          console.log($scope.games[i].result);
      }

      var result = 0;
      var divisor = 0;

      if (currentgrade != 'undefined' && currentgrade > 0 && !isNaN(currentgrade)) {
          result = result + currentgrade;
          divisor++;
      }

      for (var i = 0; i < $scope.games.length; i++) {
          var opponentsgrade = $scope.games[i].grade;

          if ($scope.games[i].grade != 'undefined' && $scope.games[i].result != 'undefined' && !isNaN($scope.games[i].grade)) {
              // the grades differ by no more than 40 rule
              if (currentgrade != 'undefined' && currentgrade > 0)
                  if (opponentsgrade > currentgrade + 40) {
                      console.log('Apply the grade difference rule to opponent ' + i);
                      opponentsgrade = currentgrade + 40;
                  }

              if (opponentsgrade < currentgrade - 40) {
                  console.log('Apply the grade difference rule to opponent ' + i);
                  opponentsgrade = currentgrade - 40;
              }
              result = parseInt(result) + parseInt(opponentsgrade) + parseInt($scope.games[i].result);
              divisor++;
          }
      }


      result = result / divisor;
      result = Math.round(result);

      $('#messages').empty();
      if (isNaN(result)) {
          $('#messages').append('<div>There are some invalid entries for either your grade or your opponents grades.  Correct and try again.</div>');
      } else {
          $('#messages').append('Your grade is now ' + result);
      }
  }


}


function reset() {
    console.log('Resetting');
}
