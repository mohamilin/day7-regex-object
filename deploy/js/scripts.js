import {fruits} from './data/object.js';
fruits.forEach(function (getData) {

  const div = document.createElement('div');
  div.className = "col s3 data";

  div.innerHTML = '<img class=""  src="' + getData.fruitImage + '" alt="Fruits">\n' +
      '<div class="info">\n' + '<br>' +
      '<h2>' + getData.fruitName + '</h2>\n' +
      '<p>'+ '<em>' + getData.latinName + '</em>' + '</p>' +
      '<p>' + getData.fruitColor + '</p>' +
      '<p>' + getData.fruitBiji + '</p>' +
      '</div>';
  document.getElementById("list").appendChild(div);
});


new Typed('#typed',{
    strings : ['Web Developer','Teacher'],
    typeSpeed : 100,
    delaySpeed : 100,
    loop : true
  });