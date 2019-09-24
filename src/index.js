const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {
    // write your solution here

var bl=9;
var str='';
var str1='';
var n=0;

var end=expr.length;
while(n<end) {
for (var i = n; i < (n+10); i++) {
   str+=expr[i];
  
     }
      
           switch (str) {
               case '0000001011':str1+='a'
               break;
               case '0011101010':str1+='b';
               break;
               case '0011101110':str1+='c';
               break;

               case '0000111010':str1+='d';
               break;
               case '0000000010':str1+='e';       
               break;
               case '0010101110':str1+='f';       
               break;
               case '0000111110':str1+='g';       
               break;
               case '0010101010':str1+='h';       
               break;
               case '0000001010':str1+='i';       
               break;
               case '0010111111':str1+='j';       
               break;  
               case '0000111011':str1+='k';       
               break;  
               case '0010111010':str1+='l';       
               break;
               case '0000001111':str1+='m';       
               break;  
               case '0000001110':str1+='n';
              break;
              case '0000111111':str1+='o';
              break;
              case '0010111110':str1+='p';
              break;
              case '0011111011':str1+='q';
              break;
              case '0000101110':str1+='r';
              break;
              case '0000101010':str1+='s';
              break;
              case '0000000011':str1+='t';
              break;
              case '0000101011':str1+='u';
              break;
              case '0010101011':str1+='v';
              break;
              case '0000101111':str1+='w';
              break;
              case '0011101011':str1+='x';
              break;

              case '0011101111':str1+= 'y';
              break;
              case '0011111010':str1+='z';
              break;
              case '**********':str1+=' ';
              break;
              case '1011111111':str1+='1';
              break;
              case '1010111111':str1+='2';
              break;
              case '1010101111':str1+='3';
              break;
              case '1010101011':str1+='4';
              break;
              case '1010101010':str1+='5';
              break;
              case '1110101010':str1+='6';
              break;
              case '1111101010':str1+='7';
              break;
              case '1111111010':str1+='8';
              break;
              case '1111111110':str1+='9';
              break; 
              case '1111111111':str1+='0';
              break;

           }
       str=''
       n+=10;
           
 }        

return str1

}

module.exports = {
    decode
}