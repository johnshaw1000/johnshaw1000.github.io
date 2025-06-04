const bowlsScorecard = require('../build/bowlsScorecard');

test('home 1 point first end', () => {
    const previousEnd = new bowlsScorecard.End(0,0,0);
    const expectedEnd = new bowlsScorecard.End(1,1,0);
    expect(bowlsScorecard.home1(previousEnd)).toStrictEqual(expectedEnd);
});

test('away 1 point first end', () => {
    const previousEnd = new bowlsScorecard.End(0,0,0);
    const expectedEnd = new bowlsScorecard.End(1,0,1);
    expect(bowlsScorecard.away1(previousEnd)).toStrictEqual(expectedEnd);
});

test('home 1 point second end', () => {
    const previousEnd = new bowlsScorecard.End(1,1,0);
    const expectedEnd = new bowlsScorecard.End(2,2,0);
    expect(bowlsScorecard.home1(previousEnd)).toStrictEqual(expectedEnd);
});

test('home 2 points second end', () => {
    const previousEnd = new bowlsScorecard.End(1,1,0);
    const expectedEnd = new bowlsScorecard.End(2,3,0);
    expect(bowlsScorecard.home2(previousEnd)).toStrictEqual(expectedEnd);
});

test('away 2 points second end', () => {
    const previousEnd = new bowlsScorecard.End(1,1,0);
    const expectedEnd = new bowlsScorecard.End(2,1,2);
    expect(bowlsScorecard.away2(previousEnd)).toStrictEqual(expectedEnd);
});

test('home 3 points ninth end', () => {
    const previousEnd = new bowlsScorecard.End(8,10,12);
    const expectedEnd = new bowlsScorecard.End(9,13,12);
    expect(bowlsScorecard.home3(previousEnd)).toStrictEqual(expectedEnd);
});

test('away 3 points ninth end', () => {
    const previousEnd = new bowlsScorecard.End(8,10,12);
    const expectedEnd = new bowlsScorecard.End(9,10,15);
    expect(bowlsScorecard.away3(previousEnd)).toStrictEqual(expectedEnd);
});

test('home 4 points ninth end', () => {
    const previousEnd = new bowlsScorecard.End(8,10,12);
    const expectedEnd = new bowlsScorecard.End(9,14,12);
    expect(bowlsScorecard.home4(previousEnd)).toStrictEqual(expectedEnd);
});

test('away 4 points ninth end', () => {
    const previousEnd = new bowlsScorecard.End(8,10,12);
    const expectedEnd = new bowlsScorecard.End(9,10,16);
    expect(bowlsScorecard.away4(previousEnd)).toStrictEqual(expectedEnd);
});