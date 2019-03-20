// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
        let coins = {
            // H:'H',
            // Q:'Q',
            // D:'D',
            // N:'N',
            // P:'P'

        };
    
        if (currency>10000) {
            return {error: "You are rich, my friend! We don't have so much coins for exchange"};
        }
        
        if (currency>=50) {
          
          coins.H = Math.floor(currency/50);     
          currency = currency - (coins.H*50); 
        }
    
        if (currency>=25){
          
          coins.Q = Math.floor(currency/25);
          currency = currency - (coins.Q*25);  
        }
    
        if (currency>=10){
          coins.D = Math.floor(currency/10); 
          currency = currency - (coins.D*10); 
        }
    
        if (currency>=5){
          coins.N = Math.floor(currency/5);
          currency = currency - (coins.N*5);  
        }
    
        if (currency>=1) {
          coins.P = Math.floor(currency/1);
          currency = currency - (coins.P*5);  
        }
    
        return coins;

    
      }
    
    

    

    



