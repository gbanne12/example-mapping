import { Drag } from '../actions/Drag';
import {Note} from './Note';


export class RuleNote extends Note {

    private className: string = "rules";

    constructor() {
        super("#final-rule-item");
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
        
        const deleteButton = super.buildDeleteButton(this.className);

        super.add(li, span, paragraph, deleteButton);
    }

}