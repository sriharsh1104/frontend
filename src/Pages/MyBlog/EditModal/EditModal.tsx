import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface EditModalProps {
  show: boolean;
  onHide: () => void;
  onUpdate: (title: string, description: string) => void;
//   currentTitle: string;
//   currentDescription: string;
}

const EditModal: React.FC<EditModalProps> = ({
  show,
  onHide,
  onUpdate,
//   currentTitle,
//   currentDescription,
}) => {
  const [title, setTitle] = useState<any>("");
  const [description, setDescription] = useState<any>("");

  const handleUpdate = () => {
    onUpdate(title, description);
    onHide();
  };

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
