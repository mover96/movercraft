import WebSocket from 'ws'

import { Command } from './Command'
import Cursor from '../interfaces/Cursor'
import { Color } from '../interfaces/Color'

export class Term extends Command {
    constructor(ws: WebSocket) {
        super(ws)
    }

    public clear = async (): Promise<void> => {
        return this.exec<void>('term.clear()')
    }

    public clearLine = async (): Promise<void> => {
        return this.exec<void>('term.clearLine()')
    }

    public getCursorPos = async (): Promise<Cursor> => {
        return this.exec<Cursor>(
            '(function() x,y = term.getCursorPos(); print(x);return {x = x, y = y}  end)()'
        )
    }

    public setCursorPos = async (cursor: Cursor): Promise<void> => {
        return this.exec<void>(`term.setCursorPos(${cursor.x},${cursor.y})`)
    }

    public scroll = async (lines: number): Promise<void> => {
        return this.exec<void>(`term.scroll(${lines})`)
    }

    public write = async (text: string): Promise<void> => {
        return this.exec<void>(`term.write("${text}")`)
    }

    public setTextColor = async (color: Color): Promise<void> => {
        return this.exec<void>(`term.setTextColor(colors.${color})`)
    }
}