# AI Voice-Over Website Payment Gateway Documentation

## Overview
This directory contains the implementation for integrating a payment gateway into the AI Voice-Over Website. The payment system allows users to subscribe for premium voice options.

## Payment Gateway
The payment gateway is implemented using Stripe. It handles the following functionalities:
- User subscription management
- Payment processing for premium voice features

## Setup Instructions
1. **Install Dependencies**
   Navigate to the payment directory and install the required packages:
   ```
   npm install
   ```

2. **Configuration**
   Create a `.env` file in the payment directory and add your Stripe API keys:
   ```
   STRIPE_SECRET_KEY=your_secret_key
   STRIPE_PUBLIC_KEY=your_public_key
   ```

3. **Usage**
   Import the payment gateway functions in your application where payment processing is required. You can use the functions to create subscriptions and handle payments.

## API Endpoints
The payment gateway exposes several endpoints for managing payments. Ensure to secure these endpoints appropriately.

## Testing
Make sure to test the payment integration in a safe environment using Stripe's test mode before going live.

## Additional Resources
- [Stripe Documentation](https://stripe.com/docs)
- [Node.js Stripe Library](https://github.com/stripe/stripe-node)

## License
This project is licensed under the MIT License.