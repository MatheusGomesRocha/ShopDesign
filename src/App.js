import Header from './components/Header';
import Category from "./components/Category";
import New from "./components/New";
import Trending from "./components/Trending";
import Ad from "./components/Ad";
import Comments from "./components/Comments";
import Quality from "./components/Quality";
import Daily from "./components/Daily";

export default () => {
  return(
      <div>
        <Header />

        <Category />

        <New />

        <Trending />

        <Ad />

        <Comments />

        <Quality />

        <Daily />
      </div>

  )
}