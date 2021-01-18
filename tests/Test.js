
function isAValidResult(titleArticle) {
    // return true if the result is really a ps5
    let title = titleArticle.toUpperCase().replaceAll(" ", "");
    const words = ["PS5", "PLAYSTATION5"]
    return title.search(words[0]) !== -1 || title.search(words[1]) !== -1;
}