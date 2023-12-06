const BigCommerce = require('node-bigcommerce');

const handler = async function (event, context) {

    try {
        const bigCommerce = new BigCommerce({
            clientId: process.env.BIGCOMMERCE_CLIENT_ID,
            secret: process.env.BIGCOMMERCE_CLIENT_SECRET,
            responseType: 'json',
        });
        
        const data = await bigCommerce.get('/customers');
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        };
    }
};

module.exports = { handler }