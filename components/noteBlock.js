/* eslint-disable react/no-children-prop */
import { format, formatDistance, formatRelative, subDays, parseISO } from "date-fns";
import Tag from "../components/note/Tag";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";


export default function NoteBlock({ notes }) {

  const colors = [
    "rgb(34, 9, 108)",
    "rgb(136, 70, 211)",
    // "rgb(223, 89, 89)",
  ];

  console.log(notes)
  return (
    <div>
      { notes.map( note => {
        console.log(note)
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
                {/* <ReactMarkdown>{note.content}</ReactMarkdown> */}
                <ReactMarkdown
                  components={{
                    code({ className, children }) {
                        // Removing "language-" because React-Markdown already added "language-"
                        // const language = className.replace("language-", "");
                        return (
                            <SyntaxHighlighter
                                style={materialDark}
                                // language={language}
                                children={children[0]}
                            />
                        );
                    },
                }}
                >
                  { note.content }
                </ReactMarkdown>
              </div>
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

// {
//   notes.map((note) => {
//     const parseMarkdown = async () => {
//       setContent(await markdownToHtml(note.content));
//     };
//     parseMarkdown();
//     return (
//       <>
//         <div key={note.frontmatter.title} className="note">
//           <div className="note__header">
//             <h3>{note.frontmatter.title}</h3>
//             <span>
//               {format(parseISO(note.frontmatter.date), "dd MMM yyyy")}
//             </span>
//           </div>
//           <div className="note__tags">
//             {note.frontmatter.tags.split(", ").map((tag) => {
//               let randomColor =
//                 colors[Math.floor(Math.random() * colors.length)];

//               return <Tag key={tag} text={tag} color={randomColor} />;
//             })}
//           </div>
//         </div>
//         <div className="divider">
//           <hr />
//         </div>
//       </>
//     );
//   });
// }
