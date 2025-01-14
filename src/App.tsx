import './App.css'
import withPage from './hocs/withPage';
import { MapComponent, Profile } from './private';
import PageContainer from './private/PagePrivateContainer';
import { Posts } from './private/Posts/Posts';
import { Home } from './public/Home'

const PageComponentMapping: Record<number, React.ComponentType> = {
  1: Home,
  2: Posts,
  3: Profile,
  4: MapComponent,
}

interface AppProps {
  pageCurrent: number;
  changePage: (page: number) => void;
}

const App = ({ pageCurrent }: AppProps) => {
  const CurrentPage = PageComponentMapping[pageCurrent] || Home;

  return (
    <>  
      {pageCurrent >= 2 ? (
        <PageContainer>
          <CurrentPage />
        </PageContainer>
      ): ( 
        <div>
          <CurrentPage />
        </div>
      )}
    </>
  )
}

// Componente envuelto
const WrappedApp = withPage(App);

export default WrappedApp;