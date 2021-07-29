for (var y = 1; y < 10; y++) {
    for (var x = 1; x < 10; x++) {
        if (x <= y && x <= 9 - (y-1) || x >= y && x >= 9 - (y-1)) {
             document.write("*")                   
        } else {
            document.write("_")
        }
        
    }
    document.write("<br>")
}