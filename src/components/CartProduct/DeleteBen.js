import Axios from "../../Utils/Axios";
const DeleteBen = ({ setWarningMessage, cartDispatch, id, index }) => {
  const handleRemove = (id, index) => {
    Axios.delete(`/carts/delete/${id}`)
      .then((res) => res.data)
      .then((data) => {
        cartDispatch({
          type: "REMOVE",
          payload: { index, data },
        });
        setWarningMessage(null);
      });
  };
  return (
    <div className="close col-md-1 my-3">
      <button className="border-0" onClick={() => handleRemove(id, index)}>
        <i className="fa fa-close link-danger"></i>
      </button>
    </div>
  );
};

export default DeleteBen;
