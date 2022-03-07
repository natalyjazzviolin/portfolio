import "../styles/Notes.module.scss"
import fs from "fs";
import matter from "gray-matter";
import { useState, useEffect, useCallback } from "react";
import NoteBlock from "../components/noteBlock"
import {NotesProvider} from "../utils/noteContext"

export default function Notes({ notes }) {

  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState(notes);
  const [found, setFound] = useState(false);

  const filter = () => {
    if (found === false) {
      return
    } else if (filteredNotes.length === 0 && found === true) {
      return (
        <p className="no_notes">
          No notes found! <br></br>Please try searching again 🔎
        </p>
      );
    }else if (filteredNotes.length > 0 && found === true) {
      return <p>{`Found ${filteredNotes.length} notes:`}</p>;
    }
  }

  const searchNotes = (searchValue) => {
    if (searchValue.length > 3) {
      setSearch(searchValue);
      // console.log(searchValue);
      const filteredData = notes.filter((note) => {
        return Object.values(note)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      console.log(filteredData.length);
      setFilteredNotes(filteredData);
      setFound(true);
    } else {
      setFilteredNotes(notes);
      setFound(false);
    }
    
  }

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
  
  // console.log(`Tags`, tags)
  // TODO: make hr divider component

  return (
    <div className="notes">
      <p className="notes__title">
        Taking notes is a great way to learn, so I try to do it whenever I
        manage to solve a problem! Below are some that I have encountered.
      </p>
      <NotesProvider>
        <div className="notes__search">
          <input
            placeholder="Start typing to filter..."
            onChange={(e) => {
              searchNotes(e.target.value);
            }}
          /> 
          { filter() }
        </div>
        <div className="notes__list">
          <NoteBlock notes={filteredNotes} />
        </div>
      </NotesProvider>
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
