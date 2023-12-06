const BigCommerce = require('node-bigcommerce');

exports.handler = async (event, context) => {
    const bigCommerce = new BigCommerce({
        clientId: process.env.BIGCOMMERCE_CLIENT_ID,
        secret: process.env.BIGCOMMERCE_CLIENT_SECRET,
        responseType: 'json',
    });
    
    bigCommerce.get('/customers')
        .then(data => {
            // Catch any errors, or handle the data returned
            console.log(data);
        });
};
