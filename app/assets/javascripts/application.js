// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= axios_rails
//= require_tree .

function getAllLinks(){
   axios.get('https://warm-dawn-37097.herokuapp.com//api/v1/links')
  .then(function (response) {
    renderAllLinksToPage(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
}

function renderAllLinksToPage(links_list=[]){
  var list = links_list
  var count = 0
  list.forEach(function(link){
    if (count == 0){
      var row = "<tr class='top' id=all-links-link-id-" + link.id + "> <td> " + link.title + "</td><td>" + link.url + "</td><td>" + link.read + "</td><td>TOP PICK!!!</td></tr>"
    } else {
      var row = "<tr class='hot' id=all-links-link-id-" + link.id + "> <td> " + link.title + "</td><td>" + link.url + "</td><td>" + link.read + "</td><td>HOT PICK!!!</td></tr>"
    }

    count += 1
    $("#all-links-tbody").append(row)
  })
}

getAllLinks()
