import { Note } from 'lib/types';
import Layout from 'layouts/default';
import Heading from 'components/common/Heading';
import NoteList from './NoteList';
import AddNote from './AddNote';

interface NotesProps {
  notes: Note[];
}
const Notes = (props: NotesProps) => {
  const { notes } = props;

  return (
    <Layout>
      <Heading as="h2" className="mb-6 text-center">
        Notes
      </Heading>
      <AddNote />
      <NoteList notes={notes} />
    </Layout>
  );
};

export default Notes;
