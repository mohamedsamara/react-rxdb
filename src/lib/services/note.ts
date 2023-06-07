import { v4 as uuidv4 } from 'uuid';

// import { db } from 'lib/models';

// export const getNotes = await db.notes.find({}).exec();

export const saveNote = async (title: string, content: string) => {
  //   await db.todos.insert({
  //     uid: uuidv4(),
  //     title,
  //     content,
  //     timestamp: new Date().toISOString(),
  //   });
};

export const deleteNote = async (id: string) => {
  //   await database.write(async () => {
  //     const note = await database.get(TableName.NOTES).find(id);
  //     note.destroyPermanently();
  //   });
};
