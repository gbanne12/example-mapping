import { RuleNote } from "./notes/RuleNote";
import { ExampleNote } from "./notes/ExampleNote";
import { QuestionNote } from "./notes/QuestionNote";
import { Drag } from "./actions/Drag";


// Add notes 
const addRuleNote = function () {
    const ruleNote = new RuleNote();
    ruleNote.add();
}

const addExampleNote = function () {
    const exampleNote = new ExampleNote();
    exampleNote.add();
}

const addQuestionNote = function () {
    const questionNote = new QuestionNote();
    questionNote.add();
}

const newRuleButton = document.getElementById('new-rule-button');
newRuleButton.addEventListener('click', addRuleNote);

const newExampleButton = document.getElementById('new-example-button');
newExampleButton.addEventListener('click', addExampleNote);


const newQuestionButton = document.getElementById('new-question-button');
newQuestionButton.addEventListener('click', addQuestionNote);

// Delete notes
const removeNote = function (event: MouseEvent) {
    if (event.target instanceof Element) {
        event.target.parentElement.remove();
    }
}

const deleteButtons = document.getElementsByClassName('close');
for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', removeNote);
}

// Clear Notes
const clearText = function (event: MouseEvent) {
    if (event.target instanceof Element) {
        const currentText = event.target.innerHTML;
        let placeholders = ['Rule #1', 'Rule #2', 'Rule #3', 'The one where...'];
        if (placeholders.includes(currentText)) {
            event.target.innerHTML = "";
        }
    }
}

const allParagraphs = document.getElementsByTagName('p');
for (let i = 0; i < allParagraphs.length; i++) {
    allParagraphs[i].addEventListener('click', clearText);
}

//Drag and drop
const drag = new Drag();
const exampleSpan = document.getElementById('final-example-span');
exampleSpan.addEventListener('dragstart', drag.start);

const ruleSpans = document.querySelectorAll('span.rules');
for (let i = 0; i < ruleSpans.length; i++) {
    ruleSpans[i].addEventListener('dragover', drag.dragOver);
}
for (let i = 0; i < ruleSpans.length; i++) {
    ruleSpans[i].addEventListener('drop', drag.drop);
}
