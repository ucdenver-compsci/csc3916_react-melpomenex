import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addReview } from '../actions/reviewActions'; 

const ReviewForm = ({ movieId }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    rating: '',
    comment: ''
  });
  const [error, setError] = useState('');

  const { rating, comment } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!rating || !comment) {
      setError('Please provide a rating and a comment.');
    } else {
      dispatch(addReview(movieId, { rating, comment }));
      setFormData({ rating: '', comment: '' });
      setError('');
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group controlId="rating">
        <Form.Label>Rating</Form.Label>
        <Form.Control
          type="number"
          name="rating"
          value={rating}
          onChange={onChange}
          min="1"
          max="5"
          required
        />
      </Form.Group>
      <Form.Group controlId="comment">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="comment"
          value={comment}
          onChange={onChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ReviewForm;