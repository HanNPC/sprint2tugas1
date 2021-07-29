for (y = 1; y < 10; y++){
    for (x = 1; x < 10; x++){
        if (y <= 9 - x + 1 && y <= x || y >= 9 - x + 1 && x <= y){
            document.write("*");
        }
        else {
            document.write("_");
        }
    }
    document.write("<br>")
}