import { Drag } from '../actions/Drag';
import { AbstractNote } from './Note';
import { Note } from './Note';

/** Example post-it notes will contain the examples which demonstrate the rules
 * Example notes are draggable onto rule notes */
export class ExampleNote extends AbstractNote {

    constructor() {
        super("#added-example-item");
    }

    public add() {
        const li = document.createElement('li');
        li.setAttribute('dragover', 'onDragOver(event);');
        li.setAttribute('drop', 'onDrop(event);')

        const span = document.createElement('span');
        span.setAttribute('class', "examples");
        span.setAttribute('draggable', 'true');
        span.setAttribute('dragstart', 'onDragStart(event);');
        span.setAttribute('id', 'exampleCard' + Date.now());
        const drag = new Drag();
        span.addEventListener('dragstart', drag.start);

        const paragraph = super.buildParagraph();

        const deleteLink = super.buildDeleteButton("examples");

        const exampleNote: Note = {
            listItem: li,
            span: span,
            paragraph: paragraph,
            deleteLink: deleteLink
        }

        super.add(exampleNote);
    }

}