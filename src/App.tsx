import './App.css';
import TrackControls from './components/TrackControls';
import TrackList from './components/TrackList';
import {startTrack} from './features/track/TrackActions';

const App = () => {
  return (
    <div className="App">
        <TrackList
          onSelect={startTrack}
        />
        <TrackControls />
    </div>
  )
};

export default App;
