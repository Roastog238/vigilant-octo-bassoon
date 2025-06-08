function isTrue(str1,str2){
    
    if(str1.length != str2.length){
        return false;}
        
        let letters1={};
       for(let char of str1){
        letters1[char]=(letters1[char] || 0)+1;
       }
       for(let char of str2){
        if(!letters1[char])
            return false;
               letters1[char]--
       }
       
     
       return true;
    }
isTrue("abcd","efgh");
isTrue("dcba","abcd");