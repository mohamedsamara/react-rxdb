import { Note } from 'lib/types';
import { useRxCollection, useRxData } from 'rxdb-hooks';
import { v4 as uuidv4 } from 'uuid';

export const useNotes = () => {
  const { result: notes } = useRxData<Note>('notes', (collection) =>
    collection.find(),
  );
  const collection = useRxCollection('notes');

  const addNote = async (title: string, content: string) => {
    await collection?.insert({
      id: uuidv4(),
      title,
      content,
    });
  };

  const deleteNote = async (id: string) => {
    const noteDoc = await collection?.findOne(id);
    await noteDoc?.remove();
  };

  return { notes, addNote, deleteNote };
};
