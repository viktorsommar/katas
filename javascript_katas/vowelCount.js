function getCount(text) {
  const vowel = ['a','e','i','o','u']
  let vowelsCount = 0;
  
  for (let letter of text.toLowerCase()){
    if(vowel.includes(letter)){
      vowelsCount++
    }
  }
  
  console.log('The text contains $(vowelsCount) vowels')
  
  return vowelsCount;
}