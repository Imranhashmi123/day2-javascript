// 1.
var challenge = '30 Days of JavaScript';
// 2.
console.log(challenge);
// 3.
console.log(challenge.length);
// 4.
challenge= challenge.toUpperCase();
console.log(challenge);
// 5.
challenge = challenge.toLowerCase();
console.log(challenge);
// 6.
console.log(challenge.substring(3));
// 7.
console.log(challenge.slice(3,21));
// 8.
console.log(challenge.includes('script'));
// 9.
console.log(challenge.split(""));
// 10.
console.log(challenge.split(" "));
// 11.
var socialMedia = "Facebook Google Microsoft Apple IBM Oracle Amazon";
console.log(socialMedia.split(" "));
// 12.
let phy = "30 Days of JavaScript";
console.log(challenge.replace('javaScript', 'python'));
// 13.
let char = "30 Days of JavaScript";
console.log(char.charAt(15));
// 14.
let a = "30 Days of JavaScript";
console.log(a.lastIndexOf('J'));
// 15.
let firstindex = "30 Days of JavaScript";
console.log(firstindex.indexOf('a'));
// 16.
let lastindex = "30 Days of JavaScript";
console.log(lastindex.lastIndexOf('a'));
// 17.
let firstoccurence = "You cannot end a sentence with because because becauseis a conjunction";
console.log(firstoccurence.indexOf('because'));
// 18.
let lastoccurence = "You cannot end a sentence with because because becauseis a conjunction";
console.log(lastoccurence.lastIndexOf('because'));
// 19.
let ser = "You cannot end a sentence with because because because is a conjunction";
console.log(ser.search('because'));
// 20.
let trm = ' 30 Days Of JavaScript        ';
console.log(trm.length);
console.log(trm.trim());
console.log(trm.trim().length);
// 21.
let start = '30 Days of JavaScript';
console.log(start.startsWith('3'));
// 22.
let end= '30 Days of JavaScript';
console.log(end.endsWith('t'));
// 23.
let mth= '30 Days of JavaScript';
console.log(mth.match(/a/g));
// 24.
let first = "30 Days of" , second="JavaScript";
console.log(first.concat(second));
// 25.
let rpt= '30 Days of JavaScript';
console.log(rpt.repeat(2));



// Exercise: Level 2
// 1.
let quote = 
"The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another";
console.log(quote);
// 2.
let motherteresa = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(motherteresa);
// 3.
console.log(typeof '10' === typeof 10);
console.log(typeof Number('10') === typeof 10);
// 4.
console.log(parseFloat('9') === 10);
console.log(Math.ceil(parseFloat('9.8')) === 10);
// 5.
let language = 'python', notlanguage = 'jargon';
console.log(language.includes('on') && notlanguage.includes('on'));
// 6.
let check = 'I hope this course is not full of jargon';
console.log(check.includes('jargon'));
// 7.
console.log(Math.floor(Math.random()*101));
// 8.
console.log(Math.floor(Math.random()*51)+50);
// 9.
console.log(Math.floor(Math.random()*256));
// 10.
let lang = "JavaScript";
console.log(lang.charAt(Math.floor(Math.random()* lang.length)));
// 11.
let pattern = '1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125';
console.log(pattern);
// 12.
let slc = "'You cannot end a sentence with because because because is aconjunction'";
console.log(slc.substr(31,23));

// Exercises: Level 3
// 1.
var lve = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(lve.match(/love/gi));
console.log(lve.match(/love/gi).length);

// 2.
let bcz = "You cannot end a sentence with because because because is a conjunction";
console.log(bcz.match(/because/gi));
console.log(bcz.match(/because/gi).length);


// 3.
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;.
The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng
peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es
thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so
$the $resu@lt of &love& of tea&ching';

const cleanSentence = sentence.replace(/[^A-Za-z0-9?' ']/gim,'')
const mostAppearingWord = (str)=>{
    let words = str.split(' ');
    let uniqueWords = words.filter((word, i)=> word[i]);
    let resultCount = 0;
    let result = ' ';

    for (let i in uniqueWords){
        let count = 0;
        for (let j in words)if(word[j] == uniqueWords[i] )count++;
        if (resultCount < count){
            resultCount = count;
            result = uniqueWords[i];
        }
            
    }
    return result;
}

console.log(mostAppearingWord(cleanSentence));

// 4.
let salary = 5000;
let bonus = 10000;
let courses = 15000;

let annualSalary = 5000*12;
let annualCourses = 15000*12;
let anuualBonus = 10000*1;

let total = annualCourses + annualSalary + anuualBonus;
console.log("The total annual income is:" + total);