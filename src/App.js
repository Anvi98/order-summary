import './App.css';
import SummaryCard from './SummaryCard';
import backgroundM from './images/pattern-background-mobile.svg';
import backgroundD from './images/pattern-background-desktop.svg';

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-pale-blue relative">
      <img src={backgroundM} alt="" className="w-full h-full object-cover block absolute top-0 sm:hidden" />
      <img src={backgroundD} alt="" className="w-full h-full object-cover hidden absolute top-0 sm:block" />
      <SummaryCard />
    </div>
  );
}

export default App;

