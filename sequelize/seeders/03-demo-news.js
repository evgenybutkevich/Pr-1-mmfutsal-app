module.exports = {
    up: async function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('news', [{
            heading: 'FIRST NEWS NAME',
            sectionId: 1,
            content: 'Policemen from a night patrol were forced to stop and transport an aggressive man to the drunk tank. There would be nothing unusual about it if it wasn’t for the man intentionally getting in the police car after confusing it with a taxi.',
            userId: 2
        },
        {
            heading: 'SECOND NEWS NAME',
            sectionId: 3,
            content: 'The man was questioned in relation to the incident he reportedly took part in in one of the churches. He pretended to be a priest and shrived the members of the congregation for 2 hours. After giving explanations he was released',
            userId: 2
        },
        {
            heading: 'THIRD NEWS NAME',
            sectionId: 2,
            content: 'Municipal police discovered unconscious man lying in a ditch and was unable to wake him up on the spot despite numerous attempts, local news channel reports. After transporting him to the hospital it was discovered that blood alcohol level of the man was 0.934. The man survived. According to papers that man is Will Brown (31)',
            userId: 1
        },
        {
            heading: 'FOURHT NEWS NAME',
            sectionId: 4,
            content: 'The local traffic control division was in for quite a surprise when they pulled a car over just to realize that the driver is fully naked. It would not be such a surprise for the experienced officers, if not for the fact that there was a... swan on the passenger’s seat. Buckled in. Moreover, there were over a dozen chickens in total sitting on the back seat and in the trunk',
            userId: 1
        },
        {
            heading: 'FIFTH NEWS NAME',
            sectionId: 1,
            content: 'In the afternoon a passer-by contacted the emergency services concerning an unconscious man. After reaching the location and multiple CPR attempts, the man was declared dead and transported to the closest morgue',
            userId: 2
        }]);
    },
    down: async function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('news', null, {});
    }
};
