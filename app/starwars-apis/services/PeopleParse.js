class PeopleParse {
    constructor(name) {
        this.name = name;

    }

    static parse(format) {

        let people = [];
        for (let person of format) {
            people.push (
               person.name

            )
        }
        return people;

    }

}

module.exports = PeopleParse;