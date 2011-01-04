describe("game", function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it("should score zero if no pins are knocked down at all in game", function() {
      for(i=0; i<20; i++){
          game.pub_roll(0);
      }

    expect(game.pub_score).toEqual(1);
  });
});