//  Q3 Find all users with masters Degree

function usersWithMastersDegree(data){
    try {
        if(!data || typeof(data) !=='object'){
            throw new Error("Invalid data provided.provided the correct data")
        }
        let masterDegree=[];
        for(let user in data){
            if(data[user].qualification.includes('Masters')){
                masterDegree.push(user)
            }
        }
        return masterDegree;
    } catch (error) {
        console.error("An error occurred:",error)
    }
}

module.exports=usersWithMastersDegree;