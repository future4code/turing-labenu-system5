import fs from 'fs'

export class FileManager {
    constructor(private filePath: string) {}
        public setFilePath(path: string): void {
            this.filePath = path
        }
        public writeFileInJson(data: any) :void {
            const dataAsString: string = JSON.stringify(data, null, 2)
            fs.writeFileSync(this.filePath, dataAsString)
        }
        public readFileFromJson(): any {
            try {
            const data = fs.readFileSync(this.filePath)
            return JSON.parse(data.toString())
            }catch(e) {
                console.log(e)
                return []
            }
        }
}

