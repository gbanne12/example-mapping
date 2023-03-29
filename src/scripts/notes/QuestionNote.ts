import { AbstractNote, Note } from './Note';

/** Question post-it notes will contain the user's questions */
export class QuestionNote extends AbstractNote {

    constructor() {
        super("#added-question-item");
    }

    public add() {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.setAttribute('class', "questions");
        const paragraph = super.buildParagraph();
        const deleteLink = super.buildDeleteButton("rules");
        
        const questionNote: Note = {
            listItem: li,
            span: span,
            paragraph: paragraph,
            deleteLink: deleteLink
        }

        super.add(questionNote);
    }

}