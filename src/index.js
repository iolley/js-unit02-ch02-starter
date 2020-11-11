import _ from 'lodash';

const propertyData = {
  id: 1,
  propertyName: '1BR Japanese-style Private Room near Kyoto Station',
  propertyType: 'private',
  cancelPolicy: 'strict',
  roomNum: 1,
  bathroomNum: 1,
  priceInDollars: 50,
  host: {
    id: 1,
    firstName: 'Tom'
  }
}

function handleClick(e) {
  e.preventDefault();
  const mainEl = document.getElementById('main');
  /* 
    getDataを呼び出して、mainEl.innerHTMLを利用して、結果を出力します。
  */
}

function getData() {
  /* 
    fetchDataを呼び出して、戻ってきたデータのsuccessの値を元にresolveで物件データまたは、rejectでエラーメッセージを返す。
  */
}

function fetchData() {
  /* 
    lodashのrandom()を使って、80%の確率で正しいデータを返し、20%の確率でエラーを返すようにしましょう。
    またsetTimeoutを利用して、1秒待ってから結果を得るようにします。
  */
 let promise = new Promise(function(resolve, reject){
  return new Promise(true, false) => {
    true(1)
  }
  _.random(80% true, 20% false);{
   if(8%10 true);{ 
   }else(2%10 false);
   setTimeout( () => resolve ("done!"), 1000 );
 };
{ 
  const button1 = document.getElementById('button1');
  button1.addEventListener("click", handleClick);
}
// const promiseData = () => {
//   return new Promise(true, false) => {
//     true(1)
//   }
// }
//  _.random(80% true, 20% false);{
// }
// setTimeout( () => resolve ("done!"), 1000 );
