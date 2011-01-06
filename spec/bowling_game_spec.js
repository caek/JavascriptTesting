describe("Bowling Game", function() {


  it("should score zero if no pins are knocked down at all in game", function() {
      var game = BowlingGame ;
      for(i=0; i<20; i++){
          game.pub_roll(0);
      }

    expect(game.pub_score()).toEqual(0);
  });
});