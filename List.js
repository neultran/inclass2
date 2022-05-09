//this is where the function to display the list of books will be

function myFunction(arr){
  var stuff ="<section><h1>List of Cool Books</h1><ul>";

    console.log(arr[0]);

    for(i = 0; i < arr.length; i++){
        //loops through displaying title and author of book
      stuff += '<li><b>' + arr[i].Title + '</b></li><li>' + arr[i].Author + '</li><li>Publisher : '
        + arr[i].Publisher + '</li>';

        //shows price of book if there is a price on it
    if (arr[i].Forsale == true){
      stuff += '<li> Price : ' + arr[i].Price + '</li>';
    }
      //shows awards if the book has awards
    if (arr[i].Awards instanceof Array){
      stuff += '<li> Awards : ';

        var awardC = arr[i].Awards.length;
        var k = 0;
          while (k < awardC){
            stuff += '<ul><li>' + arr[i].Awards[k] + '</li></ul>';
            k++
          }

      stuff += '</ul</ul></li>';
    }

    else {
      stuff += '</ul></li>';
    }
  }

stuff += '</ul></section>';
document.getElementById("books").innerHTML = stuff;
}
