import { Note } from './Note';

export class QuestionNote extends Note {

    constructor() {
        super("#final-question-item");
    }

    public add() {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.setAttribute('class', "questions");
        const paragraph = super.buildParagraph();
        const deleteButton = super.buildDeleteButton("rules");
        super.add(li, span, paragraph, deleteButton);
    }

}