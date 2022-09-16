var no = "454";
var givenNum = no;
var rev = 0;

while(no != 0){
    rev = (rev * 10) + (no % 10);
    no = parseInt(no / 10);
} 
   
    if ( givenNum == rev) {
        document.write("Palindrome Number");
    }
    else {
        document.write("Not a palindrome")
    }

