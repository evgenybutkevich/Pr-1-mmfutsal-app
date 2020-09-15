module.exports = {
    seasonNameMinLength: 2,
    seasonNameMaxLength: 20,

    teamNameMinLength: 2,
    teamNameMaxLength: 20,

    userNameMinLength: 5,
    userNameMaxLength: 20,

    firstNameMinLength: 2,
    firstNameMaxLength: 20,

    lastNameMinLength: 2,
    lastNameMaxLength: 20,

    telephoneRegex: /^\+375 (?:25|29|33|44) (?=.*\d).{3}-(?=.*\d).{2}-(?=.*\d).{2}$/,
    passwordRegex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,15}$/,
}
