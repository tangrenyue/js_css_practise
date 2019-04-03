//回文

const isPalindrome = string => {
    const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("")
    const stringCharacters = string // 过滤掉特殊符号
      .toLowerCase()
      .split("")
      .reduce(
        (characters, character) =>
        validCharacters.indexOf(character) > -1 ?
        characters.concat(character) :
        characters,
        []
      );
    return stringCharacters.join("") === stringCharacters.reverse().join("")