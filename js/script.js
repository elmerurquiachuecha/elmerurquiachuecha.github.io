var txt = 1;
function saludos(){
 
  switch (txt) {
    case 1:
        
        document.getElementById("info_elm").innerHTML ="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.";
        txt = 2;
        console.log("Elmer")
        break;
    case 2:
        document.getElementById("info_elm").innerHTML ="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.";
        txt = 3;
        console.log("Elmer2")
        break;
    case 3:
        document.getElementById("info_elm").innerHTML ="Many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anythingt.";
        txt = 4;
        console.log("Elmer3")
        break;
    case 4:
        document.getElementById("info_elm").innerHTML ="Dolor sit amet, consectetur adipisicing elit. Perspiciatis nemo quaerat sed maxime, temporibus magni a veritatis eaque voluptas tempore alias praesentium, asperiores eligendi facere nulla obcaecati, doloremque hic nobis.";
        txt = 1;
        console.log("Elmer4")
        break; 
    }
}
setInterval(saludos, 8000)


