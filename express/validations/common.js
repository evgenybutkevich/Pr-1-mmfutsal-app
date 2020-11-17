module.exports = {
    pagination: {
        minLimit: 5,
        maxLimit: 50,
    },

    headingMinLength: 10,
    headingMaxLength: 255,

    contentMinLength: 10,
    contentMaxLength: 32768,

    seasonNameMinLength: 2,
    seasonNameMaxLength: 20,

    sectionNameMinLength: 10,
    sectionNameMaxLength: 255,

    teamNameMinLength: 2,
    teamNameMaxLength: 20,

    userNameMinLength: 5,
    userNameMaxLength: 20,

    firstNameMinLength: 2,
    firstNameMaxLength: 20,

    lastNameMinLength: 2,
    lastNameMaxLength: 20,

    filterValueRegex: /^[_0-9a-zA-Z]+$/,
    telephoneRegex: /^\+375 (?:25|29|33|44) (?=.*\d).{3}-(?=.*\d).{2}-(?=.*\d).{2}$/,
    passwordRegex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,15}$/,
}
