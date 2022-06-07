import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";

const CommentWriteform = () => {
  const data = useContext(DataContext);
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const [files, setFiles] = useState('');

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
      img : URL.createObjectURL(files[0]) //기능 확인후 넣기
    };
    data.action.setComments([...data.state.comments, nextComment]);
    data.action.setId(data.state.id+1);
    handleClose();
  };
  // 파일값 입력을 받아오는 함수
  const onLoadFile = (e) => {
    const file = e.target.files;
    console.log(file);
    setFiles(file);
  };
  //입력받은 파일값을 출력하는 함수
  const preview = () => {
    // files의 값이 없을때는 실행하지 않는다.
    if(!files) return false;
    const img = document.querySelector('#img_box');
    img.style.backgroundImage = `url(${URL.createObjectURL(files[0])})`;
  };
  // preview 함수 실행 : 값이 바뀔때마다 실행
  useEffect(() => {
    preview();
    // return이 실행될떄 preview함수 실행
    // effect 이후 어떻게 정리할것인지 (clean-up)
    return () => preview();
  });

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
            {/* 파일의 값 저장을 위한 onChange */}
            <Form.Control type="file" onChange={onLoadFile} />
          </Form.Group>
          {/* 이미지 미리보기 - JS DOM을 선택해서 가져오기 위해 id 작성 */}
          <div id="img_box" style={{ width : '50px', height : '50px',
          backgroundSize : 'cover'}}></div>
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