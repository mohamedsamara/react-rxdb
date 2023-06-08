import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';

import { AddNoteForm, noteFormSchema } from 'lib/types';
import { handleError, sleep } from 'lib/utlis';
import { useNotes } from 'lib/hooks';
import Button from 'components/common/Button';
import Heading from 'components/common/Heading';
import InlineError from 'components/common/InlineError';

const AddNote = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AddNoteForm>({
    resolver: zodResolver(noteFormSchema),
  });
  const [loading, setLoading] = useState(false);
  const { addNote } = useNotes();

  const onSubmit: SubmitHandler<AddNoteForm> = async (data) => {
    try {
      setLoading(true);
      await addNote(data.title, data.content);
      await sleep();
      reset();
    } catch (error) {
      const msg = handleError(error);
      toast(msg, { type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-4 py-6 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <Heading as="h5" className="mb-4 text-center">
        Add Note
      </Heading>
      <div className="mb-6">
        <label
          htmlFor="title-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Title
        </label>
        <input
          id="title-input"
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Title"
          {...register('title')}
        />
        {errors.title?.message && (
          <InlineError message={errors.title?.message} />
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="content-textarea"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Content
        </label>
        <textarea
          id="content-textarea"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Content..."
          {...register('content')}
        ></textarea>
        {errors.content?.message && (
          <InlineError message={errors.content?.message} />
        )}
      </div>
      <Button
        type="submit"
        variant="primary"
        className="w-full"
        disabled={isSubmitting}
        loading={loading}
      >
        Create
      </Button>
    </form>
  );
};

export default AddNote;
