describe("Player", function() {
    var player;
    var song;

    beforeEach(function() {
        player = 1;
        song = 2;
    });

    it("should be able to play a Song", function() {
        var sum = player + song;
        expect(sum).toEqual(33);

    });
});

// QUnit.module('EcfCalculator', {
//   setup: function(){
//
//   },
//   teardown: function(){
//
//   }
//
// });
//
// QUnit.test('calculate should return players current grade when no games have been played', function() {
//
//     var $injector = angular.injector(['ratingsApp']);
//     var myService = $injector.get('chessGradeCalculator');
//
//     var grade = myService.calculate(102, []);
//     QUnit.assert.strictEqual(grade, 102, "The grades should be the same")
// });
//
// QUnit.test('current grade should not change when all the games played are drawn with players of the same grade', function() {
//
//     var $injector = angular.injector(['ratingsApp']);
//     var myService = $injector.get('chessGradeCalculator');
//
//     var games=[{id:'game1', grade:102, result: 0}, {id:'game2', grade:102, result:0}]
//
//     var grade = myService.calculate(102, games);
//     QUnit.assert.strictEqual(grade, 102, "The grades should be the same")
// });
//
// QUnit.test('new grade should increase to 110 when a 100 grade draws with a 120 grade', function() {
//
//     var $injector = angular.injector(['ratingsApp']);
//     var myService = $injector.get('chessGradeCalculator');
//
//     var games=[{id:'game2', grade:120, result:0}]
//
//     var grade = myService.calculate(100, games);
//     QUnit.assert.strictEqual(grade, 110, "The grades should be the same")
// });
//
// QUnit.test('new grade should decrease to 90 when a 100 grade draws with an 80 grade', function() {
//
//     var $injector = angular.injector(['ratingsApp']);
//     var myService = $injector.get('chessGradeCalculator');
//
//     var games=[{id:'game2', grade:80, result:0}]
//
//     var grade = myService.calculate(100, games);
//     QUnit.assert.strictEqual(grade, 90, "The grades should be the same")
// });
