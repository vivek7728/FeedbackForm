import { useState } from "react";
import styles from "./FeedbackForm.module.css";
const FeedbackForm = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [formValue, setFormValue] = useState({
    author: "",
    rating: 1,
    comment: "",
  });
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = {};

    if (formValue.author.length < 2 || formValue.author.length > 15) {
      validationError.name = "Name must be between 2 and 15 charaters";
      setTimeout(() => {
        setError(true);
      }, 5000);
    }
    if (Object.keys(validationError).length > 0) {
      setError(validationError);
      return;
    }
    // Display alert to show form submission success
    alert(`current status is ${JSON.stringify(formValue)}`);

    setFormValue({
      author: "",
      rating: 1,
      comment: "",
    });
    setError({});
    setShowFeedbackForm(false);
  };
  return (
    <>
      <header>
        <h1>Dettol Soap</h1>
        <button onClick={() => setShowFeedbackForm(true)}>Give Feedback</button>
      </header>

      {showFeedbackForm && (
        <div className={styles.FeedbackModel}>
          <div className={styles.FeedbackForm}>
            <h2>Feedback Form</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">
                Your Name:
                <input
                  type="text"
                  value={formValue.author}
                  onChange={(e) => {
                    setFormValue({ ...formValue, author: e.target.value });
                  }}
                />
                {error.name && (
                  <span className={styles.error}>{error.name}</span>
                )}
              </label>
              <br />
              <label htmlFor="ratting">
                Ratting:
                <select
                  value={formValue.rating}
                  onChange={(e) =>
                    setFormValue({ ...formValue, rating: e.target.value })
                  }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
              <label htmlFor="comment">
                Comment:
                <textarea
                  value={formValue.comment}
                  onChange={(e) =>
                    setFormValue({ ...formValue, comment: e.target.value })
                  }
                />
              </label>
              <button type="submit" className={styles.btnSubmit}>
                submit
              </button>
            </form>
            <button
              className={styles.btnClose}
              onClick={() => setShowFeedbackForm(false)}
            >
              x
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackForm;
