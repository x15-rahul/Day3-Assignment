const abul = {
    name: 'abul',
    friendName: 'babul'
};

const babul = {
    name: 'babul',
    friendName: 'abul'
};

function isBestFriend(name1, name2){
    if(name1.friendName === name2.name && name2.friendName === name1.name){
        return true;
    } else {
        return false;
    }
}

const isFriend = isBestFriend(abul, babul);
console.log(isFriend);