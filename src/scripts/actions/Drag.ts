/** Class for handling draggable elements and available drop zones */
export class Drag {

    /**  Handles start of a drag operation. */
    public start(event: DragEvent) {
        if (event.target instanceof Element) {
            event.dataTransfer.setData('text/plain', event.target.id);
        }
    }

    /** Handles when the drag event is over the drop area */
    public dragOver(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
    }

    /** Handles when an item is dropped on the drop zone.
     *  Attaches the draggable to the nearest span.rules element.
     *  Increases the containing div height if required. */
    public drop = (event: DragEvent) => {
        this.appendToRule(event);
        this.adjustHeight(event);
        event.dataTransfer.clearData();
    }

    private appendToRule(event: DragEvent): void {
        if (event.target instanceof Element) {
            let target = event.target;
            const isRuleNote = target.tagName == "span" && target.getAttribute('class') == 'rules';
            if (!isRuleNote) {
                target = event.target.closest('span.rules');
            }

            const draggableId = event.dataTransfer.getData('text');
            const draggableElement = document.getElementById(draggableId);
            target.appendChild(draggableElement);
        }
    }

    private adjustHeight(event: DragEvent): void {
        if (event.target instanceof Element) {
            let target = event.target;

            let total = 0;
            const children = target.children;
            for (let child of children) {
                if (child.nodeName.toLowerCase() == 'span') {
                    total++;
                }
            }

            const initialDivHeight = 300;
            const newHeight = initialDivHeight + (total * 175);
            const containerDiv = target.parentElement.parentElement.parentElement.parentElement;
            if (containerDiv.clientHeight < newHeight) {
                containerDiv.setAttribute('style', 'height:' + newHeight + 'px');
            }
        }
    }
}