"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.End = exports.Match = void 0;
exports.home1 = home1;
exports.home2 = home2;
exports.home3 = home3;
exports.home4 = home4;
exports.away1 = away1;
exports.away2 = away2;
exports.away3 = away3;
exports.away4 = away4;
var MatchState;
(function (MatchState) {
    MatchState[MatchState["NotStarted"] = 0] = "NotStarted";
    MatchState[MatchState["Started"] = 1] = "Started";
    MatchState[MatchState["HomeWin"] = 2] = "HomeWin";
    MatchState[MatchState["AwayWin"] = 3] = "AwayWin";
})(MatchState || (MatchState = {}));
class Match {
    constructor() {
        this.ends = Array();
        this.matchState = MatchState.NotStarted;
        this.ends[0] = new End(0, 0, 0);
    }
}
exports.Match = Match;
class End {
    constructor(end, homeScore, awayScore) {
        this.end = end;
        this.homeScore = homeScore = homeScore;
        this.awayScore = awayScore;
    }
    getEnd() {
        return this.end;
    }
    getHomeScore() {
        return this.homeScore;
    }
    getAwayScore() {
        return this.awayScore;
    }
    incrementHomeScore() {
        this.homeScore = this.homeScore + 1;
    }
    incrmentAwayScore() {
        this.awayScore = this.awayScore + 1;
    }
}
exports.End = End;
function home1(previousEnd) {
    let end = getNextEnd(previousEnd);
    end.incrementHomeScore();
    return end;
}
function home2(previousEnd) {
    let end = getNextEnd(previousEnd);
    end.incrementHomeScore();
    end.incrementHomeScore();
    return end;
}
function home3(previousEnd) {
    let end = getNextEnd(previousEnd);
    end.incrementHomeScore();
    end.incrementHomeScore();
    end.incrementHomeScore();
    return end;
}
function home4(previousEnd) {
    let end = getNextEnd(previousEnd);
    end.incrementHomeScore();
    end.incrementHomeScore();
    end.incrementHomeScore();
    end.incrementHomeScore();
    return end;
}
function away1(previousEnd) {
    let end = getNextEnd(previousEnd);
    end.incrmentAwayScore();
    return end;
}
function away2(previousEnd) {
    let end = getNextEnd(previousEnd);
    end.incrmentAwayScore();
    end.incrmentAwayScore();
    return end;
}
function away3(previousEnd) {
    let end = getNextEnd(previousEnd);
    end.incrmentAwayScore();
    end.incrmentAwayScore();
    end.incrmentAwayScore();
    return end;
}
function away4(previousEnd) {
    let end = getNextEnd(previousEnd);
    end.incrmentAwayScore();
    end.incrmentAwayScore();
    end.incrmentAwayScore();
    end.incrmentAwayScore();
    return end;
}
function getNextEnd(previousEnd) {
    let end = previousEnd.getEnd() + 1;
    return new End(end, previousEnd.getHomeScore(), previousEnd.getAwayScore());
}
