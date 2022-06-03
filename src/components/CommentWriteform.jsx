import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import { useContext, useState } from "react";
import DataContext from "../context/DataContext";

const CommentWriteform = () => {
  const data = useContext(DataContext);
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // input값을 가져오는 이벤트 함수
  const onChange = (e) => {setText(e.target.value)};

  //버튼을 눌렀을때 값을 넣어주는 함수
  const addComment = () => {
    const nextComment = {
      id : data.state.id,
      user : data.state.user,
      text : text,
      product : null,//props 값으로 받아와서 넣기
      img : null//기능 확인후 넣기
    };
    data.action.setComments([...data.state.comments, nextComment]);
    data.action.setId(data.state.id+1);
    handleClose();
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        후기작성
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>후기를 작성해주세요.</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              onChange={onChange}
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100px' }}
            />
          </FloatingLabel>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>이미지 첨부</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
          <Button variant="primary" onClick={addComment}>
            작성
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default CommentWriteform;