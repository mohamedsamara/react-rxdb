import { useNotes } from 'lib/hooks';
import Layout from 'layouts/default';
import Notes from 'components/Notes';

export const HOME_TEST_ID = 'home';

const Home = () => {
  const { notes } = useNotes();

  return (
    <Layout>
      <div
        data-testid={HOME_TEST_ID}
        className="container max-w-sm min-h-full px-4 py-12 mx-auto"
      >
        <Notes notes={notes} />
      </div>
    </Layout>
  );
};

export default Home;
