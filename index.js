
// // Make sure you remove the <main> with id 'main': expected <main id="main"></main> to not exist
const main = document.getElementById("main");
main.remove()
// has a 'newHeader' variable that points to node 'h1#victory
const newHeader = document.createElement(`h1`);
/// has a 'newHeader' variable that points to node 'h1#victory'
newHeader.id ="victory"
// // has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside
newHeader.innerHTML = "Mike is the champion"