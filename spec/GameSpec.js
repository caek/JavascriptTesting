describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should score zero if no pins are knocked down at all in game", function() {
        for(i=0; i<20; i++){
            game.roll(0);
        }

        var score = game.score;

        expect(score).toEqual(0);
  });
});