let red_output = document.getElementById('output');
var nullstr = " ";

document.querySelector("#btn").onclick = function() {
    let StrMassVal = new Array();
    let NumMassVal = new Array();
    const ResMass = new Map();

    var str = String(document.getElementById('input').value);
    var stringMass = str.split("-");
    var len = stringMass.length;
    var cntStr = 0;
    var cntNum = 0;
    for (var i = 0; i < len; i++) {
        var item = stringMass[i].trimStart().trimEnd();
        if(isNaN(item) == false) {
            NumMassVal.push(item);
            cntNum++;
        } else {
        StrMassVal.push(item);
        cntStr++;
        }
    }

    StrMassVal.sort();
    NumMassVal.sort(function (a, b) {
        return a - b;
    });

    for(var i = 0; i < cntStr; i++) {
        var keyStr = String('a'+String(i+1));
        ResMass.set(keyStr, StrMassVal[i]);
    }
    for(var i = 0; i < cntNum; i++) {
        var keyNum = String('n'+String(i+1));
        ResMass.set(keyNum, NumMassVal[i]);
    }

    let total__output = document.getElementById('nobox__output');
    for (let key of ResMass.keys()) {
    total__output.innerHTML += '<p><input type="button" id="btn_out" value="'+key 
        + ' ' + ResMass.get(key)
        +'" onclick="red_output.innerHTML += this.value.slice(3) + nullstr;"></input></p> ';
    }
}