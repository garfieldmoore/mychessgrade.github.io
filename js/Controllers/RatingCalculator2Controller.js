'use strict';

app.controller('RatingCalculator2Controller',
  function RatingCalculator2Controller($scope, chessGradeCalculator) {
    console.log('Enter default controller');

    $scope.player = {
      grade: 1200,
    };

    $scope.kfactors = {
    availableOptions: [
      {id: 10, name: '10'},
      {id: 20, name: '20'},
      {id: 30, name: '40'}
    ],
    selectedOption: {id: 20, name: '20'} //This sets the default value of the select in the ui
    };

    $scope.chessFederations = ['FIDE ELO', 'USCF ELO', 'ECF'];
    $scope.selectedChessFederation = 'FIDE ELO';
    $scope.selectedGame = 0;

    $scope.dropboxitemselected = function(item) {

      $scope.selectedChessFederation = item;
    }

    $scope.dropboxResultitemselected = function(game, result) {
      game.result = result;
      if (game.result == 1) {
        game.resultText = 'Win'
      } else if (game.result == 0) {
        game.resultText = 'Draw'
      } else {
        game.resultText = 'Loss'
      }
    }

    $scope.dropboxselectKfactor = function(kfactor) {
      $scope.selectedKfactor = 20;
    }

    $scope.games = [];
    for (var i = 0; i < 1; i++) {
      var g = {
        id: i + 1,
        result: 1,
        resultText: 'Win',
      };
      $scope.games[i] = g;
    }

    $scope.addNewGame = function() {
      console.log("Adding new game");
      var newItemNo = $scope.games.length + 1;
      $scope.games.push({
        'id': newItemNo,
        resultText: 'Win',
        result: 1,
      });

      $scope.selectedGame = $scope.games.length - 1;
    };

    $scope.removeChoice = function(index) {

      if ($scope.games.length > 1) {
        $scope.games.splice(index, 1);
      } else {
        console.log('Cannot remove last game');
      }

    };

    // fields description of entity
    $scope.fields = [{
        name: 'grade',
        title: 'Grade',
        required: true,
        cssClassing: 'testing',
        type: {
          view: 'input'
        }
      },
      {
        name: 'result',
        title: 'Result',
        required: true,
        cssClassing: 'testing',
        type: {
          view: 'radio'
        }
      },
      {
        name: 'resultText',
        title: 'ResultText',
        required: false,
        cssClassing: 'testing',
        type: {
          view: 'input'
        }
      },
    ];

    $scope.calculate = function() {
      console.log('Calculating Grade...')
      var currentgrade = parseInt($scope.player.grade);

      var calculationType = 'ECF';
      if ($scope.selectedChessFederation == 'FIDE ELO') {
        calculationType = 'ELO-ND';
      } else if ($scope.selectedChessFederation == 'USCF ELO') {
        calculationType = 'ELO';
      }

      var kfactor = $scope.kfactors.selectedOption.id;
      var result = chessGradeCalculator.calculate(currentgrade, $scope.games, calculationType);

      result = Math.round(result);

      $('#messages').empty();
      if (isNaN(result)) {
        $('#messages').append('<div><p>There are some invalid entries for either your grade or your opponents grades.  Correct and try again.</p></div>');
      } else {
        $('#messages').append('<p>Your grade is now ' + result + '</p>');
      }
    }
  }
);
