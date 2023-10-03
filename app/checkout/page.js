import Form from './Form';

export const metadata = {
  title: 'Check out Page',
};

export default function CheckoutPage() {
  return (
    <>
      <div>CheckoutPage</div>
      <Form />
    </>
  );
}

//  Clicking on the Confirm Order button should empty the cart and navigate to the Thank You page
