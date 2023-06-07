import { addRxPlugin, createRxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';

addRxPlugin(RxDBDevModePlugin);
addRxPlugin(RxDBQueryBuilderPlugin);

export const initialize = async () => {
  const db = await createRxDatabase({
    name: 'reactrxdb',
    storage: getRxStorageDexie(),
    ignoreDuplicate: true,
  });

  await db.addCollections({
    notes: {
      schema: {
        title: 'notes',
        version: 0,
        type: 'object',
        primaryKey: 'id',
        properties: {
          id: {
            type: 'string',
            maxLength: 250,
          },
          uid: {
            type: 'string',
          },
          title: {
            type: 'string',
          },
          content: {
            type: 'string',
          },
          timestamp: {
            type: 'date-time',
          },
        },
        required: ['uid', 'title', 'content'],
      },
    },
  });

  return db;
};
