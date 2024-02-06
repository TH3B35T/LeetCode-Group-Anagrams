/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let anagrams = new Map()

    for( let s of strs){
        const sorted_word = s.split('').sort().join('')
        if(anagrams.has(sorted_word)){
            anagrams.get(sorted_word).push(s)
        }
         else {
            anagrams.set(sorted_word, [s]) 
         }
        
    }
    return Array.from(anagrams.values())
};
