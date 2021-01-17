import Header from './components/organisms/Header';
import RomanNumeralsConverter from './components/organisms/RomanNumeralsConverter';

const App = () => (
  <main data-testid="main">
    <Header title="Roman Numerals Converter" />
    <RomanNumeralsConverter />
  </main>
);

export default App;
