/** Clear elements from the UI */
export class Clear {
    
    /** Clear text from elements if it matches initial values set on page load */
    public placeholderText = (event: MouseEvent) => {
        const placeholders = ['Rule #1', 'Rule #2', 'Rule #3', 'The one where...'];
        if (event.target instanceof Element) {
            const currentText = event.target.innerHTML;
            if (placeholders.includes(currentText)) {
                event.target.innerHTML = "";
            }
        }
    }
}