import "../styles/Notes.module.scss"
import fs from "fs";
import matter from "gray-matter";
import { useState, useEffect } from "react";
import markdownToHtml from "../utils/markdownToHTML";
import { format, formatDistance, formatRelative, subDays, parseISO } from "date-fns";

export default function Notes({ notes }) {

  const [content, setContent] = useState();

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
      <div className="divider">
        <hr />
      </div>
      {notes.map((note) => {
        const parseMarkdown = async () => {
          setContent(await markdownToHtml(note.content));
        };
        parseMarkdown();
        return (
          <>
            <div key={note.frontmatter.title} className="note">
              <div className="note__header">
                <h3>{note.frontmatter.title}</h3>
                <span>
                  {format(parseISO(note.frontmatter.date), "dd MMM yyyy")}
                </span>
              </div>
              <p dangerouslySetInnerHTML={{ __html: `${content}` }} />
            </div>
            <div className="divider">
              <hr />
            </div>
          </>
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

    const readFile = fs.readFileSync(`notes/${fileName}`, "utf-8");
    const { data: frontmatter, content } = matter(readFile);

    return {
      slug,
      frontmatter,
      content
    };
  });

  return {
    props: {
      notes,
    }
  }
}
