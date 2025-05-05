I have recently worked in delivering the [Hosted Payment Page](https://www.checkout.com/docs/payments/accept-payments/accept-a-payment-on-a-hosted-page) product in Checkout.com on which is a front-end payment page that merchants can directly integrated with and redirect their customer to complete the payments. It’s mainly used by online businesses that don’t want to build their own checkout UI and integrate with [Checkout APIs](https://api-reference.checkout.com/#tag/Payments)

The Hosted Payment Page (HPP) requires both component testing and UI testing because it's a hybrid product and it has backend APIs (to create the payment) and a front-end UI that handles the actual payment flow ([here](https://pay.sandbox.checkout.com/examples/docs-example) is a demo example)

For the component testing side, our focus was on validating the HPP session APIs. For example, when creating a payment session, we're checking that all required fields (like `amount`, `currency`, `success_url`, and `cancel_url`) are validated and handled properly. We're also test edge cases such as invalid amounts, unsupported currencies, and expired session handling.

We are using [Mocha](https://mochajs.org/) and [SuperTest](https://github.com/ladjs/supertest) and we send HTTP requests to the API endpoints and assert that the response structure matches the api spec, the HTTP statuses and that the session lifecycle behaves as expected (e.g., a session can’t be reused after it's completed).
Webhook callbacks and testing (e.g., payment_approved or payment_failed events) are also part of the backend tests.

In regards to the UI testing, we use Cypress to automate full end-to-end payment flows on the HPP.
We're testing different cases which returns different payment methods (credit cards, wallets like Apple Pay or Google Pay, and local methods), and verifying the complete flow from entering payment details to the completion of the payment. We also test form validations—such as invalid card numbers, expiry dates, and CVC errors—to ensure that the correct error messages are displayed. We also test responsiveness to confirm that the HPP works well across different screen sizes (desktop, tablet, mobile).

The framework is structured to test Layer (test cases), service layer (interaction between test cases and UI). We're using POM so that we store all the UI element locators in sibgle place. We're following more best practices, like using stable locator or implicit wait, separating the test data from the test cases and Cypress dashboard to run the tests in parallel
