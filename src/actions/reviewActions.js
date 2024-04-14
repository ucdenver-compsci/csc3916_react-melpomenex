export const ADD_REVIEW = 'ADD_REVIEW';

export function addReview(review) {
  return {
    type: ADD_REVIEW,
    review: review
  };
}