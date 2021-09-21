function getPrivateNumber(userName, userBirthDay) { //유저 이름, 생년월일(string) 값을 받아 고유 숫자를 return함
  const nameAscii = userName.charCodeAt();
  const BirthDayNum = parseInt(userBirthDay);
  const privateNumber = nameAscii + BirthDayNum;

  return privateNumber;
}
export function findCustomStar(xmlData, userName, userBirthDay) {
  const privateNumber = getPrivateNumber(userName, userBirthDay);
  console.log(xmlData.table.tbody);
  console.log(privateNumber);
}

