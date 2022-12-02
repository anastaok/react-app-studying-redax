import { useDispatch, useSelector } from "react-redux";
import { inputText } from "../redux/actions/inputTitleAction";

const Title = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => {
    const { inputReducer } = state;
    return inputReducer.text;
  });

  const handleChange = (e) => {
    dispatch(inputText(e.target.value));
  };

  return (
    <div className="cart-title">
      <div className="cart-title-top">
        <input type="text" onChange={handleChange} />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Title;
