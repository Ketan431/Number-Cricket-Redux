
function Coin() {
    var x = (Math.floor(Math.random() * 2) === 0);
    if(x){
    	flip("heads");
    }else{
        flip("tails");
    }
}

function flip(coin) {
    console.log(coin);
};

export default Coin
