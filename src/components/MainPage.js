import { Layout } from "antd";
import "../Styles/mainPage.css";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";
const { Header, Footer, Sider, Content } = Layout;

const MainPage = () => {
  const bookList = useSelector((state) => state.books);
  console.log("El state queda asi", bookList);
  return (
    <>
      <Layout>
        <Header className="space"></Header>
        <Content className="main-container">
          <div className="books-container">
            {bookList.map((book, index) => {
              return (
                <div key={index} className="book">
                  <BookCard book={book} />
                </div>
              );
            })}
          </div>
        </Content>
        <Footer className="space-2"></Footer>
      </Layout>
    </>
  );
};

export default MainPage;
