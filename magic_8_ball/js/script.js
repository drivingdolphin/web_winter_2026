function magic8ball() {
    var fortune = getafortune();
    showfortune(fortune);    
}
    
function getafortune() {
    var fortunes = ["yes", "no", "maybe", "ask again", "67"]
    var random = rando(fortunes.length)
    return fortunes[random];
}

function rando(max) {
    return Math.floor(Math.random() * max)
}
function showfortune(fortune) {
    //alert(fortune);
    document.getElementById("answer").innerHTML = fortune;
}

