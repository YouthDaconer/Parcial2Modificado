import './App.css';
import { PinLayout, HeaderDesktop, HeaderMobile, FooterMobile } from './components/main';
import UseMediaQuery from "./utils/UseMediaQuery";

const App = () => {
  const isDesktop = UseMediaQuery('(min-width: 650px)');

  return (
    <div>
      <HeaderDesktop isDesktop={isDesktop} />
      <HeaderMobile isDesktop={isDesktop} />
      <FooterMobile isDesktop={isDesktop} />
      <PinLayout />
    </div>
  );
};

export default App;
