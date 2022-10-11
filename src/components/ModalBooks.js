import { Button, Modal, Form, Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../Features/books/booksSlice";
import { v4 as uuid } from "uuid";
const { confirm } = Modal;
const { Item } = Form;
const { TextArea } = Input;

const ModalBooks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [book, setBook] = useState({
    id: uuid(),
    author: "",
    title: "",
    imageLink: "",
    year: 0,
    price: 0,
    description: "",
  });
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setBook({ ...book, [name]: value });
  };
  const action = () => {
    console.log("aca hay un libro", book);
    dispatch(addBook(book));
    handleCancel();
  };

  const dispatch = useDispatch();

  return (
    <>
      <Button type="primary" onClick={showModal} className="btn-main">
        Add Book
      </Button>
      <Modal
        title="Add Book"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button onClick={handleCancel}>Cancelar</Button>,
          <Button type="primary" onClick={() => action()}>
            Enviar
          </Button>,
        ]}
        centered
      >
        <Form {...layout}>
          <Item label="Title">
            <Input name="title" onChange={handleChange} required />
          </Item>
          <Item label="Image">
            <Input name="imageLink" onChange={handleChange} />
          </Item>
          <Item label="Author">
            <Input name="author" onChange={handleChange} />
          </Item>
          <Item label="Year">
            <Input name="year" onChange={handleChange} />
          </Item>
          <Item label="Price">
            <Input name="price" onChange={handleChange} />
          </Item>
          <Item label="Description">
            <TextArea rows={4} name="description" onChange={handleChange} />
          </Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalBooks;
