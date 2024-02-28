// Q2 Find all users staying in Germany.

function stayingInGermany(data){
    try {
        if(!data || typeof(data) !=='object'){
            throw new error("Invalid provided data.Please provide a valid object")
        }
        let germanPeople=[];
    for(let user in data){
        if(data[user].nationality.includes('Germany')){
            germanPeople.push(user)
        }
    }
    return germanPeople;
    } catch (error) {
        console.error("An error occuurd:",error)
    }
}

module.exports=stayingInGermany;