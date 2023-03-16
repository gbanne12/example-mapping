export class Drag {

    start(event: DragEvent) {
        if (event.target instanceof Element) {
            event.dataTransfer.setData('text/plain', event.target.id);
        }
    }

    dragOver(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
    }

    drop(event: DragEvent) {
        const draggableElement = document.getElementById(event.dataTransfer.getData('text'));
        if (event.target instanceof Element) {
            let dropzone: Element = event.target;
            const isRuleSpan = dropzone.tagName == "span" && dropzone.getAttribute('class') == 'rules';
            if (!isRuleSpan) {
                dropzone = event.target.closest('span.rules');
            }

            dropzone.appendChild(draggableElement);

            let childSpans = 0;
            const children = dropzone.children;
            for (let child of children) {
                if (child.nodeName.toLowerCase() == 'span') {
                    childSpans++;
                }
            }

            const initialDivHeight = 300;
            const requiredHeight = initialDivHeight + (childSpans * 175);
            const containerDiv = dropzone.parentElement.parentElement.parentElement.parentElement;
            if (containerDiv.clientHeight < requiredHeight) {
                containerDiv.setAttribute('style', 'height:' + requiredHeight + 'px');
            }

            event.dataTransfer.clearData();
        }
    }
}