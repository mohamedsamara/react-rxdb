import Layout from 'layouts/default';

export const HOME_TEST_ID = 'home';

const Home = () => {
  return (
    <Layout>
      <div
        data-testid={HOME_TEST_ID}
        className="h-full bg-gradient-to-b from-[#2013c1] to-[#4c137c]"
      >
        <div className="flex flex-col items-center content-center justify-end h-full">
          <h4 className="mb-6 text-3xl text-[#f1c50e]">Vite React</h4>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
