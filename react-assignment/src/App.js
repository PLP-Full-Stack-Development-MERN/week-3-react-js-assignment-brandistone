import Header from './components/Header';
import Profile from './components/Profile';
import Counter from './components/Counter';

function App() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <Profile name="Brandistone Mabeya" email="brandymabeya@gmail.com" />
      <Counter />
    </div>
  );
}

export default App;
