import { Layout } from "antd";
import "../Styles/mainPage.css";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";

import { Button, Modal, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ModalBooks from "./ModalBooks";
const { confirm } = Modal;
const { Item } = Form;
const { Content } = Layout;
const { TextArea } = Input;

const MainPage = () => {
  

  const bookList = useSelector((state) => state.books);
  console.log("El state queda asi", bookList);
  /*-----------------------------------------------------------------------------------*/
  

  return (
    <>
      <Layout>
        <Content className="main-container">
          <ModalBooks />
          <div className="books-container">
            {bookList.map((book, index) => {
              return (
                <div key={index}>
                  <BookCard book={book} />
                </div>
              );
            })}
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default MainPage;
