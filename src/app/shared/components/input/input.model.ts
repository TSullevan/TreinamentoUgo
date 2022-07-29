export class InputModel {
    title: string | null = null;
    placeHolder: string = '';
    required: boolean = false;
    value: string = '';
    style: string = '';
    blurValidation: Function = function() {};
    mask: Function = this.maskMethodWithValue;

    private maskMethod: Function = function(text: string) { return text; }

    constructor(title: string | null = null) {
        this.title = title;
    }

    public setMaskMethod(newMaskMethod: Function): InputModel {
        this.maskMethod = newMaskMethod;
        return this;
    }

    private maskMethodWithValue(): void {
        this.value = this.maskMethod(this.value);
    }
}