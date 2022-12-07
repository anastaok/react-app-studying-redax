import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";

import { commentCreate } from "../redux/actions/commentsAction";
import { commentsLoad } from "../redux/actions/commentsLoadAction";

import SingleComment from "./SingleComment";

function Comments() {
  const [textComment, setTextComment] = useState("");

  const comments = useSelector(
    ({ commentsReducer }) => commentsReducer.comments
  );
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
  };

  useEffect(() => {
    dispatch(commentsLoad());
  }, [dispatch]);

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-items-create">
        <input
          type="text"
          value={textComment}
          onChange={handleInput}
          placeholder="Write your comment..."
        />
        <input type="submit" hidden />
      </form>
      {!!comments.length &&
        comments.map((res) => <SingleComment key={res.id} data={res} />)}
    </div>
  );
}

export default Comments;
