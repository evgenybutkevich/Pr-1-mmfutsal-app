const assert = require('assert');

const playersService = require('../../express/services/players');

describe('GET /players/:id', () => {
    it('should return restructured object received by getById() method', async () => {
        const actualObject = {
            id: 1,
            firstName: 'Evgeny',
            lastName: 'Butkevich',
            seasons: [{
                id: 1,
                seasonName: 'First Season',
                teams: [{
                    id: 1,
                    teamName: 'Dinamo',
                    playerTeamSeason: {
                        id: 1
                    }
                }],
                results: [{
                    id: 1,
                    gamesPlayed: 10,
                    goals: 10,
                    playerTeamSeason: {
                        id: 1
                    }
                }]
            }, {
                id: 2,
                seasonName: 'Second Season',
                teams: [{
                    id: 1,
                    teamName: 'Dinamo',
                    playerTeamSeason: {
                        id: 2
                    }
                }],
                results: [{
                    id: 1,
                    gamesPlayed: 10,
                    goals: 10,
                    playerTeamSeason: {
                        id: 2
                    }
                }]
            }]
        };

        const expectedObject = {
            id: 1,
            firstName: 'Evgeny',
            lastName: 'Butkevich',
            seasons: [{
                id: 1,
                seasonName: 'First Season',
                teams: [{
                    id: 1,
                    teamName: 'Dinamo',
                    result: {
                        gamesPlayed: 10,
                        goals: 10
                    }
                }]
            }, {
                id: 2,
                seasonName: 'Second Season',
                teams: [{
                    id: 1,
                    teamName: 'Dinamo',
                    result: {
                        gamesPlayed: 10,
                        goals: 10,
                    }
                }]
            }]
        };

        const a = playersService.mergeTeamsResults(actualObject);
        const b = expectedObject;

        assert.deepStrictEqual(playersService.mergeTeamsResults(actualObject), expectedObject,
            'should return equal objects');
    });
});
