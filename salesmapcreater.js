function generateCustomerSalesMap(salesData, customerData) {
	return salesData.reduce(function(accumulator, sale) {

		let customerName = '';

		for (let x = 0; x < customerData.length; x++) {
			if (customerData[x].id === sale.customerId) {
				customerName = customerData[x].name;
			}
		}

		if (customerName in accumulator) {
			accumulator[customerName] += sale.total;
			return accumulator;
		} else {
			accumulator[customerName] = sale.total;
			return accumulator;
		}
	}, {});
}

module.exports = generateCustomerSalesMap;
