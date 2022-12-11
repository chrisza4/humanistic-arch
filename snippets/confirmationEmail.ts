interface ConfirmableDocument {
  amount: number;
  time: Date;
  no: string;
  type: "Order" | "Payment";
  shippingDate?: Date;
  receiptLink: string;
}

function getConfirmationEmail(doc: ConfirmableDocument) {
  let result = `
Dear Mr. Chris

${doc.type} Confirmed

We have received ${doc.type} of ${doc.amount} at ${doc.time.format()}

Your ${doc.type} number is #${doc.no}

Thank you for your ${doc.type}.
`;
  if (doc.type === "Order") {
    result += `Shipping Date: ${doc.shippingDate.format()}`;
  }
  if (doc.type === "Payment") {
    result += `Link to receipt: ${doc.receiptLink}`;
  }
  result += `
Regards,
JohnDoeCo
`;
  return result;
}

function getEmailOpenningPhrase(name) {
  return `Dear ${name}`;
}

function getEmailClosingPhrase() {
  return `
Regards, 
JohnDoeCoe
`;
}

function getOrderConfirmationEmail(order) {
  return `
${getEmailOpenningPhrase(order.owner)}

We have received order of ${order.amount} at ${order.time.format()}

Your order number is #${order.no}

Thank you for your order.

${getEmailClosingPhrase()}
`;
}

function getPaymentConfirmationEmail(payment) {
  return `
  ${getEmailOpenningPhrase(order.owner)}

Payment Confirmed

We have received payment of ${payment.amount} at ${payment.time.format()}

Your payment number is #${payment.no}

Thank you for your paymment.

${getEmailClosingPhrase()}
`;
}
