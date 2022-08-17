module.exports = function toReadable (number) {
  let str = String(number);
  let n = str.length;  
    for (let i = 0; i < n; i++) {
    if (n === 1) {
        return oneItem(str[0]);
     } else if(n === 2) {
        if(str[0] === '1') {
            return twoItem1(str[1]);
         } else if(str[0] !== '1' && str[1] === '0') {
             return twoItem2(str[0]);
         } else if(str[0] !== '1' && str[1] !== '0') {
            return `${twoItem2(str[0])} ${oneItem(str[1])}`
         }
     } else if (n === 3) {        
        if(str[1] === '0' && str[2] === '0') {
            return `${oneItem(str[0])} hundred`;
         } else if(str[1] === '0' && str[2] !== '0') {
            return `${oneItem(str[0])} hundred ${oneItem(str[2])}`
         } else if(str[1] === '1') {
             return `${oneItem(str[0])} hundred ${twoItem1(str[2])}`
         } else if(str[1] !== '1' && str[2] === '0') {
            return `${oneItem(str[0])} hundred ${twoItem2(str[1])}`
         } else if(str[1] !== '1' && str[2] !== '0') {
            return `${oneItem(str[0])} hundred ${twoItem2(str[1])} ${oneItem(str[2])}`
         } 
     }       
  }  
 }


function oneItem (item) {
    switch (item) {
        case '0': return 'zero';
            break;
        case '1': return 'one';
            break;
        case '2': return 'two';
            break;
        case '3': return 'three';
            break;
        case '4': return 'four';
            break;
        case '5': return 'five';
            break;
        case '6': return 'six';
            break;
        case '7': return 'seven';
            break;
        case '8': return 'eight';
            break;
        case '9': return 'nine';
            break;
    }
}

function twoItem1 (item) {
    switch(item) {
        case '0': return 'ten';
        break;
        case '1': return 'eleven';
        break;
        case '2': return 'twelve';
        break;
        case '3': return 'thirteen';
        break;
        case '4': return 'fourteen';
        break;
        case '5': return 'fifteen';
        break;
        case '6': return 'sixteen';
        break;
        case '7': return 'seventeen';
        break;
        case '8': return 'eighteen';
        break;
        case '9':  return 'nineteen';
        break;
    }
}

function twoItem2 (item) {
    switch(item) {
        case '2': return 'twenty';
        break;
        case '3': return 'thirty';
        break;
        case '4': return 'forty';
        break;
        case '5': return 'fifty';
        break;
        case '6': return 'sixty'
        break;
        case '7': return 'seventy';
        break;
        case '8': return 'eighty';
        break;
        case '9':  return 'ninety';
        break;
    }
}


