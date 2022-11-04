function signUpCheck(){

  let title = document.getElementById("title").value
  let info = document.getElementById("name").value
  let cont = document.getElementById("content").value
  let check = true;


  // 제목입력
  if(title==="") {
    document.getElementById("titleError").innerHTML="제목을 입력해주세요."
    check = false
  }else{
    document.getElementById("titleError").innerHTML=""
  }

  // 이름확인
  if(name===""){
    document.getElementById("nameError").innerHTML="이름을 입력해주세요."
    check = false
  }else{
    document.getElementById("nameError").innerHTML=""
  }

  // 내용 입력
  if(cont==="") {
      document.getElementById("contentError").innerHTML="내용을 입력해주세요."
      check = false
  }else{
      document.getElementById("contentError").innerHTML=""
  }
 
  if(check){
    document.getElementById("nameError").innerHTML=""
    document.getElementById("titleError").innerHTML=""
    document.getElementById("contentError").innerHTML=""
   
    //비동기 처리이벤트
    setTimeout(function() {
      alert("글 등록이 되었습니다.")
      window.location.href ="list.html"
    },0);
  }
}