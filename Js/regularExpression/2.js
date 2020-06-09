let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// MetaCharacter Symbols
re = /^h/i; //Must Start/Begin with 'h'. So Caret(^) signifies that.
re = /d$/i; //$ signifies Must End with.
re = /world$/i;
re = /fworld$/i; //Null
re = / world/i; //Space is fine as str also has space before world

//WE can also use both Caret & Dollar to Signify both Begining & Ending;
re = /^hello$/i; //Only matches if str='hello' Not 'hello world';

//Period(.) Signify that Any Character is accepted at that Postion. But 1 Period = Any 1 Character Only.
re =/^h.llo$/i; //So Our String Should Begin with 'h' followed by any Second Character. Ending 3 character should be 'llo';
// const str = 'hollo'; //matches
// const str = 'h1llo'; //matches
// const str = 'h%llo'; //matches
// const str = 'heelo'; //Doesn't match. Two Charcters.

//Asterik(*) Signify Wild Card. 0 or more Occurence of any Character at that postion
re = /h*llo/;

// Question(?) Signifies Optional. Gray&Grey are often used interchangeably. Place ? after Characters that are Optional.
re = /gra?e?y/i; //Input 'str' Can be gray/grey/gry


re = /gra?e?y?/i; //WE want 're' to be gray?/grey?/gry?. But Using ? this way makes y Optional. So only gr also matches.
//Escape Character. To treat ? as Literal, Use BackSlash
re = /gra?e?y\?/i;

// Brackets[] are used for Character Sets, Curly braces as quantifier, Parenthesis for grouping
re = /gr[ae]y/i; //Input accepted gray/grey. Not gry. Better than /gra?e?y/ as it doen't accept gry i.e. a/e is compulsary.

// Input String 
const str = 'gray';
console.log(re.exec(str));

function reTest(re, str){
    if(re.test(str)){
        console.log(`"${str}" Matches "${re.source}"`);
    } else{
        console.log(`"${str}" doesn't match "${re.source}"`);
    }
}




reTest(re, str);