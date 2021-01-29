import { CC } from '../CC/CC'

export abstract class Pastebin {
    constructor(protected cc: CC) {}

    protected abstract getCode(): string
    protected abstract getFilename(): string

    protected getPath(): string {
        return `/moverTools/${this.getFilename()}`
    }

    public update = async (): Promise<void> => {
        if (await this.cc.fs.exists(this.getPath())) {
            await this.cc.fs.delete(this.getPath())
        }
        console.log('about to call pastebin')
        await this.cc.pastebinGet(this.getCode(), this.getPath())
        console.log('done calling pastebin')
        // const code = await this.cc.http.get(
        //     `http://pastebin.com/raw/${this.getCode()}`
        // )
        // return this.cc.fs.writeToPath(this.getPath(), code)
        // return this.cc.shell.runPastebin('get', this.getCode(), this.getPath())

        // make the turtle do this pastebin shell call client side
    }
}
