import Header from './components/Header';
import Category from "./components/Category";
import New from "./components/New";
import Trending from "./components/Trending";
import Ad from "./components/Ad";

export default () => {
  return(
      <div>
        <Header />

        <Category />

        <New />

        <Trending />

        <Ad />
      </div>

  )
}