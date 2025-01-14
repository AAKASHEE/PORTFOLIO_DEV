import React from "react";

interface Note {
  _id: string;
  name: string;
  email: string;
  message: string;
}

interface NotesListProps {
  notes: Note[];
}

const NotesList: React.FC<NotesListProps> = ({ notes }) => {
  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            <h3>{note.name}</h3>
            <p>{note.email}</p>
            <p>{note.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
