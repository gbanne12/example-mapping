import { Drag } from '../actions/Drag';
import {Note} from './Note';

export class ExampleNote extends Note {

    constructor() {
        super("#final-example-item");
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
        
        const deleteButton = super.buildDeleteButton("examples");

        super.add(li, span, paragraph, deleteButton);
    }

}