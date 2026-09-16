//Green 2.1: write just enough code to get the test to pass
function createPortfolio (){
  return new Map();
}

//Green 2.2: write just enough code to get the test to pass
function checkisEmpty(portfolio){
    if (portfolio.size===0){
        //blue: add print statements for debugging/visual purposes
        console.log("Portfolio is empty");
        return true
    }
    //blue: add print statements for debugging/visual purposes
    console.log("Portfolio is  not empty");
    return false
}

//Green 2.3 write just enough code to get the tests to pass
function makePurchase(portfolio, tick, shares){
    if (shares<1){
        //Blue: add a print statement so people know what went wrong
        console.log("Please insert a positive number of shares.")
        return -1;
    }
    if (checkisEmpty(portfolio)==true){
        portfolio.set(tick, shares);
        return portfolio;
    }
    else if (checkisEmpty(portfolio)==false){
        if (!portfolio.has(tick)) {
            portfolio.set(tick, shares);
            } else {
                portfolio.set(tick, portfolio.get(tick) + shares);
                return portfolio;
            }
        }
    }

//Green 2.4 write just enough code to get the tests to pass
function makeSale(portfolio, tick, shares){
    if (!portfolio.has(tick)) {
        //refactoring
            console.log("Sale unsuccessful, trying to sell nonexistent shares.");
            return portfolio;
            } else {
                //Green 2.8 write just enought to make it pass
                if(portfolio.get(tick)>=shares){
                    portfolio.set(tick, portfolio.get(tick) - shares);
                    //refactoring
                    console.log("Sale successful")
                    //Green 2.6 write just enough to make the tests pass
                    if (portfolio.get(tick)===0){
                        portfolio.delete(tick)
                    }
                    return portfolio;
                }
                else{
                    throw new Error ("Not possible to sell this number of shares");
                }
            }
        }

//Green 2.5 write just enough code to make the tests pass
function countTickers(portfolio){
    return portfolio.size;
}

//Green 2.7 write just enough code to make the tests pass
function countShares(portfolio, tick){
    if (!portfolio.has(tick)){
        return 0;
    }
    return portfolio.get(tick);
}



exports.createPortfolio = createPortfolio;
exports.checkisEmpty = checkisEmpty;
exports.makePurchase = makePurchase;
exports.makeSale = makeSale;
exports.countTickers = countTickers;
exports.countShares = countShares;