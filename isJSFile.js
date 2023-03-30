const fileName = 'myPic.png';

function isJavaScriptFile(fileName){
    if(fileName.endsWith('.js')){
        return true;
    } else {
        return false;
    }
}

const result = isJavaScriptFile(fileName);
console.log(result);