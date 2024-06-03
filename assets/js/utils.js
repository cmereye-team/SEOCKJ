const formatDate = (dateString) =>{
  let _date = new Date(dateString);
  if(
    _date.getTime() > Date.now() - 86400000*2
  ){
    if(Math.floor((Date.now() - _date.getTime())/1000/60/60)){
      return Math.floor((Date.now() - _date.getTime())/1000/60/60)+'小時前'
    }else{
      return '剛剛'
    }
  }else if(
    _date.getTime() > Date.now() - 86400000*7
  ){
    return Math.floor((Date.now() - _date.getTime())/1000/60/60/24)+'天前'
  }else{
    var date = new Date(dateString);  
    var year = date.getFullYear();  
    var month = ("0" + (date.getMonth() + 1)).slice(-2); 
    var day = ("0" + date.getDate()).slice(-2);  
    return year + "年" + month + "月" + day + "日";  
    }
}  

const toDateType = (dateString) =>{  
  var date = new Date(dateString);  
  var year = date.getFullYear();  
  var month = ("0" + (date.getMonth() + 1)).slice(-2); // getMonth() is zero-based  
  var day = ("0" + date.getDate()).slice(-2);  
  return year + "年" + month + "月" + day + "日";  
} 

export {
  formatDate,
  toDateType
}