import React, { useState } from 'react';
import './AccountOrdersDisplay.css';
import AccountOrder from '../../Components/AccountOrder/AccountOrder';

function AccountOrdersDisplay() {
  const [orders, setOrders] = useState([
    { id: 6524301, date: '15/02/2022', contactName: 'John Doe', phoneNumber: '1234567890', email: 'johndoe@example.com', address: '123 Main St', paymentMethod: 'Cash on Delivery', shippingFees: 0, totalPaid: 100 },
    { id: 6524302, date: '16/02/2022', contactName: 'Jane Smith', phoneNumber: '0987654321', email: 'janesmith@example.com', address: '456 Elm St', paymentMethod: 'Credit Card', shippingFees: 10, totalPaid: 150 },
    { id: 652432302, date: '12/02/1997', contactName: 'adam abderrahmani', phoneNumber: '0752745215', email: 'adamabd@example.com', address: '456 Elm St', paymentMethod: 'Cash', shippingFees: 50, totalPaid: 250 },
  ]);

  const removeOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  return (
    <div className="account-orders-display-container">
      {orders.map(order => (
        <AccountOrder
          key={order.id}
          order={order}
          removeOrder={removeOrder}
        />
      ))}
    </div>
  );
}

export default AccountOrdersDisplay;
