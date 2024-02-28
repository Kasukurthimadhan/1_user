//  Q1 Find all users who are interested in playing video games.

function interestedInPlayVideoGame(data){
    let user=[];
    for(let game in data){
        if(data[game].interests && data[game].interests.includes('Video Games')){
            user.push(game)
        }
    }
    return user
}

module.exports=interestedInPlayVideoGame;