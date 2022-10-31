function kdrama(num){
  if (num == 1){
    return "Reply 1988";
  }
  else if (num == 2){
    return "Hospital Playlist";
  }
  else if (num == 3){
    return "Twenty-Five Twenty-One";
  }
  else {
      return "There are only 3 K-drama recommendations, and they are (maybe) loved equally!";
  }
}

console.log(kdrama(1));
console.log(kdrama(2));
console.log(kdrama(3));
console.log(kdrama("best"));

alert("Jayine's top K-drama recommendations")
