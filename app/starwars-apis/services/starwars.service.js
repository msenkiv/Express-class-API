const request = require('request-promise');
const Parse = require('./Parse');
const PeopleFormat = require('./PeopleParse');
const FilmFormat = require('./FilmParse');

exports.getPlanet = (num) => {
    let options = {
        method: 'GET',
        url: `https://swapi.co/api/planets/${num}`,
        json: true
    };

    return request(options).then(result => {

            let format = Parse.parse(result);
            console.log(format);
            return format
        }
        , (error) => {
            return Promise.reject(error);
        }).error((unexpectedError) => {
        return Promise.reject(unexpectedError);
    });
};
function getResidents(data) {
    let options = {
        method: 'GET',
        json: true
    };

    let promises = [];

    for (let residentUrl of data.residents) {
        options.url = residentUrl;
        let promise = request(options);
        promises.push(promise);
    }

    return Promise.all(promises).then((results) => {
        return PeopleFormat.parse(results);
    });
}
function getFilms(data){
    let options = {
        method: 'GET',
        json: true
    };

    let promises = [];

    for (let filmUrl of data.films) {
        options.url = filmUrl;
        let promise = request(options);
        promises.push(promise);
    }

    return Promise.all(promises).then((results) => {
        return FilmFormat.parse(results);
    });
}
exports.getResidents = getResidents;
exports.getFilms = getFilms;