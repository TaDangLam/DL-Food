import { PayPalButton } from "react-paypal-button-v2";

const Paypal2 = ({ amount }) => {
    return ( 
        <PayPalButton
            amount={amount}
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details, data) => {
            alert("Transaction completed by " + details.payer.name.given_name);

            // OPTIONAL: Call your server to save the transaction
            return fetch("/paypal-transaction-complete", {
                method: "post",
                body: JSON.stringify({
                orderId: data.orderID
                })
            });
            }}
            options={{
                clientId: `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}`
            }}
      />
    );
}
 
export default Paypal2;