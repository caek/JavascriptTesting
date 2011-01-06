function Game() {
}

Game.prototype.roll = function(pins) {
    this.score = 0;
    this.score += pins;
};

Game.prototype.score = function() {
	return this.score;
}();