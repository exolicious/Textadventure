import {MyConsole} from './MyConsole.js'

export abstract class Sequence {
    //private player: Player;
    public console: MyConsole;
    public isSqeuenceEnd: boolean;

    /*__________________________________________________________________________________________________________________________________________*/

    constructor(_input: HTMLInputElement, _output: HTMLTextAreaElement) {
        this.console = MyConsole.getInstance(_input, _output);
        this.isSqeuenceEnd = false;
    }

    public abstract async main(): Promise<void>

    public abstract async getUserAction(): Promise<void>

}
