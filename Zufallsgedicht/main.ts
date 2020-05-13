let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let verbs: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];
let wordDictionary: any = [subjects, verbs, objects];

for (let i: number = 0; i < 5; i++) {
    console.log(getVerse());
}


function getVerse(): string {
    let sentence: string = "";
    wordDictionary.forEach(function (item: string[]) {
        sentence += chooseStringFromArray(item);
    });
    return sentence;
}

// camelCase für variablen benutzen
function chooseStringFromArray(string_array: string[]): string {
    return string_array.splice(getRandomNumber(subjects.length), 1)[0] + " ";
}

function getRandomNumber(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
}
