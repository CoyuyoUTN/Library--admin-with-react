import { Layout } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/mainPage.css";

const { Header, Footer, Sider, Content } = Layout;

const MainPage = () => {
  const [books, setBooks] = useState([{}]);

  const getBooksAxios = async () => {
    const getAxios = await axios.get("./books.json").catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
    setBooks(getAxios.data);
  };

  useEffect(() => {
    getBooksAxios();
  }, []);

  console.log(books);

  return (
    <>
      <Layout>
        <Header className="space"></Header>
        <Content className="main-container">
            
        </Content>
        <Footer className="space-2"></Footer>
      </Layout>
    </>
  );
};

export default MainPage;
