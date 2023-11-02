import { Questions } from "./pages/questions/questions";
import { Shell } from "./shell/shell";
import { useSelector } from 'react-redux';

function App() {
  const activeRoute = useSelector((state) => state.navigation.active);

  const router = {
    'questions': Questions
  };

  return (
    <Shell routedComponent={router[activeRoute]} />
  );
}

export default App;
