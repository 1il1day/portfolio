import './App.css';
import PcLayout from './components/PcLayout';
import { useMediaQuery } from 'react-responsive';
import MobileLayout from './components/MobileLayout';

function App() {
  const isPc = useMediaQuery({
    query : "(min-width:769px)"
  });

  return (
    <>
      {isPc ? <PcLayout /> : <MobileLayout />}
    </>
  );
}

export default App;