import { useNavigate } from "react-router-dom";
import { useAddress } from "../../contexts/addressContext";
import "./OrderSuccess.css";
export const OrderSuccess = () => {
  const { address } = useAddress();
  const navigator = useNavigate();
  const { firstName, lastName, phoneNumber, deliveryAddress } = address;
  return (
    <div className="ordersuccess-container">
      <div className="ordersuccess-content">
        <h1>Order Successful!</h1>
        <hr />
        <p style={{ marginTop: "2rem" }}>
          order will be delivered to the below mentioned address in{" "}
          <strong>just 4 days!</strong>
        </p>
        <div className="delivery-address">
          <strong>Delivery Address</strong>
          <p>
            {firstName}&nbsp;{lastName}
          </p>
          <p>{phoneNumber}</p>
          <p>{deliveryAddress}.</p>
        </div>
        <button onClick={() => navigator("/")}>
          <strong>Continue shopping</strong>
        </button>
      </div>
    </div>
  );
};
