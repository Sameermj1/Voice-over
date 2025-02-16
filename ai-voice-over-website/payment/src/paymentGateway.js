const stripe = require('stripe')('your_stripe_secret_key');

const createCheckoutSession = async (req, res) => {
    const { priceId } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${req.headers.origin}/success`,
            cancel_url: `${req.headers.origin}/cancel`,
        });

        res.json({ id: session.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const webhook = async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const endpointSecret = 'your_endpoint_secret';

    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
            const session = event.data.object;
            // Handle successful payment here
            break;
        // Add more event types as needed
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    res.json({ received: true });
};

module.exports = {
    createCheckoutSession,
    webhook,
};