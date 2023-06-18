function areYouPlayingBanjo(name) {
    let regexp = /^R\w+/i
    if (name.match(regexp)) {
        return `${name} plays banjo`
    } else { return `${name} does not play banjo` };
}

/*

Простейшее решение:
function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
  }

*/