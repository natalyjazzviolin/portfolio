import { readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";

export function getParsedFileContentBySlug(fileName: string, notePath: string){
    
    
    const noteFilePath = join(notePath, `${fileName}.md`);
    const noteContent = readFileSync(noteFilePath);
    const { data, content } = matter(noteContent);

    return {
        frontMatter: data,
        content
    }
}

export function renderMarkdown(): string {
    return 'markdown'
}