'use client'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Lam = () => {
    return ( 
        <div>
            <PayPalScriptProvider options={{ clientId: "test" }}>
                <PayPalButtons style={{ layout: "horizontal" }} />
            </PayPalScriptProvider>
        </div>
     );
}
 
export default Lam;