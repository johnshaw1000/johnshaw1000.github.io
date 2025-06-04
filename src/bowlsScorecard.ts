enum MatchState {
    NotStarted,
    Started,
    HomeWin,
    AwayWin
}

export class Match {
    private ends: Array<End> = Array()
    private matchState: MatchState = MatchState.NotStarted;

    public constructor() {
        this.ends[0] = new End(0,0,0);
    }
}

export class End {
    private end: number;
    private homeScore: number;
    private awayScore: number;

    public constructor(end: number, homeScore: number, awayScore: number) {
        this.end = end;
        this.homeScore = homeScore = homeScore;
        this.awayScore = awayScore;
    }

    public getEnd(): number {
        return this.end;
    }

    public getHomeScore(): number {
        return this.homeScore;
    }

    public getAwayScore(): number {
        return this.awayScore;
    }

    public incrementHomeScore() {
        this.homeScore = this.homeScore + 1;
    }

    public incrmentAwayScore() {
        this.awayScore = this.awayScore + 1;
    }
}

export function home1(previousEnd: End): End {
    let end = getNextEnd(previousEnd);
    end.incrementHomeScore();
    return end;
}

export function home2(previousEnd: End): End {
    let end = getNextEnd(previousEnd);
    end.incrementHomeScore();
    end.incrementHomeScore();
    return end;
}

export function home3(previousEnd: End): End {
    let end = getNextEnd(previousEnd);
    end.incrementHomeScore();
    end.incrementHomeScore();
    end.incrementHomeScore();
    return end;
}

export function home4(previousEnd: End): End {
    let end = getNextEnd(previousEnd);
    end.incrementHomeScore();
    end.incrementHomeScore();
    end.incrementHomeScore();
    end.incrementHomeScore();
    return end;
}

export function away1(previousEnd: End): End {
    let end = getNextEnd(previousEnd);
    end.incrmentAwayScore();
    return end;
}

export function away2(previousEnd: End): End {
    let end = getNextEnd(previousEnd);
    end.incrmentAwayScore();
    end.incrmentAwayScore();
    return end;
}

export function away3(previousEnd: End): End {
    let end = getNextEnd(previousEnd);
    end.incrmentAwayScore();
    end.incrmentAwayScore();
    end.incrmentAwayScore();
    return end;
}

export function away4(previousEnd: End): End {
    let end = getNextEnd(previousEnd);
    end.incrmentAwayScore();
    end.incrmentAwayScore();
    end.incrmentAwayScore();
    end.incrmentAwayScore();
    return end;
}

function getNextEnd(previousEnd: End): End {
    let end = previousEnd.getEnd() + 1;
    return new End(end, previousEnd.getHomeScore(), previousEnd.getAwayScore());
}