var lengthOfLongestSubstring = function(s) {
    let globalCount = 1
    for(let i=0; i < s.length; i++){
        console.log(`s.length is ${s.length}`)
        const hashMap = {};
        let loopCount = 1;
        let rightCount = 1;
        let leftCount = 1;
        hashMap[s[i]]= true
        while(true){
            console.log(hashMap)
            if(i + rightCount > s.length-1 || hashMap[s[i + rightCount]] != undefined){console.log('Right failed on index ', i+rightCount);break}
            hashMap[s[i + rightCount]] = true
            console.log('right added for index ', i+rightCount)
            rightCount ++
            loopCount ++
        }
        while(true){
            console.log(hashMap)
            if(i -leftCount < 1 || hashMap[s[i -leftCount]] != undefined){console.log('Left failed on index ', i-leftCount);break}
            hashMap[s[i - leftCount]] = true
            console.log('left added on index ', i-leftCount)
            leftCount ++
            loopCount ++
        }
        console.log('line44', loopCount > globalCount, loopCount, globalCount)
        if(loopCount > globalCount){console.log('loopcount Swapped!'); globalCount = loopCount + 0}
        console.log(`I= ${i}    GlobalCount = ${globalCount}  Loopcount = ${loopCount}`)
    }
    return globalCount
};

console.log(lengthOfLongestSubstring("abcabcbb"))