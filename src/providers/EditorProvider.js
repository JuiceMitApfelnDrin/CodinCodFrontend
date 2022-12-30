import { createContext, useEffect, useMemo, useState } from "react";

import puzzleById from "api/puzzleById";

export const EditorContext = createContext({});

const EditorProvider = ({ children }) => {
  const [puzzle, setPuzzle] = useState({});
  /* will eventually become a EditorProvider :) */
  // the editor provider holds shared information for editor components

  // FIXME: eventually should be able to send in an id and this should be just a normal function :yep:
  useEffect(() => {
    puzzleById({ id: "63af21ebfe59b7f0eeb0436c" }).then(({ data }) => {
      setPuzzle(data);
    });
  }, []);

  const context = useMemo(() => {
    return {
      puzzle,
      language: "javascript",
      theme: "vs-dark",
    };
  }, [puzzle]);

  return (
    <EditorContext.Provider value={context}>{children}</EditorContext.Provider>
  );
};

export default EditorProvider;
