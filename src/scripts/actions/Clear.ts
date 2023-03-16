export class Clear {

    private placeholderTexts = ['Rule #1', 'Rule #2', 'Rule #3', 'The one where...'];

    public text = (event: MouseEvent) => {
        if (event.target instanceof Element) {
            const currentText = event.target.innerHTML;
            if (this.placeholderTexts.includes(currentText)) {
                event.target.innerHTML = "";
            }
        }
    }
}