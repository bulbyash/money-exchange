// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	var result = {H:0, Q:0, D:0, N:0, P:0};
    
    if (currency <= 0) {
        return {};
	} else if (currency >= 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}; 
	} else {
        
        //do exchange
        var exchangeCurrency = Math.floor(currency/50);
		result.H = exchangeCurrency;
        
        var remCurrency = currency % 50;
		
	    exchangeCurrency = Math.floor(remCurrency / 25);
		result.Q = exchangeCurrency;
		remCurrency %= 25;
				
		exchangeCurrency = Math.floor(remCurrency/10);
		result.D = exchangeCurrency;
		remCurrency %= 10;
		
		exchangeCurrency = Math.floor(remCurrency/5);
		result.N = exchangeCurrency;
		remCurrency %= 5;
		
		result.P = remCurrency;

		for (let key in result) {
			if (result[key] === 0) {
				delete result[key];
			}
		}
		
		return result;
	}
}
