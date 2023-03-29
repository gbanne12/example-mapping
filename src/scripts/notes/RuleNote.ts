import { Drag } from '../actions/Drag';
import { AbstractNote, Note } from './Note';

/** Rule post-it notes will contain the rules that make up the user story
 * Rule notes provide a target area for the draggable example notes.
 */
export class RuleNote extends AbstractNote {

    private className: string = "rules";

    constructor() {
        super("#added-rule-item");
    }

    public add() {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.setAttribute('class', this.className);
        span.setAttribute('dragover', 'onDragOver(event);');
        span.setAttribute('drop', 'onDrop(event);');
        const drag = new Drag();
        span.addEventListener('dragover', drag.dragOver);
        span.addEventListener('drop', drag.drop);

        const paragraph = super.buildParagraph();

        const deleteLink = super.buildDeleteButton(this.className);

        const ruleNote: Note = {
            listItem: li,
            span: span,
            paragraph: paragraph,
            deleteLink: deleteLink
        }

        super.add(ruleNote);;
    }

}