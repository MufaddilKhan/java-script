var student1 = {
    name: "MUFADDIL KHAN",
    fathername: "MUDASSIR KHAN",
    age: 18,
    result: "PASS",
    gender: "MALE",
  };
  var student2 = {
    name: "SHAHZAIB ",
    fathername: "SHAKEEL",
    age: 16,
    result: "FAIL",
    gender: "FEMALE",
  };
  var student3 = {
    name: "MANAM",
    fathername: "JAVED ",
    age: 15,
    result: "PASS",
    gender: "MALE",
  };
  var student4 = {
    name: "MUJTABA",
    fathername: "FAISAL0",
    age: 15,
    result: "PASS",
    gender: "MALE",
  };
  var student5 = {
    name: "RAMEEN",
    fathername: "SHAKEEL",
    age: 15,
    result: "FAIL",
    gender: "FEMALE",
  };
  
  var HELLO= [student1, student2, student3, student4, student5];
  
  var studentdata = document.getElementById("student-data");
  
  for (var i = 0; i < HELLO.length; i++) {
    var obj = HELLO[i];
    studentdata.innerHTML +=
      "<tr><td>" +
      obj.name +
      "</td><td>" +
      obj.fathername +
      "</td><td>" +
      obj.age +
      "</td><td>" +
      obj.result +
      "</td><td>" +
      obj.gender +
      "</td> </tr>";
  }
  
  function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  
  
  
