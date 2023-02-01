import { RouterProvider } from 'react-router-dom';
import Layout from 'components/layout/Layout';
import GlobalStyles from 'public/style/globalStyles';
import router from 'routers/router';
import 'public/fonts/pretendard.css';

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
}

export default App;
