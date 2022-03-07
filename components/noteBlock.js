/* eslint-disable react/no-children-prop */
import { format, formatDistance, formatRelative, subDays, parseISO } from "date-fns";
import Tag from "../components/note/Tag";
import "../styles/NoteBlock.module.scss"

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import { CopyToClipboard } from "react-copy-to-clipboard";


//TODO: add copyToClipboard button to code blocks

export default function NoteBlock({ notes }) {

  const colors = [
    "rgb(34, 9, 108)",
    "rgb(136, 70, 211)",
    // "rgb(223, 89, 89)",
  ];

  // console.log(notes)
  return (
    <div className="wrapper">
      { notes.map( note => {
        // console.log(note)
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
                {note.frontmatter.tags.split(", ").map((tag) => {
                  let randomColor =
                    colors[Math.floor(Math.random() * colors.length)];

                  return <Tag key={tag} text={tag} color={randomColor} />;
                })}
              </div>
              <div className="note__body">
                <ReactMarkdown
                  className="preview-markdown"
                  children={note.content}
                  remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
                  components={{
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || "");
                      return !inline && match ? (
                        <SyntaxHighlighter
                          children={String(children).replace(/\n$/, "")}
                          style={nord}
                          language={match[1]}
                          PreTag="div"
                          // {...props}
                        />
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                  }}
                />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
