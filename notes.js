
function createNewNote( text = "generic card" ) {
  if (text === "") { text = "generic card2"; }
  let card = getNote();
  card.innerHTML = text;
  addNoteToBoard( card );
}

function getNote() {
  let element = document.createElement( 'div' );
  element.classList.add( 'note2' );
  return element;
}

function addNoteToBoard( note ) {
  document.querySelector( '#board' ).appendChild( note );
}

function showNewNoteForm () {
  document.querySelector("#overlay").classList.add('active');
}

document.querySelector("#pen").addEventListener( 'click', showNewNoteForm );

function submitNewNoteForm ( ) {
  var text = document.querySelector('#new-note-text').value;
  document.querySelector('#new-note-text').value = "";
  createNewNote ( text );
  document.querySelector("#overlay").classList.remove('active');
}

document.querySelector("#new-note-add").addEventListener( 'click', submitNewNoteForm );

function setBgcolor(node) {
  node.classList.add("my-color");
}

setTimeout(function() {createNewNote("hahahaa");}, 2000);
setTimeout(function() {createNewNote("anks");}, 3000);
