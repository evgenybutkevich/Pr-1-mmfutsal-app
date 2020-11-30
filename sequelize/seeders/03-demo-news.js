module.exports = {
    up: async function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('news', [{
            heading: `Highest blood alcohol level recorded. Will Brown (31) had triple the level considered lethal`,
            sectionId: 1,
            content: `
                Portsmouth, Australia.
                Municipal police discovered unconscious man lying in a ditch and was unable to wake him up on the spot despite numerous attempts,
                local news channel reports. After transporting him to the hospital it was discovered that blood alcohol level of the man was 0.934.
                The man survived. According to papers that man is Will Brown (31).

                It's a miracle that he's alive, doctors say. The lethal blood alcohol level is estimated to be 0.35. Will had almost 3 times more.
                The blood examination was performed twice. It's not that easy to achieve such a result' says dr. Damian R. Okusa. 'Such blood alcohol
                level is probably a result of several days of continuous drinking or drinking a litre vodka in one go with an empty stomach'. After
                waking up, Will refused to provide an explanation, took his stuff and left the hospital. Due to such dose of alcohol being
                poisonous the police are looking for witnesses, worrying about other participants of the possible libation.

            `,
            userId: 2
        },
        {
            heading: 'Harry Taylor (23) reported poisoned beer. Turned out he doesn’t hold his liquor well',
            sectionId: 3,
            content: `
                Portsmouth, Australia.
                Alcohol Quality Inspectorate (AQI) was alarmed after Harry Taylor (23), reported a reportedly poisoned alcohol batch. A popular local
                beer produce was almost forced to stop bottling beer in their branch in Portsmouth.

                The man went to a house party with his friends and did not waive from drinking alcohol. After drinking one beer, he felt bad, started
                vomiting and eventually lost consciousness. After several hours of sleep he told other partygoers that the beer must have been poisoned
                because he never reacted that bad to it before. After a moment he felt sick once again. One of the partygoers took it seriously and
                called the ambulance which took the man to the hospital. The doctor commissioned examination, lavage and clyster. Acting along the
                guidelines, he notified the AQI. The examination results did not show presence of any substances that could cause such severe poisoning
                and the blood alcohol level was just .02 which alarmed the doctors. Colonoscopy was commissioned. It was then when Harry who was scared
                of the examination, admitted that he always did bad with alcohol and usually secretly drank alcohol-free beer on parties. He planned to
                do the same this time, but took the wrong bottle.
            `,
            userId: 2
        },
        {
            heading: 'Driving naked with stolen chickens and a swan. Walter Jones (26) caught during a routine police check',
            sectionId: 2,
            content: `
                Rosconmoe, Ireland.
                The local traffic control division was in for quite a surprise when they pulled a car over just to realize that the driver is fully naked.
                It would not be such a surprise for the experienced officers, if not for the fact that there was a... swan on the passenger’s seat.
                Buckled in. Moreover, there were over a dozen chickens in total sitting on the back seat and in the trunk.

                The driver, Walter Jones (26), initially was unable to recall his name, or how the animals got in the car. After a moment he stated that
                they are probably hitchhiking, but since he doesn’t like to be nosy, he did not ask them such personal questions. He complained that
                the chickens refused to fasten the seat belts. The officers decided to perform a breathalyzer test, but it turned out that the man is
                completely sober. Drug tests also proved the man to be clean, although such tests can not detect the recently popular designer drugs.
            `,
            userId: 1
        },
        {
            heading: 'Completely drunk Brian Smith (19) confused a police car with a taxi',
            sectionId: 4,
            content: `
                Smithton, United Kingdom.
                Policemen from a night patrol were forced to stop and transport an aggressive man to the drunk tank. There would be nothing unusual about
                it if it wasn’t for the man intentionally getting in the police car after confusing it with a taxi.

                Brian Smith (19) was probably coming home after a party when he confused the beacon of the police car with a sign of local municipal drivers.
                To the policemen surprise he opened the door, sat down on the rear seat comfortably and demanded a ride home. When one of the policemen
                turned back to warn the unwanted passenger the man responded: ‘Get out, I was here first’ and kicked his seat. ‘I never heard of anything
                like that happening to any of my colleagues because usually drunk people try to avoid us’ says sergeant Walter Proust. ‘Fortunately we now
                have cameras in our cars. Otherwise nobody would believe us’
            `,
            userId: 1
        },
        {
            heading: 'Harry Taylor (23) stole a coach with nuns in it. He ordered them to sing and drink alcohol',
            sectionId: 2,
            content: `
                Rosconmoe, Ireland.
                National media are reporting on a man who stole a bus from a parking lot, with passengers in it.The passengers turned out to be nuns
                returning to their monastery from a trip. The man probably was under the influence of alcohol and drugs.

                The incident took place on one of the parking lots in the city centre. The driver left the car for a moment in order to pack the bags
                of the passengers. At the same time, taking advantage of the situation, Harry Taylor (23), got in the car and drove away. The owner
                immediately reported to the authorities. The nuns reported that the thief completely ignored their requests to stop the vehicle. After
                he realised who is he accompanied with, he demanded the sisters to sing songs for Jesus. He also served alcohol to the passengers putting
                them under threat of crashing the car. Reportedly, Harry believed he was sent down by God himself because God above saw their torment and
                wanted them to have some fun. 'He said he will take us either to the disco or male striptease' says sister Mary Agatha. She and her friends
                managed to escape when the abductor stopped by a fast food chain and sent them for 'wings and booze'.
            `,
            userId: 3
        },
        {
            heading: 'Walter Jones (26) has starred in an adult film. Now he wants it taken off the shelves',
            sectionId: 4,
            content: `
                Rosconmoe, Ireland.
                One of many cases concerning an improper performance of a contract has just been listed in the court’s calendar, this time however,
                the issue is quite unusual. Walter Jones (26) sues the producer of an adult film for presenting him in an unfavorable manner.

                The man has starred in an adult film two years ago, although the work has not been released due to financial reasons, only until last
                month. After seeing the movie, the aspiring actor decided that it is not the image that has been agreed on by the producer and the man’s
                agent. - My client has been presented with a vision completely different from the one presented in the released movie, the differences
                are tremendous – as stated by Amoul Mirza, the victim’s agent – We’ve talked about a production in the ranks of Playboy, meanwhile what
                we got is a lousy backyard porn, which reeks of amateurism a mile away. The claim includes a number of elements which according to the
                victim, are unacceptable: directing, lighting, makeup, camera shots, and sound. The court has issued experts which will compare this
                production with selected movies produced by Playboy, and assess the difference in terms of all of the mentioned elements.
            `,
            userId: 2
        },
        {
            heading: 'Brian Smith (19), died from alcohol overdose, came back to life in the morgue... and returned to the party',
            sectionId: 4,
            content: `
                Smithton, United Kingdom.
                In the afternoon a passer-by contacted the emergency services concerning an unconscious man. After reaching the location and multiple CPR
                attempts, the man was declared dead and transported to the closest morgue.

                As it later turned out, the man participated in a party which included large amounts of vodka. The man felt sick and decided to go out to get
                some fresh air. Shortly after, he was found on the nearby sidewalk, not showing any vital signs. The body has been placed in the morgue
                to await a physician. About an hour later, strange noises and moans alarmed Mr. Patrick, who works as the morgue’s security officer.
                - I was positive that we have a break-in, sometimes kids play stupid jokes, but the noises came somewhere from the coolers. With shaking
                hands I opened the cooler and there was a naked corpse looking at me and asking for a blanket! – he told us in an emotional statement.
            `,
            userId: 1
        },
        {
            heading: 'Scandal during a local MMA event. Spectator, Will Brown (31), beat one of the fighters',
            sectionId: 3,
            content: `
                Portsmouth, Australia.
                An unprecedented event took place during last night's MMA game. Will Brown (31) is wanted after breaking into the ring and severely beating
                one of the main contenders for the title. He probably was under influence of alcohol.

                The incident took place right before the start of the main fight of the evening. The man broke into the ring, threw the referee through
                the lines and started an intense argument with one of the fighters. In seconds, the word turned into punches. The contender defended himself
                for a brief moment, but Will quickly gained an advantage, 'Blood was spilled, but at that point we didn't know whose blood was it' says
                Mark Shultz, one of the commentators present in the hall. 'A moment later the fighter was lying on the ground while the attacker kept
                punching him. He received a series of strong punches to the head. It was a quick KO. I have to say I was impressed'. The beaten fighter
                suffered concussion, a broken nose and probably a fractured cheekbone as well. He was transported to a hospital where doctors decided he
                should stay for observation. Police are looking for the perpetrator who quickly left the hall after the incident. The organisers also
                decided to sue the company responsible for the security of the event. 'Their lack of reaction was absolutely outrageous, it's not what
                we paid for' says one of the organisers. The man is not only wanted by the police, many fight clubs would like to try him in real fight
                since it's not common someone can beat a professional MMA fighter.
            `,
            userId: 3
        }]);
    },
    down: async function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('news', null, {});
    }
};
