const expect = require('chai').expect;
const generateCustomerSalesMap = require('../salesmapcreater.js');

const salesData = [
	{
		customerId: 1,
		orderId: 1,
		total: 3
	},

	{
		customerId: 2,
		orderId: 1,
		total: 4
	}
];

const customerData = [
	{
		id: 1,
		name: 'moe'
	},

	{
		id: 2,
		name: 'larry'
	}
];

describe('generateCustomerSalesMap', () => {
	it('returns the correct number of sales for each customer', () => {
		expect(generateCustomerSalesMap(salesData, customerData)).to.eql({
			moe: 3,
			larry: 4
		});
	});

	it('has correct number of keys', () => {
		expect(
			Object.keys(generateCustomerSalesMap(salesData, customerData)).length
		).to.equal(customerData.length);
	});

	it('returns an object', () => {
		expect(generateCustomerSalesMap(salesData, customerData)).to.be.an(
			'object'
		);
	});

	it('does not alter the original salesdata', () => {
		tempSalesData = salesData.slice();

		generateCustomerSalesMap(salesData, customerData);

		expect(salesData).to.eql(tempSalesData);
	});

	it('does not alter the orginal customer array', () => {
		tempCustomerData = customerData.slice();
		generateCustomerSalesMap(salesData, customerData);

		expect(customerData).to.eql(tempCustomerData);
	});
});
