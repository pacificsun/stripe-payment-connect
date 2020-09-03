const stripe = require('stripe')('sk_test_6gXaKAsTbZTtk2HfiWTqjkrd');

module.exports =(email) =>{
const account = await stripe.accounts.create({
  type: 'express',
  country: 'US',
  email,
  capabilities: {
    card_payments: { requested: true },
    transfers: { requested: true },
  },
});
return account;
}