var subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
var verbs = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
var objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];
var worddictionary = [subjects, verbs, objects];
for (var i = 0; i < 5; i++) {
    console.log(getVerse());
}
function getVerse() {
    var sentence = "";
    worddictionary.forEach(function (item) {
        sentence += chooseStringFromArray(item);
    });
    return sentence;
}
function chooseStringFromArray(string_array) {
    return string_array.splice(getRandomNumber(subjects.length), 1)[0] + " ";
}
function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
