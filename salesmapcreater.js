function generateCustomerSalesMap(salesData, customerData) {
	return salesData.reduce(function(accum, sale, index, arr) {

		let customerName = '';

		for (let x = 0; x < customerData.length; x++) {
			if (customerData[x].id === sale.customerId) {
				customerName = customerData[x].name;
			}
		}

		if (customerName in accum) {
			accum[customerName] += sale.total;
			return accum;
		} else {
			accum[customerName] = sale.total;
			return accum;
		}
	}, {});
}

module.exports = generateCustomerSalesMap;
