import { RuleNote } from "./notes/RuleNote";
import { ExampleNote } from "./notes/ExampleNote";
import { QuestionNote } from "./notes/QuestionNote";
import { Drag } from "./actions/Drag";
import { Clear } from "./actions/Clear";


// Add notes listeners
const newRuleButton = document.getElementById('new-rule-button');
newRuleButton.addEventListener('click', (): void => {
    const ruleNote = new RuleNote();
    ruleNote.add();
});

const newExampleButton = document.getElementById('new-example-button');
newExampleButton.addEventListener('click', (): void => {
    const exampleNote = new ExampleNote();
    exampleNote.add();
});


const newQuestionButton = document.getElementById('new-question-button');
newQuestionButton.addEventListener('click', () => {
    const questionNote = new QuestionNote();
    questionNote.add();
});

// Delete notes listeners
const deleteButtons = document.getElementsByClassName('delete');
for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', (event: MouseEvent): void => {
        if (event.target instanceof Element) {
            event.target.parentElement.remove();
        }
    });
}

// Clear notes listeners
const allParagraphs = document.getElementsByTagName('p');
for (let i = 0; i < allParagraphs.length; i++) {
    allParagraphs[i].addEventListener('click', (event: MouseEvent): void => {
        const clear = new Clear();
        clear.placeholderText(event);
    });
}

//Drag and drop listeners
const drag = new Drag();
const exampleNote = document.getElementById('final-example-span');
exampleNote.addEventListener('dragstart', drag.start);

const ruleNotes = document.querySelectorAll('span.rules');
for (let i = 0; i < ruleNotes.length; i++) {
    ruleNotes[i].addEventListener('dragover', drag.dragOver);
}
for (let i = 0; i < ruleNotes.length; i++) {
    ruleNotes[i].addEventListener('drop', drag.drop);
}
