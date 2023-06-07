import { Note } from 'lib/types';
import NoteItem from './NoteItem';

interface NoteListProps {
  notes: Note[];
}
const NoteList = (props: NoteListProps) => {
  const { notes } = props;

  if (notes.length === 0)
    return <p className="mt-4 text-gray-400">No notes found</p>;

  return (
    <div className="my-8">
      {notes.map((note) => (
        <div key={note.id} className="mb-4">
          <NoteItem note={note} />
        </div>
      ))}
    </div>
  );
};

export default NoteList;
