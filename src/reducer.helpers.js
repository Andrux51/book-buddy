export const handleGenreSelection = (existingChosenGenres, genreChosen) => {
    let genresChosen = existingChosenGenres.slice();

    if(genreChosen.selected) {
        genresChosen.push(genreChosen.name);
    } else {
        genresChosen = genresChosen.filter(elem => {
            return elem !== genreChosen.name;
        });
    }

    return genresChosen;
}
