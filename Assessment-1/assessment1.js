var objArray = [];
var sum = 0;
function User(name, price) {
    this.name = name;
    this.price = price;
}
$('#btnadd1').on("click", function () {
    var user = new User("1984", 180)
    sum += 180;
    objArray.push(user);
    console.log(objArray);
    //$("#table > tbody > tr").remove();
    $.each(objArray, (index, item) => {
        addRow(item, index);
    });

})
$('#btnadd2').on("click", function () {
    var user = new User("The Alchemist", 150)
    sum += 150;
    objArray.push(user);
    $("#table > tbody > tr").remove();
    $.each(objArray, (index, item) => {
        addRow(item, index);
    });
})
$('#btnadd3').on("click", function () {
    var user = new User("Blade Runner", 450)
    sum += 450;
    objArray.push(user);
    $("#table > tbody > tr").remove();
    $.each(objArray, (index, item) => {
        addRow(item, index);
    });
})
$('#btnadd4').on("click", function () {
    var user = new User("Chess Story", 300)
    sum += 300;
    objArray.push(user);
    $("#table > tbody > tr").remove();
    $.each(objArray, (index, item) => {
        addRow(item, index);
    });
})
$('#btnadd5').on("click", function () {
    var user = new User("The Great Gatsby", 200)
    sum += 200;
    objArray.push(user);
    $("#table > tbody > tr").remove();
    $.each(objArray, (index, item) => {
        addRow(item, index);
    });
})
$('#btnadd6').on("click", function () {
    var user = new User("The Hobbit  There and Back Again", 300)
    sum += 300;
    objArray.push(user);
    $("#table > tbody > tr").remove();
    $.each(objArray, (index, item) => {
        addRow(item, index);
    });
})
$('#btnadd7').on("click", function () {
    var user = new User("The Metamorphosis", 350)
    sum += 350;
    objArray.push(user);
    $("#table > tbody > tr").remove();
    $.each(objArray, (index, item) => {
        addRow(item, index);
    });
})
$('#btnadd8').on("click", function () {
    var user = new User("The Old Man and The Sea", 200)
    sum += 200;
    objArray.push(user);
    $("#table > tbody > tr").remove();
    $.each(objArray, (index, item) => {
        addRow(item, index);
    });
})
$('#btnadd9').on("click", function () {
    var user = new User("Murder on The Orient Express", 250)
    sum += 250;
    objArray.push(user);
    $("#table > tbody > tr").remove();
    $.each(objArray, (index, item) => {
        addRow(item, index);
    });
})
$('#btnadd10').on("click", function () {
    var user = new User("The Little Prince", 220)
    sum += 220;
    objArray.push(user);
    $("#table > tbody > tr").remove();
    $.each(objArray, (index, item) => {
        addRow(item, index);
    });
})
$('#btnadd11').on("click", function () {
    var user = new User("A Study in Scarlet", 350)
    sum += 350;
    objArray.push(user);
    $("#table > tbody > tr").remove();
    $.each(objArray, (index, item) => {
        addRow(item, index);
    });
})
$('#btnadd12').on("click", function () {
    var user = new User("The Time Machine", 450)
    sum += 450;
    objArray.push(user);
    $("#table > tbody > tr").remove();
    $.each(objArray, (index, item) => {
        addRow(item, index);
    });
})
$(document).on("click", 'button.remove', function () {
    var index = $(this).data("id");
    $("#table > tbody > tr#" + index + "").remove();
    if (index > -1) {
        objArray.splice(index, 1);
    }
});

$('#sum').on("click", function () {
    document.getElementById('sum1').innerHTML = sum;
})

$('#plcorder').on("click",function(){
    $("#table > tbody > tr").remove();
    document.getElementById('sum1').innerHTML = "";
    sum =0;
})

var addRow = (user, index) => {
    var item = $.parseJSON(JSON.stringify(user));
    var tr = "";
    tr += "<tr>";
    tr += "<td class='name'>";
    tr += item.name;
    tr += "</td>";
    tr += "<td class='color'>";
    tr += item.price;
    tr += "</td>";
    tr += "<td>";
    tr += "<button type ='button' class='remove' data-id ='" + index + "' style='background-color:white;border:1px dotted black;border-radius:10px'>REMOVE</button>";
    tr += "</td>";
    tr += "</tr>";
    $("#table > tbody").append(tr);
}