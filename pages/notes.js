import "../styles/Notes.module.scss"
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

// const NOTES_PATH = join(process.cwd(), "_articles");

export default function Notes({ notes }) {
  return (
    <div className="notes">
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
      {notes.map((note) => {
        return (
          <div key={note.frontmatter.title} className="note">
            <h3>{note.frontmatter.title}</h3>
            <p>{ note.content}</p>
          </div>
        );
      })}
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
    const { data: frontmatter, content } = matter(readFile);

    return {
      slug,
      frontmatter,
      content
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
