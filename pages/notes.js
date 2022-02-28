import "../styles/Notes.module.scss"
import fs from "fs";
import matter from "gray-matter";
import { useState, useEffect } from "react";
import markdownToHtml from "../utils/markdownToHTML";
import { format, formatDistance, formatRelative, subDays, parseISO } from "date-fns";

import Tag from "../components/note/Tag"

export default function Notes({ notes }) {

  const colors = [
    "rgb(34, 9, 108)",
    "rgb(6, 91, 65)",
    "rgb(91, 6, 81)",
    "rgb(162, 76, 76)",
  ];

  const [content, setContent] = useState();
  const [tags, setTags] = useState([]);

  useEffect(() => {
    notes.map(note => {
      let tempTags = note.frontmatter.tags.split(", ");
      tempTags.map(tag => {
        setTags((tags) => [...tags, tag]);
      })
    })
  
    return () => {
      setTags([])
    }
  }, [])
  
  console.log(`Tags`, tags)
  // TODO: make hr divider component

  return (
    <div className="notes">
      <p className="notes__title">
       Taking notes is a great way to learn, so I try to do it whenever I manage to solve a problem! Below are some that I have encountered.
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
              <div className="note__tags">
                { note.frontmatter.tags.split(", ").map(tag => {

                  let randomColor =
                    colors[Math.floor(Math.random() * colors.length)];

                  return (
                    <Tag
                      key={tag}
                      text={tag}
                      color={randomColor}
                    />
                  );
                })}
              </div>
              <p className="note__body" dangerouslySetInnerHTML={{ __html: `${content}` }} />
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
