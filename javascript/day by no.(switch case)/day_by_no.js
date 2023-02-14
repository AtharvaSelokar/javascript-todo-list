function hhh()  {
    var day= parseInt(document.getElementById("num").value) ;
    switch(day){
        case 0: document.write("today is monday");
        break;
        case 1: document.write("today is tuesday");
        break;
        case 2: document.write("today is wednesday");
        break;
        case 3: document.write("today is thursday");
        break;
        case 4: document.write("today is friday");
        break;
        case 5: document.write("today is saturday");
        break;
        case 6: document.write("today is sunday");
        break;
        default:
          document.write("enter valid number")

    }
}
  