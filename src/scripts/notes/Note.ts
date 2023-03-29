export interface Note {
    listItem: HTMLLIElement,
    span: HTMLSpanElement,
    paragraph: HTMLParagraphElement,
    deleteLink: HTMLAnchorElement,
}

/** Base class for all post-it notes types */
export abstract class AbstractNote {

    private locator = "";

    constructor(locator: string) {
        this.locator = locator;
    }

    private clear(event: MouseEvent): void {
        const target = event.target as HTMLElement;
        target.innerText = '';
    }

    private delete(elementId: string) {
        const element = document.getElementById(elementId);
        element.parentElement.remove();
    }

    protected add(note: Note): void {
        const targetElement = document.querySelector(this.locator);
        const listItem = note.listItem;
        targetElement.parentNode.insertBefore(listItem, targetElement.nextSibling);
        const span = note.span;
        listItem.appendChild(span);
        span.appendChild(note.paragraph);
        span.appendChild(note.deleteLink);
    }

    protected buildParagraph(): HTMLParagraphElement {
        const paragraph = document.createElement('p');
        paragraph.setAttribute('contenteditable', 'true');
        return paragraph;
    }

    protected buildDeleteButton(className: string): HTMLAnchorElement {
        const deleteButton = document.createElement('a');
        const generatedId = 'delete-' + className + '-button' + Date.now();
        deleteButton.setAttribute('href', "#")
        deleteButton.setAttribute('id', generatedId)
        deleteButton.setAttribute('class', "delete")
        deleteButton.addEventListener('click', function () {
            const element = document.getElementById(generatedId);
            element.parentElement.remove();
        }, false);
        return deleteButton;
    }
}