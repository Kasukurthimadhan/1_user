//  Q4 Group users based on their Programming language mentioned in their designation.

function groupUserBasedOnTheirProgrammingLanguage(data){
    try {
        if(typeof(data) !=='object'){
            throw new Error("Invalid data is not object")
        }
        let group={};
    for(let user in data){
        let desgination=data[user].desgination.toLowerCase();
        let languageName='';
        if(desgination.includes('golang')){
            languageName='golang';
        }
        else if(desgination.includes('javascript')){
            languageName='javascript'
        }
        else if(desgination.includes('python')){
            languageName='python'
        }

        if(! group[languageName]){
            group[languageName]=[]
        }

        group[languageName].push(user)

    }
    return group
    } catch (error) {
        console.error("An error:",error)
    }
}

module.exports=groupUserBasedOnTheirProgrammingLanguage;