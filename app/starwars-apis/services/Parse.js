const service = require('./starwars.service');

class Parse {
    constructor(name, terrain, population, residents, films) {
        this.name = name;
        this.terrain = terrain;
        this.population = population;
        this.residents = residents;
        this.films = films;

    }

    static async parse(format) {
        return new Parse(
            format.name,
            format.terrain,
            format.population,
         await service.getResidents(format),
         await service.getFilms(format)
        )
    }

}

module.exports = Parse;