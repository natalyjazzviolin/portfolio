import "../styles/Notes.module.scss"
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { ParsedUrlQuery } from "querystring";
import { getParsedFileContentBySlug, renderMarkdown} from "../utils/markdown";

// const NOTES_PATH = join(process.cwd(), "_articles");

export default function Notes({ notes }) {
  return (
    <div className="notes">
      { notes.map(note => {
        return <h1 key={note.frontmatter.title}>{note.frontmatter.title}</h1>;
      })}
      <p className="notes__title">
        When I have time to code outside my full-time job, I like to work on
        music-related projects. <br></br>Check them out on{" "}
        <span className="highlight">
          <a
            target="_blank"
            href="https://github.com/natalyjazzviolin"
            rel="noreferrer"
          >
            GitHub.
          </a>
        </span>
      </p>
    </div>
  );
}

export const getStaticProps = async ({
    params,
}) => {

  const files = fs.readdirSync("notes");

  const notes = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    // const noteMarkdownContent = getParsedFileContentBySlug(params.slug, fileName);

    // const renderHTML = renderMarkdown(noteMarkdownContent);

    // return {
    //   props: {
    //     notes,
    //     frontMatter: noteMarkdownContent.frontMatter,
    //   },
    // };
    const readFile = fs.readFileSync(`notes/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });
  // const noteMarkdownContent = getParsedFileContentBySlug(params.slug, slug);

  // const renderHTML = renderMarkdown(noteMarkdownContent);

  return {
    props: {
      notes,
    }
  }
}
