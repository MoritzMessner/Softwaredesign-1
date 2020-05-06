var subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
var verbs = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
var objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];
var output = [];
for (var i = 0; i < 5; i++) {
    output.push(getVerse());
    document.body.innerHTML += "<p>" + output[i] + "</p>";
}
function getVerse() {
    var sentence = "";
    sentence += popRandomElement(subjects);
    sentence += popRandomElement(verbs);
    sentence += popRandomElement(objects);
    return sentence;
}
function popRandomElement(string_array) {
    return string_array.splice(Math.floor(Math.random() * subjects.length), 1)[0] + " \n";
}
