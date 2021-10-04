//1.anchor() :return the html element and sets the text to the anchar 
let str="Revanth";
let str1=str.anchor()
console.log(str1);// output-<a name="undefined">Revanth</a>

//2.big() :return the big tag and text enterd inside the big tag 
let str2="Revanth";
let str3=str2.big();
console.log(str3);// output-<big>Revanth</big>

//3.blink() :return the html blink tag 
let str4="Revanth";
let str5=str4.blink();
console.log(str5);// output-<blink>Revanth</blink>

//4.bold() :return the html blink tag 
let str6="Revanth";
let str7=str6.bold();
console.log(str7);// output-<b>Revanth</b>

//5.charAt() :return the charecter of string
let str8="Revanth";
let str9=str8.charAt(4);
console.log(str9);// output-n


//6.charCodeAt() :return the specific number
let str10="Revanth";
let str11=str10.charCodeAt();
console.log(str11);// output-82


//7.codePointAt() :return the specific number
let str12="Revanth";
let str13=str12.codePointAt();
console.log(str13);// output-82


//8.concat() :merging two strings
let str14="Revanth";
let str15="kumar";
let str16=str14.concat(str15);
console.log(str16);// output-Revanthkumar


//9.fixed() :return tt tag
let str17="Revanth";
let str18=str17.fixed();
console.log(str18);// output-<tt>Revanth</tt>


//10.fontcolor() :set the attribute of font and color
let str19="Revanth";
let str20=str19.fontcolor("red");
console.log(str20);// output-<font color="red">Revanth</font>


//11.fontsize() :set the attribute of font and size
let str21="Revanth";
let str22=str21.fontsize(10);
console.log(str22);// output-<font size="10">Revanth</font>


//12.includes() :check whethar the given number is there or not
let str23="Revanth kumar serching for job";
let str24=str23.includes("job");
console.log(str24);// output-true


//13.indexOf() :it return the index of char value
let str25="Revanth kumar serching for job";
let str26=str25.indexOf("c");
console.log(str26);// output-17


//14.italics() :it return li tag in html
let str27="Revanth";
let str28=str27.italics();
console.log(str28);// output-<i>Revanth</i>

//15.lastIndexOf()method :used toprinting last index=========================
let phonesName="Revanth";
let a=phonesName.lastIndexOf("h");
console.log(a);// output-6

//16.length()method :used returns the lennght=========================
let phonesName1="Revanth";
let a1=phonesName1.length;
console.log(a1);// output-7


//17.link()method :HTML element and sets the href attribute value=========================
let phonesName2="Revanth";
let a2=phonesName2.link("/hhdhdh");
console.log(a2);// output-<a href="/hhhhdhd">Revanth</a>


//18.localeCompare()method :it will check both strings if is two are same prints 0 ,========================
let phonesName3="aevanth";   //if starts with first print -1,if starts with first  print 1,means a came first
let phonesName4="kevanth";
let a3=phonesName3.localeCompare(phonesName4);
console.log(a3);// output-1


//19.search() :serach the string return the index/value=========================
let phonesName5="Revanth kumar";
let a4=phonesName5.search("v");
console.log(a4);// output-2


//20.substring()method :it is similar to the slice but it not take negitive values=========================
let phonesName6="Revanth";
let a5=phonesName6.substring(2,6);
console.log(a5);// output-vant


//21.substr()method :it is similar to the slice but it prints second parameter lenght========================
let phonesName7="Revanth";
let a6=phonesName7.substr(2,4);
console.log(a6);// output-vant

//22.replace()method :it is replace the specific word========================
let phonesName8="welcome tio the jspiders";
let a7=phonesName8.replace("jspiders","mits");
console.log(a7);// output-welcome tio the mits

//23.toLocaleUpperCase()method :converting to the uppperscase========================
let phonesName9="Revanth";
let a8=phonesName9.toLocaleUpperCase();
console.log(a8);// output-REVANTH


//24.toLowerCase()method :to converting tho the lowercase========================
let phonesName10="REVANTH";
let a9=phonesName10.toLowerCase();
console.log(a9);// output-revanth


//25.concat()method :to concating the two strings========================
let phonesName11="Revanth";
let phonesName12="Sake";
let a10=phonesName11.concat(phonesName12);
console.log(a10);// output-RevanthSake

//26.trim()method :removes the white spaces========================
let phonesName13="      Revanth          ";
let a11=phonesName13.trim();
console.log(a11);// output-Revanth

//27.charAt()method :removes the white spaces========================
let phonesName14="REVANTH";
let a12=phonesName14.charAt(0);
console.log(a12);// output-R


//28.charCodeAt()method :it will print unicode values======================
let phonesName15="REVANTH";
let a13=phonesName15.charCodeAt(0);
console.log(a13);// output-82


//29.sup()method :it will prints the html tage sup=====================
let phonesName16="REVANTH";
let a14=phonesName16.sup();
console.log(a14);// output-<sup>REVANTH</sup>


//30.sub()method :it will prints the html tage sub=====================
let phonesName17="REVANTH";
let a15=phonesName17.sub();
console.log(a15);// output-<sub>REVANTH</sub>


//31.startsWith()method :it is check specifice string true /not=====================
let phonesName18="jello REVANTH";
let a16=phonesName18.startsWith("jello");
console.log(a16);// output-true


//32.sub()method :it will prints the html tage samll=====================
let phonesName19="jello REVANTH";
let a17=phonesName19.small();
console.log(a17);// output-<small>jello REVANTH</small>


//33.sub()method :it will prints the html tage samll=====================
let phonesName20="hey hello he";
let a18=phonesName20.match("he");
console.log(a18);// output-[ 'jello', index: 0, input: 'jello REVANTH', groups: undefined ]









