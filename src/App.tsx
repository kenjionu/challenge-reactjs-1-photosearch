import './App.css'
import withPage from './hocs/withPage';
import { Posts } from './private/Posts/Posts';
import { Home } from './public/Home'

const PageComponentMapping: Record<number, React.ComponentType> = {
  1: Home,
  2: Posts,
}

interface AppProps {
  pageCurrent: number;
  changePage: (page: number) => void;
}

const App = ({ pageCurrent, changePage }: AppProps) => {
  const CurrentPage = PageComponentMapping[pageCurrent] || Home;

  return (
    <>
         <div>
            <button onClick={() => changePage(1)}>Ir a Home</button>
            <button onClick={() => changePage(2)}>Ir a Posts</button>
            <button onClick={() => changePage(3)}>Ir a Contact</button>
            <CurrentPage />
        </div>
    </>
  )
}

// Componente envuelto
const WrappedApp = withPage(App);

export default WrappedApp;