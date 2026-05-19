import { useState } from 'react';
import PhoneFrame from './components/PhoneFrame';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import GreenJourneyScreen from './screens/GreenJourneyScreen';
import AIBuddyScreen from './screens/AIBuddyScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen);
  };

  return (
    <PhoneFrame>
      {currentScreen === 'home' && <HomeScreen onNavigate={handleNavigate} />}
      {currentScreen === 'journey' && <GreenJourneyScreen onNavigate={handleNavigate} />}
      {currentScreen === 'ai-buddy' && <AIBuddyScreen onNavigate={handleNavigate} />}

      <BottomNav active={currentScreen} onNavigate={handleNavigate} />
    </PhoneFrame>
  );
}

export default App;
