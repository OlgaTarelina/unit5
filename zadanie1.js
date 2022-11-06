let array = [2, 3, 4, 5, 6, 7, 8, 9, 1];
function getzn(array) {
  for (let i = 0; i < array.length; i++) {
    let a = array[i];
    if(a % 2)
      console.log(a);
  }
}
getzn(array);
function getznac(array) {
  for (let i = 0; i < array.length; i++) {
    let a = array[i];
    if(a % 2==0)
      console.log(a);
  }
}
getznac(array);