import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

interface EditModalProps {
  show: boolean;
  onHide: () => void;
  onUpdate: (title: string, description: string) => void;
  currentTitle: string;
  currentDescription: string;
}

const EditModal: React.FC<EditModalProps> = ({
  show,
  onHide,
  onUpdate,
  currentTitle,
  currentDescription,
}) => {
  console.log("=====================", currentTitle, currentDescription);
  const blogData: any = useSelector(
    (state: any) => state?.userDataSlice?.myBlogData
  );
  const [title, setTitle] = useState<any>(currentTitle);
  const [description, setDescription] = useState<any>(currentDescription);

  const handleUpdate = () => {
    onUpdate(title, description);
    onHide();
  };
  useEffect(() => {
    console.log("shshhshsshss", show);
    if (show) {
      setTitle(currentTitle);
      setDescription(currentDescription);
    }
  }, [show, currentTitle, currentDescription]);

  console.log("hshsshhsshhsshhshs", title, description);
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Blog</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleUpdate}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
