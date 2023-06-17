import { useNavigate } from "react-router-dom";
import { useModal } from "../../context/modalContext";
import "./Modal.css";
export const Modal = () => {
  const { showModal, setShowModal } = useModal();
  const Navigate = useNavigate();
  return (
    showModal && (
      <div className="checkout-modal">
        <div className="modal-close" onClick={() => setShowModal(false)}>
          <p>&times;</p>
        </div>
        <div className="modall-content">
          <h2>Checkout</h2>
          <>
            <p>channaveer</p>
            <p>Adress: BTM 2nd Stage Bangalore</p>
            <p>PinCode: 560067</p>
          </>
          <button className="cart-btn">Place Order</button>
        </div>
      </div>
    )
  );
};
