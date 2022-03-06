import "../styles/Notes.module.scss"
import fs from "fs";
import matter from "gray-matter";
import { useState, useEffect } from "react";
import NoteBlock from "../components/noteBlock"
import markdownToHtml from "../utils/markdownToHTML";
import { format, formatDistance, formatRelative, subDays, parseISO } from "date-fns";

import Tag from "../components/note/Tag"

export default function Notes({ notes }) {

  const colors = [
    "rgb(34, 9, 108)",
    "rgb(136, 70, 211)",
    // "rgb(223, 89, 89)",
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
        Taking notes is a great way to learn, so I try to do it whenever I
        manage to solve a problem! Below are some that I have encountered.
      </p>
      <div className="divider">
        <hr />
      </div>
      <NoteBlock notes={notes} />
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
