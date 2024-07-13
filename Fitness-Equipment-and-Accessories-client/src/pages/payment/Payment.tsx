import { useLocation } from "react-router-dom";

const Payment = () => {

  const { state } = useLocation();

  console.log(state);

  return <div>afdsa</div>;
};

export default Payment;
