import './App.css';
import SummaryCard from './SummaryCard';
import backgroundM from './images/pattern-background-mobile.svg';
import backgroundD from './images/pattern-background-desktop.svg';
function App() {
  return (
    <div className=" w-full h-screen bg-cover flex justify-center items-center bg-pale-blue">
      <img src={backgroundM} alt="" className='block absolute top-0 sm:hidden'/>
      <img src={backgroundD} alt="" className='hidden absolute top-0 sm:block'/>
      <SummaryCard/>
    </div>
  );
}

export default App;
