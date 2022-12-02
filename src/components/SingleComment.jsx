import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { commentUpdate } from "../redux/actions/commentUpdate";
import { commentDelete } from "../redux/actions/commentDelete";

const SingleComment = ({ data }) => {
  const { text, id } = data;
  const dispatch = useDispatch();

  const [commentText, setCommentText] = useState("");
  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commentText, id));
  };
  const handleInput = (e) => {
    setCommentText(e.target.value);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id));
  };

  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div onClick={handleDelete} className="comments-item-delete">
        &times;
      </div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
};

export default SingleComment;
