import { Drag } from "../actions/Drag";

export abstract class Note {

    private locator = "";

    constructor(locator: string) {
        this.locator = locator;
    }

    protected clear(event: MouseEvent): void {
        const target = event.target as HTMLElement;
        target.innerText = '';
    }

    protected delete(elementId: string) {
        const element = document.getElementById(elementId);
        element.parentElement.remove();
    }

    protected add(listItem: Element, span: Element, paragraph: Element, deleteButton: Element): void {
        // Insert the li & span built by sub-classes
        const targetElement = document.querySelector(this.locator);

        targetElement.parentNode.insertBefore(listItem, targetElement.nextSibling);
        listItem.appendChild(span);
        span.appendChild(paragraph)
        span.appendChild(deleteButton);
    }

    protected buildParagraph(): HTMLElement {
        const paragraph = document.createElement('p');
        paragraph.setAttribute('contenteditable', 'true');
        return paragraph;
    }

    protected buildDeleteButton(className: string): HTMLElement {
        const deleteButton = document.createElement('a');
        const generatedId = 'delete-' + className + '-button' + Date.now();
        deleteButton.setAttribute('href', "#")
        deleteButton.setAttribute('id', generatedId)
        deleteButton.setAttribute('class', "delete")
        deleteButton.addEventListener('click', function (event) {
            const eventTarget = (event.target as HTMLElement)
            if (!eventTarget.matches('#' + generatedId)) return
            const element = document.getElementById(generatedId);
            element.parentElement.remove();
        }, false);
        return deleteButton;
    }
}