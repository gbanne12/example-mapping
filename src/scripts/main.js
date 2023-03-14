let deleteBtncount = 1;
let exampleCardCount = 1;

const addRuleNote = function () {
	addNote('#final-rule-item', 'rules');
}

const addExampleNote = function () {
	addNote('#final-example-item', 'examples');
}

const addQuestionNote = function () {
	addNote('#final-question-item', 'questions');
}

function addNote(target, className) {
	const li = document.createElement('li');
	const targetElement = document.querySelector(target);
	if (className == 'examples') {
		li.setAttribute('ondragover', 'onDragOver(event);');
		li.setAttribute('ondrop', 'onDrop(event);')
		//li.setAttribute('id', 'exampleListItem' + this.exampleCardCount);
	}
	targetElement.parentNode.insertBefore(li, targetElement.nextSibling);

	const span = document.createElement('span');
	span.setAttribute('class', className);
	if (className == 'rules') {
		span.setAttribute('ondragover', 'onDragOver(event);');
		span.setAttribute('ondrop', 'onDrop(event);');
	} else if (className == "examples") {
		span.setAttribute('draggable', 'true');
		span.setAttribute('ondragstart', 'onDragStart(event);');
		span.setAttribute('id', 'exampleCard' + Date.now());
		exampleCardCount++;
	} 
	li.appendChild(span);

	const paragraph = document.createElement('p');
	paragraph.setAttribute('contenteditable', 'true');
	span.appendChild(paragraph);

	const deleteButton = document.createElement('a');
	const generatedId = 'delete-' + className + '-button' + this.count;
	deleteBtncount++;
	deleteButton.setAttribute('href', "#")
	deleteButton.setAttribute('id', generatedId)
	deleteButton.setAttribute('class', "close")
	deleteButton.addEventListener('click', function (event) {
		if (!event.target.matches('#' + generatedId)) return
		console.log(event.target);
		const element = document.getElementById(generatedId);
		element.parentNode.remove();
	}, false);

	span.appendChild(deleteButton);
}


// Listeners 
const newRuleButton = document.getElementById('new-rule-button');
newRuleButton.addEventListener('click', addRuleNote);

const newExampleButton = document.getElementById('new-example-button');
newExampleButton.addEventListener('click', addExampleNote);


const newQuestionButton = document.getElementById('new-question-button');
newQuestionButton.addEventListener('click', addQuestionNote);


/***
 * DELETE SECTIONS
 */
const removeRuleOne = function () {
	deleteElement("delete-rule-button1");
}

const removeRuleTwo = function () {
	deleteElement("delete-rule-button2");
}

function deleteElement(target) {
	const element = document.getElementById(target);
	element.parentNode.remove();
}

const deleteButton_RuleOne = document.getElementById('delete-rule-button1');
deleteButton_RuleOne.addEventListener('click', removeRuleOne);

const deleteButton_RuleTwo = document.getElementById('delete-rule-button2');
deleteButton_RuleTwo.addEventListener('click', removeRuleTwo);



// drag and drop
function onDragStart(event) {
	event
		.dataTransfer
		.setData('text/plain', event.target.id);

}

function onDragOver(event) {
	event.preventDefault();
	event.stopPropagation();
}


function onDrop(event) {
	const id = event.dataTransfer.getData('text');

	const draggableElement = document.getElementById(id);
	let dropzone = event.target;
	const el = dropzone.element;
	if (dropzone.tagName.toLowerCase() === "p"){
		dropzone = dropzone.parentNode;
	}
	dropzone.appendChild(draggableElement);
	const containerDiv = dropzone.parentNode.parentNode.parentNode.parentNode;
	containerDiv.setAttribute('style', 'height:500px');


	event.dataTransfer.clearData();
}



/// Clear notes

const clearText = function(event) {
	event.target.innerText = "";
}

function clearTheField(target) {
	console.log(target + "clicked");
	target.clearText();

}

const paragraphs = document.getElementsByTagName('p');
for (let x = 0; x < paragraphs.length; x++) {
	paragraphs[x].addEventListener('click', clearText);
}



