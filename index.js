function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase()
}
function logShout(toUpperCase) {
    console.log('HELLO');
}
function logWhisper(toLowerCase) {
    console.log('hello');
}
function sayHiToGrandma(string) {
    if (string === string.toLowerCase()) return "I can't hear you!";
    else if (string === "I love you, Grandma.") return "I love you, too.";
    else if (string === string.toUpperCase()) return "YES INDEED!"; 
}