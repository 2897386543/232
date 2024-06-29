
window.onload=function(){
    //滚动后添加样式
    window.onscroll =function(){
        if(window.scrollY >0){
            // 滚动
            $("#nav").addClass("nav-active")
        }
        else{
            //console.log("到顶部")
            console.log(ss);
            $("#nav").removeClass("nav-active")
        }
    }
//收起二级菜单
    $(".navbar-nav a").click(function(){
        $(".navbar-toggler").click()
    })
    audioElement.play();

}   