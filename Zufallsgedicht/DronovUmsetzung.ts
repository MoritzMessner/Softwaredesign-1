let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let verbs: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];

let output: string[] = []
for (let i: number = 0; i < 5; i++) {
    output.push(getVerse())
    document.body.innerHTML += "<p>" + output[i]+ "</p>";
}


function getVerse(): string {
    let sentence: string = "";
    sentence += popRandomElement(subjects)
    sentence += popRandomElement(verbs)
    sentence += popRandomElement(objects)
    return sentence;
}


function popRandomElement(string_array: string[]): string {
    return string_array.splice(Math.floor(Math.random() * subjects.length), 1)[0] + " \n";
}