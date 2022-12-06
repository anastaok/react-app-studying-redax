import { connect } from "react-redux";
import { incrementLikes, decrementLikes } from "../redux/actions/likesAction";

const Likes = (props) => {
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>{props.likes}&nbsp;❤</button>
      <button onClick={props.onDecrementLikes}>Dislike</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { likesReducer } = state;
  return {
    likes: likesReducer.likes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementLikes: () => dispatch(incrementLikes()),
    onDecrementLikes: () => dispatch(decrementLikes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
