function birthChart() {
  var hour = document.getElementById("hour");
  var minute = document.getElementById("minute");
  var day = document.getElementById("day");
  var month = document.getElementById("month");
  let b = document.getElementById("duration");

  if (hour.value == "1" && b.value == "pm") {
    hour.value = "13";
  }
  else if (hour.value == "2" && b.value == "pm") {
    hour.value = "14";
  }
  else if (hour.value == "3" && b.value == "pm") {
    hour.value = "15";
  }
  else if (hour.value == "4" && b.value == "pm") {
    hour.value = "16";
  }
  else if (hour.value == "5" && b.value == "pm") {
    hour.value = "17";
  }
  else if (hour.value == "6" && b.value == "pm") {
    hour.value = "18";
  }
  else if (hour.value == "7" && b.value == "pm") {
    hour.value = "19";
  }
  else if (hour.value == "8" && b.value == "pm") {
    hour.value = "20";
  }
  else if (hour.value == "9" && b.value == "pm") {
    hour.value = "21";
  }
  else if (hour.value == "10" && b.value == "pm") {
    hour.value = "22";
  }
  else if (hour.value == "11" && b.value == "pm") {
    hour.value = "23";
  }
  if (hour.value == "1" && b.value == "am") {
    hour.value = "01";
  }
  else if (hour.value == "2" && b.value == "am") {
    hour.value = "02";
  }
  else if (hour.value == "3" && b.value == "am") {
    hour.value = "03";
  }
  else if (hour.value == "4" && b.value == "am") {
    hour.value = "04";
  }
  else if (hour.value == "5" && b.value == "am") {
    hour.value = "05";
  }
  else if (hour.value == "6" && b.value == "am") {
    hour.value = "06";
  }
  else if (hour.value == "7" && b.value == "am") {
    hour.value = "07";
  }
  else if (hour.value == "8" && b.value == "am") {
    hour.value = "08";
  }
  else if (hour.value == "9" && b.value == "am") {
    hour.value = "09";
  }
  if (minute.value == "1") {
    minute.value = "01";
  }
  else if (minute.value == "2") {
    minute.value = "02";
  }
  else if (minute.value == "3") {
    minute.value = "03";
  }
  else if (minute.value == "4") {
    minute.value = "04";
  }
  else if (minute.value == "5") {
    minute.value = "05";
  }
  else if (minute.value == "6") {
    minute.value = "06";
  }
  else if (minute.value == "7") {
    minute.value = "07";
  }
  else if (minute.value == "8") {
    minute.value = "08";
  }
  else if (minute.value == "9") {
    minute.value = "09";
  }
  if (day.value == "1") {
    day.value = "01";
  }
  else if (minute.value == "2") {
    day.value = "02";
  }
  else if (day.value == "3") {
    day.value = "03";
  }
  else if (day.value == "4") {
    day.value = "04";
  }
  else if (day.value == "5") {
    day.value = "05";
  }
  else if (day.value == "6") {
    day.value = "06";
  }
  else if (day.value == "7") {
    day.value = "07";
  }
  else if (day.value == "8") {
    day.value = "08";
  }
  else if (day.value == "9") {
    day.value = "09";
  }

  if (month.value == "1") {
    month.value = "01";
  }
  else if (month.value == "2") {
    month.value = "02";
  }
  else if (month.value == "3") {
    month.value = "03";
  }
  else if (month.value == "4") {
    month.value = "04";
  }
  else if (month.value == "5") {
    month.value = "05";
  }
  else if (month.value == "6") {
    month.value = "06";
  }
  else if (month.value == "7") {
    month.value = "07";
  }
  else if (month.value == "8") {
    month.value = "08";
  }
  else if (month.value == "9") {
    month.value = "09";
  }


  var name = document.getElementById("name").value;
  var district = document.getElementById("district").value;
  var state = document.getElementById("state").value;
  var hour = document.getElementById("hour").value;
  var minute = document.getElementById("minute").value;
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;



  if (name == "") {
    alert("Name is missing")
  }
  else if (district == "") {
    alert("District is missing")
  }
  else if (state == "") {
    alert("State is missing")
  }
  else if (hour == "") {
    alert("Hour is missing")
  }
  else if (minute == "") {
    alert("Minute is missing")
  }
  else if (day == "") {
    alert("day is missing")
  }
  else if (month == "") {
    alert("Month is missing")
  }
  else if (year == "") {
    alert("Year is missing")
  }
  else {
    document.getElementById("image").src = "https://vedastroapi.azurewebsites.net/api/Calculate/SouthIndianChart/Location/" + district + "," + state + ",India/Time/" + hour + ":" + minute + "/" + day + "/" + month + "/" + year + "/+05:30/ScanYears/200";
    
      async function get_data() {
        let url = "https://vedastroapi.azurewebsites.net/api/Calculate/DasaForLife/Location/" + district + "," + state + ",India/Time/" + hour + ":" + minute + "/" + day + "/" + month + "/" + year + "/+05:30/Levels/2/ScanYears/120";
        
        let response = await fetch(url)
        let data = await response.json()
    
        document.getElementById("sunmstart").innerHTML = data.Payload.DasaForLife.Sun.Start;
        document.getElementById("sunmend").innerHTML = data.Payload.DasaForLife.Sun.End;
        
        document.getElementById("sunstart1").innerHTML = data.Payload.DasaForLife.Sun.SubDasas.Sun.Start;
        document.getElementById("sunend1").innerHTML = data.Payload.DasaForLife.Sun.SubDasas.Sun.End;
        
        document.getElementById("venusstart1").innerHTML = data.Payload.DasaForLife.Sun.SubDasas.Venus.Start;
        document.getElementById("venusend1").innerHTML = data.Payload.DasaForLife.Sun.SubDasas.Venus.End;
        
        document.getElementById("saturnstart1").innerHTML = data.Payload.DasaForLife.Sun.SubDasas.Saturn.Start;
        document.getElementById("saturnend1").innerHTML = data.Payload.DasaForLife.Sun.SubDasas.Saturn.End;
        
        document.getElementById("rahustart1").innerHTML = data.Payload.DasaForLife.Sun.SubDasas.Rahu.Start;
        document.getElementById("rahuend1").innerHTML = data.Payload.DasaForLife.Sun.SubDasas.Rahu.End;
        
        document.getElementById("moonstart1").innerHTML = data.Payload.DasaForLife.Sun.SubDasas.Moon.Start;
        document.getElementById("moonend1").innerHTML = data.Payload.DasaForLife.Sun.SubDasas.Moon.End;
        
        document.getElementById("mercurystart1").innerHTML = data.Payload.DasaForLife.Sun.SubDasas.Mercury.Start;
        document.getElementById("mercuryend1").innerHTML = data.Payload.DasaForLife.Sun.SubDasas.Mercury.End;
        
        document.getElementById("ketustart1").innerHTML = data.Payload.DasaForLife.Sun.SubDasas.Ketu.Start;
        document.getElementById("ketuend1").innerHTML = data.Payload.DasaForLife.Sun.SubDasas.Ketu.End;
        
        document.getElementById("marsstart1").innerHTML = data.Payload.DasaForLife.Sun.SubDasas.Mars.Start;
        document.getElementById("marsend1").innerHTML = data.Payload.DasaForLife.Sun.SubDasas.Mars.End;
        
        document.getElementById("jupiterstart1").innerHTML = data.Payload.DasaForLife.Sun.SubDasas.Jupiter.Start;
        document.getElementById("jupiterend1").innerHTML = data.Payload.DasaForLife.Sun.SubDasas.Jupiter.End;
        
        
        
        document.getElementById("moonmstart").innerHTML = data.Payload.DasaForLife.Moon.Start;
        document.getElementById("moonmend").innerHTML = data.Payload.DasaForLife.Moon.End;
        
        document.getElementById("sunstart5").innerHTML = data.Payload.DasaForLife.Moon.SubDasas.Sun.Start;
        document.getElementById("sunend5").innerHTML = data.Payload.DasaForLife.Moon.SubDasas.Sun.End;
        
        document.getElementById("moonstart5").innerHTML = data.Payload.DasaForLife.Moon.SubDasas.Moon.Start;
        document.getElementById("moonend5").innerHTML = data.Payload.DasaForLife.Moon.SubDasas.Moon.End;
        
        document.getElementById("marsstart5").innerHTML = data.Payload.DasaForLife.Moon.SubDasas.Mars.Start;
        document.getElementById("marsend5").innerHTML = data.Payload.DasaForLife.Moon.SubDasas.Mars.End;
        
        document.getElementById("rahustart5").innerHTML = data.Payload.DasaForLife.Moon.SubDasas.Rahu.Start;
        document.getElementById("rahuend5").innerHTML = data.Payload.DasaForLife.Moon.SubDasas.Rahu.End;
        
        document.getElementById("jupiterstart5").innerHTML = data.Payload.DasaForLife.Moon.SubDasas.Jupiter.Start;
        document.getElementById("jupiterend5").innerHTML = data.Payload.DasaForLife.Moon.SubDasas.Jupiter.End;
        
        document.getElementById("saturnstart5").innerHTML = data.Payload.DasaForLife.Moon.SubDasas.Saturn.Start;
        document.getElementById("saturnend5").innerHTML = data.Payload.DasaForLife.Moon.SubDasas.Saturn.End;
        
        document.getElementById("mercurystart5").innerHTML = data.Payload.DasaForLife.Moon.SubDasas.Mercury.Start;
        document.getElementById("mercuryend5").innerHTML = data.Payload.DasaForLife.Moon.SubDasas.Mercury.End;
        
        document.getElementById("ketustart5").innerHTML = data.Payload.DasaForLife.Moon.SubDasas.Ketu.Start;
        document.getElementById("ketuend5").innerHTML = data.Payload.DasaForLife.Moon.SubDasas.Ketu.End;
        
        document.getElementById("venusstart5").innerHTML = data.Payload.DasaForLife.Moon.SubDasas.Venus.Start;
        
        document.getElementById("venusend5").innerHTML = data.Payload.DasaForLife.Moon.SubDasas.Venus.End;
        
        
        
        document.getElementById("marsmstart").innerHTML = data.Payload.DasaForLife.Mars.Start;
        document.getElementById("marsmend").innerHTML = data.Payload.DasaForLife.Mars.End;
        
        document.getElementById("sunstart8").innerHTML = data.Payload.DasaForLife.Mars.SubDasas.Sun.Start;
        document.getElementById("sunend8").innerHTML = data.Payload.DasaForLife.Mars.SubDasas.Sun.End;
        
        document.getElementById("moonstart8").innerHTML = data.Payload.DasaForLife.Mars.SubDasas.Moon.Start;
        document.getElementById("moonend8").innerHTML = data.Payload.DasaForLife.Mars.SubDasas.Moon.End;
        
        document.getElementById("marsstart8").innerHTML = data.Payload.DasaForLife.Mars.SubDasas.Mars.Start;
        document.getElementById("marsend8").innerHTML = data.Payload.DasaForLife.Mars.SubDasas.Mars.End;
        
        document.getElementById("rahustart8").innerHTML = data.Payload.DasaForLife.Mars.SubDasas.Rahu.Start;
        document.getElementById("rahuend8").innerHTML = data.Payload.DasaForLife.Mars.SubDasas.Rahu.End;
        
        document.getElementById("jupiterstart8").innerHTML = data.Payload.DasaForLife.Mars.SubDasas.Jupiter.Start;
        document.getElementById("jupiterend8").innerHTML = data.Payload.DasaForLife.Mars.SubDasas.Jupiter.End;
        
        document.getElementById("saturnstart8").innerHTML = data.Payload.DasaForLife.Mars.SubDasas.Saturn.Start;
        document.getElementById("saturnend8").innerHTML = data.Payload.DasaForLife.Mars.SubDasas.Saturn.End;
        
        document.getElementById("mercurystart8").innerHTML = data.Payload.DasaForLife.Mars.SubDasas.Mercury.Start;
        document.getElementById("mercuryend8").innerHTML = data.Payload.DasaForLife.Mars.SubDasas.Mercury.End;
        
        document.getElementById("ketustart8").innerHTML = data.Payload.DasaForLife.Mars.SubDasas.Ketu.Start;
        document.getElementById("ketuend8").innerHTML = data.Payload.DasaForLife.Mars.SubDasas.Ketu.End;
        
        document.getElementById("venusstart8").innerHTML = data.Payload.DasaForLife.Mars.SubDasas.Venus.End;
        document.getElementById("venusend8").innerHTML = data.Payload.DasaForLife.Mars.SubDasas.Venus.End;
        
        
        
        document.getElementById("rahumstart").innerHTML = data.Payload.DasaForLife.Rahu.Start;
        document.getElementById("rahumend").innerHTML = data.Payload.DasaForLife.Rahu.End;
        
        document.getElementById("sunstart4").innerHTML = data.Payload.DasaForLife.Rahu.SubDasas.Sun.Start;
        document.getElementById("sunend4").innerHTML = data.Payload.DasaForLife.Rahu.SubDasas.Sun.End;
        
        document.getElementById("moonstart4").innerHTML = data.Payload.DasaForLife.Rahu.SubDasas.Moon.Start;
        document.getElementById("moonend4").innerHTML = data.Payload.DasaForLife.Rahu.SubDasas.Moon.End;
        
        document.getElementById("marsstart4").innerHTML = data.Payload.DasaForLife.Rahu.SubDasas.Mars.Start;
        document.getElementById("marsend4").innerHTML = data.Payload.DasaForLife.Rahu.SubDasas.Mars.End;
        
        document.getElementById("rahustart4").innerHTML = data.Payload.DasaForLife.Rahu.SubDasas.Rahu.Start;
        document.getElementById("rahuend4").innerHTML = data.Payload.DasaForLife.Rahu.SubDasas.Rahu.End;
        
        document.getElementById("jupiterstart4").innerHTML = data.Payload.DasaForLife.Rahu.SubDasas.Jupiter.Start;
        document.getElementById("jupiterend4").innerHTML = data.Payload.DasaForLife.Rahu.SubDasas.Jupiter.End;
        
        document.getElementById("saturnstart4").innerHTML = data.Payload.DasaForLife.Rahu.SubDasas.Saturn.Start;
        document.getElementById("saturnend4").innerHTML = data.Payload.DasaForLife.Rahu.SubDasas.Saturn.End;
        
        document.getElementById("mercurystart4").innerHTML = data.Payload.DasaForLife.Rahu.SubDasas.Mercury.Start;
        document.getElementById("mercuryend4").innerHTML = data.Payload.DasaForLife.Rahu.SubDasas.Mercury.End;
        
        document.getElementById("ketustart4").innerHTML = data.Payload.DasaForLife.Rahu.SubDasas.Ketu.Start;
        document.getElementById("ketuend4").innerHTML = data.Payload.DasaForLife.Rahu.SubDasas.Ketu.End;
        
        document.getElementById("venusstart4").innerHTML = data.Payload.DasaForLife.Rahu.SubDasas.Venus.Start;
        
        document.getElementById("venusend4").innerHTML = data.Payload.DasaForLife.Rahu.SubDasas.Venus.End;
        
        
        
        document.getElementById("jupitermstart").innerHTML = data.Payload.DasaForLife.Jupiter.Start;
        document.getElementById("jupitermend").innerHTML = data.Payload.DasaForLife.Jupiter.End;
        
        document.getElementById("sunstart9").innerHTML = data.Payload.DasaForLife.Jupiter.SubDasas.Sun.Start;
        document.getElementById("sunend9").innerHTML = data.Payload.DasaForLife.Jupiter.SubDasas.Sun.End;
        
        document.getElementById("moonstart9").innerHTML = data.Payload.DasaForLife.Jupiter.SubDasas.Moon.Start;
        document.getElementById("moonend9").innerHTML = data.Payload.DasaForLife.Jupiter.SubDasas.Moon.End;
        
        document.getElementById("marsstart9").innerHTML = data.Payload.DasaForLife.Jupiter.SubDasas.Mars.Start;
        document.getElementById("marsend9").innerHTML = data.Payload.DasaForLife.Jupiter.SubDasas.Mars.End;
        
        document.getElementById("rahustart9").innerHTML = data.Payload.DasaForLife.Jupiter.SubDasas.Rahu.Start;
        document.getElementById("rahuend9").innerHTML = data.Payload.DasaForLife.Jupiter.SubDasas.Rahu.End;
        
        document.getElementById("jupiterstart9").innerHTML = data.Payload.DasaForLife.Jupiter.SubDasas.Jupiter.Start;
        document.getElementById("jupiterend9").innerHTML = data.Payload.DasaForLife.Jupiter.SubDasas.Jupiter.End;
        
        document.getElementById("saturnstart9").innerHTML = data.Payload.DasaForLife.Jupiter.SubDasas.Saturn.Start;
        document.getElementById("saturnend9").innerHTML = data.Payload.DasaForLife.Jupiter.SubDasas.Saturn.End;
        
        document.getElementById("mercurystart9").innerHTML = data.Payload.DasaForLife.Jupiter.SubDasas.Mercury.Start;
        document.getElementById("mercuryend9").innerHTML = data.Payload.DasaForLife.Jupiter.SubDasas.Mercury.End;
        
        document.getElementById("ketustart9").innerHTML = data.Payload.DasaForLife.Jupiter.SubDasas.Ketu.Start;
        document.getElementById("ketuend9").innerHTML = data.Payload.DasaForLife.Jupiter.SubDasas.Ketu.End;
        
        document.getElementById("venusstart9").innerHTML = data.Payload.DasaForLife.Jupiter.SubDasas.Venus.Start;
        
        document.getElementById("venusend9").innerHTML = data.Payload.DasaForLife.Jupiter.SubDasas.Venus.End;
        
        
        
        document.getElementById("saturnmstart").innerHTML = data.Payload.DasaForLife.Saturn.Start;
        document.getElementById("saturnmend").innerHTML = data.Payload.DasaForLife.Saturn.End;
        
        document.getElementById("sunstart3").innerHTML = data.Payload.DasaForLife.Saturn.SubDasas.Sun.Start;
        document.getElementById("sunend3").innerHTML = data.Payload.DasaForLife.Saturn.SubDasas.Sun.End;
        
        document.getElementById("moonstart3").innerHTML = data.Payload.DasaForLife.Saturn.SubDasas.Moon.Start;
        document.getElementById("moonend3").innerHTML = data.Payload.DasaForLife.Saturn.SubDasas.Moon.End;
        
        document.getElementById("marsstart3").innerHTML = data.Payload.DasaForLife.Saturn.SubDasas.Mars.Start;
        document.getElementById("marsend3").innerHTML = data.Payload.DasaForLife.Saturn.SubDasas.Mars.End;
        
        document.getElementById("rahustart3").innerHTML = data.Payload.DasaForLife.Saturn.SubDasas.Rahu.Start;
        document.getElementById("rahuend3").innerHTML = data.Payload.DasaForLife.Saturn.SubDasas.Rahu.End;
        
        document.getElementById("jupiterstart3").innerHTML = data.Payload.DasaForLife.Saturn.SubDasas.Jupiter.Start;
        document.getElementById("jupiterend3").innerHTML = data.Payload.DasaForLife.Saturn.SubDasas.Jupiter.End;
        
        document.getElementById("saturnstart3").innerHTML = data.Payload.DasaForLife.Saturn.SubDasas.Saturn.Start;
        document.getElementById("saturnend3").innerHTML = data.Payload.DasaForLife.Saturn.SubDasas.Saturn.End;
        
        document.getElementById("mercurystart3").innerHTML = data.Payload.DasaForLife.Saturn.SubDasas.Mercury.Start;
        document.getElementById("mercuryend3").innerHTML = data.Payload.DasaForLife.Saturn.SubDasas.Mercury.End;
        
        document.getElementById("ketustart3").innerHTML = data.Payload.DasaForLife.Saturn.SubDasas.Ketu.Start;
        document.getElementById("ketuend3").innerHTML = data.Payload.DasaForLife.Saturn.SubDasas.Ketu.End;
        
        document.getElementById("venusstart3").innerHTML = data.Payload.DasaForLife.Saturn.SubDasas.Venus.Start;
        
        document.getElementById("venusend3").innerHTML = data.Payload.DasaForLife.Saturn.SubDasas.Venus.End;
        
        
        
        document.getElementById("mercurymstart").innerHTML = data.Payload.DasaForLife.Mercury.Start;
        document.getElementById("mercurymend").innerHTML = data.Payload.DasaForLife.Mercury.End;
        
        document.getElementById("sunstart6").innerHTML = data.Payload.DasaForLife.Mercury.SubDasas.Sun.Start;
        document.getElementById("sunend6").innerHTML = data.Payload.DasaForLife.Mercury.SubDasas.Sun.End;
        
        document.getElementById("moonstart6").innerHTML = data.Payload.DasaForLife.Mercury.SubDasas.Moon.Start;
        document.getElementById("moonend6").innerHTML = data.Payload.DasaForLife.Mercury.SubDasas.Moon.End;
        
        document.getElementById("marsstart6").innerHTML = data.Payload.DasaForLife.Mercury.SubDasas.Mars.Start;
        document.getElementById("marsend6").innerHTML = data.Payload.DasaForLife.Mercury.SubDasas.Mars.End;
        
        document.getElementById("rahustart6").innerHTML = data.Payload.DasaForLife.Mercury.SubDasas.Rahu.Start;
        document.getElementById("rahuend6").innerHTML = data.Payload.DasaForLife.Mercury.SubDasas.Rahu.End;
        
        document.getElementById("jupiterstart6").innerHTML = data.Payload.DasaForLife.Mercury.SubDasas.Jupiter.Start;
        document.getElementById("jupiterend6").innerHTML = data.Payload.DasaForLife.Mercury.SubDasas.Jupiter.End;
        
        document.getElementById("saturnstart6").innerHTML = data.Payload.DasaForLife.Mercury.SubDasas.Saturn.Start;
        document.getElementById("saturnend6").innerHTML = data.Payload.DasaForLife.Mercury.SubDasas.Saturn.End;
        
        document.getElementById("mercurystart6").innerHTML = data.Payload.DasaForLife.Mercury.SubDasas.Mercury.Start;
        document.getElementById("mercuryend6").innerHTML = data.Payload.DasaForLife.Mercury.SubDasas.Mercury.End;
        
        document.getElementById("ketustart6").innerHTML = data.Payload.DasaForLife.Mercury.SubDasas.Ketu.Start;
        document.getElementById("ketuend6").innerHTML = data.Payload.DasaForLife.Mercury.SubDasas.Ketu.End;
        
        document.getElementById("venusstart6").innerHTML = data.Payload.DasaForLife.Mercury.SubDasas.Venus.Start;
        
        document.getElementById("venusend6").innerHTML = data.Payload.DasaForLife.Mercury.SubDasas.Venus.End;
        
        
        
        document.getElementById("ketumstart").innerHTML = data.Payload.DasaForLife.Ketu.Start;
        document.getElementById("ketumend").innerHTML = data.Payload.DasaForLife.Ketu.End;
        
        document.getElementById("sunstart7").innerHTML = data.Payload.DasaForLife.Ketu.SubDasas.Sun.Start;
        document.getElementById("sunend7").innerHTML = data.Payload.DasaForLife.Ketu.SubDasas.Sun.End;
        
        document.getElementById("moonstart7").innerHTML = data.Payload.DasaForLife.Ketu.SubDasas.Moon.Start;
        document.getElementById("moonend7").innerHTML = data.Payload.DasaForLife.Ketu.SubDasas.Moon.End;
        
        document.getElementById("marsstart7").innerHTML = data.Payload.DasaForLife.Moon.SubDasas.Mars.Start;
        document.getElementById("marsend7").innerHTML = data.Payload.DasaForLife.Ketu.SubDasas.Mars.End;
        
        document.getElementById("rahustart7").innerHTML = data.Payload.DasaForLife.Ketu.SubDasas.Rahu.Start;
        document.getElementById("rahuend7").innerHTML = data.Payload.DasaForLife.Ketu.SubDasas.Rahu.End;
        
        document.getElementById("jupiterstart7").innerHTML = data.Payload.DasaForLife.Ketu.SubDasas.Jupiter.Start;
        document.getElementById("jupiterend7").innerHTML = data.Payload.DasaForLife.Ketu.SubDasas.Jupiter.End;
        
        document.getElementById("saturnstart7").innerHTML = data.Payload.DasaForLife.Ketu.SubDasas.Saturn.Start;
        document.getElementById("saturnend7").innerHTML = data.Payload.DasaForLife.Ketu.SubDasas.Saturn.End;
        
        document.getElementById("mercurystart7").innerHTML = data.Payload.DasaForLife.Ketu.SubDasas.Mercury.Start;
        document.getElementById("mercuryend7").innerHTML = data.Payload.DasaForLife.Ketu.SubDasas.Mercury.End;
        
        document.getElementById("ketustart7").innerHTML = data.Payload.DasaForLife.Ketu.SubDasas.Ketu.Start;
        document.getElementById("ketuend7").innerHTML = data.Payload.DasaForLife.Ketu.SubDasas.Ketu.End;
        
        document.getElementById("venusstart7").innerHTML = data.Payload.DasaForLife.Ketu.SubDasas.Venus.Start;
        
        document.getElementById("venusend7").innerHTML = data.Payload.DasaForLife.Ketu.SubDasas.Venus.End;
        
        
        
        document.getElementById("venusmstart").innerHTML = data.Payload.DasaForLife.Venus.Start;
        document.getElementById("venusmend").innerHTML = data.Payload.DasaForLife.Venus.End;
        
        document.getElementById("sunstart2").innerHTML = data.Payload.DasaForLife.Venus.SubDasas.Sun.Start;
        document.getElementById("sunend2").innerHTML = data.Payload.DasaForLife.Venus.SubDasas.Sun.End;
        
        document.getElementById("moonstart2").innerHTML = data.Payload.DasaForLife.Venus.SubDasas.Moon.Start;
        document.getElementById("moonend2").innerHTML = data.Payload.DasaForLife.Venus.SubDasas.Moon.End;
        
        document.getElementById("marsstart2").innerHTML = data.Payload.DasaForLife.Venus.SubDasas.Mars.Start;
        document.getElementById("marsend2").innerHTML = data.Payload.DasaForLife.Venus.SubDasas.Mars.End;
        
        document.getElementById("rahustart2").innerHTML = data.Payload.DasaForLife.Venus.SubDasas.Rahu.Start;
        document.getElementById("rahuend2").innerHTML = data.Payload.DasaForLife.Venus.SubDasas.Rahu.End;
        
        document.getElementById("jupiterstart2").innerHTML = data.Payload.DasaForLife.Venus.SubDasas.Jupiter.Start;
        document.getElementById("jupiterend2").innerHTML = data.Payload.DasaForLife.Venus.SubDasas.Jupiter.End;
        
        document.getElementById("saturnstart2").innerHTML = data.Payload.DasaForLife.Venus.SubDasas.Saturn.Start;
        document.getElementById("saturnend2").innerHTML = data.Payload.DasaForLife.Venus.SubDasas.Saturn.End;
        
        document.getElementById("mercurystart2").innerHTML = data.Payload.DasaForLife.Venus.SubDasas.Mercury.Start;
        document.getElementById("mercuryend2").innerHTML = data.Payload.DasaForLife.Venus.SubDasas.Mercury.End;
        
        document.getElementById("ketustart2").innerHTML = data.Payload.DasaForLife.Venus.SubDasas.Ketu.Start;
        document.getElementById("ketuend2").innerHTML = data.Payload.DasaForLife.Venus.SubDasas.Ketu.End;
        
        document.getElementById("venusstart2").innerHTML = data.Payload.DasaForLife.Venus.SubDasas.Venus.Start;
        
        document.getElementById("venusend2").innerHTML = data.Payload.DasaForLife.Venus.SubDasas.Venus.End;
      }
      get_data()
    var loadingSpinner = document.getElementById('loadingSpinner');
      loadingSpinner.style.display = 'block';

      // Simulate loading for 3 seconds
      setTimeout(function() {
        // After loading, hide the spinner
        loadingSpinner.style.display = 'none';

        // Here you can add code to load the page content or perform any other action
        console.log('Page loaded!');
      }, 30000);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzModBriWWloNgLE_fon87jAvfqBfjZfFcPqOpoP7PLEIR-r_17Wn3AHdipw0Jtd7FE-Q/exec'


    const form = document.forms['contact-form']

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    })
  }
}

function touchmenow() {
  let data = {
    "sun1": "तो, हम देखते हैं कि पहले घर में सूर्य ऊर्जा, महत्वाकांक्षा, सफलता, उपलब्धि और उपलब्धि के बारे में है। लेकिन फिर जातक को कड़ी मेहनत करनी होगी और इन क्षमताओं का अपने लाभ के लिए उपयोग करना होगा। प्रथम भाव में सूर्य की स्थिति वाले जातक जीवन में बहुत कुछ हासिल कर सकते हैं। लेकिन वे अपने गुस्से और अहंकार से परेशान हो सकते हैं। सूर्य ग्रह की तरह ही आपको प्रथम भाव में अन्य ग्रहों के परिणामों का विश्लेषण करने का प्रयास करना चाहिए। कुंडली में सूर्य ग्रह पर अन्य ग्रहों के गोचर का भी हमेशा विचार करें क्योंकि अन्य ग्रह गोचर भी आपके जीवन पर बहुत प्रभाव डालते हैं।",
    "sun2": "दूसरे भाव में सूर्य की स्थिति वाले जातक प्रचुर धन-संपदा और अपेक्षाकृत मधुर संबंधों से संपन्न होते हैं। हालाँकि, आपको अत्यधिक खर्च और किसी भी काम को करने के सही तरीके के जुनून से सावधान रहने की जरूरत ह",
    "sun3": "तीसरा भाव संचार के बारे में है। इसलिए, जब सूर्य इस घर में रहता है, तो व्यक्ति काफी बातूनी और अभिव्यंजक हो सकता है। कभी-कभी व्यक्ति कुछ ऐसा कह सकता है जो लोगों को अच्छा नहीं लगेगा। इससे उन्हें परेशानी भी हो सकती है। ऐसे में उन्हें इस मोर्चे पर सावधान रहने की जरूरत है।",
    "sun4": "वे अपने परिवार के सदस्यों और घरेलू खुशियों से गहराई से जुड़े होते हैं। वे अपने प्रियजनों का अच्छे से ख्याल रखते हैं। लेकिन उन्हें यह सुनिश्चित करना चाहिए कि वे उन्हें अनावश्यक लाड़-प्यार न दें। बस वहां मौजूद रहना और जरूरत पड़ने पर उनकी मदद करना ही काफी है। इसके अलावा, घर के बाहर की चीजों को नजरअंदाज करना जीवन जीने का अच्छा तरीका नहीं हो सकता है, इसमें संतुलन होना चाहिए",
    "sun5": "यदि सूर्य आपके पंचम भाव में स्थित है तो यह आपको रचनात्मक और अभिव्यंजक बना देगा। आपको दिलचस्प खेल गतिविधियों, रोमांस, नाटक आदि में भी बहुत आनंद मिल सकता है। साथ ही संतान को लेकर भी कुछ न कुछ परेशानियां बनी रहेंगी। या तो आपको उन्हें जन्म देने में समस्या होगी या उनके स्वास्थ्य और खुशहाली पर असर पड़ सकता है।",
    "sun6": "छठे भाव में सूर्य वाले जातक हमेशा भयपूर्ण और असुविधाजनक परिस्थितियों से लड़ते रहते हैं और अपने जीवन में सुरक्षा स्थापित करने का प्रयास करते रहते हैं। वे अपने स्वास्थ्य और कल्याण को बहुत महत्व देते हैं। वे बहादुर सेनानी और गतिशील नायक हो सकते हैं जो अपने जीवन और अपने प्रियजनों के जीवन को बेहतर बनाने के लिए सब कुछ कर सकते हैं।",
    "sun7": "वैसे, सातवें भाव में सूर्य वाले जातक अपने साझेदारों पर अत्यधिक निर्भर होते हैं। वे अपनी ताकत और शक्ति उस बंधन से प्राप्त करते हैं जिसे वे दूसरों के साथ साझा करते हैं। साथ ही आपको यह भी सुनिश्चित करना चाहिए कि आप अपने पार्टनर से बहुत ज्यादा उम्मीदें न रखें। इससे दूसरों के साथ आपके रिश्ते बेहतर होंगे। और तब तुम्हें लाभ होना निश्चित है।",
    "sun8": "आठवें भाव में सूर्य वाले जातक परिस्थितियों से निपटने में काफी कुशल होते हैं। हालाँकि, उन्हें कम संवेदनशील और अधिक मिलनसार होना चाहिए। अन्यथा वे कुछ अच्छे दोस्त पाने से चूक सकते हैं और वे अधिक संपूर्ण जीवन जीने में असफल हो सकते ",
    "sun9": "आप धर्मात्मा, धर्मात्मा एवं धर्मात्मा हैं। आप बहुत सकारात्मक और जिज्ञासु हैं. साथ ही, आप भाग्यशाली भी रहेंगे क्योंकि कई मौकों पर भाग्य आपका साथ देगा। आप कोई विदेशी भाषा और संस्कृति सीखना चाह सकते हैं। हालाँकि, यह बेहतर होगा यदि आपकी नई भाषा (या संस्कृति) सीखने से आपको किसी ऐसी चीज़ में मदद मिलती है जो आपके करियर की संभावनाओं को प्रभावित करती है। इसके अलावा, किसी भी प्रकार के अहंकार से सावधान रहें क्योंकि यह आपके जीवन पर बोझ डाल सकता है।",
    "sun10": "आप करियर-उन्मुख रहेंगे। आपके अपने पेशे में अच्छा प्रदर्शन करने की संभावना है। साथ ही आप अपने परिवार के सदस्यों पर भी पर्याप्त ध्यान देंगे। दरअसल, आप अपनी सफलता और अनुभव अपने परिवार, खासकर अपने जीवनसाथी के साथ साझा करेंगे। आपके अपने बच्चों के साथ अच्छे संबंध रहने की संभावना है। लेकिन आपको कार्यस्थल पर दूसरों के विचारों और राय के प्रति अधिक उदार होना चाहिए।",
    "sun11": "यह बहुत अच्छी बात है कि आप अच्छाई और ख़ुशी में विश्वास करते हैं। हालाँकि, आपको व्यावहारिक वास्तविकता को भी ध्यान में रखना चाहिए। यह आपको अच्छाई से रोकने के लिए नहीं है, बल्कि यह सुनिश्चित करने के लिए है कि आप अपने मूल्यों और नैतिकता का पालन करते हुए वास्तविकता पर अधिक आधारित हों। आदर्श तभी वास्तविकता में बदलेंगे जब आप उन्हें व्यावहारिक जीवन से जोड़ेंगे।",
    "sun12": "12वें घर में सूर्य के जातकों के लिए ज्योतिषीय परिदृश्य अधिकांश अन्य घरों में ( सूर्य की उपस्थिति के) दृश्य के विपरीत सरल नहीं है। चूंकि वे मन और चेतना के अधिक गहरे स्तरों में हैं, इसलिए वे अस्तित्व की सबसे जटिल वास्तविकता से निपट रहे हैं। हालाँकि, यह उन्हें अपने आध्यात्मिक स्तर को ऊपर उठाने और अपने और समाज के लिए चमत्कार करने का सुनहरा अवसर भी प्रदान कर सकता है।",

    "moon1": "हर समय अपने तरीके निर्धारित करना संभव नहीं है, भले ही वे सही तरीके हों। आपको जहां भी और जब भी आवश्यकता हो, अन्य लोगों की इच्छाओं और आवश्यकताओं के साथ तालमेल बिठाना चाहिए",
    "moon2": "अंततः यहां हम कह सकते हैं कि, कुंडली के द्वितीय भाव में चंद्र के होने से जातक व्यक्ति के आर्थिक रूप से मजबूत होने की अधिक संभावनाएं होती हैं। और साथ ही ऐसे जातक समझदार और जिम्मेदार भी होते हैं। लेकिन किसी वस्तु या व्यक्ति विशेष से आपका अधिक लगाव, आपको भावनात्मक रूप से परेशान कर सकता है। ज्योतिष शास्त्र में चंद्र ग्रह को महत्व दिया जाता है। हालांकि खगोलीय दृष्टि में चंद्रमा को पृथ्वी ग्रह का एक प्राकृतिक उपग्रह माना जाता है। ज्योतिष के अनुसार, इसके द्वारा व्यक्ति की चंद्र राशि ज्ञात की जाती है। हमारी जन्म कुंडली में स्थित 12 भावों में चंद्र ग्रह, अलग-अलग रूप से प्रभाव डालते  है। उन प्रभावों को के बारे में आप इस लेख में विस्तृत रूप से जान सकते हैं।",
    "moon3": "कुल मिलाकर कहा जा सकता है कि कुंडली के तीसरे भाव में चंद्र ग्रह के विराजमान होने से, जातक संवाद कौशल में निपूर्ण और अन्य लोगों की भावनाओं व इच्छाओं को आसानी से समझने वाले हो सकते हैं। हालांकि ज्योतिष की सलाह में इन जातकों को कई बार अपने गुणों का उपयोग सही दिशा में करने के लिए प्रेरित होने की सलाह दी जाती है। परन्तु ये जातक, फिर भी वे मिलनसार और तीव्र बुद्धि के धनी होते हैं, और दूसरे लोगों और उनकी परिस्थितियों को आसानी से समझ कर, उनका सामना करने के साथ-साथ उनसे कुछ नया और बेहतर सीखने की दिशा में अग्रसर भी होते हैं",
    "moon4": "जिन जातकों के चतुर्थ भाव में चंद्रमा होता है वे भावुक और पारिवारिक होते हैं। हालाँकि, वे जीवन में अधिक प्रभावी होंगे यदि वे अपनी भावनात्मक निर्भरता को कम कर सकें और व्यावहारिकता के कुछ तत्वों को अपना सकें।",
    "moon5": "खैर, वे रिश्तों और प्रेम जीवन में अच्छे रहेंगे।  हालाँकि, उन्हें अपने स्वभाव पर नियंत्रण रखने में सावधानी बरतनी चाहिए।  वे पेशे में अच्छा प्रदर्शन करेंगे, खासकर यदि वे रचनात्मक क्षेत्रों में अपना करियर बनाते हैं, और साथ ही, यह अच्छा है कि वे संवेदनशील हैं।  हालाँकि, उन्हें अन्य लोगों की जरूरतों और चाहतों को भी समझने की जरूरत है।  साथ ही वाहन चलाते समय भी इन्हें सावधानी बरतने की जरूरत ह",
    "moon6": "बुध  अभिव्यक्ति और बुद्धि का कारक है। 5वां घर रोमांटिक रिश्तों, सुखद भावनाओं, संतानों से संबंधित है और इसलिए उनका संयोजन बहुत जानकार व्यक्ति बना सकता है, जो बहुत अच्छे शिक्षक हो सकते हैं। हालाँकि जातकों को बातों को बहुत आगे तक ले जाने से बचना चाहिए। उन्हें कुछ चीज़ों से अनावश्यक रूप से जुड़ने से बचना चाहिए, जो उनके अहंकार को बढ़ा सकती हैं और उनके जीवन में कष्ट ला सकती हैं।",
    "moon7": "इस प्रकार, हम देखते हैं कि सातवें घर में चंद्रमा जातकों के जीवन में भारी विकास ला सकता है। यदि वे अपना जीवन ठीक से और प्रभावी ढंग से चला सकते हैं, तो वे पेशेवर और व्यक्तिगत जीवन में ऊंचा उठ सकते हैं। हालाँकि, यदि वे अपने दिमाग को अपनी बात कहने की अनुमति देते हैं, तो इससे एक कठिन स्थिति पैदा हो सकती है।",
    "moon8": "संक्षेप में, यह देखा गया है कि जिन जातकों के  आठवें घर में चंद्रमा है  , वे जीवन के उतार-चढ़ाव से काफी परेशान हो सकते हैं। सबसे महत्वपूर्ण बात यह है कि वे इन परिस्थितियों का सामना कैसे करते हैं और जीवन की जटिलताओं को कैसे संबोधित करते हैं। जातकों को सलाह दी जाती है कि वे शांत रहें और अपने अतीत के बारे में सोचने में प्रयास बर्बाद न करें। जो बीत गया सो बीत गया, और आप सकारात्मक रहकर और अतीत से सबक सीखकर और गलतियों को न दोहराकर अपने कल को उज्जवल और चमकदार बना सकते ह",
    "moon9": "जब चंद्रमा नौवें भाव में हो तो जातक कई देशों की यात्रा करना पसंद करेंगे। नवम भाव में चंद्रमा की विवाह कुंडली के अनुसार विदेशी संबंध बनाने की संभावना बहुत अधिक है, चाहे वह पत्नी हो, मित्र हो, या व्यवसाय हो। शिक्षा भी उनके जीवन में एक आवश्यक भूमिका निभाती है क्योंकि वे दूसरों की तुलना में अधिक बुद्धिमान और रचनात्मक होते हैं। हालाँकि, उन्हें यह सुनिश्चित करना चाहिए कि उनकी सकारात्मकता मन की नकारात्मक स्थिति में परिवर्तित न हो जाए अन्यथा वे अपनी अधिकांश ताकत खो देंगे।",
    "moon10": "दशम भाव में मंगल की स्थिति वाले जातकों में मंगल की अग्नि होगी। इसका उपयोग पेशे में उचित रूप से किया जा सकता है और परिणामस्वरूप जातक बहुत ऊंचे स्थान पर पहुंच सकते हैं। हालाँकि, इन जातकों को लोगों के साथ व्यवहार करते समय बहुत सावधान रहना होगा अन्यथा इनकी उतनी उन्नति नहीं हो पाएगी।",
    "moon11": "दूसरे भाव में मंगल की स्थिति वाले जातक शेयर बाजार, ट्रेडिंग जैसे सट्टा क्षेत्रों में अच्छा प्रदर्शन कर सकते हैं। वे एक अच्छे इंसान भी हो सकते हैं और अपने रिश्तों के साथ पूरा न्याय कर सकते हैं। हालाँकि, एक कारक जो उन्हें निराश करता है वह है उनका बुरा स्वभाव। वे अपने व्यवहार में अधिक संयमित रहकर और पैसे के प्रति कम लगाव रखकर अपनी सफलता को अधिकतम कर सकते हैं।",
    "moon12": "अंत में यदि कुंडली के बारहवें भाव में चंद्र ग्रह के प्रभावों की गणना की जाए तो , इस निष्कर्ष पर पहुंचा जा सकता है, कि ऐसे जातक विचारशील और भावनाओं में विलीन होते हैं। कई बार इन जातकों को अंतर्मुखी व्यक्तित्व का भी समझा जाता है, लेकिन वास्तव में ऐसा होता नहीं है। साथ ही ये जातक किसी परिवेश या वातावरण में ढलने के लिए अधिक समय बिताने की जरूरत को महसूस करते है। ऐसे जातकों को लोगों की खुद के लिए सोच बदलने हेतु स्वयं को अधिक काबिल पेश करने का प्रयास करना होगा। जिससे कि लोगों की इनके प्रति धारणा को परिवर्तित कर सकें। इसके अलावा, ऐसे जातकों को अपनी भावनाओं पर भी नियंत्रण रखने की सलाह दी जाती है। अन्यथा उन्हें चंद्र ग्रह के प्रतिकूल और नकारात्मक प्रभावों का सामना भी करना पड़ सकता है। हालांकि वैदिक ज्योतिष की गणना में, चंद्रमा से संबंधित सभी प्रतिकूल परिस्थितियों से मुक्ति हेतु उपायों का उल्लेख किया गया है। जिससे चंद्र ग्रह के नकारात्मक प्रभावों को दूर किया जा सकता ह",

    "mercury1": "आप बुद्धिमान और दिलचस्प हैं. आप हमेशा नई बातों और विचारों से भरे रहते हैं। लेकिन फिर आपका लचीला होना और हर समय नई चीजें तलाशने का गुण आपकी कमजोरी भी बन सकता है। आप चीजों को पकड़कर रखने में सक्षम नहीं हो सकते हैं, जिसकी कीमत आपको जीवन भर चुकानी पड़ सकती है। धैर्य सफलता की मूलभूत आवश्यकताओं में से एक है, इसे विकसित करना होगा भले ही यह स्वाभाविक रूप से न हो।",
    "mercury2": "दूसरे भाव में बुध वाले जातक तर्क-वितर्क और धन प्रबंधन में अच्छे होते हैं। हालाँकि, हो सकता है कि उन्हें काम करने के लिए दबाव डाला जाना पसंद न हो। इसके अलावा, वे अपनी बुद्धि और प्रबंधन कौशल के कारण अहंकारी हो सकते हैं, इसलिए उन्हें इस संबंध में बहुत सावधान रहने की जरूरत है",
    "mercury3": "बुध ग्रह बुद्धि और संचार का कारक है। और जब यह तीसरे भाव में रहता है तो जातक बहुत कुछ जानना और सीखना चाहते हैं। लेकिन जब मात्रा बढ़ती है, तो गुणवत्ता पीछे रह जाती है। या जब पार्श्विक वृद्धि (फैलाव) बहुत अधिक हो जाए तो ऊर्ध्वाधर वृद्धि (गहराई या ऊंचाई) को नुकसान उठाना पड़ेगा। इस प्रकार, अधिक से अधिक खोज करने की इच्छा में, तीसरे घर में बुध के जातक कुछ महत्वपूर्ण चीजों के विवरण से चूक सकते हैं।",
    "mercury4": "चौथे घर में स्थित बुध  यह दर्शाता है कि यदि जातक लोगों के प्रति ईमानदार और स्पष्टवादी है, तो उसे इसके बेहतर परिणाम मिलेंगे। चौथे घर में मौजूद राशि और इसके साथ ग्रहों के संयोजन जैसी कई चीजें हैं, इसके वास्तविक प्रभाव को जानने के लिए इसे ध्यान में रखा जाना चाहिए। ",
    "mercury5": "बुध अभिव्यक्ति और बुद्धि का कारक है। 5 वां घर  रोमांटिक रिश्तों, सुखद भावनाओं, संतानों से संबंधित है और इसलिए उनका संयोजन बहुत जानकार व्यक्ति बना सकता है, जो बहुत अच्छे शिक्षक हो सकते हैं। हालाँकि जातकों को बातों को बहुत आगे तक ले जाने से बचना चाहिए। उन्हें कुछ चीज़ों से अनावश्यक रूप से जुड़ने से बचना चाहिए, जो उनके अहंकार को बढ़ा सकती हैं और उनके जीवन में कष्ट ला सकती हैं।",
    "mercury6": "बुध  अभिव्यक्ति और बुद्धि का कारक है। 5वां घर रोमांटिक रिश्तों, सुखद भावनाओं, संतानों से संबंधित है और इसलिए उनका संयोजन बहुत जानकार व्यक्ति बना सकता है, जो बहुत अच्छे शिक्षक हो सकते हैं। हालाँकि जातकों को बातों को बहुत आगे तक ले जाने से बचना चाहिए। उन्हें कुछ चीज़ों से अनावश्यक रूप से जुड़ने से बचना चाहिए, जो उनके अहंकार को बढ़ा सकती हैं और उनके जीवन में कष्ट ला सकती हैं।",
    "mercury7": "सातवें घर में बुध की उपस्थिति जातकों के लिए दोनों रास्ते काटती है। यह उनके रिश्तों को दयालुता, ईमानदारी और सच्चाई के साथ पोषित और बढ़ावा देता है। वे एकजुटता को महत्व देते हैं। वे क्षण, भावनाएँ और खुशियाँ साझा करते हैं। दोनों के रिश्ते की डोर कई सालों बाद भी तरोताजा बनी हुई है। वे अब भी अपने पार्टनर से ऐसे प्यार करते हैं जैसे यह उनकी पहली डेट हो।",
    "mercury8": "आठवें भाव में बुध के जातक अपने दृष्टिकोण और दृष्टिकोण में विश्लेषणात्मक और खोजी होते हैं। हालाँकि, उन्हें उन लोगों के प्रति अधिक खुला होना चाहिए जो उनके करीब हैं, तभी वे दूसरों के साथ एकीकृत होंगे और एक पूर्ण और संतुष्टिपूर्ण जीवन जी सकेंगे।",
    "mercury9": "नौवें घर में बुध के जातक बहुत ऊंचे स्थान पर जा सकते हैं क्योंकि वे बहुत बुद्धिमान और बुद्धिमान होते हैं। हालाँकि, उन्हें अहंकार और अतिरंजित आत्म-महत्व की भावनाओं से सावधान रहना चाहिए।",
    "mercury10": "दशम भाव में स्थित बुध जातक बहुत बुद्धिमान और समझदार हो सकता है। वे बहुत अच्छे लेखक भी बन सकते हैं। हालाँकि, उन्हें इस बात से सावधान रहना होगा कि वे क्या खरीदते हैं। उन्हें दूसरों को यह समझाने की कोशिश करनी चाहिए कि यह कोई स्टेटस सिंबल नहीं बल्कि एक जरूरत है।",
    "mercury11": "ग्यारहवें भाव में बुध के प्रभाव से जातक कला में रुचि रखने वाला, ज्योतिष एवं मस्तिष्क विज्ञान में रुचि रखने वाला होता है। इसके साथ ही इन्हें कुशल लेखक और शासन-प्रशासन से लाभ मिलेगा। ऐसे जातकों की गुप्त विद्याओं में रुचि गहरी होती है और वे संगीत कला का भी अच्छा ज्ञान प्राप्त कर लेते हैं।ज्योतिष शास्त्र के अनुसार बुध ग्रह हमारी कुंडली में स्थित सभी 12 भावों पर अलग-अलग प्रभाव डालते हैं। ये प्रभाव हमारे जीवन को प्रत्यक्ष एवं अप्रत्यक्ष रूप से प्रभावित करते हैं।",
    "mercury12": "",

    "venus1": "पहले घर में शुक्र आपको बहुत आकर्षक बनाता है, आपको उच्च यौन आग्रह देता है, आपको कामुकता और चुंबकत्व का आशीर्वाद देता है।  विपरीत लिंग आपको पसंद करता है।  शुक्र अपनी ही राशि, यानी वृषभ और तुला में, आपको जानवरों, विशेषकर कुत्तों के प्रति एक भावुक प्रेम देगा।  पहले घर में शुक्र कोटिपति योग भी बना सकता है जो आपको करोड़पति (10 करोड़ की संपत्ति का मालिक) बना सकता है।",
    "venus2": "वैदिक ज्योतिष में जब शुक्र की सौम्यता दूसरे घर से मिलती है, तो इसका परिणाम एक भोग-प्रेमी व्यक्ति होता है जो सभी विलासिता और धन से प्यार करता है। इनके पास पैसा होगा, इसे खुले हाथ से खर्च करेंगे। लेकिन उन्हें यहां सावधानी बरतने की जरूरत होगी. यदि वे अनावश्यक चीज़ों पर बहुत सारा पैसा खो देते हैं, तो उन्हें नकदी संकट का सामना करना पड़ सकता है। साथ ही उन्हें अपने आस-पास के लोगों से अनावश्यक उम्मीदें नहीं रखनी चाहिए।",
    "venus3": "शुक्र ग्रह जीवन की खुशियों और आनंद के बारे में है। और तीसरा घर भाई-बहनों, मन की स्थितियों, पढ़ने, लिखने आदि को पूरा करता है। इसलिए ये जातक लिखित और मौखिक दोनों रूपों में बहुत अभिव्यंजक और संचारी होते हैं। इन जातकों के लिए रिश्ते बहुत महत्वपूर्ण होते हैं। हालाँकि, उन्हें रिश्तों को बहुत गंभीरता से नहीं लेना चाहिए और चिंताओं और परेशानियों से दूर रहने की कोशिश करनी चाहिए",
    "venus4": "संक्षेप में, चतुर्थ भाव में शुक्र की स्थिति  जातक के जीवन पर प्रतिकूल और सकारात्मक दोनों प्रभाव डालती है। यह जातक के कार्यों और परिस्थितियों के प्रति दृष्टिकोण के अनुसार बदलता रहता है। लेकिन सबसे महत्वपूर्ण बात यह है कि जातक अपने जीवन के हर पहलू में एक आनंदमय जीवन का अनुभव करते हैं, चाहे वह विपरीत लिंग के साथ संबंध हो, शारीरिक सुख, करिश्मा हो और वाहनों, घर और असाधारण जीवनशैली आदि सहित विलासितापूर्ण सुख-सुविधाओं का तो जिक्र ही न करें।",
    "venus5": "वे जीवन के कुछ प्रमुख क्षेत्रों में प्रेम और शांति का प्रतीक हैं। वे चंचल और मौज-मस्ती करने वाले भी होते हैं और जहां भी जाते हैं उत्साह और खुशी का संचार करते हैं। हालाँकि, कुछ मामलों में, वे बहुत अधिक आत्म-मुग्ध हो सकते हैं और विशेष रूप से अपने जीवन साथी के साथ बहुत अधिक मांग करने वाले हो सकते हैं। इसके अलावा, उनकी रोमांटिक खोज उन्हें कम उम्र में मौज-मस्ती और आनंद दे सकती है, लेकिन जैसे-जैसे वे बड़े होंगे, उन्हें भौतिक सुखों की निरर्थकता का एहसास होगा।",
    "venus6": "छठे भाव में शुक्र के जातकों को उनके देखभाल और साझा करने के रवैये के कारण पसंद किया जाता है। हालाँकि, उन्हें काम और पेशे के मामले में पूर्णतावादी और निर्दयी होने से बचना होगा। हर समय दूसरों से बहुत ऊंचे मानकों की अपेक्षा करना आदर्श नहीं हो सकता है।",
    "venus7": "सातवें घर में शुक्र जातकों के जीवन में अनुभव होने वाले सबसे भाग्यशाली संयोजनों में से एक है। यह व्यक्ति के रिश्ते को सभी खुशियों और आनंद से भर देता है। लंबे समय तक चलने वाले रिश्तों के लिए शुक्र एक अच्छा संकेत है। लेकिन यदि सातवें घर में शुक्र का परिणाम खराब हो तो यह जातकों के बीच संबंधों को कमजोर करता है और उनके जीवन में संघर्ष बढ़ाता है। यह स्थिति दो पहलू वाले सिक्के की तरह है, जिसके व्यक्ति पर अनुकूल और प्रतिकूल दोनों तरह के परिणाम होते हैं।",
    "venus8": "आठवें भाव में शुक्र की स्थिति वाले जातकों का जीवन सभी सुख-सुविधाओं और विलासिता से भरपूर हो सकता है। वे रिश्तों में भी प्रगाढ़ हो सकते हैं और संबंधों और संबंधों में गहराई तलाश सकते हैं। हालाँकि, उन्हें दूसरों से अधिक अपेक्षा नहीं करनी चाहिए और अपनी इच्छाओं से अति उत्तेजित नहीं होना चाहिए",
    "venus9": "नवम भाव में शुक्र के प्रभाव के अनुसार जातक रिश्तों को निभाने और उन्हें संवारने में अच्छे होते हैं। वे साहसी और खोजी भी होते हैं। हालाँकि, उन्हें अपने दुस्साहस को बहुत आगे तक नहीं ले जाना चाहिए। नई चीजों में शामिल होना अच्छा है. लेकिन इसके लिए यह भी आवश्यक है कि कुछ चीजों को उनकी प्राचीन शुद्धता में बनाए रखा जाए।",
    "venus10": "दशम भाव में शुक्र की स्थिति वाले जातक पेशे में ऊंचे स्थान पर पहुंच सकते हैं। वे काफी लोकप्रिय भी हो सकते हैं. हालाँकि, उन्हें इस बारे में अत्यधिक चिंतित नहीं होना चाहिए कि दूसरे उनके बारे में क्या सोचते हैं और क्या बात करते हैं।",
    "venus11": "कुल मिलाकर हम कह सकते हैं कि, एक संपन्न और सुखद सामाजिक जीवन की सुविधा में कुंडली के ग्यारहवें भाव में को शुक्र ग्रह, आकर्षण और अनुग्रह द्वारा समर्थित किया गया है। इसके अलावा, जो भी राशि इस भाव में होगी, शुक्र ग्रह उस स्वभाव व वैयक्तिक आकर्षण को बढ़ावा देगा",
    "venus12": "कुल मिलाकर कहा जा सकता है कि, बारहवें भाव में शुक्र से प्रभावित जातक, अपने धन को शुभ कार्यों में खर्च करके आनंद का अनुभव करते हैं। इस भाव का शुक्र ग्रह जातक को, काम क्रीड़ा में निपुणता प्रदान करता है। साथ ही ऐसे जातक विपरीत लिंगियों के आकर्षण का केंद्र होते हैं। वें जातक अपने आचरण से सबको प्रसन्न रखने का प्रयास करते हैं और कामयाब भी होते हैं",

    "mars1": "आप उग्र और आक्रामक हैं. साथ ही आप सक्रिय और गतिशील रहते हैं। मूल बात यह है कि, आपको अपनी ऊर्जा पर नियंत्रण रखना होगा और इसका सकारात्मक, रचनात्मक और उत्पादक ढंग से उपयोग करना होगा। इसके अलावा, आपको अपनी गतिविधियों के लिए अधिक संगठित और योजनाबद्ध होने की आवश्यकता है। यदि आप असंगठित तरीके से काम करते हैं, तो आपको वांछित सफलता मिलने की संभावना नहीं है। लेकिन अगर आप सही प्लानिंग के साथ काम करेंगे तो आप कहीं भी जा सकते हैं।",
    "mars2": "दूसरे भाव में मंगल की स्थिति वाले जातक शेयर बाजार, ट्रेडिंग जैसे सट्टा क्षेत्रों में अच्छा प्रदर्शन कर सकते हैं। वे एक अच्छे इंसान भी हो सकते हैं और अपने रिश्तों के साथ पूरा न्याय कर सकते हैं। हालाँकि, एक कारक जो उन्हें निराश करता है वह है उनका बुरा स्वभाव। वे अपने व्यवहार में अधिक संयमित रहकर और पैसे के प्रति कम लगाव रखकर अपनी सफलता को अधिकतम कर सकते हैं।",
    "mars3": "तीसरे भाव में मंगल ग्रह के जातक विचार, ऊर्जा और जानकारी से भरपूर होते हैं। हालाँकि, उन्हें इसका उपयोग अच्छे कारणों से करना चाहिए। उन्हें अपने गुस्से पर नियंत्रण रखना चाहिए और किसी भी बात को लेकर उग्र नहीं होना चाहिए।",
    "mars4": "जिन जातकों के चतुर्थ भाव में चंद्रमा होता है वे भावुक और पारिवारिक होते हैं। हालाँकि, वे जीवन में अधिक प्रभावी होंगे यदि वे अपनी भावनात्मक निर्भरता को कम कर सकें और व्यावहारिकता के कुछ तत्वों को अपना सकें।",
    "mars5": "वैदिक ज्योतिष के अनुसार , जन्म कुंडली में मंगल ग्रह व्यक्ति के जीवन में एक प्रमुख भूमिका निभाता है। अशुभ ग्रह होने के कारण यह व्यक्ति पर नकारात्मक और सकारात्मक दोनों तरह से प्रभाव डालता है। पंचम भाव में स्थित मंगल जातक को रचनात्मक, बुद्धिमान, प्यारा और रोमांटिक बनाता है लेकिन जातक को आत्मकेंद्रित, अपमानजनक और आक्रामक बनाने के लिए भी जिम्मेदार होता है। समीकरण को संतुलित करने के लिए अपने कार्यों पर नियंत्रण रखना चाहिए और प्रेम संबंधों को लेकर सतर्क रहने की सलाह दी जाती है। इसके अलावा मंगल आपको ज्ञान और आर्थिक भाग्य भी प्रदान करता है।",
    "mars6": "पेशेवर होना अच्छा है. लेकिन फिर यह बुनियादी मानवता की कीमत पर नहीं आना चाहिए। नियोक्ता या बॉस के लिए अपने कर्मचारियों से काम करवाना आवश्यक है। लेकिन दूसरों के स्वाभिमान को पूरी तरह से नजरअंदाज करना खतरनाक हो सकता है और जातकों को अलोकप्रिय बना सकता है। इसलिए, प्रगति और मानवता तथा कार्य और जीवन में उचित संतुलन होना चाहिए।",
    "mars7": "जिन व्यक्तियों के सातवें घर में मंगल होता है, वे अपने जीवन में उतार-चढ़ाव दोनों का अनुभव करते हैं। यह व्यक्ति को अपने जीवन की बाधाओं को दूर करने के लिए शारीरिक और मानसिक दोनों शक्ति प्रदान करता है। सातवें घर में मंगल की उपस्थिति जातकों को ढेर सारी खुशियों के साथ एक अद्भुत प्रेम जीवन प्रदान करती है। लेकिन जब यह युति नकारात्मक प्रभाव पैदा करती है, तो यह जातकों के रिश्तों को बहुत नुकसान पहुंचाती है और उनके प्रेम जीवन में दर्दनाक घटनाओं को जन्म देती है।",
    "mars8": "आठवें भाव में मंगल की स्थिति वाले जातक अत्यधिक भावुक और महत्वाकांक्षी हो सकते हैं। वे अपनी अधिकांश महत्वाकांक्षाएं प्राप्त करने में सक्षम हो सकते हैं। हालाँकि, उन्हें दूसरों पर कम हावी होने की जरूरत है और उन्हें अपने तरीके से चलने देना चाहिए। अगर वे ऐसा करने में सफल हो गए तो उन्हें बड़ी सफलता मिल सकती है।",
    "mars9": "नौवें घर में मंगल ग्रह के जातक   मिलनसार होंगे और यात्रा और अन्वेषण करना पसंद करेंगे। हालाँकि, उन्हें अपने दुस्साहस में बहुत सावधान रहना चाहिए। इसके अलावा, उन्हें अपनी मान्यताओं और आस्था को लेकर कम कठोर होने की जरूरत है।",
    "mars10": "दशम भाव में मंगल की स्थिति वाले जातकों में मंगल की अग्नि होगी। इसका उपयोग पेशे में उचित रूप से किया जा सकता है और परिणामस्वरूप जातक बहुत ऊंचे स्थान पर पहुंच सकते हैं। हालाँकि, इन जातकों को लोगों के साथ व्यवहार करते समय बहुत सावधान रहना होगा अन्यथा इनकी उतनी उन्नति नहीं हो पाएगी।",
    "mars11": "ग्यारहवें घर में मंगल आपको एक अच्छा टीम खिलाड़ी और एक अच्छा योजनाकार बनाता है जो लक्ष्यों को प्राप्त करने के लिए लक्ष्य निर्धारित कर सकता है;  लोग आपको एक प्रभावशाली व्यक्तित्व के रूप में देखते हैं।  ग्यारहवें घर में सकारात्मक मंगल आपको एक बड़ा सामाजिक नेटवर्क देता है।  इस स्थिति में मंगल गुरु मंगल योग बना सकता है जो आपको धनवान और समृद्ध बना सकता है।",
    "mars12": "जातकों की कुंडली के 12वें घर में मंगल आपको दुश्मनों और आपके परिवार और रिश्तेदारों के कई लोगों के बारे में चेतावनी दे सकता है जो आपके जीवनसाथी के साथ रिश्ते को खराब करने की कोशिश कर रहे होंगे। हालाँकि, पति-पत्नी तर्कशील भी हो सकते हैं और बंधन और विवाह की रक्षा के लिए छिपे हुए दुश्मनों को चुनौती दे सकते हैं । हालाँकि, 12वें घर में रहते हुए मंगल आपके विवाह में उच्च यौन अपेक्षाएँ ला सकता है, जिससे आप हर बार  उस पूर्ण यौन संतुष्टि का आनंद या अनुभव नहीं कर पाएंगे ।",

    "jupiter1": "आप बुद्धिमान और आध्यात्मिक होंगे। आप प्रबुद्ध हो जायेंगे. आपमें सकारात्मकता और उत्साह भी भरपूर है। यदि आप इस दिशा में प्रयास करते हैं तो आपका व्यक्तित्व बहुत समृद्ध हो सकता है। हालाँकि, आपको दूसरों के साथ व्यवहार करते समय सतर्क रहने की आवश्यकता है। यह अच्छी बात नहीं होगी यदि आप यह सोचकर किसी की मदद करते हैं कि उसे इसकी ज़रूरत है जबकि वास्तव में, वह इसे घुसपैठ या हस्तक्षेप के रूप में देख रहा है।",
    "jupiter2": "दूसरे घर में बृहस्पति निवासियों को बहुत समृद्धि और प्रचुरता देगा। और स्वदेशी लोग न केवल इन सुखों का आनंद लेंगे, बल्कि उन्हें पसंद भी करेंगे और उनकी सराहना भी करेंगे। बहरहाल, स्वदेशी को इन सुविधाओं पर निर्भर होकर विकास नहीं करना चाहिए। उन्हें सांसारिक सुखों में अत्यधिक लिप्त होने के साथ-साथ अस्वास्थ्यकर भोजन खाने से भी बचना चाहिए।",
    "jupiter3": "बृहस्पति आध्यात्मिक गुरु हैं। जब यह तीसरे भाव में रहता है तो जातक गतिशील, सशक्त, दूरदर्शी होते हैं। हालाँकि, उन्हें अधिक ध्यान केंद्रित करने की आवश्यकता होगी। केवल एक विशिष्ट लक्ष्य ही हमारी ऊर्जा को दिशा दे सकता है और हमें चमत्कार करने में सक्षम बना सकता है। और निश्चित रूप से तीसरे घर में बृहस्पति के जातक ऐसा कर सकते हैं।",
    "jupiter4": "जब बृहस्पति चौथे घर में आता है, तो यह उन्हें पर्याप्त धन, भाग्य, ज्ञान देता है और उनके पतन को सकारात्मक रूप से दूर करने में उनका समर्थन भी करता है। जातक अपनी ईमानदारी, देखभाल, वफादारी, आत्म-नियंत्रण और दृढ़ संकल्प के लिए जाने जाते हैं। व्यक्तियों के चौथे घर में बृहस्पति  उन्हें सभी आवश्यक सुख-सुविधाएं प्रदान करता है और उनकी शिक्षा को आकार देने में भी महत्वपूर्ण भूमिका निभाता है।",
    "jupiter5": "जिन जातकों के  पंचम भाव में बृहस्पति होता  है वे खुश, हंसमुख, चंचल और कुल मिलाकर स्वस्थ होते हैं। वे रिश्तों में अधिकतर अच्छे होते हैं। हालाँकि, उन्हें अपने अहंकार के प्रति सावधान रहना चाहिए। यदि उनका अहंकार बढ़ जाता है, तो इससे उन्हें गंभीर समस्याएँ और कठिनाइयाँ हो सकती हैं।",
    "jupiter6": "छठे भाव में बृहस्पति की स्थिति वाले जातक बहुत अच्छे कर्मचारी होते हैं। वे संपूर्ण पेशेवर हो सकते हैं. उनकी वास्तविकता संभावना बन सकती है यदि वे आलोचना के प्रति कम संवेदनशील हो जाएं और दूसरों की आलोचना को अधिक स्वस्थ और रचनात्मक तरीके से स्वीकार करें।",
    "jupiter7": "सातवें घर में बृहस्पति की उपस्थिति  जातकों को रिश्तों में उदार और उदार बनाती है। इन्हें जीवन में प्रचुर धन, बुद्धि, ज्ञान और सौभाग्य भी मिलता है। इस स्थान वाले जातक अत्यधिक जिम्मेदार, ईमानदार और दूसरों के प्रति उचित सम्मान रखने वाले होते हैं।  हालाँकि, 7वें घर में बृहस्पति का होना  दोधारी तलवार की तरह है, जो जातक पर नकारात्मक प्रभाव भी डाल सकता है।",
    "jupiter8": "आठवें भाव में बृहस्पति के जातक भव्य, नैतिक, कुशल और कुशल होते हैं। उनमें अपार संभावनाएं हैं. हालाँकि, यदि वे अधिक खुले और मिलनसार हैं, तो उनकी क्षमता वास्तविक होने की अधिक संभावना है।",
    "jupiter9": "नवम भाव में बृहस्पति की स्थिति वाले जातक बुद्धिमान और ज्ञानी होते हैं। वे अमीर और सफल भी हैं। वे अपने करियर को आगे बढ़ाने के लिए दूर-दराज के स्थानों पर जा सकते हैं। हालाँकि, उन्हें सावधान रहना चाहिए कि वे अपनी बढ़ती किस्मत में अपने दोस्तों और परिवार के सदस्यों को शामिल न करें।",
    "jupiter10": "बृहस्पति वैभव का प्रतीक है। दसवां घर पेशे और व्यवसाय का प्रतीक है। इसलिए, जब बृहस्पति दसवें घर में स्थित होता है, तो इसका मतलब पेशे और जीवन के अन्य क्षेत्रों में उच्च सफलता हो सकता है। हालाँकि, जातकों को दूसरों की कीमत पर खुद को अनावश्यक रूप से अधिक महत्व देने के प्रति सावधान रहना होगा।",
    "jupiter11": "बृहस्पति को उपचय यानि संचय का घर भी कहा जाता है। यह बुद्धि के साथ सौभाग्य लाता है। यह कानून, विवाह, अभिभावकों और मित्रों का प्रतिनिधित्व करता है। यह खेल कौशल, विज्ञान, ज्ञान और अधिकार को इंगित करता है। कुंडली में शुभ होने पर बृहस्पति अपने जातकों को समृद्ध धन का आशीर्वाद देता है। हालाँकि, कुंडली में अशुभ होने पर यह उन्हें अति आत्मविश्वासी और गैर-जिम्मेदार बना देता है। ग्यारहवें घर को मित्रों के घर के रूप में भी जाना जाता है क्योंकि यह मित्रों, समूहों और सभी प्रकार के संगठनों या क्लबों को दर्शाता है। यह दर्शाता है कि इसके मूल निवासी सामाजिक परिस्थितियों में कैसे बातचीत करेंगे और घुलमिल जाएंगे। यह उनके मानवीय पहलू, दान और सामाजिक उद्देश्य के लिए स्वयंसेवा को नियंत्रित करता है। यह उस सामाजिक क्षेत्र को भी दर्शाता है जिसमें उनकी स्वयंसेवा में रुचि हो सकती है। ग्यारहवें घर में बृहस्पति जातक के जीवन में अपार भाग्य ला सकता है। उनके पास बहुत सारा धन जमा हो सकता है और उनके मित्रों का एक बड़ा समूह भी हो सकता है।",
    "jupiter12": "मूल निवासी उसी जुनून और प्रयास का उपयोग करते हैं जो वे खुद को लाभ पहुंचाने के लिए दूसरों की मदद करने में करते हैं। वे उसी प्रकार की ख़ुशी के हक़दार हैं और इसे पाने के लिए उन्हें कोई त्याग नहीं करना पड़ता। बारहवें घर में बृहस्पति राष्ट्रीय एकता का प्रतिनिधित्व करता है। दूसरे शब्दों में, हर किसी को राष्ट्रीय मुद्दों पर सक्रिय होने का अधिकार है। यह व्यक्तियों को एक टीम के रूप में काम करने के तरीके के बारे में शिक्षित करने का एक शानदार तरीका भी हो सकता है।",

    "saturn1": "जातकों को अपनी क्षमताओं का सर्वोत्तम उपयोग करना चाहिए। वे अपनी गंभीरता को कुछ हद तक कम कर सकते हैं, जिससे उन्हें जीवन में अधिक प्रभावी बनने में मदद मिल सकती है। यदि वे उचित सलाह का पालन करें तो वे चमत्कार कर सकते हैं।",
    "saturn2": "दूसरे भाव में शनि की स्थिति से जातकों को  आर्थिक समस्याओं का सामना करना पड़ सकता है। हालाँकि, वे परिस्थितियों के प्रति अनुशासित और सख्त रहकर और परिदृश्य का बहादुरी से सामना करके अपनी बाधाओं और कमियों को दूर करने में सक्षम होंगे।",
    "saturn3": "कुल मिलाकर, तीसरे भाव में, यदि शनि ग्रह के प्रभाव से ऐसे जातक, कड़ी मेहनत करते हैं, और अपने भाग्य बदलने की ताकत रखते हैं। इस भाव में शनि की स्थिति जातक के वैवाहिक जीवन में सहयोग प्रदान करता है। यह जातक के जीवनसाथी के साथ एक मजबूत संबंध बनाने में भी सहायक होता है। ज्योतिष के अनुसार जातक का वैवाहिक जीवन तो सफल हो सकता है, लेकिन हो सकता है कि शनि का प्रभाव करियर और व्यवसाय को लेकर उतना अधिक अच्छा न हो जितना आप सोचते हों। इसके अलावा तीसरे भाव में शनि ग्रह जातक के बिल-चाल को भी प्रभावित करता हैं। इसके साथ ही जातक अपनी पढ़ाई भी पूरी नहीं कर पाते। परन्तु यदि, ज्योतिष के बताए गए उपायों को सही तरीके से करें तो शनि ग्रह के नकारात्मक प्रभावों से बचाव किया जा सकता है।",
    "saturn4": "शनि एक अशुभ ग्रह है और व्यक्तियों पर इसके बुरे प्रभाव के लिए व्यापक रूप से जाना जाता है। हालाँकि, व्यक्ति जीवन में शनि के सकारात्मक और नकारात्मक दोनों प्रभावों का अनुभव करते हैं। शनि का कार्मिक प्रभाव व्यक्ति के जीवन को धन, बुद्धि और विलासितापूर्ण सुख-सुविधाओं से युक्त बनाने में महत्वपूर्ण भूमिका निभाता है। जन्म कुंडली में शनि की उपस्थिति व्यक्तियों को अहंकारी, शांत और संदिग्ध बनाती है, लेकिन उनके घर की स्थिति के आधार पर, यह अनुकूल परिणाम भी प्रदान करता है, जो इन जातकों को शांतिपूर्ण, बुद्धिमान, तेज, समृद्ध और आध्यात्मिक बनाता है।",
    "saturn5": "पंचम भाव में शनि के जातक चमत्कार कर सकते हैं लेकिन उन्हें अपने आंतरिक प्रतिरोध और कठोरता पर काबू पाना होगा। उन्हें जीवन से गंभीरता को हटाकर अधिक आनंद की ओर बढ़ना होगा। यदि जीवन पूर्णतः आनंदमय नहीं है, तो यह पूर्णतया उबाऊ भी नहीं है।",
    "saturn6": "छठे भाव में शनि की स्थिति वाले जातक  सफल व्यक्ति हो सकते हैं। वे पेशेवर और व्यक्तिगत दोनों मोर्चों पर वास्तव में ऊंचा उठ सकते हैं। लेकिन उन्हें चीज़ों को लेकर ज़्यादा गंभीर होना बंद करना होगा। इन जातकों को यह समझना चाहिए कि हर चीज़ परफेक्ट नहीं हो सकती और जीवन भी आनंद के बारे में ह",
    "saturn7": "सातवें भाव में शनि वाले जातक सुखी जीवन का अनुभव करते हैं। यह उन्हें धन, शक्ति, पद और समाज में प्रतिष्ठा प्रदान करता है। हालाँकि, अपनी अशुभ प्रकृति के कारण, शनि व्यक्तियों के जीवन में प्रतिकूलताएँ ला सकता है, विशेषकर उनके विवाहित जीवन में। इसके अलावा, शनि का कर्म प्रभाव जातकों को तनावग्रस्त रखता है।",
    "saturn8": "आठवें घर में शनि के कारण जातकों के जीवन में मुख्य बाधाओं में से एक परिवर्तन के प्रति उनका दृष्टिकोण हो सकता है। यदि वे इसका समाधान करने में सक्षम हैं, तो वे चमत्कार कर सकते हैं।",
    "saturn9": "नौवें घर में शनि वाले लोग छोटी उम्र से ही समर्पित और मेहनती होते हैं।  वे अपने जीवन पर बहुत केंद्रित होते हैं और उनके जीवन का एक निश्चित रास्ता होता है जिसके द्वारा वे एक शानदार करियर बनाते हैं।  इन जातकों को अपने करियर में सफल वृद्धि मिलेगी।",
    "saturn10": "बृहस्पति वैभव का प्रतीक है। दसवां घर पेशे और व्यवसाय का प्रतीक है। इसलिए, जब बृहस्पति दसवें घर में स्थित होता है, तो इसका मतलब पेशे और जीवन के अन्य क्षेत्रों में उच्च सफलता हो सकता है। हालाँकि, जातकों को दूसरों की कीमत पर खुद को अनावश्यक रूप से अधिक महत्व देने के प्रति सावधान रहना होगा।",
    "saturn11": "एक बार जब आप कड़ी मेहनत और स्वयं प्रयास करते हैं, तो 11वें घर में शनि आपकी आशाओं और इच्छाओं को पूरा करता है।  इस घर में शनि किसी भी अन्य घर की तुलना में जल्दी परिणाम देता है।  यह स्थिति आपको जोड़-तोड़ कौशल प्रदान करती है और आप एक सफल राजनेता या व्यवसायी बन सकते हैं जो दुनिया भर में जीत हासिल कर सकता है।",
    "saturn12": "12वें घर में शनि: व्यक्ति को धर्मार्थ या पर्दे के पीछे के कार्यों के प्रति जिम्मेदारी की मजबूत भावना का अनुभव हो सकता है।  कारावास, अलगाव, या छिपे हुए शत्रुओं से संबंधित चुनौतियाँ उत्पन्न हो सकती हैं लेकिन व्यक्तिगत विकास के अवसर प्रदान करती हैं।",

    "rahu1": "वैदिक ज्योतिष में, राहु ग्रह को अक्सर ब्रह्मांड में नकारात्मक ऊर्जा और विघटनकारी शक्तियों से जोड़ा जाता है। जिन व्यक्तियों की कुंडली में राहु की स्थिति मजबूत है, उन्हें भ्रम, चिंता और अपने सच्चे मार्ग से अलग होने की भावना का अनुभव हो सकता है। यह ग्रह हमें हमारे लक्ष्यों और मूल्यों से भटका सकता है, और हमें नकारात्मक या विनाशकारी व्यवहार में शामिल होने के लिए मजबूर कर सकता है। हालाँकि, यह याद रखना महत्वपूर्ण है कि राहु का प्रभाव विकास और परिवर्तन के अवसर भी प्रदान कर सकता है। इसकी उपस्थिति को स्वीकार करके और इसके नकारात्मक प्रभावों को कम करने के लिए काम करके, व्यक्ति इस ग्रह की शक्ति का उपयोग करना सीख सकते हैं और इसका उपयोग खुद को अधिक सफलता और खुशी की ओर ले जाने के लिए कर सकते हैं। जबकि जागरूकता और सावधानीपूर्वक ध्यान देने से राहु एक चुनौतीपूर्ण शक्ति हो सकता है, इसके प्रभाव से निपटना और दूसरी तरफ मजबूत और अधिक पूर्ण होकर उभरना संभव है।",
    "rahu2": "दूसरे घर में, जो धन, परिवार और वाणी को नियंत्रित करता है, भ्रम के ग्रह राहु की स्थिति स्थानीय लोगों को वित्तीय समृद्धि की स्थिति में डाल सकती है। हालाँकि, राहु एक अशुभ ग्रह है, इसलिए इसका स्थानीय लोगों के जीवन पर नकारात्मक प्रभाव पड़ सकता है। इसलिए, दूसरे घर में राहु वाले लोगों के लिए यह महत्वपूर्ण है कि वे अपनी ताकत बनाएं और अपनी कमजोरियों से छुटकारा पाएं। इसके प्रतिकूल प्रभावों का प्रतिकार करने और यदि वांछित परिणाम नहीं मिल रहा है तो जीवन में आनंद बहाल करने के लिए राहु यंत्र का उपयोग करें।",
    "rahu3": "तीसरे घर में अशुभ राहु की स्थिति बहुत सहज या आसान नहीं है। जबकि तीसरे घर में कई अच्छे बिंदु हैं, वे राहु की गैर-सकारात्मक उपस्थिति से ग्रहण या अपवित्र हो रहे हैं। हालाँकि, अगर हम ज्योतिषीय तथ्यों को ध्यान में रखें और उसके अनुसार कार्य करें तो चीजों को बेहतर बनाया जा सकता है। ग्रहों की स्थिति संचित कर्मों के प्रभाव का प्रतीक है। लेकिन निश्चित रूप से, हमारे पास इसे बदलने का विकल्प और शक्ति है।",
    "rahu4": "चतुर्थ भाव में स्थित राहु किसी के जीवन को बनाने या नष्ट करने दोनों में महत्वपूर्ण भूमिका निभाता है। राहु के अधिकांश प्रभाव अशुभ होते हैं और वे प्रतिकूल विकास ला सकते हैं जिससे आध्यात्मिक मूल्यों का ह्रास हो सकता है। हालाँकि, राहु का नकारात्मक प्रभाव काफी हद तक कम हो सकता है।",
    "rahu5": "राहु भ्रम के बारे में है. यह धोखे के बारे में है. पंचम भाव में राहु के जातक प्रसिद्धि और गौरव की आकांक्षा रखते हैं लेकिन वे अपनी खोज में कुछ हद तक आगे बढ़ सकते हैं। वे धोखेबाज राहु के बहकावे में आ सकते हैं, इसलिए वे अपने लक्ष्यों को पूरा करने के लिए गलत तरीके अपना सकते हैं। जैसा कि हम जानते हैं कि अधर्म का अंततः पतन होना तय है, इसलिए इन जातकों को इस संबंध में बहुत सावधान रहने की आवश्यकता है। वास्तव में, साध्य और साधन दोनों ही नेक होने चाहिए।",
    "rahu6": "राहु एक अशुभ ग्रह है, जिसे काफी हद तक नकारात्मक माना जाता है। छठे भाव में इसकी स्थिति जातकों के लिए मिश्रित परिणाम पैदा करेगी। वे संघर्षों और कठिन परिस्थितियों का प्रबंधन करने और जरूरतमंदों को सहायता प्रदान करने में अच्छे हैं। हालाँकि, कुछ उत्तेजक स्थितियों में, वे विघटनकारी व्यवहार प्रदर्शित कर सकते हैं। उन्हें अच्छाई और खुशी में विश्वास खोने की संभावित संभावना का समाधान करना होगा।",
    "rahu7": "सातवें घर में राहु वाले व्यक्तियों को सुख और दुख का मिश्रित अनुभव मिलने की अधिक संभावना है। यदि वे अपने वैवाहिक जीवन का निर्माण करने में सक्षम हैं, तो वे आनंद और खुशी का आनंद ले सकते हैं। हालाँकि, यदि उनका वैवाहिक जीवन ख़राब हो जाता है, तो यह गंभीर कठिनाइयों का कारण बन सकता है।  व्यक्ति की कुंडली में राशि चक्र की प्रकृति के आधार पर राहु का लाभकारी प्रभाव हानिकारक में बदल सकता है। परिणामस्वरूप, व्यक्ति अपने ही विचारों में खोए रह सकते हैं, उनकी इच्छाएँ अधूरी रह सकती हैं और कभी-कभी उन्हें महसूस हो सकता है कि जीवन निरर्थक और उद्देश्यहीन है",
    "rahu8": "अष्टम भाव में राहु के जातक भले ही रहस्यमयी न हों लेकिन वे जटिल रहस्यों को सुलझा सकते हैं। जातकों में खुफिया एजेंसियों, जासूसों आदि जैसे व्यवसायों में ऊंचा उठने की क्षमता होती है। वे शोध कार्य में भी अच्छा प्रदर्शन कर सकते हैं। हालाँकि, उन्हें अनावश्यक विवादों और कानूनी मामलों से बचना चाहिए। वे अपनी ताकत पर भरोसा कर सकते हैं और अपनी कमजोरियों पर काम कर सकते हैं।",
    "rahu9": "नौवें घर में राहु की स्थिति वाले जातक ज्ञान में बहुत ऊंचे स्थान पर जा सकते हैं। हालाँकि, उन्हें परिवार में समस्याओं का सामना करना पड़ सकता है, विशेषकर अपने पिता के साथ। इसके अलावा इन्हें अपनी संतान से भी परेशानी का सामना करना पड़ सकता है। उन मामलों में उन्हें सावधान रहने की जरूरत होगी.",
    "rahu10": "दशम भाव में राहु की स्थिति वाले जातकों के पास अच्छे व्यावसायिक कौशल होते हैं। उनमें साहित्यिक रुचि भी हो सकती है। हालाँकि, इन्हें जीवन में सफलता बाद में ही मिलती है। महत्वाकांक्षी होना अच्छी बात है लेकिन जातकों को लक्ष्य हासिल करने के लिए गलत तरीकों का इस्तेमाल करने से बचना चाहिए।",
    "rahu11": "ग्यारहवां घर कमाई, लाभ, भाग्य, समृद्धि और प्रचुरता का प्रतिनिधित्व करता है। इससे यह भी पता चलता है कि जातक अपनी महत्वाकांक्षाओं या इच्छाओं को हासिल कर पाएगा या नहीं। राहु व्यक्ति को धोखेबाज, आलसी और सामाजिक बनाता है। इससे ग्यारहवें घर में राहु वाले जातक अपने आर्थिक लाभ के लिए अपने दोस्तों को धोखा देते हैं। हालाँकि, उन्हें अपनी मेहनत से अपने सपनों को हासिल करने का सुझाव दिया जाता है।",
    "rahu12": "बारहवें घर में राहु एक उत्साही स्वभाव और दान और स्वयंसेवक को देने की इच्छा का संकेत देता है। इसमें चिकित्सा और कानूनी मुद्दों से लाभ उठाने, विदेशी देशों की यात्रा करने और व्यवसाय शुरू करने, और तेजी से लाभ का अनुभव करने या भाग्य अर्जित करने के अवसर भी हैं। हालाँकि, दंड और दंड के कारण इसमें वित्तीय कठिनाई हो सकती है, और पिछले कार्यों, कर्मों और कठिनाइयों के कारण आपके लिए ऋण से बाहर निकलना मुश्किल हो सकता है। आपका स्वभाव लाभप्रद रहेगा, लेकिन दूसरे आपको हल्के में लेंग",

    "ketu1": "केतु राहु की तार्किक व्याख्या है। यह राहु द्वारा किए गए नुकसान को ठीक कर सकता है। यदि राहु आपको बुराई की ओर ले जाता है, तो केतु आपको यह एहसास दिलाने की क्षमता रखता है कि आप गलत जगह पर हैं। लेकिन ये बहुत आसानी से नहीं होता. केतु कुछ घटनाक्रमों को गति देगा, जो आपको बुरी तरह परेशान करेगा। हालाँकि, देर-सबेर आपको यह एहसास होने की संभावना है कि आपको बदलने की जरूरत है। अच्छे बनकर ही आप खुश रहेंगे।",
    "ketu2": "दूसरा भाव धन और वित्त के बारे में है। और केतु ग्रह बुराई से प्रस्थान और आध्यात्मिक और नैतिक की ओर बदलाव के बारे में है। इस प्रकार, जब केतु दूसरे घर में स्थित होता है, तो यह ज्ञान और बुद्धि का कारण बन सकता है। यह ज्ञान तब आ सकता है जब धन और वित्त के प्रति लगाव (जैसा कि दूसरे घर द्वारा दिखाया गया है) उस ज्ञान को जन्म दे सकता है जो मुक्ति और खुशी का मार्ग है।",
    "ketu3": "तीसरे भाव में केतु ग्रह वाले जातक शारीरिक रूप से स्वस्थ, हष्ट-पुष्ट, साहसी, उदार तो होते ही हैं साथ ही ऐसे जातक कुशाग्र बुद्धि और संपन्न भी होते हैं। इसके अलावा इन जातकों को कंधे तथा बाहों से संबंधित समस्या का सामना करना पड़ सकता है। इसके अतिरिक्त तीसरे भाव का केतु इन जातकों में मानसिक अशांति, तथा निराशाजनक विचारधारा की स्थिति भी उत्पन्न करता है।",
    "ketu4": "चतुर्थ भाव में केतु की उपस्थिति जातकों पर प्रतिकूल और सकारात्मक दोनों प्रभाव डालती है। केतु जातकों के जीवन को आकार देने में महत्वपूर्ण भूमिका निभाता है और यह आध्यात्मिकता का पक्षधर है। आपके शिक्षक, गुरु या गुरु की उपस्थिति आपकी सफलता में महत्वपूर्ण भूमिका निभाती है। वैदिक ज्योतिष के अनुसार, केतु का प्रभाव जातक के जीवन में लगभग सात वर्षों तक रहता है और यदि यह चंद्रमा के साथ हो तो अधिक प्रतिकूल परिणाम देता है। हालाँकि, चौथे घर में केतु के अशुभ प्रभाव को दूर किया जा सकता है यदि आप जानते हैं कि इससे कैसे निपटना है। ध्यान केंद्रित और स्पष्ट होना बहुत जरूरी है।",
    "ketu5": "इसलिए, पंचम भाव में केतु वाले जातक कई भाषाएं जान सकते हैं और संचार कौशल में अच्छे हो सकते हैं। हालाँकि, उन्हें बच्चा पैदा करने में असमर्थता और नकारात्मकता की भावना जैसी समस्याओं का सामना करना पड़ सकता है। लेकिन अगर वे साहस और दृढ़ता से काम लें तो वे इन समस्याओं पर काबू पा सकते हैं। पांचवें घर में राहु के लिए सही उपचार का उपयोग करके , वे वास्तव में अच्छा कर सकते हैं।",
    "ketu6": "छठे भाव में केतु की स्थिति जातकों को विभिन्न प्रकार की बीमारियों के प्रति संवेदनशील बनाएगी। किसी दुर्घटना का भी भय रहता है. हालाँकि, जातकों के पास दृढ़ इच्छाशक्ति और मानसिक ऊर्जा होगी, जिसका वे अपनी कठिनाइयों का समाधान करने के लिए भरपूर उपयोग कर सकते ह",
    "ketu7": "सातवें घर में केतु की स्थिति जातक पर सकारात्मक और नकारात्मक दोनों प्रभाव डालेगी। इससे उनके जीवन में ख़ुशी, प्यार, लगाव आ सकता है। हालाँकि, यह उनके व्यक्तिगत और व्यावसायिक जीवन दोनों में पतन का कारण बन सकता है। ऐसा हो सकता है कि इस स्थिति वाले जीवनसाथी के रिश्ते में दीर्घायु की कमी हो और वे बहुत पहले ही अलग हो जाएं। सातवें भाव में केतु के कारण जातक स्वभाव से क्रोधी हो सकते हैं। अगर उनकी आपस में नहीं बनती तो वे दूसरे व्यक्ति को गालियां भी दे सकते हैं। इस स्थिति वाले जातक दूसरों के प्रति द्वेष रख सकते हैं जो उन्हें नकारात्मक बना सकता है और उनके कष्टों को बढ़ा सकता है।",
    "ketu8": "आठवें भाव में केतु के जातकों को किसी भी दुर्घटना, बीमारी या दुर्घटना से सावधान रहना चाहिए क्योंकि जातक को इनमें से किसी का भी सामना करने की संभावना है। इसके अलावा, उनका आध्यात्मिक और आध्यात्मिक क्षेत्रों की ओर झुकाव हो सकता है। वे इसे विकसित कर सकते हैं और इसे अपनी सबसे मजबूत संपत्ति बना सकते हैं।",
    "ketu9": "नौवें घर में केतु के कारण जातकों का झुकाव परोपकारी और धर्मार्थ कार्यों की ओर हो सकता है। हालाँकि, कभी-कभी वे अनुभवहीन हो जाते हैं, जो उन्हें असुरक्षित बना सकता है। इसलिए, उन्हें वित्तीय और अन्य लेन-देन में बहुत सावधान रहना चाहिए अन्यथा उनका जीवन बहुत समस्याग्रस्त हो सकता है।",
    "ketu10": "दशम भाव में केतु होने पर जातक बुद्धिमान होते हैं। वे बहुत बुद्धिमान भी हो सकते हैं। हालाँकि, यदि दशम भाव में केतु अन्य ग्रहों के साथ प्रतिकूल संपर्क का सामना करता है , तो इससे गंभीर समस्याएं हो सकती हैं। जातकों को नैतिक मार्ग पर चलने की जरूरत है और समस्याओं और कठिनाइयों से अनुचित रूप से प्रभावित नहीं होना चाहिए। इस तरह वे एक सफल और खुशहाल जीवन जी सकते हैं।",
    "ketu11": "यदि हम कुंडली के ग्यारहवें भाव की बात करें तो यह भाव लाभ भाव होने के अलावा जातक का बाधा भाव भी माना जाता है। ग्यारहवां भाव मेष, कर्क, तुला और मकर राशियों के लिए बाधक साबित हो सकता है। कुंडली में ग्यारहवें भाव में अन्य ग्रहों की स्थिति और चाल से जातक के जीवन में आने वाली बाधाओं और कष्टों का अनुमान लगाया जा सकता है। यदि ग्यारहवें भाव में सकारात्मक ग्रह की स्थिति है, तो ऐसे जातक को कई अच्छे अवसर और कुछ समस्याएं मिल सकती हैं जिससे ये जातक आसानी से उभरने में सक्षम और सफल भी होंगे।",
    "ketu12": "12 वें घर में शनि:व्यक्ति को धर्मार्थ या पर्दे के पीछे के कार्यों के प्रति जिम्मेदारी की मजबूत भावना का अनुभव हो सकता है। कारावास, अलगाव, या छिपे हुए शत्रुओं से संबंधित चुनौतियाँ उत्पन्न हो सकती हैं लेकिन व्यक्तिगत विकास के अवसर प्रदान करती हैं।",

  }
  var a, c;


  a = document.getElementById("opt1").value;
  b = document.getElementById("opt2").value;


  if (a == "1" && b == "sun") {
    document.getElementById("text").innerHTML = data.sun1;
  }
  if (a == "2" && b == "sun") {
    document.getElementById("text").innerHTML = data.sun2;
  }
  if (a == "3" && b == "sun") {
    document.getElementById("text").innerHTML = data.sun3;
  }
  if (a == "4" && b == "sun") {
    document.getElementById("text").innerHTML = data.sun4;
  }
  if (a == "5" && b == "sun") {
    document.getElementById("text").innerHTML = data.sun5;
  }
  if (a == "6" && b == "sun") {
    document.getElementById("text").innerHTML = data.sun6;
  }
  if (a == "7" && b == "sun") {
    document.getElementById("text").innerHTML = data.sun7;
  }
  if (a == "8" && b == "sun") {
    document.getElementById("text").innerHTML = data.sun9;
  }
  if (a == "9" && b == "sun") {
    document.getElementById("text").innerHTML = data.sun9;
  }
  if (a == "10" && b == "sun") {
    document.getElementById("text").innerHTML = data.sun10;
  }
  if (a == "11" && b == "sun") {
    document.getElementById("text").innerHTML = data.sun11;
  }
  if (a == "12" && b == "sun") {
    document.getElementById("text").innerHTML = data.sun12;
  }

  else if (a == "1" && b == "moon") {
    document.getElementById("text").innerHTML = data.moon1;
  }
  else if (a == "2" && b == "moon") {
    document.getElementById("text").innerHTML = data.moon2;
  }
  else if (a == "3" && b == "moon") {
    document.getElementById("text").innerHTML = data.moon3;
  }
  else if (a == "4" && b == "moon") {
    document.getElementById("text").innerHTML = data.moon4;
  }
  else if (a == "5" && b == "moon") {
    document.getElementById("text").innerHTML = data.moon5;
  }
  else if (a == "6" && b == "moon") {
    document.getElementById("text").innerHTML = data.moon6;
  }
  else if (a == "7" && b == "moon") {
    document.getElementById("text").innerHTML = data.moon7;
  }
  else if (a == "8" && b == "moon") {
    document.getElementById("text").innerHTML = data.moon8;
  }
  else if (a == "9" && b == "moon") {
    document.getElementById("text").innerHTML = data.moon9;
  }
  else if (a == "10" && b == "moon") {
    document.getElementById("text").innerHTML = data.moon10;
  }
  else if (a == "11" && b == "moon") {
    document.getElementById("text").innerHTML = data.moon11;
  }
  else if (a == "12" && b == "moon") {
    document.getElementById("text").innerHTML = data.moon12;
  }

  else if (a == "1" && b == "mercury") {
    document.getElementById("text").innerHTML = data.mercury1;
  }
  else if (a == "2" && b == "mercury") {
    document.getElementById("text").innerHTML = data.mercury2;
  }
  else if (a == "3" && b == "mercury") {
    document.getElementById("text").innerHTML = data.mercury3;
  }
  else if (a == "4" && b == "mercury") {
    document.getElementById("text").innerHTML = data.mercury4;
  }
  else if (a == "5" && b == "mercury") {
    document.getElementById("text").innerHTML = data.mercury5;
  }
  else if (a == "6" && b == "mercury") {
    document.getElementById("text").innerHTML = data.mercury6;
  }
  else if (a == "7" && b == "mercury") {
    document.getElementById("text").innerHTML = data.mercury7;
  }
  else if (a == "8" && b == "mercury") {
    document.getElementById("text").innerHTML = data.mercury8;
  }
  else if (a == "9" && b == "mercury") {
    document.getElementById("text").innerHTML = data.mercury9;
  }
  else if (a == "10" && b == "mercury") {
    document.getElementById("text").innerHTML = data.mercury10;
  }
  else if (a == "11" && b == "mercury") {
    document.getElementById("text").innerHTML = data.mercury11;
  }
  else if (a == "12" && b == "mercury") {
    document.getElementById("text").innerHTML = data.mercury12;
  }

  else if (a == "1" && b == "venus") {
    document.getElementById("text").innerHTML = data.venus1;
  }
  else if (a == "2" && b == "venus") {
    document.getElementById("text").innerHTML = data.venus2;
  }
  else if (a == "3" && b == "venus") {
    document.getElementById("text").innerHTML = data.venus3;
  }
  else if (a == "4" && b == "venus") {
    document.getElementById("text").innerHTML = data.venus4;
  }
  else if (a == "5" && b == "venus") {
    document.getElementById("text").innerHTML = data.venus5;
  }
  else if (a == "6" && b == "venus") {
    document.getElementById("text").innerHTML = data.venus6;
  }
  else if (a == "7" && b == "venus") {
    document.getElementById("text").innerHTML = data.venus7;
  }
  else if (a == "8" && b == "venus") {
    document.getElementById("text").innerHTML = data.venus8;
  }
  else if (a == "9" && b == "venus") {
    document.getElementById("text").innerHTML = data.venus9;
  }
  else if (a == "10" && b == "venus") {
    document.getElementById("text").innerHTML = data.venus10;
  }
  else if (a == "11" && b == "venus") {
    document.getElementById("text").innerHTML = data.venus11;
  }
  else if (a == "12" && b == "venus") {
    document.getElementById("text").innerHTML = data.venus12;
  }

  else if (a == "1" && b == "mars") {
    document.getElementById("text").innerHTML = data.mars1;
  } else if (a == "2" && b == "mars") {
    document.getElementById("text").innerHTML = data.mars2;
  } else if (a == "3" && b == "mars") {
    document.getElementById("text").innerHTML = data.mars3;
  } else if (a == "4" && b == "mars") {
    document.getElementById("text").innerHTML = data.mars4;
  } else if (a == "5" && b == "mars") {
    document.getElementById("text").innerHTML = data.mars5;
  } else if (a == "6" && b == "mars") {
    document.getElementById("text").innerHTML = data.mars6;
  } else if (a == "7" && b == "mars") {
    document.getElementById("text").innerHTML = data.mars7;
  } else if (a == "8" && b == "mars") {
    document.getElementById("text").innerHTML = data.mars8;
  } else if (a == "9" && b == "mars") {
    document.getElementById("text").innerHTML = data.mars9;
  } else if (a == "10" && b == "mars") {
    document.getElementById("text").innerHTML = data.mars10;
  } else if (a == "11" && b == "mars") {
    document.getElementById("text").innerHTML = data.mars11;
  } else if (a == "12" && b == "mars") {
    document.getElementById("text").innerHTML = data.mars12;
  }

  else if (a == "1" && b == "jupiter") {
    document.getElementById("text").innerHTML = data.jupiter1;
  }
  else if (a == "2" && b == "jupiter") {
    document.getElementById("text").innerHTML = data.jupiter2;
  }
  else if (a == "3" && b == "jupiter") {
    document.getElementById("text").innerHTML = data.jupiter3;
  }
  else if (a == "4" && b == "jupiter") {
    document.getElementById("text").innerHTML = data.jupiter4;
  }
  else if (a == "5" && b == "jupiter") {
    document.getElementById("text").innerHTML = data.jupiter5;
  }
  else if (a == "6" && b == "jupiter") {
    document.getElementById("text").innerHTML = data.jupiter6;
  }
  else if (a == "7" && b == "jupiter") {
    document.getElementById("text").innerHTML = data.jupiter7;
  }
  else if (a == "8" && b == "jupiter") {
    document.getElementById("text").innerHTML = data.jupiter8;
  }
  else if (a == "9" && b == "jupiter") {
    document.getElementById("text").innerHTML = data.jupiter9;
  }
  else if (a == "10" && b == "jupiter") {
    document.getElementById("text").innerHTML = data.jupiter10;
  }
  else if (a == "11" && b == "jupiter") {
    document.getElementById("text").innerHTML = data.jupiter11;
  }
  else if (a == "12" && b == "jupiter") {
    document.getElementById("text").innerHTML = data.jupiter12;
  }

  else if (a == "1" && b == "saturn") {
    document.getElementById("text").innerHTML = data.saturn1;
  } else if (a == "2" && b == "saturn") {
    document.getElementById("text").innerHTML = data.saturn2;
  } else if (a == "3" && b == "saturn") {
    document.getElementById("text").innerHTML = data.saturn3;
  } else if (a == "4" && b == "saturn") {
    document.getElementById("text").innerHTML = data.saturn4;
  } else if (a == "5" && b == "saturn") {
    document.getElementById("text").innerHTML = data.saturn5;
  } else if (a == "6" && b == "saturn") {
    document.getElementById("text").innerHTML = data.saturn6;
  } else if (a == "7" && b == "saturn") {
    document.getElementById("text").innerHTML = data.saturn7;
  } else if (a == "8" && b == "saturn") {
    document.getElementById("text").innerHTML = data.saturn8;
  } else if (a == "9" && b == "saturn") {
    document.getElementById("text").innerHTML = data.saturn9;
  } else if (a == "10" && b == "saturn") {
    document.getElementById("text").innerHTML = data.saturn10;
  } else if (a == "11" && b == "saturn") {
    document.getElementById("text").innerHTML = data.saturn10;
  } else if (a == "12" && b == "saturn") {
    document.getElementById("text").innerHTML = data.saturn12;
  }

  else if (a == "1" && b == "rahu") {
    document.getElementById("text").innerHTML = data.rahu1;
  }
  else if (a == "2" && b == "rahu") {
    document.getElementById("text").innerHTML = data.rahu2;
  }
  else if (a == "3" && b == "rahu") {
    document.getElementById("text").innerHTML = data.rahu3;
  }
  else if (a == "4" && b == "rahu") {
    document.getElementById("text").innerHTML = data.rahu4;
  }
  else if (a == "5" && b == "rahu") {
    document.getElementById("text").innerHTML = data.rahu5;
  }
  else if (a == "6" && b == "rahu") {
    document.getElementById("text").innerHTML = data.rahu6;
  }
  else if (a == "7" && b == "rahu") {
    document.getElementById("text").innerHTML = data.rahu7;
  }
  else if (a == "8" && b == "rahu") {
    document.getElementById("text").innerHTML = data.rahu8;
  }
  else if (a == "9" && b == "rahu") {
    document.getElementById("text").innerHTML = data.rahu9;
  }
  else if (a == "10" && b == "rahu") {
    document.getElementById("text").innerHTML = data.rahu10;
  }
  else if (a == "11" && b == "rahu") {
    document.getElementById("text").innerHTML = data.rahu11;
  }
  else if (a == "12" && b == "rahu") {
    document.getElementById("text").innerHTML = data.rahu12;
  }

  else if (a == "1" && b == "ketu") {
    document.getElementById("text").innerHTML = data.ketu1;
  }
  else if (a == "2" && b == "ketu") {
    document.getElementById("text").innerHTML = data.ketu2;
  }
  else if (a == "3" && b == "ketu") {
    document.getElementById("text").innerHTML = data.ketu3;
  }
  else if (a == "4" && b == "ketu") {
    document.getElementById("text").innerHTML = data.ketu4;
  }
  else if (a == "5" && b == "ketu") {
    document.getElementById("text").innerHTML = data.ketu5;
  }
  else if (a == "6" && b == "ketu") {
    document.getElementById("text").innerHTML = data.ketu6;
  }
  else if (a == "7" && b == "ketu") {
    document.getElementById("text").innerHTML = data.ketu7;
  }
  else if (a == "8" && b == "ketu") {
    document.getElementById("text").innerHTML = data.ketu8;
  }
  else if (a == "9" && b == "ketu") {
    document.getElementById("text").innerHTML = data.ketu9;
  }
  else if (a == "10" && b == "ketu") {
    document.getElementById("text").innerHTML = data.ketu10;
  }
  else if (a == "11" && b == "ketu") {
    document.getElementById("text").innerHTML = data.ketu11;
  }
  else if (a == "12" && b == "ketu") {
    document.getElementById("text").innerHTML = data.ketu12;
  }
}
   
   let dasha = {
     "sunDasha":{
      "sunMahadasha": "सकारात्मक सूर्य महादशा प्रभाव सूर्य महादशा का प्रभाव भव्य होता है। यह आपको आपके करियर में बहुत ऊंचा स्थान दिलाता है और आपके व्यवसाय के राजस्व को सरलता से बढ़ा देता है। यदि आप राजनीति को करियर के रूप में लेना चाहते हैं तो सूर्य अत्यधिक अनुकूल है। यदि आप किसी प्रशासनिक पद पर जाते हैं तो बड़ी प्रशंसा अर्जित की जा सकती है। आप जहां भी जाते हैं, महादशा में सूर्य ने आपको जो व्यक्तित्व प्रदान किया है, वह सभी को मंत्रमुग्ध कर देता है। आपके आस-पास हर जगह सुखद और सकारात्मक परिणाम देखे जा सकते हैं। सूर्य महादशा आपको राजा जैसा जीवन देने के लिए सितारों को एक साथ लाती है। आपके जीवन में हर तरह की ख़ुशी होगी जिसकी आपको ज़रूरत है। महिमा, ज्ञान, आध्यात्मिकता, प्रसिद्धि, सामाजिक स्थिति, सम्मान, अधिकार, शक्ति, सम्मान कुछ चीजें हैं जो दशा के साथ आती हैं। आपकी मानसिकता बहुत व्यापक और व्यापक होगी और आप चीजों को पहले की तुलना में बहुत बेहतर रोशनी में देख पाएंगे। एक अच्छे सामाजिक स्थान और मान्यता के साथ-साथ अत्यधिक आशावादी व्यवहार की गारंटी है। नकारात्मक सूर्य महादशा प्रभाव यदि आपने पिछली दशा में कोई बुरा कार्य किया है तो नकारात्मक सूर्य महादशा का प्रभाव बढ़ जाएगा। आप अपने पास मौजूद सारी धन-संपत्ति खो सकते हैं। सूर्य के साथ आपके जीवन में अधिकार और प्रसिद्धि आती है, आपके चार्ट में सूर्य की गलत स्थिति के साथ, सारी प्रसिद्धि और नाम चला जाएगा। घोटाले और अपमान आपके जीवन में वास्तव में आम हो सकते हैं। चूँकि सूर्य एक उग्र ग्रह है इसलिए यह महत्वपूर्ण है कि आप शांत रहें, अन्यथा आपको अपने परिवार और साथियों के साथ समस्याओं का सामना करना पड़ेगा। आपके जीवन में कोई उपलब्धि न होने और जो आपके पास पहले से था उसके खोने के कारण बहुत दुख हो सकता है। आप अपने जीवन की लगभग हर चीज़ से अप्रसन्नता महसूस करेंगे। मानसिक तनाव, चिंता और सिरदर्द जैसी कई बीमारियाँ आपके शरीर को अपना घर बना सकती हैं। सूर्य महादशा के दौरान अत्यधिक सोच और बढ़े हुए तनाव के कारण आपको अवसाद और अत्यधिक तनाव होने की संभावना रहेगी। सूर्य की अग्नि आपको अत्यधिक आक्रामकता और अहंकार का शिकार बना सकती है। आप आसानी से कभी-कभार अपना आपा खो देंगे। इससे शत्रुओं की संख्या में वृद्धि हो सकती है। ",
      "sunAntardasha":"यदि कुंडली में सूर्य कारक ग्रह हो तो वह उच्च राशि का होता है और अशुभ प्रभाव से रहित होता है। यह अपनी दशा-अन्तर्दशा में शुभ फल देता है। जातक के धन में वृद्धि होती है; उसे पदोन्नति के अवसर मिलते हैं। जातक के मन में अशांति उत्पन्न होती है और उसे दुःख का अनुभव होता है।",
      "venusAntardasha": "सूर्य की महादशा में शुक्र की अन्तर्दशा होने पर जातकों के लिए यह समय थोड़ा कष्टकारी प्रतीत होता है। इस समय प्रेम संबंधों में, विशेषकर अपने जीवनसाथी के साथ, बड़े उतार-चढ़ाव का दौर चल रहा है। आप दोनों के बीच विवाद भी हो सकता है। ज्योतिषी सलाह देते हैं कि इस समय आपको बहुत सावधानी बरतनी चाहिए। पैसों के मामले में भी आपको कहीं भी निवेश करने से पहले बहुत सोच-समझकर और सावधानी से करना चाहिए। क्योंकि यहां कुछ परेशानियां उत्पन्न हो सकती हैं और आर्थिक नुकसान भी हो सकता है।",
      "saturnAntardasha": "सूर्य की महादशा के दौरान शनि की अंतर्दशा जातक के लिए बहुत ही परेशान करने वाला योग बना सकती है। क्योंकि पिता का प्रतिनिधित्व करने वाले सूर्य के प्रभाव से पिता के स्वास्थ्य में परेशानी हो सकती है या पिता के साथ विचारों में मतभेद हो सकता है। जिसके कारण आपके और आपके पिता के बीच रिश्ते खराब हो सकते हैं। ऐसे में आपको अपने पिता के साथ बेहतर रिश्ते बनाए रखने की कोशिश करनी चाहिए। कार्यस्थल पर आपके अपने वरिष्ठों के साथ जो भी मतभेद होंगे, मतभेद बढ़ सकते हैं। आपके शत्रु भी आपको काफी परेशान कर सकते हैं।",
      "rahuAntardasha": "सूर्य की महादशा में राहु की अंतर्दशा काफी परेशान करने वाली हो सकती है। खासतौर पर इससे आपकी सेहत को लेकर कुछ परेशानियां हो सकती हैं। इसके साथ ही ज्योतिषी का अनुमान है कि इस बार जातक को बदनामी और कलंक का भी सामना करना पड़ सकता है। इस समय कोई छिपा हुआ शत्रु परेशानी का कारण बन सकता है। यह समय आपके लिए अपमान का समय होगा और आपको इस बात का ध्यान रखना होगा। आप काफी डिप्रेशन में भी जा सकते हैं. इस समय आप कोई गलत निर्णय ले सकते हैं, जो भविष्य में आपके लिए कई कठिनाइयों का कारण बन सकता है। ऐसे में आपको सावधान रहना होगा क्योंकि राहु की दशा कई बार व्यक्ति को परेशान कर देती है।",
      "moonAntardasha": "यदि सूर्य की महादशा में चंद्रमा चल रहा हो तो जातक को बहुत धन लाभ होता है। यह मान - सम्मान में वृद्धि का संकेत देता है। वैदिक ज्योतिष में सूर्य को पिता कारक माना गया है। एस्ट्रोयोगी ज्योतिषी का कहना है कि यह आपके पिता के साथ अच्छे संबंध स्थापित करने में एक आवश्यक भूमिका निभाता है। इसके अलावा सूर्य का संबंध आत्मा से भी है। वहीं दूसरी ओर चंद्रमा का संबंध मन से होता है। अंतर्दशा और महादशा के इस संयोग के कारण जातक को माता - पिता का भरपूर सहयोग मिलता है। इससे जातक अपने करियर में आगे बढ़ता है और उसे पदोन्नति भी मिलती है।",
      "mercuryAntardasha": "ज्योतिषियों के अनुसार सूर्य की महादशा में चन्द्रमा की अन्तर्दशा बहुत अच्छी मानी जाती है। विशेषकर इस समय कार्यक्षेत्र में पदोन्नति की संभावना अधिक है। यदि जातक व्यवसाय करता है तो व्यवसाय में उन्नति होती है। विदेश यात्रा की संभावना है और किसी ऊंचे कद वाले व्यक्ति से नाम और पहचान मिलने की भी संभावना है। इस समय आप सही निर्णय ले सकते हैं क्योंकि सूर्य और बुध दोनों मिलकर आपको ऐसा करने में सक्षम बनाते हैं। बुद्धि का कारक बुध व्यक्ति को बुद्धि और ज्ञान से परिपूर्ण बनाता है, आपके अंदर सही निर्णय लेने की क्षमता पैदा करता है।",
      "ketuAntardasha": "सूर्य की महादशा में केतु की अंतर्दशा होने पर आपको कार्यक्षेत्र में परेशानी हो सकती है और आपके शत्रु बढ़ जायेंगे। जिसके कारण आपको अपनी नौकरी भी छोड़नी पड़ सकती है। वहीं, अगर आप बिजनेस करते हैं तो आपको बिजनेस में भारी घाटा उठाना पड़ सकता है। जल्दबाजी में लिया गया कोई भी फैसला आपके लिए नुकसानदेह साबित हो सकता है और आप पर कर्ज का बोझ पड़ सकता है। ऐसे में आपको सावधानी और धैर्य से काम लेना चाहिए क्योंकि यह समय आपके लिए अनुकूल नहीं है।",
      "marsAntardasha": "सूर्य की महादशा में मंगल की अंतर्दशा आने पर मंगल व्यक्ति को अत्यंत शक्तिशाली बनाता है। यह मानसिक शांति प्रदान करता है। काम में उन्नति होती है, जिससे व्यक्ति के अंदर जबरदस्त क्षमता पैदा होती है। आप अपने काम में आगे बढ़ सकते हैं और हर कार्य को करने में सक्षम हो सकते हैं। यह समय आपके बिजनेस के लिए भी काफी अच्छा कहा जा सकता है।",
      "jupiterAntardasha": "सूर्य महादशा में बृहस्पति की अंतर्दशा एक उत्कृष्ट योग माना जाता है, क्योंकि इस समय संतान प्राप्ति की संभावना अधिक होती है। ज्योतिषी का कहना है कि इस दौरान विवाह योग बनते हैं, जिससे सही जीवनसाथी मिलने में मदद मिलती है। बृहस्पति ज्ञान का ग्रह भी है। ऐसे में आप कुछ नया सीखने और शिक्षा प्राप्त करने का मन बना सकते हैं। यह समय बच्चों के साथ-साथ शिक्षण पेशे से जुड़े लोगों के लिए भी अनुकूल है।",
     },
     "moonDasha": {
  "moonMahadasha":"चंद्रमा एक बहुत ही विनम्र प्रकार का ग्रह है और इसे ग्रहों की रानी के रूप में जाना जाता है। यह मातृत्व या स्त्रीत्व को इंगित करता है। इस दशा के दौरान आप अपने जीवन में महिलाओं के प्रति एक मजबूत संबंध और आकर्षण पा सकते हैं। चंद्रमा की महादशा 10 वर्षों तक चलती है, जिसके दौरान आप अपने जीवन में बहुत अच्छा संतुलन महसूस करेंगे, जो चंद्रमा के प्रमुख गुणों में से एक को प्रदर्शित करता है। ज्योतिष के दृष्टिकोण से एक महत्वपूर्ण ग्रह, चंद्रमा की स्थिति आपके जीवन में कई चीजों को समझ सकती है। आप देखेंगे कि चंद्र महादशा के दौरान आप एक गहन विचारक बन गए हैं, लेकिन आपके विचार स्वच्छंद और स्पष्ट नहीं होंगे। चंद्रमा भावनाओं और आपकी सोच का स्वामी है। इस दशा के दौरान आपका हृदय आपके मस्तिष्क पर राज करेगा। यदि चंद्रमा आपकी कुंडली में अच्छी स्थिति में है तो आप शारीरिक सुंदरता और उच्च क्षमता के साथ समृद्ध भावनाओं का अनुभव कर सकते हैं। चंद्रमा का सामान्य प्रतिनिधित्व पोषण, देखभाल और प्यार जैसे स्त्री गुणों द्वारा किया जाता है। आपके अंदर अंतर्ज्ञान की शक्तियां चरम पर होंगी। सकारात्मक चंद्र महादशा प्रभाव:चंद्रमा पर जल तत्व का शासन है जो इसके वातावरण को सकारात्मक, समृद्ध और गहरा बनाता है। यह आपको बहुत उदार और खुले दिल वाला बनाता है। आम तौर पर ख़ुशी से जुड़ी, चंद्रमा की महादशा अपनी सकारात्मक स्थिति में आपको उच्च स्तर की संतुष्टि देगी। चंद्र महादशा के प्रभाव से आपको कई अच्छे परिणाम मिलने वाले हैं। आपके जीवन में बहुत सारी अच्छी घटनाएं और सुखद रिश्ते आएंगे। आपके मन में नए और ताज़ा विचार आएंगे और आपको पहले से कहीं अधिक आनंदित करेंगे। इस दशा के दौरान आप जो भी नया ज्ञान और चीजें सीख रहे हैं, उससे आपका दिमाग खुल जाएगा। यह आपके लिए बिना किसी कारण के ख़ुशी का समय होगा। आपके जीवन के सभी क्षेत्रों में भरपूर आराम मिलेगा। आपके पेंडोरा बॉक्स में कई कौशल जुड़ जाएंगे, जिससे आपको जबरदस्त विकास करने में मदद मिलेगी। चंद्रमा का आपके दिमाग की कार्यप्रणाली पर बहुत बड़ा प्रभाव पड़ता है, इसलिए आप इस दौरान अपने दिमाग की कार्यप्रणाली में काफी सुधार देख सकते हैं। आप एक स्पष्ट विचार प्रक्रिया और अपार मानसिक शक्ति देख सकते हैं। इस दशा में आपके दिमाग और शरीर के बीच एक मजबूत संतुलन आम है। यह संतुलन स्थिति आपको उन चीज़ों और ऊंचाइयों को प्राप्त करवा सकती है जो पहले आपको धूमिल और अप्राप्य लगती थीं। कुछ मामलों में, चंद्रमा की महादशा बहुत अधिक प्रसिद्धि और धन के साथ शक्ति और सामाजिक प्रतिष्ठा भी दिला सकती है। नकारात्मक चंद्र महादशा प्रभाव:अवसाद और बेचैनी दो बहुत ही सामान्य नकारात्मक प्रभाव हैं जो चंद्र महादशा के दौरान आप पर हो सकते हैं। आप बहुत ही छोटी और मामूली समस्याओं और दैनिक स्थितियों में आसानी से अपना सारा आपा, धैर्य और शांति खो सकते हैं, जिससे आप चिड़चिड़े और चिड़चिड़े महसूस करने लगते हैं। चंद्र महादशा का प्रभाव न केवल चंद्रमा की गलत स्थिति पर निर्भर करता है, बल्कि आपकी राशि और उसके बाद आने वाली अंतर्दशा पर भी निर्भर करता है। सब कुछ मिलकर एक दशा का आपके जीवन पर समग्र प्रभाव डालता है। सामान्य अशुभ प्रभावों में डर लगना, अत्यधिक हीन भावना होना, स्वास्थ्य समस्याएं, मानसिक असंतुलन, व्यापार में हानि और नौकरी में अशांति शामिल हैं । चंद्र महादशा में आने वाली उच्च कल्पना क्षमता भी हानिकारक हो सकती है क्योंकि आप अपने दिमाग में परिस्थितियों को कठिन बना लेते हैं, जो अन्यथा बहुत सरल और निपटने में आसान होती हैं। यदि चंद्रमा सही स्थान पर नहीं है तो यह हानिकारक हो सकता है और पागलपन और अजीब व्यवहार में बदल सकता है। आप अपने प्रियजनों और दोस्तों को आसानी से खो सकते हैं क्योंकि वे आपके दिमाग में चल रही जटिलताओं को समझने में सक्षम नहीं होंगे। सबसे खराब स्थिति में भी आपमें आत्महत्या की प्रवृत्ति हो सकती है।",
  "sunAntardasha":"चंद्रमा की महादशा में सूर्य की अंतर्दशा के दौरान मन में जीवन में कुछ नया करने का जज्बा आता है। क्योंकि चंद्रमा मन है और सूर्य आत्मा है तो इस समय आप मन और आत्मा से कोई भी सही निर्णय ले सकते हैं। इस समय सूर्य धन, मन की संतुष्टि और मान-सम्मान में वृद्धि प्रदान करता है। साथ ही आपको माता-पिता का भी पूरा सहयोग मिलता है। यह समय पैतृक संपत्ति से कुछ लाभ का संकेत भी दे सकता है।",
  "venusAntardasha":"यह समय व्यक्ति के जीवन में बहुत कुछ अच्छा लेकर आता है। मन की इच्छाएं पूरी होती हैं. अगर कोई व्यक्ति अपना खुद का घर चाहता है तो उसका घर का सपना पूरा हो जाता है। साथ ही अच्छे प्रेम संबंध बनते हैं और करियर में भी तरक्की मिलती है। ज्योतिषाचार्य का कहना है कि कभी-कभी ऐसा देखा गया है कि इस समय व्यक्ति के अंदर मानसिक संतुष्टि अधिक होती है।",
  "saturnAntardasha":"ज्योतिषी का कहना है कि यह चरण जातक के जीवन में परेशानियां ला सकता है। यह समय अत्यंत संकट का समय है क्योंकि चंद्रमा की महादशा के समय शनि की चाल बाधाओं और कठिनाइयों के दौरान निर्णय लेने की शक्ति को समाप्त कर देती है। ऐसे में आप कुछ ऐसा कर बैठते हैं कि आपको नुकसान उठाना पड़ सकता है। यह समय व्यक्ति के मन के अंदर डर पैदा कर देता है। दोस्तों से आपको नुकसान होने की भी संभावना है और कर्ज बढ़ने की भी संभावना है।",
  "rahuAntardasha":"इस बार ये आपको बहुत परेशान करने वाला है. मानसिक रूप से आपको अवसाद हो सकता है। बीमारी होने की संभावना भी बढ़ जाती है. कभी-कभी आपकी मां के साथ रिश्ते में चमक की कमी हो जाती है। आपकी माता को स्वास्थ्य कारणों से कष्ट हो सकता है। धन की हानि, मन की हानि और कभी-कभी कारावास की भी संभावना रहती है। कोर्ट केस, कानूनी मामले आदि उठ सकते हैं।",
  "moonAntardasha":"ज्योतिष शास्त्र में चंद्रमा को मन का ग्रह और धन का ग्रह माना गया है। चंद्रमा एक शांतिप्रिय ग्रह है. अपनी महादशा के समय चंद्रमा आपके कार्यक्षेत्र में आपके लिए कई अच्छे कार्य करेगा और आप सही निर्णय लेने में सक्षम होंगे। ज्योतिषी के अनुसार आप अपने भविष्य के लिए थोड़ा समय लेंगे क्योंकि चंद्रमा की महादशा, चंद्र की अंतर्दशा में काम थोड़ी धीमी गति से होते हैं। वैसे तो चन्द्रमा की दशा व्यक्ति को धन और मन दोनों से धनवान बनाती है।",
  "mercuryAntardasha":"चंद्रमा की महादशा में बुध की अंतर्दशा के समय आपको कई समस्याओं का सामना करना पड़ता है। बुध को चंद्रमा का शत्रु माना जाने से बनते कार्यों में भी बाधा आती है। ऐसे में बुध की दशा आपके कार्यों में बाधाएं उत्पन्न करेगी और कोई भी कार्य समय पर पूरा नहीं हो पाएगा। जिससे आपको परेशानियों का सामना करना पड़ सकता है। बिजनेस हो या नौकरी दोनों ही जगह आपको बाधाओं का सामना करना पड़ेगा। यह योग रिश्तों के लिए भी परेशानियां उत्पन्न करता है। खासतौर पर प्रेमियों के लिए यह अशुभ हो जाता है और रिश्तों को खत्म करने का काम भी कर सकता है। यह आपकी माँ के साथ संबंधों को जटिल बना सकता है। ऐसे में आपको सावधान रहना होगा.",
  "ketuAntardasha":"हालांकि चंद्रमा की महादशा में केतु की अंतर्दशा होने पर व्यक्ति को कई कठिनाइयों का सामना करना पड़ता है। इस समय भी अगर कोई व्यक्ति पूरी ईमानदारी और मेहनत से काम कर रहा है तो उसे सफलता मिलती है। हां, इसमें समय लग सकता है, लेकिन अंततः आप ऐसा करेंगे। धन का योग, विशेषकर गुप्त धन का योग भी समय पर प्राप्त हो सकता है। यदि कुंडली में केतु की दशा अच्छी हो और चंद्रमा अशुभ प्रभाव से मुक्त हो तो आपको गुप्त धन प्राप्ति की संभावना बन सकती है।",
  "marsAntardasha":"इस समय चंद्रमा के साथ मंगल की अंतर्दशा होने पर व्यक्ति धन-धान्य से परिपूर्ण होता है। और यदि कुंडली में चंद्रमा और मंगल का संबंध हो तो यह कुंडली में लक्ष्मी योग का निर्माण करता है। वैदिक ज्योतिष के अनुसार यदि योग शुभ ग्रहों से बना हो और केंद्र या त्रिकोण में बने तो यह बहुत शुभ माना जाता है। साथ ही मंगल की कुंडली में यह दशा जोश का प्रतीक और साहस को बढ़ावा देने वाली मानी जाती है। चंद्रमा के साथ मंगल की अंतर्दशा प्रगति को बढ़ावा देती है और व्यापार में समृद्धि लाती है।",
  "jupiterAntardasha":"ज्योतिष शास्त्र के अनुसार चंद्रमा और बृहस्पति की दशा में नाम और प्रसिद्धि बढ़ती है। यह अवधि विवाह के योग बनाती है। यह फलदायी प्रेम संबंधों की शुरुआत, सही जीवन साथी मिलने और संतान प्राप्ति की संभावना का संकेत देता है। अगर करियर की बात करें तो इससे काम में भी तरक्की मिलती है। यदि कुंडली में चंद्रमा और बृहस्पति की स्थिति अच्छी है या एक दूसरे के केंद्र में हैं तो यह संबंध उत्तम माना जाता है। इसे एक तरह से राजयोग माना जाता है जिसे गजकेसरी योग के नाम से जाना जाता है। यदि व्यक्ति उच्च और अच्छी शिक्षा प्राप्त करना चाहता है या फिर व्यक्ति घर से दूर रहकर पढ़ाई करना चाहता है तो उसकी इच्छा समय पर पूरी हो जाती है।",
},
"marsDasha" :{
  "marsMahadasha":"मंगल की महादशा आपके जीवन में 7 वर्षों तक चलती है। मंगल ग्रह को उग्र ग्रह माना जाता है और यह अन्य ग्रहों की तुलना में सबसे आक्रामक ग्रह माना जाता है। इसलिए मंगल महादशा के दौरान , आपको हमेशा की तुलना में थोड़ा अधिक ऊर्जावान महसूस करने के लिए तैयार रहना चाहिए। पूरे समय आप काफी साहसी महसूस करेंगे। साथ ही, आत्मविश्वास की मात्रा और स्वतंत्रता की आवश्यकता में भी काफी वृद्धि होगी। मंगल अहंकार, खेल और उच्च ऊर्जा का प्रतिनिधित्व करता है। इसे युद्ध के देवता के रूप में जाना जाता है। इसलिए इस दौरान इस बात की प्रबल संभावना है कि आपकी रुचि ऐसे क्षेत्रों और गतिविधियों में हो। सभी अच्छे खिलाड़ियों या सैनिकों के करियर में महत्वपूर्ण और अच्छे बदलावों के दौरान उनका मंगल मजबूत और सकारात्मक होगा। मंगल एक बहुत शक्तिशाली ग्रह है इसलिए आपके रास्ते में आने वाली किसी भी समस्या पर मंगल के अच्छे प्रभाव से अंकुश लग जाएगा। विजय आसानी से आपके सामने आएगी।सकारात्मक मंगल महादशा प्रभाव :जब मंगल पूर्ण रूप में होता है, तो आप लगभग कुछ भी हासिल करने के लिए भारी मात्रा में ऊर्जा महसूस करेंगे। आप अपने पेशे में बड़ी सफलता हासिल करेंगे; आपका पैसा और संपत्ति तेजी से बढ़ेगी। आपके आत्मविश्वासी और स्वतंत्र व्यवहार के कारण आप लोगों पर पकड़ बना लेंगे और काम अपने तरीके से करने में आपको कठिनाई नहीं होगी। आपकी नेतृत्व क्षमताएं नए आयाम छूएंगी। मजबूत मंगल महादशा के तहत शारीरिक शक्ति एक अतिरिक्त लाभ है । इन सबके साथ-साथ आपकी इच्छाएँ भी बढ़ेंगी और आप अति-उपलब्ध व्यक्ति बनेंगे। मंगल महादशा के दौरान , जब आप काम कर रहे हों तो समय-समय पर आपके शरीर के उपयोग में वृद्धि देखी जाएगी। यदि अधूरे प्रोजेक्ट या मामले हैं तो मंगल की महादशा के प्रभाव से वे पूरे हो सकते हैं या महत्वाकांक्षा के साथ देखे जा सकते हैं । संभावना है कि आपमें अपने जीवन की कमान अपने हाथों में लेने की भावना होगी। सारी ऊर्जा और जिद के कारण गुस्सा या उतावला व्यवहार हो सकता है। मंगल की महादशा आपको सभी नुकसान और खतरों से बचाती है। इस दशा के दौरान आप सबसे अच्छे मार्ग का अनुसरण कर सकते हैं। नकारात्मक मंगल महादशा प्रभाव : इस बात की बहुत अधिक संभावना है कि यदि ग्रह गलत तरीके से स्थित है तो उच्च जोखिम लेने वाले व्यवहार और रवैये के कारण आप दुर्घटनाओं और चोटों के शिकार हो सकते हैं। आपकी जन्म कुंडली में मंगल के भारी होने के दौरान घाव, खरोंच, चकत्ते बहुत आम हैं। आपमें थोड़ा धैर्य बचा होगा जो आपके जीवन में कई बाधाएँ खड़ी कर सकता है। नकारात्मक प्रभाव डालने पर मंगल की महादशा आपको अत्यधिक सुस्ती का अनुभव करा सकती है। बाहर जाने और किसी भी बाहरी गतिविधि में शामिल होने में आपकी रुचि खत्म हो जाएगी। किसी भी कार्य में आपकी ओर से उत्साह की चिंगारी नजर नहीं आएगी. नींद के पैटर्न में बहुत सारी समस्याएं होंगी और इसके कारण, आप बेचैनी महसूस कर सकते हैं और अक्सर घबराए हुए महसूस कर सकते हैं। संभावना है कि इस महादशा के दौरान आपको कुछ गंभीर सर्जरी से गुजरना पड़ सकता है। जहां भी थोड़ी सी हिम्मत की जरूरत होगी आप सुरक्षित रहने के लिए पीछे हट जाएंगे। आपमें खुद के लिए या जिस चीज पर आप विश्वास करते हैं उसके लिए खड़े होने की कोई रीढ़ नहीं होगी। यह उन परिणामों के बिल्कुल विपरीत है जो व्यक्ति मंगल महादशा के सकारात्मक चरण में देखता है । आपके अंदर कोई आत्मविश्वास नहीं बचेगा और आपको हर काम के लिए दूसरों पर निर्भर रहना पड़ेगा। यदि आप ऐसे क्षेत्र में हैं जहां शारीरिक श्रम की आवश्यकता है तो आप अपने करियर में मुश्किल से ही आगे बढ़ पाएंगे और खराब प्रदर्शन के कारण अत्यधिक तनाव में रहेंगे।",
  "sunAntardasha":"जब मंगल की महादशा के साथ सूर्य की अंतर्दशा हो तो जातक को अपने कार्यक्षेत्र में खूब उन्नति मिलती है। विशेषकर यदि व्यक्ति भूमि संबंधी कोई कार्य कर रहा हो तो उसे इससे लाभ मिलता है। ऐसे में अगर लोग राजनीति में जाना चाहते हैं तो उन्हें अच्छा फायदा मिल सकता है। अगर इस समय जातक चुनाव लड़ रहा है तो उसे सफलता मिल सकती है। इसके साथ ही मांगलिक कार्य संपन्न कराने में भी यह दशा महत्वपूर्ण भूमिका निभाती है।",
  "venusAntardasha":"यदि मंगल की महादशा चल रही हो और शुक्र की अंतर्दशा चल रही हो तो जातक के जीवन में यह समय विशेष रूप से नया जीवनसाथी मिलने के अवसर लेकर आता है। ज्योतिषी का कहना है कि मंगल का संबंध मांगलिक कार्य से भी है और शुक्र का संबंध प्रेम से है। इसलिए इस समय विवाह होने की संभावना अधिक है। कार्य क्षेत्र में भी जातक को अच्छा लाभ मिलता है। खासतौर पर इस समय यदि व्यक्ति फैशन से जुड़ा काम कर रहा हो। मंगल का संबंध भूमि से भी होता है अत: व्यक्ति को भूमि से अच्छा लाभ मिलता है। अगर कोई व्यक्ति अपना नया घर बनाना चाहता है तो वह खुद जमीन खरीदकर घर बना सकता है। इससे काफी मानसिक संतुष्टि मिलती है. यदि व्यक्ति अपने जन्मस्थान से दूर कोई कार्य करना चाहता है तो उस व्यक्ति को भी इस दशा से लाभ होता है।",
  "saturnAntardasha":"जबकि मंगल की महादशा के साथ-साथ शनि की अंतर्दशा भी चल रही है तो इस समय बहुत सावधान रहना चाहिए क्योंकि मंगल और शनि दोनों ही अशुभ ग्रह माने जाते हैं। यदि जन्म कुंडली में ये एक साथ हों या इनका दृष्टि संबंध हो तो दुर्घटनाएं अवश्य होती हैं। इस समय बहुत सावधान रहने की जरूरत है, मंगल, शनि के योग के कारण कई बार जान की हानि भी हो जाती है। मंगल की महादशा के साथ शनि की अंतर्दशा भी दर्शाती है कि इस समय आपको कोई बड़ा नुकसान हो सकता है। ऑफिस में आपको काम में नुकसान का सामना करना पड़ सकता है। जातक को सावधान रहने की जरूरत है क्योंकि शत्रु हावी हो सकते हैं।",
  "rahuAntardasha":"मंगल की महादशा के साथ-साथ राहु की अंतर्दशा का समय हानि का कारक माना जाता है। गौरतलब है कि इससे स्वास्थ्य संबंधी समस्याओं का खतरा बढ़ जाता है. अज्ञात रोग उत्पन्न होता है और इस अवधि में देखा जाए तो राहु जातक को कर्ज में डुबा देता है। कभी-कभी यह भी देखा गया है कि इससे जातक को कानूनी हानि भी होती है। जेल जाने की भी संभावना हो सकती है. कानूनी मामलों से जुड़े मामले भी इस समय बहुत अधिक हैं। कुछ अनबन और घरेलू समस्याएँ भी उत्पन्न हो सकती हैं।",
  "moonAntardasha":"जब चंद्रमा की अंतर्दशा और मंगल की महादशा एक साथ चल रही हो तो धन, मान-यश में वृद्धि होती है। विशेषकर भूमि संबंधी लाभ अच्छा है। इसके साथ ही मांगलिक कार्य भी किये जाते हैं। वैदिक ज्योतिष में चंद्रमा को मन और माता से अच्छे संबंध का कारक ग्रह माना गया है। अत: माता के साथ संबंध उत्तम रहते हैं और जातक को माता का अच्छा सहयोग मिलता है। इस समय कुछ विदेश यात्राएँ भी होती हैं। ज्योतिषाचार्य का कहना है कि मंगल और चंद्रमा के योग को लक्ष्मी योग भी कहा जाता है. यदि कुंडली में मंगल और चंद्रमा एक साथ हों तो यह एक शुभ योग माना जाता है। ऐसी दशा में जातक धन-संपदा से परिपूर्ण होता है।",
  "mercuryAntardasha":"यदि मंगल की महादशा चल रही हो और बुध की अंतर्दशा हो तो व्यक्ति थोड़ा जल्दबाजी में निर्णय लेता है। जिसके कारण कभी-कभी उसे नुकसान का भी सामना करना पड़ता है। ज्योतिषी का कहना है कि इस दशा की एक अच्छी बात यह भी है कि यदि मंगल और बुध की दशा में दिमाग का उपयोग करके बहुत समझदारी से काम लिया जाए तो अच्छा लाभ भी मिलता है। मंगल ग्रह जोश का प्रतीक है, शक्ति और पराक्रम का सूचक है। बुद्धि का ग्रह बुध, बुद्धि और साहस के योग से जातक हर क्षेत्र में सफलता प्राप्त करता है।",
  "ketuAntardasha":"यदि मंगल की महादशा चल रही हो और केतु की अंतर्दशा चल रही हो तो मंगल इस अवधि में अपनी स्थिति के अनुसार फल देता है। यदि कुंडली में मंगल योगकारक ग्रह है और अच्छे परिणाम दे रहा है तो उसके साथ केतु भी उस व्यक्ति को अच्छे परिणाम देता है। लेकिन यदि कुंडली में मंगल हानि कारक ग्रह हो तो समस्या चार गुना बढ़ जाती है और बहुत सावधान रहना पड़ता है।",
  "marsAntardasha":"मंगल की महादशा के अंतर्गत मंगल की अंतर्दशा आपको अपने जीवन में आने वाली लगभग हर बाधा में विजेता बना सकती है। मंगल महादशा के दौरान लोग आपका कुछ भी बुरा नहीं कर पाएंगे और राह बहुत आसान हो जाएगी । आप जीवन के हर क्षेत्र में अच्छा प्रदर्शन करेंगे, चाहे वह अपने वित्त का प्रबंधन करना हो या अपने करियर की सीढ़ी पर आगे बढ़ना हो। वैवाहिक संभावनाएँ बहुत अधिक हैं। लेकिन नकारात्मक मंगल महादशा के प्रभाव से खतरनाक दुर्घटनाएं, संपत्ति की हानि, खराब करियर और व्यवसाय में बेहद धीमी वृद्धि हो सकती है। ",
  "jupiterAntardasha":"यदि बृहस्पति की अंतर्दशा के साथ मंगल की महादशा चल रही हो तो इस समय जातक को उत्तम प्रतिक्रिया मिलती है। जातक के लिए विवाह योग बनता है और उसे संतान सुख की प्राप्ति होती है क्योंकि बृहस्पति ज्ञान और सृजन का ग्रह भी है। अर्थात बृहस्पति को संतान का निर्माता माना जाता है। ऐसे में हमें इन दोनों चीजों में काफी फायदा मिलता है। मंगल और बृहस्पति की दशा यह भी दर्शाती है कि यदि कोई व्यक्ति इस समय अपने क्षेत्र में आगे बढ़ना चाहता है तो समय उसके साथ है। विशेषकर व्यापार में उन्नति होती है। इस अवधि में यदि कोई व्यक्ति शिक्षा से संबंधित कार्य करता है तो उसे इसका लाभ मिलता है। यदि वह इस समय सरकारी सेवा की तैयारी कर रहे हैं तो उन्हें भी सफलता मिल सकती है।",
  
},
"rahuDasha" :{
  "rahuMahadasha":"राहु की महादशा 18 वर्ष तक चलती है। यह आपके भाग्य में, व्यक्तिगत जीवन में या किसी अन्य प्रकार से, सबसे अच्छा और सबसे बुरा दोनों ही सामने ला सकता है। राहु वास्तव में कोई ग्रह नहीं है; यह सिर्फ एक छाया ग्रह है और इसे उत्तरी नोड के रूप में जाना जाता है क्योंकि यह ड्रैगन के सिर का प्रतिनिधित्व करता है। यदि यह खराब स्थिति में है तो यह आपके जीवन में दुख, पतन और कई कठिनाइयां ला सकता है। यदि इसे अच्छी तरह से रखा जाए तो आप उपलब्धियां और सफलता देख सकते हैं। राहु और केतु दो छाया ग्रह हैं जो एक ही राक्षस से बने हैं। इसलिए राक्षसी आदतों का शिकार होने की संभावना अधिक है। अतः राहु का स्थान सही घर में होना चाहिए। आप बड़े पैमाने पर धन और उत्कृष्ट परिणाम देख सकते हैं। इस महादशा के दौरान अक्सर त्वरित परिणाम देखने को मिलते हैं इसलिए कोई भी निर्णय लेते समय सावधानी बरतनी जरूरी है। यह दशा अधिकांश लोगों के लिए अनुकूल नहीं है लेकिन जिनके लिए यह अनुकूल है आपको बड़ी सफलता मिलेगी। राहु आनंद और आनंद का प्रतिनिधित्व करता है। राहु महादशा के दौरान भौतिकवादी संभावनाएं बढ़ सकती हैं ।सकारात्मक राहु महादशा प्रभाव:एक खतरनाक ग्रह होने के अलावा, राहु आपके जीवन में सकारात्मक सुख बढ़ा सकता है। यह आपके रास्ते में अप्रत्याशित भाग्य ला सकता है। कुछ भी प्रयास किए बिना आप बड़ी संपत्ति और सामाजिक प्रतिष्ठा प्राप्त कर सकते हैं। आपके जीवन में ज्ञान और आध्यात्मिकता में तेजी से वृद्धि हो सकती है। आपका आत्मविश्वास बढ़ सकता है और आप एक अच्छी सामाजिक प्रतिष्ठा प्राप्त कर सकते हैं और अत्यधिक प्रभावशाली बन सकते हैं। राहु महादशा आपको शक्ति और साहस प्रदान करती है।भारत के सर्वश्रेष्ठ विशेषज्ञ ज्योतिषियों से यहीं ऑनलाइन परामर्श लें! विवरण के लिए यहां क्लिक करें!राहु महादशा आपको अपने काम में या सामान्य तौर पर उच्च अधिकार प्राप्त करने में मदद कर सकती है। यह आपको अत्यधिक आशावादी और अहंकारी बना सकता है। राहु का स्वयं कोई गृह नहीं होता इसलिए वह जिस भी ग्रह के साथ स्थित होता है, वह आपकी जन्म कुंडली के आधार पर अपना प्रभाव बढ़ाता या घटाता है। सकारात्मक समय के दौरान आप अपने अंदर काफ़ी ऊर्जा महसूस कर सकते हैं। उत्साह बहुत अधिक रहेगा और संभावना है कि आप अपने जीवन में बस जाएंगे। नकारात्मक राहु महादशा प्रभाव:राहु की नकारात्मक स्थिति के दौरान, आपको कानूनी तौर पर या पारिवारिक जीवन में झगड़े का सामना करना पड़ सकता है। आप भारी कर्ज देख सकते हैं और अपने जीवन में बहुत सारे दुश्मनों को शामिल कर सकते हैं। राहु महादशा के दौरान दर्दनाक घटनाएं घटित होने की संभावना रहती है । चूंकि राहु सिर का प्रतीक है इसलिए संभावना है कि आप मन से संबंधित बीमारी के शिकार हो सकते हैं। राहु महादशा के प्रभाव से विभिन्न प्रकार के फोबिया, अवसाद, ओसीडी, पैनिक अटैक, मानसिक रूप से विकलांग होना, आत्महत्या की प्रवृत्ति आदि जैसे मानसिक विकार हो सकते हैं। आपकी लव लाइफ में भी काफी दिक्कतें आ सकती हैं। कई असफल प्रेम संबंध होंगे और यदि आप शादीशुदा हैं तो रोजाना झगड़े होने की संभावना है। राहु महादशा के दौरान आप कुछ सबसे खराब प्रकार की घटनाएं देख सकते हैं , ऐसी चीजें जो आप आमतौर पर अपने साथ घटित होने की कभी कल्पना भी नहीं कर सकते हैं। राहु को भ्रम पैदा करने वाला ग्रह माना जाता है, इसलिए यदि यह नकारात्मक स्थिति में हो तो यह आपकी स्पष्ट सोचने की शक्ति को छीन सकता है। आप अक्सर ख़ुद को मानसिक भ्रम और मानसिक अशांति की स्थिति में पा सकते हैं। राहु आपके मस्तिष्क को काम करने से पूरी तरह से बंद करने की शक्ति रखता है। हो सकता है कि अब आप कोई भी निर्णय लेने में सक्षम न हों। राहु महादशा का प्रभाव इतना गंभीर हो सकता है कि आपको मतिभ्रम होने लग सकता है। यह भ्रम पैदा करता है और जीवन में बेचैनी को जगह देता है। आम तौर पर, आप राहु महादशा को दुःख, दर्द और बहुत संघर्ष के चरण से जोड़ सकते हैं।",
  "sunAntardasha":"सूर्य और राहु एक दूसरे के शत्रु हैं इसलिए इस दशा में कुछ परेशानियां बनी रहती हैं। इसका प्रभाव काफी हद तक सूर्य ग्रहण जैसा होता है। करियर में जातक को काफी तनाव का अनुभव हो सकता है। इस अवधि में स्थानांतरण भी संभव है। इस अवधि में स्वास्थ्य भी ख़राब रहता है और जातक मानसिक स्तर पर अकेलापन महसूस करता है। हालांकि ज्योतिषी का कहना है कि अगर आपकी कुंडली में ग्रहों की स्थिति अनुकूल है तो यह दशा नाम और प्रसिद्धि भी दिलाती है। उन्हें विदेश यात्रा का अवसर मिल सकता है। यह व्यक्ति को मजबूत और साहसी भी बनाता है। ऐसे में व्यक्ति जीवन में सफलता पाने के लिए जोखिम उठाना शुरू कर देता है। सरकार से भी सहयोग मिल सकता है, जिससे जीवन में महत्वाकांक्षाओं की पूर्ति होगी। कुल मिलाकर, यह विकास का दौर है लेकिन कभी-कभार कुछ बाधाओं के साथ। ",
  "venusAntardasha":"शुक्र राहु की अंतर्दशा के नकारात्मक प्रभावों को कम करने में मदद करता है। यह अंततः बाधाओं और कठिनाइयों को दूर करने में मदद करता है। हालाँकि, जीवन में कुछ चुनौतियाँ बनी रह सकती हैं। जातक को वैवाहिक जीवन में कुछ सुधार का अनुभव हो सकता है। यहां शुक्र जातक को भौतिक सुख-सुविधाएं, वाहन और विलासिता की वस्तुएं प्रदान करता है। जीवन में आने वाली बाधाओं को दूर करने के लिए जातक जीवन में कड़ी मेहनत करता है। इस अवधि में पदोन्नति भी संभव है।",
  "saturnAntardasha":"वैदिक ज्योतिष में शनि और राहु दोनों को क्रूर ग्रह माना जाता है, इसलिए इस दशा के दौरान जीवन में नकारात्मकता और चुनौतियाँ बनी रहती हैं। इस अवधि में करियर में बाधाओं का सामना करना पड़ सकता है। इसके अलावा, जातक को अपना पद खोना पड़ सकता है, धन हानि हो सकती है और बदनामी का सामना करना पड़ सकता है। यह दशा रिश्तों और स्वास्थ्य संबंधी समस्याएं, हृदय संबंधी समस्याएं या दुर्घटनाएं भी पैदा करती है। इस दौरान वैवाहिक संबंध भी कमजोर हो जाते हैं।",
  "rahuAntardasha":"यह दशा करियर और व्यवसाय में अचानक वृद्धि और लाभ का कारण बनती है। इससे जीवन में खुशियां आने का रास्ता भी बनता है। इस अवधि में व्यक्ति का रूझान आध्यात्मिक गतिविधियों की ओर भी बढ़ जाता है। जातकों को विदेश जाने का मौका मिल सकता है। इच्छाशक्ति और साहस को भी बढ़ावा मिलता है और विपक्ष को परास्त करने की शक्ति मिलती है। यदि दशा का प्रभाव नकारात्मक हो तो भ्रम, अभद्रता, धन हानि और करियर में गिरावट हो सकती है। पारिवारिक मामलों में समस्याएँ और जीवन में असफलताएँ जातक को दुःख दे सकती हैं।",
  "moonAntardasha":"चंद्रमा मन और भावनाओं को प्रभावित करता है और जब राहु इसे प्रभावित करता है, तो जातक बेचैनी और चिंता महसूस कर सकता है। इस अवधि में मानसिक तनाव, भ्रम और अवसाद बना रहता है। जातक में प्रियजनों के साथ वाद-विवाद और संघर्ष करने की प्रवृत्ति विकसित होती है। जब आप सफलता पाने के लिए कड़ी मेहनत करते हैं, तो बहुत सारी बाधाएं आपका रास्ता रोकने के लिए खड़ी हो जाती हैं। जातकों को पेशेवर मोर्चे पर भी समर्थन की कमी दिखाई देती है। इस दौरान कोई भी महत्वपूर्ण निर्णय लेने से बचें।",
  "mercuryAntardasha":"यह अपेक्षाकृत सकारात्मक अवधि है क्योंकि जातक करियर के मोर्चे पर अच्छा प्रदर्शन करता है। कामकाज के मामले में पदोन्नति और व्यापारिक मामलों में बढ़ोतरी की प्रबल संभावना है। दांपत्य जीवन में खुशियां बनी रहती हैं। इस अवधि में जातक को वाहन का सुख प्राप्त होता है। इसके अलावा, शिक्षा के साथ-साथ अन्य मामलों के लिए भी यह एक सकारात्मक दशा है। बुद्धि में सुधार होता है, जिससे जीवन में सही चुनाव करने में मदद मिलती है। बुध की उपस्थिति मुसीबत से निकलने में मदद करती है। इस अवधि में स्वास्थ्य और आर्थिक स्थिति में भी सुधार होता है।",
  "ketuAntardasha":"केतु और राहु दोनों छाया ग्रह हैं, इसलिए ज्योतिष में इस दशा को सकारात्मक नहीं माना जाता है, खासकर मानसिक और शारीरिक स्वास्थ्य के लिए। किसी स्वास्थ्य जटिलता के निदान में समस्याएँ जातक को परेशान करती हैं। इस अवधि में आर्थिक स्थिति भी अस्थिर रहती है। ज्योतिषी के अनुसार, ये ग्रह रिश्तों में भी समस्याएं पैदा करते हैं और जातक को प्रियजनों से अलगाव की भावना का अनुभव होता है। इस दशा के दौरान जातक को आग और जहर से बचना चाहिए। आपको अपने आप को हथियार से दूर रखना चाहिए. यह अवधि करियर के मामले में मानहानि और हानि भी ला सकती है।",
  "marsAntardasha":"राहु की महादशा में मंगल की अंतर्दशा भी बहुत सकारात्मक नहीं है क्योंकि यह आपकी आक्रामक प्रवृत्ति को बढ़ाती है। ज्योतिष शास्त्र के अनुसार इस दौरान कानूनी दिक्कतें और दुर्घटना की आशंका बनी रहती है। यदि आप सावधानी बरतेंगे तो इससे मदद मिलेगी। यह दशा धन और पद की हानि भी कराती है। जीवनसाथी का अक्सर परिवार से विवाद होता रहता है। इस अवधि में जब आप कड़ी मेहनत करेंगे तो आपको उम्मीद के मुताबिक परिणाम नहीं मिलेगा। यह स्थिति जीवन में नकारात्मक अवधि को बढ़ा देती है लेकिन आमतौर पर कोई गंभीर क्षति नहीं पहुंचाती है। हालाँकि, यदि आप दुर्घटनाओं से सावधान रहें तो इससे मदद मिलेगी।",
  "jupiterAntardasha":"यह दशा काल स्वास्थ्य के मामले में थोड़ा सुधार लाता है। बृहस्पति की लाभकारी उपस्थिति के कारण इस अवधि में जातक को बहुत प्रसिद्धि और प्रतिष्ठा मिलती है। पुरानी भावना को हराने और प्रयासों में सफलता पाने के लिए नई ऊर्जा आपकी आत्मा में प्रवेश करती है। ज्योतिष के अनुसार, इससे करियर में वृद्धि, पदोन्नति और रिश्ते में वृद्धि हो सकती है। आध्यात्मिक यात्राएँ करने के लिए भी यह एक अच्छा समय है। यदि इस दौरान किसी की शादी हो रही हो तो वह व्यक्ति दूसरी जाति के व्यक्ति को चुनता है। विदेश में रहने वाले लोग भी इस दौरान अपने मूल स्थान पर लौटते हैं। नकारात्मक होने पर यह दशा कानूनी समस्याएं, जीवनसाथी की स्वास्थ्य समस्याएं, धन हानि, करियर में गिरावट और जीवनसाथी से अलगाव का कारण बनती है।",
  
},
"jupiterDasha": {
  "jupiterMahadasha":"गुरु महादशा (गुरु महादशा) 16 वर्षों तक चलती है और आपके जीवन में सौभाग्य और ज्ञान प्रदान करती है। इस बात की प्रबल संभावना है कि इस महादशा के दौरान आप कम से कम बाधाओं के साथ एक बहुत ही सहज और सहज जीवन का अनुभव करेंगे। आपके जीवन में बृहस्पति की सही स्थिति के दौरान संपत्ति और धन संचय लाभों में से एक है; अन्यथा, सभी लाभ पलटकर आपको दुखी महसूस करा सकते हैं। आध्यात्मिक और धार्मिक चीज़ों में शामिल होने की प्रबल संभावनाएँ हैं। कुंडली में गुरु की महादशा के दौरान आप जो भी प्राप्त करेंगे या करेंगे , उसमें फिजूलखर्ची तय है। आप उच्च शिक्षा की ओर ले जाने वाली गतिविधियों में शामिल हो सकते हैं या एक रैखिक कैरियर विकास देख सकते हैं। ऐसा कहा जाता है कि आपने जो भी मेहनत की है उसका सारा फल इस महादशा में प्राप्त होगा। आप आर्थिक रूप से मजबूत बनेंगे; अच्छी सामाजिक स्थिति हो, ज्ञान और आध्यात्मिक पहलुओं के मामले में अच्छा विकास हो। पढ़ाई, व्यवसाय या करियर में उत्कृष्टता हासिल करने की उच्च संभावना है। इस शुभ ग्रह की महादशा के दौरान आपके जीवन में कई तरह की शुभ चीजें घटित होंगी। महादशा के बारे में अधिक जानकारी के लिए आप देश के प्रसिद्ध ज्योतिषी से बात कर सकते हैं। बात करने के लिए यहां क्लिक करें.सकारात्मक बृहस्पति महादशा प्रभाव इस मामले में बृहस्पति महादशा का प्रभाव या कोई अन्य महादशा आपके जीवन में सकारात्मक और नकारात्मक दोनों प्रभाव डालती है। प्रत्येक महादशा के दौरान दोनों प्रकार के चरण होंगे जिनका आप निरीक्षण करेंगे। कोई भी महादशा पूर्णतः सकारात्मक अथवा नकारात्मक नहीं होती। गुरु महादशा के सकारात्मक प्रभाव आपके जीवन में सुनहरे पल ला सकते हैं। परिवार की ओर से असीम आनंद की प्राप्ति होगी, आप अपने वैवाहिक जीवन में बेहद खुश रहेंगे। आप जो भी करना चुनेंगे उसमें आप अत्यधिक सफल होंगे। सर्वोत्तम परिणाम देने वाले अत्यंत उपयुक्त करियर विकल्प बैंकिंग, वित्त, राजनीति या परामर्श हैं। आपकी बुद्धि और निर्णय लेने की क्षमता में तीव्र वृद्धि होगी। आप अपने जीवन में कोई भी मोड़ या कठिन निर्णय लेने के लिए किसी पर कम से कम निर्भर रहेंगे। आपके निर्णय कम से कम क्रूर और ग़लत हो जायेंगे। रिश्तों या किसी सामुदायिक कार्य के मामले में आप अपने अंदर एक गर्माहट महसूस करेंगे। बृहस्पति की महादशा आपको नई ऊंचाइयों के सपने देखने और खुशी-खुशी उस दिशा में आगे काम करने के लिए प्रेरित कर सकती है। आप अपनी वाणी और कार्य में बहुत सीधे हो जायेंगे। आपके जीवन में अचानक शांति आएगी। क्षमा आपमें स्वाभाविक रूप से आ जाएगी और चारों ओर की हर चीज़ को अपनाना आसान हो जाएगा। बृहस्पति की सही स्थिति से आपके लिए एक समृद्ध जीवन संभव है । बृहस्पति की महादशा आपको सही चीजों को देखने और सही दिशा में आगे बढ़ने में मदद करती है। यह आपको अपने जीवन में ईमानदार और ईमानदार बनाता है। आपके विचार शुद्ध हो जाएंगे और आध्यात्मिकता और धर्म के प्रति आपकी धारणा में काफी सुधार होगा। नकारात्मक बृहस्पति महादशा प्रभाव यदि गुरु महादशा में गुरु किसी अशुभ ग्रह के साथ स्थित हो तो आपके जीवन में तमाम विपरीत प्रभाव आएंगे। ऐसी संभावना है कि आप विभिन्न परिस्थितियों के कारण अपनी सारी संपत्ति खो देंगे और बदनामी का सामना करेंगे। आप अपनी सामाजिक प्रतिष्ठा खो देंगे और उपहास का पात्र बनेंगे। आपके अस्तित्व से सारी आध्यात्मिक रोशनी गायब हो जाएगी और आप इसके मूल्य पर संदेह करना और सवाल उठाना शुरू कर देंगे। गुरु महादशा के नकारात्मक चरण के दौरान आपके जीवन में कोई समृद्धि नहीं बचेगी। इस अवधि के दौरान आप जिस भी गली में जाएंगे वहां आपको दुर्भाग्य दिखाई देगा। आप गरीब हो सकते हैं, अपनी सारी संपत्ति खो सकते हैं और प्रियजनों से कोई समर्थन नहीं मिलेगा। आपके वैवाहिक जीवन में झगड़े और बच्चों के साथ दूरियां बढ़ने की संभावना अधिक है। कोई वित्तीय स्थिरता और समाज से सम्मान नहीं; इस महादशा के दौरान सामान्य निर्धारक होते हैं। जल्दबाज़ी में लिए गए निर्णय आम हैं और इससे आपके जीवन में और भी भयावह परिणाम हो सकते हैं। अति उत्साह आपको वह सब कुछ गँवा सकता है जो आने वाला था। इसलिए नियंत्रित व्यवहार अपनाने की जरूरत होगी। यदि बृहस्पति की महादशा आपके जीवन पर बुरा प्रभाव डाल रही है तो अपने पिछले मुद्दों को दूर करने की अत्यधिक अनुशंसा की जाती है।",
  "sunAntardasha":"यह दशा आपकी आर्थिक स्थिति पर सकारात्मक प्रभाव डालती है। स्थिति बढ़ती है और कुल मिलाकर धन भी बढ़ता है। इन दोनों ग्रहों के प्रभाव से जातक को खूब नाम और प्रसिद्धि मिलती है। ये दोनों ग्रह सर्वोच्च और शक्तिशाली हैं इसलिए व्यावसायिक प्रयासों में सफलता संभव है और पदोन्नति के अवसर भी मौजूद हैं। जातकों की शिक्षा और ज्ञान में वृद्धि होती है। परिवार और रिश्तों में ख़ुशियाँ बनी रहती हैं। यदि अशुभ उपस्थिति है, तो जातक शरीर में दर्द, बुखार, तंत्रिका संबंधी विकार, सिरदर्द और मन की शांति की कमी से पीड़ित हो सकते हैं।",
  "venusAntardasha":"यह दशा कई सकारात्मक परिणाम लाती है, बशर्ते आप पर्याप्त प्रयास करें। यह अवधि ईश्वर और आपके आध्यात्मिक मार्गदर्शक में आपके विश्वास को मजबूत करती है। ज्योतिषाचार्य के अनुसार शुक्र ग्रह कई भौतिक सुख-सुविधाएं भी देता है। संगीत और गायन में भी आपकी रुचि बढ़ती है। आपके वैवाहिक जीवन में बहुत स्नेह और प्रेम है। शुक्र और बृहस्पति दोनों लाभकारी हैं और धन और भाग्य का प्रतीक हैं। इस प्रकार यह अवधि जातक के लिए समृद्धि और वित्तीय स्थिरता लाती है। आप विलासितापूर्ण वस्त्रों और वाहनों जैसी भौतिक सुख-सुविधाओं का आनंद लेते हैं। सकारात्मक प्रभाव से आपका ज्ञान भी बढ़ता है।",
  "saturnAntardasha":"गुरु की महादशा में शनि की अंतर्दशा होने से कर्ज और संपत्ति के मामलों में लाभ मिलता है। इस अवधि में लोगों को खूब धन और लाभ मिलता है। यह अवधि व्यक्ति की व्यावसायिक स्थिति को बढ़ावा देती है। ज्योतिष शास्त्र के अनुसार व्यक्ति सफलता पाने के लिए बहुत प्रयास करता है। यह दशा कानून, न्याय और प्रबंधन के क्षेत्र में सफलता के लिए अनुकूल अवधि है। इस अवधि में आप जितनी अधिक मेहनत करेंगे, आपकी सफलता की संभावना उतनी ही अधिक होगी। दुख होने पर जातकों को काम और जीवन में परेशानी का सामना करना पड़ सकता है। इस अवधि में प्रतिकूल प्रभाव के कारण कुछ स्वास्थ्य जटिलताएँ भी उत्पन्न हो सकती हैं। गुरु की महादशा में शनि की दशा समाज में बदनामी और दुर्भाग्य की स्थिति में धन हानि का कारण बन सकती है।",
  "rahuAntardasha":"यह दशा जीवन में बहुत सारी उलझनें और परेशानियां लाती है। जातक अहंकारी और दबंग हो जाते हैं। वे अनावश्यक बहस और झगड़ों में भी लिप्त रहते हैं। इससे पारिवारिक रिश्ते भी ख़राब होते हैं। इस अवधि के दौरान व्यक्ति को करियर में गिरावट देखने को मिलती है। ख़र्चों में बढ़ोतरी से आर्थिक परेशानियां आएंगी। यह अवधि दवा और संबंधित संक्रमणों के बढ़ते डर का भी संकेत देती है। व्यक्ति शारीरिक परेशानी, सिरदर्द और लीवर से संबंधित समस्याओं से भी पीड़ित हो सकता है। इस दौरान अधिक शांतिपूर्ण जीवन जीने के लिए धार्मिक स्थानों पर जाना चाहिए और पवित्र जल में डुबकी लगानी चाहिए। ध्यान का अभ्यास भी इस संबंध में मदद करता है।",
  "moonAntardasha":"इस दशा के दौरान जातक को साझेदारों और बच्चों से सुख मिलता है। चंद्रमा और बृहस्पति के संबंध के प्रभाव से आय की संभावना बढ़ जाती है। यह अवधि करियर के मोर्चे पर भी प्रगति लाती है। इससे स्थानीय डेयरी उत्पादों में रुचि विकसित होती है। जातक को समाज से भरपूर समर्थन मिलता है और वह भौतिक सुख-सुविधाओं, विलासिता और जीवन के सुखों का आनंद लेता है। जातकों के लिए यह जीवन का एक खूबसूरत चरण है। जीवनसाथी और बच्चों के साथ भी रिश्ते मधुर बने रहते हैं। जातक आध्यात्मिक यात्राएं भी करता है। अशुभ प्रभाव में होने पर यह दशा रिश्तों में दूरी पैदा कर सकती है। धन हानि और स्वास्थ्य संबंधी परेशानियां भी संभव हैं।",
  "mercuryAntardasha":"ज्योतिष शास्त्र के अनुसार बुध और बृहस्पति दोनों ही ज्ञान और बुद्धि के कारक हैं। अत: इस अवधि के दौरान जातक को अच्छा ज्ञान और सीखने की शक्ति प्राप्त होती है। उनकी बौद्धिक क्षमता में काफी सुधार होता है। जातक अपनी बुद्धि से खूब नाम और शोहरत कमाते हैं। इस दौरान बॉस भी आपकी कीमत पहचानता है। शिक्षा के लिए भी यह एक अच्छा समय है और इस अवस्था में परिणाम अक्सर सकारात्मक रहते हैं। ज्योतिषी के अनुसार जातक व्यावसायिक प्रयासों में भी सफलता प्राप्त करता है और समाज में बहुत सम्मान अर्जित करता है। इस दशा के दौरान जातक के घर में शांति और अच्छे रिश्ते बने रहेंगे। यदि कष्ट हो तो जातक अपनी कड़ी मेहनत और प्रयासों से वांछित परिणाम प्राप्त करने के लिए संघर्ष करेगा। इस समय त्वचा संबंधी परेशानियां भी होने की संभावना रहती है। इसके अलावा, याददाश्त संबंधी समस्याएं और मानसिक अस्थिरता भी बनी रह सकती है।",
  "ketuAntardasha":"यह दशा जातकों की आध्यात्मिक प्रवृत्ति और धार्मिक यात्राओं के प्रति रुचि बढ़ाती है। हालाँकि, इस अवधि के दौरान केतु करियर के मामलों में बहुत सारी परेशानियाँ और उलझनें पैदा करता है। ज्योतिष शास्त्र के अनुसार कारावास की भी संभावना बनती है। जातक स्वास्थ्य समस्याओं और कई मानसिक समस्याओं से पीड़ित हो सकता है। इस दौरान कुछ अनावश्यक यात्राएं भी हो सकती हैं। रिश्तों में एक तरह की दूरी भी आपको देखने को मिल सकती है। खर्च भी बढ़ता है.",
  "marsAntardasha":"इस दशा में व्यक्ति के ज्ञान और सीखने की क्षमता में वृद्धि होती है। जातक भूमि स्रोतों से लाभ कमाते हैं। पारिवारिक मामलों और दाम्पत्य जीवन में भी अपार सुख मिलता है। भाई-बहनों के साथ रिश्ते भी बेहतर होते हैं। जातक स्वभाव से थोड़ा हावी होने वाला होता है, हालाँकि दूसरों के साथ कुछ विवाद और वाद-विवाद संभव है। हालाँकि, यह समाज में सम्मान और प्रसिद्धि का आनंद लेने का समय है। यदि अशुभ प्रभाव में हो तो यह अवधि नेत्र संबंधी समस्याओं और बुखार का कारण बनती है। मानसिक शांति की कमी भी जातक को परेशान करती है। संपत्ति के मामलों को लेकर भी दिक्कतें आ सकती हैं। इसके अलावा धन हानि भी संभव है।",
  "jupiterAntardasha":"इस दशा के दौरान, आध्यात्मिक खोज और पूजा से ढेर सारा धन, वाहन और भौतिक सुख-सुविधाएं मिलती हैं। यदि दृढ़ विश्वास के साथ ऐसा किया जाए तो व्यक्ति समाज में बहुत नाम और प्रसिद्धि प्राप्त कर सकता है और बृहस्पति का आशीर्वाद प्राप्त कर सकता है। आध्यात्मिकता के अभ्यास के संदर्भ में यह अवधि शुभ है। बहुत सारी धार्मिक यात्राएँ और पुण्य कार्य किये जाते हैं। बच्चे भी खुशहाल जीवन जीते हैं। जातक बहुत सारा ज्ञान और बुद्धि प्राप्त करते हैं और अपने करियर में बेहतर स्थिति प्राप्त करते हैं। पीड़ित होने पर यह दशा जीवनसाथी से अलगाव का कारण भी बन सकती है। संतान को लेकर भी परेशानी संभव है। स्वास्थ्य चिंता का विषय हो सकता है, विशेषकर लीवर से संबंधित। शत्रुता से धन हानि और बदनामी भी हो सकती है।",
  
},
"saturnDasha": {
  "saturnMahadasha":"शनि की महादशा व्यक्ति के जीवन में 19 वर्षों तक बनी रहती है। शनि को निर्णय के लिए जाना जाता है और अन्य ग्रहों में इसे न्यायाधीश के रूप में जाना जाता है। ऐसा माना जाता है कि शनि महादशा के दौरान आपके कर्मों के आधार पर आपको पुरस्कार या दंड मिलता है। शनि आपके जीवन में उपहार प्रदान करते समय कोई पक्षपात नहीं करता है; तुम्हें वही मिलेगा जिसके तुम हकदार हो। यह महादशा आपके जीवन का अत्यंत परिश्रमी चरण माना जाता है, और फिर भी आपको बहुत धीमी गति से परिणाम प्राप्त होते हैं। कठोर वास्तविकताओं का सामना करना, अत्यधिक श्रम और निरंतर विकास वह मंत्र है जो आप इस महादशा का सामना करते हुए सीखेंगे। ऐसी संभावना है कि आपकी जिम्मेदारियों में वृद्धि देखने को मिलेगी, इसे बनाए रखने के लिए आपको अपने जीवन में सख्त अनुशासन की आवश्यकता है, जो शनि महादशा आपको दृढ़ता से सिखाती है। इसका सामना करने के लिए आपको मजबूत और कुशल होना होगा। इस बात की प्रबल संभावना है कि महादशा समाप्त होने के बाद आपको सारी मेहनत का फल मिलेगा। इस दशा में ज्ञान में अत्यधिक वृद्धि होती है और ईश्वर तथा ईश्वरीय मार्गों पर दृढ़ विश्वास भी देखा जा सकता है। आप बहुत विनम्र और ज़मीन से जुड़े हो जाते हैं। ख़ुशी के स्तर में तेजी से वृद्धि होगी और आप कुछ प्रसिद्धि प्राप्त कर सकते हैं, जबकि शनि आपके लिए अनुकूल है। सकारात्मक शनि महादशा प्रभाव: शनि महादशा के प्रभाव आपके चरित्र और आने वाले वर्षों को शानदार बना सकते हैं। यह आपको अपार धन, सफलता और ढेर सारा धन लाभ दे सकता है। आपकी सामाजिक स्थिति में वृद्धि होगी; इस महादशा के दौरान आप अमीर से अमीर बन सकते हैं। यह भी संभव है कि आपको अधिक मेहनत न करनी पड़े और सफलता फिर भी अनायास आपके कदम चूम ले। यह सब इस बात पर निर्भर करता है कि आपकी जन्म कुंडली में शनि किस स्थिति में है। इसके अलावा, आपको बहुत सारा ज्ञान, आध्यात्मिक विकास, बहुत लंबा जीवन, प्रभावशाली दोस्तों के कारण लोगों पर नियंत्रण या आपकी रैंकिंग हासिल होने की संभावना है। इस बात की पूरी संभावना है कि आपका पारिवारिक जीवन अच्छा रहेगा। आप ज्यादातर कड़ी मेहनत वाली नौकरियों में शामिल होंगे जहां आपके शरीर को अधिक उपयोग करने की आवश्यकता होती है। शनि कर्म, कड़ी मेहनत, सच्चाई और भाग्य का प्रतिनिधित्व करता है। आपका जीवन मुख्य रूप से जीवन की इन वास्तविकताओं के इर्द-गिर्द घूमेगा। शनि महादशा के दौरान आपकी आंतरिक शक्ति और इच्छा शक्ति खूबसूरती से उभरने वाली है। आप नई चुनौतियों का सामना करने और किसी भी बाधा को दूर करने के लिए सदैव तैयार रहेंगे। शनि आपको सफलता तो देता है लेकिन उस सफलता तक पहुंचने का रास्ता कठिनाइयां लेकर आता है और फलदायी नहीं होता। शनि आमतौर पर उन लोगों को दंडित करते हैं जो गैरकानूनी चीजों और गतिविधियों में शामिल होते हैं। यदि आप अच्छे कर्म कर रहे हैं और आपके पास साफ स्लेट है, तो आपके लिए कोई कठोर परिणाम नहीं होंगे। नकारात्मक शनि महादशा प्रभाव:शनि महादशा में आपको काफी बेचैनी रहने वाली है। यह अवधि व्यक्ति के अंदर भय पैदा करती है, जिससे बहुत सारा दर्द, दुख, पीड़ा, स्वास्थ्य संबंधी समस्याएं, घरेलू या सामाजिक झगड़े, प्रियजनों की हानि, आय के स्रोत की हानि और कई अन्य प्रभाव पड़ते हैं। यदि शनि खराब भाव में है तो आपके जीवन में विनाशकारी परिणाम ला सकता है। आप हर चीज़ में बहुत देरी का अनुभव करेंगे, चाहे वह किसी भी चीज़ का परिणाम हो या उसकी शुरुआत। आपके जीवन के हर क्षेत्र, करियर या व्यक्तिगत, में कई चुनौतियाँ आएंगी। शनि महादशा के दौरान वैराग्य एक आम समस्या है। यह खालीपन आपके द्वारा या आपके जीवन में आपके लोगों द्वारा बनाया जा सकता है। आप हमेशा चीजों को नकारने की स्थिति में रहेंगे, जिससे चीजें आपके लिए कठिन हो जाएंगी। सुस्ती एक और बड़ा प्रभाव है जो इस महादशा के दौरान आप पर हो सकता है। यह सुस्ती आपको सुस्त बना सकती है और आपको अपने लक्ष्यों से दूर धकेल सकती है। इस बात की बहुत अधिक संभावना है कि आप अपना सब कुछ खो देंगे या कोई बड़ा नुकसान होगा जिसकी मरम्मत संभव नहीं होगी। शनि आपको दुष्ट मानसिकता वाला बना सकता है और आपको बुरी आदतें अपनाने के लिए प्रेरित कर सकता है।",
  "sunAntardasha":"यह बहुत सकारात्मक अवधि नहीं है क्योंकि व्यावसायिक जीवन में कुछ बाधाएँ सफलता में बाधा डालती हैं। जातक को पिता से भी अनबन का अनुभव होता है। इस अवधि में सत्ता संबंधी कुछ समस्याएं भी बनी रहेंगी। जातक परिवार के झूठे आरोपों के प्रति कमजोर हो जाता है। शत्रु भी जातक को परेशान करने का प्रयास करते रहते हैं। यह दशा स्वास्थ्य पर भी भारी होती है और जातक को कुछ मानसिक परेशानियाँ भी सताती रहती है। इस दौरान बुखार, सिरदर्द और हृदय संबंधी समस्याएं जैसी स्वास्थ्य समस्याएं भी परेशानी का कारण बनती हैं।।",
  "venusAntardasha":"यह दशा मूल जीवन को पटरी पर लाती है और जीवन को सकारात्मक दिशा देती है। यदि शनि सकारात्मक स्थिति में हो तो जातक सुखी वैवाहिक जीवन का आनंद लेते हैं और प्रियजनों के साथ काफी समय बिताते हैं। जातक विलासिता और आराम पर अधिक खर्च करता है। इस दौरान करियर भी ऊंचाई पर पहुंचता है। हालाँकि, प्रतिकूल प्रभाव में जातक को आंखों से संबंधित समस्याएं और अक्सर बुखार रहता है। इसका असर वैवाहिक जीवन पर भी पड़ता है और जीवनसाथी से अलगाव हो जाता है।",
  "saturnAntardasha":"कुंडली में अप्रभावित शनि दशा के दौरान आपके जीवन में बेहतर घटनाओं का परिणाम होता है। भूमि संबंधी मामलों में भी लाभ होता है। जीवनसाथी और संतान संबंधी मामलों के लिए भी यह अवधि अच्छी है। जातक को सामाजिक सहयोग भी खूब मिलता है। हालाँकि, यदि शनि का प्रतिकूल प्रभाव हो तो यह अवधि करियर और पेशेवर जीवन में बाधा उत्पन्न कर सकती है। परिवार और भाई-बहनों के साथ संबंधों में भी समस्या आ सकती है। इस अवधि में आक्रामकता, ईर्ष्या, विवाद और गैस्ट्रिक समस्याएं भी बढ़ती हैं।",
  "rahuAntardasha":"इस दौरान कुछ अनावश्यक झगड़े भी होते रहते हैं। संदेह और बाधाएं जातक को सफलता की राह पर चलने से रोकती हैं। इस दौरान जातकों को कड़ी मेहनत करनी पड़ती है, इसलिए स्वाभाविक रूप से जीवन में कुछ मानसिक दबाव और तनाव भी बना रहता है। आपको ज्यादा सहयोग नहीं मिलता इसलिए आत्मनिर्भर बनने का समय आ गया है। करियर और रुतबे में कुछ गिरावट भी देखने को मिल सकती है। शत्रुओं पर आक्रामक होने से आपको बचना चाहिए। सकारात्मक बात यह है कि इस दशा अवधि के दौरान जातक अक्सर विदेश यात्रा कर सकता है।",
  "moonAntardasha":"यह दशा जातक के जीवन पर कुछ प्रतिकूल प्रभाव डालती है। इस दौरान व्यक्ति को बेचैनी और तनाव का अनुभव होता है। जातक अवसाद और मानसिक तनाव से पीड़ित हो सकता है, जिसका मुख्य कारण रिश्तों में दूरियां बढ़ना और करियर संबंधी समस्याएं हैं। जातक कमज़ोर और अकेला महसूस कर सकता है। इस दौरान शत्रुओं की संख्या भी बढ़ जाती है। कुछ आर्थिक उतार-चढ़ाव भी बना रहता है। जातक को जीवन में शांति पाने के लिए अपनी ऊर्जा को आध्यात्मिक गतिविधियों में लगाना चाहिए।",
  "mercuryAntardasha":"अंतर्दशा में बुध, कुंडली में शनि के प्रतिकूल प्रभाव को कुछ हद तक संतुलित करता है। जातक की समाज में अच्छी छवि बनती है और उसे अच्छी सुख-सुविधाएं प्राप्त होती हैं। यह दशा व्यवसाय वृद्धि के लिए भी अनुकूल चरण है। जातक अधिक परोपकारी, बौद्धिक और बुद्धिमान बनते हैं और सभी चुनौतियों का कुशलतापूर्वक सामना करते हैं। इस अवधि में व्यावसायिक क्षेत्र में कोई उपलब्धि भी संभव है। ज्योतिषी कहते हैं कि जातक सामाजिक कार्यों और दान-पुण्य में भी संलग्न होने के इच्छुक हो सकते हैं।",
  "ketuAntardasha":"इस दशा के दौरान जातक विदेश यात्रा पर जा सकते हैं। इस अवधि में आध्यात्मिक प्रवृत्तियों को भी बढ़ावा मिलता है। यह दशा जहां आय में वृद्धि करती है, वहीं 12वें भाव से संबंध होने के कारण खर्च भी बढ़ता है। इस दशा का नकारात्मक प्रभाव जातक को अंदर से कमजोर बनाता है। जीवन में शांति की कमी और असंतोष बना रहता है और परिवार में कई तरह के झगड़े होते रहते हैं। लोग धर्म और अध्यात्म में अधिक रुचि लेने लगते हैं।",
  "marsAntardasha":"ज्योतिष शास्त्र के अनुसार, मंगल जातक में आक्रामकता और अधिकार एवं वर्चस्व की भावना बढ़ाता है। इससे स्वाभाविक रूप से कुछ हद तक रिश्ते प्रभावित होते हैं। इस अवधि में अत्यधिक कठोर और क्रोधित होने से बचने की सलाह दी जाती है। यह स्थिति जीवन साथी से टकराव और अलगाव का कारण बनती है। कुछ त्वचा संबंधी एलर्जी भी जातक को बनी रहती है। इस समय जातक शत्रुओं को भी नुकसान पहुंचाने की कोशिश करता है। इसके अलावा, करियर में कुछ नुकसान भी जीवन में लक्ष्यों की दिशा में प्रगति में बाधा डालते हैं। यदि आप कोई नया कार्यस्थल या नौकरी ज्वाइन करते हैं तो इस स्थिति में आपको सतर्क रहना चाहिए।",
  "jupiterAntardasha":"बृहस्पति एक लाभकारी ग्रह है और शनि की तरह यह भी ज्ञान और आध्यात्मिकता से दृढ़ता से जुड़ा हुआ है। इस दशा के दौरान बृहस्पति शनि के हानिकारक प्रभावों को कम कर देता है। इस अवधि में जातकों में शत्रुओं से लड़ने के लिए बहुत इच्छाशक्ति, बुद्धि और साहस आता है। ज्योतिषाचार्य के अनुसार बृहस्पति की शुभ उपस्थिति से ज्ञान और शिक्षा को भी बढ़ावा मिलता है। आपके पारिवारिक जीवन में फिर से खुशियाँ लौट आएंगी। आख़िरकार करियर सही रास्ते पर चलना शुरू हो जाता है। जातक को लगता है कि मानसिक दबाव आखिरकार दूर हो रहा है। यह अवधि आध्यात्मिक खोज में बढ़ती रुचि और भागीदारी से भी चिह्नित है। कुल मिलाकर यह राहत का दौर है।",
  
},
"mercuryDasha":{
  "mercuryMahadasha":"आमतौर पर बुध को एक सकारात्मक ग्रह माना जाता है, जिसे अक्सर ईश्वर के दूत के रूप में नामित किया जाता है। बुध की महादशा 17 वर्षों की होती है जो हर व्यक्ति के जीवन में अलग-अलग अंतराल पर आती है। मुख्य रूप से महादशा बुद्धि, विद्या, लेखन और शिक्षा का प्रतिनिधित्व करती है। बुध महादशा के दौरान ज्ञान, रचनात्मक जिज्ञासा और संचार कौशल का बहुत महत्व होता है । इस अवधि के दौरान बच्चा अपनी शिक्षा में बढ़त हासिल कर सकता है। आपके मन में बहुत सारे विचार उमड़ रहे होंगे जिनसे अच्छे परिणाम मिल सकते हैं और करियर या व्यवसाय में उन्नति हो सकती है। कोई भी क्षेत्र जिसमें गहन बुद्धि, ज्ञान और स्मृति की आवश्यकता होती है, बुध महादशा के दौरान एक अच्छा करियर विकल्प हो सकता है । आपके जीवन की इस अवधि के दौरान आपके भाग्य में अनेक अवसर दस्तक देंगे। इस बात की बहुत अधिक संभावना है कि आप एक ही समय में दो चीजों में लिप्त हो जाएं। इस प्रकार अपना उद्यम शुरू करने या कोई गंभीर शौक अपनाने की संभावनाएँ बढ़ जाती हैं। बुध महादशा में , आपको अपने कौशल को निखारने, नई चीजें सीखने या काम में पदोन्नति पाने के लिए कड़ी मेहनत करने की लालसा महसूस हो सकती है। इस महादशा के दौरान आपके जीवन में तार्किक और विश्लेषणात्मक सोच में तेजी से वृद्धि देखी जा सकती है। सकारात्मक बुध महादशा प्रभाव:प्रत्येक महादशा व्यक्ति के जीवन में कुछ अच्छे और बुरे परिणाम लेकर आती है। बुध आपके लिए अपनी बुद्धि लेकर आता है। आप विद्या और शिक्षा में बहुत अच्छे हो सकते हैं। यह आपको बेहद मिलनसार और बहिर्मुखी बना सकता है। विज्ञान के प्रति आपका विश्वास लगातार बढ़ सकता है। बुध की महादशा आपके जीवन में बहुत अधिक मानसिक शांति ला सकती है यदि यह उच्च और अनुकूल लग्न के साथ स्थित हो। बुध की सकारात्मक स्थिति के दौरान धन प्राप्ति के साथ-साथ पारिवारिक जीवन में भी खुशियाँ आने की संभावना है। इस दौरान आप काफी जीवंत और ऊर्जावान महसूस कर सकते हैं। इस बात की अत्यधिक संभावना है कि आप बुध महादशा में अपने जीवन के कुछ सबसे बुद्धिमान निर्णय लें । इसकी अत्यधिक संभावना है कि नैतिक सोच और नियमित जोखिम लेना आपके रास्ते में है। यह आपके जीवन का सबसे सुखद समय साबित हो सकता है क्योंकि यह आपके कौशल मूल्य और सीखने की क्षमता के मामले में जबरदस्त वृद्धि करने में आपकी मदद करता है। आपके वित्त और सामाजिक प्रतिष्ठा में तेज वृद्धि हो सकती है। बुध के अच्छी स्थिति में होने से आपको अच्छे स्वास्थ्य का भी अनुभव होगा। नकारात्मक बुध महादशा प्रभाव:चूँकि पूरी महादशा अवधि मन और बुद्धि से घिरी होती है, इसलिए यह बहुत संभावना है कि आप कुछ मानसिक समस्याओं और तंत्रिका संबंधी विकारों का अनुभव करें। बुध ग्रह को व्यक्ति के मन, मस्तिष्क, तंत्रिकाओं और वाणी पर शासन करने के लिए जाना जाता है। इसलिए यदि आपके जीवन में बुध की महादशा खराब स्थिति में है, तो यह एकाग्रता की कमी और चीजों को याद रखने जैसी समस्याएं पैदा कर सकती है। स्मृति हानि और अन्य संबंधित समस्याएं आपके जीवन में आने की संभावना है। बुध महादशा का प्रभाव आपको तर्कहीन बना सकता है और अक्सर जीवन की साधारण परिस्थितियों में भी आपको अत्यधिक भ्रमित कर सकता है। आप अपनी पहले से अर्जित बुद्धि और विवेक खो सकते हैं और एक अपरिपक्व और पागल व्यक्ति बन सकते हैं। बुध महादशा का नकारात्मक प्रभाव आपको सुस्त बना सकता है। ऐसा देखा गया है कि एक व्यक्ति बहुत आरक्षित हो सकता है और उसे समूहों के बीच बोलने में कठिनाई होती है। महादशा के बुरे चरण के दौरान तनाव और चिंता होने की संभावना रहती है। आपको कुछ दर्दनाक दुर्घटनाओं या त्वचा संबंधी समस्याओं का भी अनुभव हो सकता है। सफलता आपकी पहुंच से बहुत दूर होगी, जिससे धन, संपत्ति की हानि और गंभीर वैवाहिक समस्याएं होंगी।",
  "sunAntardasha":"वैदिक ज्योतिष में सूर्य और बुध का संबंध मित्रतापूर्ण कहा जा सकता है। जहां उग्र सूर्य जातक को आवश्यक विश्वास देता है, वहीं बुध जातक की बुद्धि को बनाए रखता है। इस अवस्था में ज्ञान और सीखने की क्षमता में सुधार होता है। ज्योतिषी का कहना है कि ग्रह जातकों के लिए सरकारी नौकरी की प्रबल संभावना बनाते हैं। घर और रिश्तों में शांति बनी रहेगी। जातक को आध्यात्मिक रूझान महसूस होता है। इस दौरान समाज भी काफी मदद और सहयोग करता है। यह दशा बैंकिंग, शिक्षण, प्रशासन, लेखा, कानून और अन्य उच्च-स्तरीय क्षेत्रों में काम करने वालों के लिए एक अच्छा समय है। पुरुष जातकों के लिए सूर्य की अंतर्दशा हृदय रोग, त्वचा संबंधी समस्याएं, मानसिक तनाव और रिश्तों में अलगाव का कारण बनती है।",
  "venusAntardasha":"इस दशा के दौरान मित्रों और नियोक्ताओं से भरपूर सहयोग मिलता है। यह अवधि जातक के लिए व्यापार में बहुत धन और लाभ लेकर आती है। ज्योतिष शास्त्र के अनुसार यह दशा एक अच्छा समय होता है क्योंकि व्यक्ति को अपनी बौद्धिक क्षमताओं के कारण बहुत पहचान मिलती है। रोमांटिक भावनाएं भी दिल में जगह बना लेती हैं। जातक प्रियजनों के साथ समय बिताना चाहता है। यह अवधि जातक को रचनात्मक प्रोत्साहन भी देती है। सौंदर्य की दृष्टि से मनभावन वस्तुओं के प्रति रुझान बढ़ा है। जातक संगीत, नृत्य, कला, सुगंध आदि का शौकीन होता है। यदि पुरुष हैं तो यह स्थिति रिश्तों में दूरी पैदा कर सकती है।",
  "saturnAntardasha":"वैदिक ज्योतिष में शनि एक क्रूर ग्रह है, लेकिन बुध के साथ इसका मित्रतापूर्ण संबंध है। हालाँकि कुछ बाधाएँ होती हैं, अंत में परिणाम अक्सर सकारात्मक होते हैं। इस दशा काल में जीवन थोड़ा कठोर होता है। काम का दबाव बढ़ेगा, लेकिन आपको अपने प्रयासों का वांछित परिणाम नहीं मिल पाएगा। ज्योतिषी कहते हैं कि जातक बहुत अधिक आंतरिक शक्ति प्राप्त करता है और नेक रास्ते पर चलता है। करियर और आर्थिक मामलों में छोटी-मोटी परेशानियां बनी रह सकती हैं, लेकिन जातक को अन्य नुकसान भी उठाना पड़ता है। यदि इन ग्रहों पर कोई कष्ट या अशुभ प्रभाव हो तो जातक को कई बार अनावश्यक संकट महसूस होता है।",
  "rahuAntardasha":"इस दशा के अंतर्गत जातक को दूसरों से बहुत सम्मान मिलता है। हालाँकि, उसके मन में डर पैदा हो सकता है और भ्रम का अनुभव हो सकता है। इस दौरान धार्मिक कार्यों में रुचि बढ़ती है। व्यक्ति को करियर के साथ-साथ जीवनसाथी को लेकर भी कई समस्याओं का सामना करना पड़ता है। दांपत्य जीवन में गलतफहमियां बनी रहती हैं। यह अवधि कड़ी मेहनत और बढ़े हुए तनाव से चिह्नित है। ज्योतिषाचार्य के अनुसार कई बार व्यक्ति उदास और असंतुष्ट महसूस करता है। सफलता के रास्ते में कई रुकावटें आ सकती हैं, लेकिन जातक इसके लिए प्रयास करता रहता है। ",
  "moonAntardasha":"ज्योतिषी के अनुसार बुध की महादशा में चंद्र की अंतर्दशा के दौरान जातक जीवनसाथी और बच्चों के साथ सुखमय समय व्यतीत करता है। चंद्रमा और बुध के बीच का संबंध औसत है। चूंकि दोनों ग्रह लाभकारी प्रकृति के हैं, इसलिए परिणाम अक्सर सकारात्मक होते हैं। इस स्थिति में व्यक्ति की कला, संगीत और रचनात्मक क्षेत्रों में रुचि विकसित होती है। पारिवारिक मामलों में प्रसन्नता बनी रहती है। हालाँकि, जातक कभी-कभी कुछ तनावों के कारण थकावट से पीड़ित होता है। इस दौरान व्यक्ति सफलता पाने के लिए कड़ी मेहनत करता है। यह दशा विशेष रूप से पुरुष जातकों के लिए मानसिक परेशानियां, एकाग्रता की कमी, अनावश्यक विचार और करियर के मामलों में समस्याएं पैदा कर सकती है।",
  "mercuryAntardasha":"इस दौरान जातक धर्म के मार्ग पर चलता है और धार्मिक मामलों की ओर झुकाव रखता है। इससे व्यक्ति शिक्षा और विवेक से जुड़े कार्यों में अधिक रुचि लेता है। ज्योतिषी का कहना है कि बुध की महादशा में बुध की अंतर्दशा जातकों को विद्वानों से मिलने के लिए प्रेरित करती है। जातक का मन पवित्र होता है। फैसले के वक्त वे हर पहलू पर अच्छे से विचार करते हैं. साथ ही जातकों को धन लाभ भी होता है। विद्या से सदैव यश और सुख की प्राप्ति होती है।",
  "ketuAntardasha":"बुध महादशा में केतु की अंतर्दशा की उपस्थिति जातक को हवादार दिमाग देती है। जातक के जीवन में अनेक कठिनाइयां एवं समस्याएं आती हैं। इस दौरान भ्रम और गलतफहमी बनी रहती है। जातकों को ठोस निर्णय लेने में संघर्ष करना पड़ता है। यह अवधि पेशेवर और वित्तीय प्रगति को भी प्रभावित करती है और इस दौरान अक्सर खर्चे होते हैं। इसके अलावा एकाग्रता का स्तर भी कम होता है। यदि कुंडली में पुरुष प्रभाव मौजूद है तो व्यक्ति मानसिक रूप से तनावग्रस्त महसूस करता है और उसमें अवास्तविक अपेक्षाएं स्थापित करने की प्रवृत्ति भी विकसित हो सकती है।",
  "marsAntardasha":"वैदिक ज्योतिष में, मंगल बुध के प्रति अप्रभावी है, जो बदले में तटस्थ है। यह दशा कुल मिलाकर अनुकूल अवधि नहीं है। यह अंतर्दशा काल वाणी में आक्रामकता और तार्किकता को बढ़ाता है। फिर भी, जातक को घर और वाहन के मालिक होने की सुविधा प्राप्त होती है। इस अवधि में पारिवारिक जीवन सुखमय रहता है। जहां मंगल कुछ बाधाएं पैदा करता है, वहीं बुध परिस्थितियों से प्रभावी ढंग से निपटने के लिए परिपक्वता और बुद्धि देता है। जातक विरोध और शत्रुओं के कारण परेशानी में रहते हैं। पुरुष जातकों के लिए यह दशा अधिक व्यय, गैस्ट्रिक समस्याएं, त्वचा की एलर्जी, आंख और रक्त संबंधी समस्याएं पैदा करती है।",
  "jupiterAntardasha":"वैदिक ज्योतिष में बुध और बृहस्पति दो सबसे लाभकारी ग्रह हैं। यह अंतर्दशा अवधि विवाह करने के लिए एक अच्छा समय है। इस समय जीवनसाथी और बच्चों के साथ मधुर संबंध बनाए रख सकते हैं। इस दौरान आध्यात्मिक रुझान भी बढ़ता है और जातक धार्मिक स्थानों की यात्रा करते हैं। सीखने की शक्ति के साथ-साथ आपकी दानशील प्रवृत्ति भी बढ़ती है। पढ़ाई में भी सकारात्मक परिणाम मिल रहे हैं. उनकी मानसिक शक्ति और समझ के स्तर में भी सुधार होता है। इस स्थिति में जातक बैंकिंग, ज्योतिष, कानून, वाद-विवाद, शोध आदि क्षेत्रों में अच्छा स्थान अर्जित करते हैं।",
  
},
"ketuDasha": {
  "ketuMahadasha":"केतु एक आध्यात्मिक ग्रह है और इसका आप पर सभी प्रभाव पड़ता है जो भौतिकवादी पसंद और दुनिया के विपरीत होता है। आप आध्यात्मिकता और उच्च ज्ञान के मामले में महानता हासिल करेंगे। इस बात की प्रबल संभावना है कि यदि आप पर केतु की महादशा चल रही है , जो 7 वर्षों तक चलती है, तो आप वैवाहिक जीवन जीने के इच्छुक नहीं होंगे। अगर आप शादीशुदा हैं तो भी आप अपने जीवनसाथी से बहुत अलग हो जाएंगे, आपके मन में इस तरह का जीवन न जीने की प्रबल भावना होगी। आप खुशी के मामले में भी भारी कमी महसूस कर सकते हैं और अंततः बहुत दुखी जीवन जी सकते हैं। आपके स्वास्थ्य में या सामान्य तौर पर कभी-कभार कष्टकारी अनुभव हो सकते हैं। केतु महादशा के प्रभाव से अत्यधिक मानसिक बेचैनी और तनाव भी होता है। इस दशा के दौरान आप जो ऊर्जा अर्जित करते हैं उसका उपयोग दार्शनिक मामलों और अच्छे कार्यों में किया जा सकता है। आपके अंदर धार्मिक पक्ष उभरकर सामने आ सकते हैं और आपके सांप्रदायिक कार्यों में अधिक संलग्न होने की संभावना है। यह चरण आपको अत्यधिक आंतरिक शक्ति प्रदान करता है। यह संभव है कि आप भौतिक सुख-सुविधाओं को त्याग दें और घरेलू जीवन और अपने आस-पास की छोटी-छोटी चीजों में खुशियाँ खोजें। केतु की महादशा आपको इस तरह से ढालती है कि आपका रुझान स्वतः ही योग और ध्यान की ओर हो जाता है। भारत के सर्वश्रेष्ठ विशेषज्ञ ज्योतिषियों से यहीं ऑनलाइन परामर्श लें! विवरण के लिए यहां क्लिक करें!सकारात्मक केतु महादशा प्रभाव:केतु महादशा आपके जीवन में बहुत परिवर्तनकारी दशा हो सकती है। यह बड़ा बदलाव बहुत शक्तिशाली तो साबित हो सकता है लेकिन साथ ही थोड़ा तनावपूर्ण भी हो सकता है। यह दशा आपके सर्वकालिक धार्मिक मनोरंजन और इच्छाओं को पूरा करने का एक अच्छा मौका हो सकती है। महादशा के अच्छे भाग के दौरान आप धन्य महसूस करेंगे। केतु महादशा के दौरान धार्मिक और आध्यात्मिक मान्यताओं के बीच अच्छा संतुलन होना जरूरी है ।कहा जाता है कि यह दशा आपको यह अहसास करा सकती है कि आप मुक्ति की राह पर हैं। कल्पना शक्ति में भरपूर वृद्धि होगी। सौभाग्य प्रचुर मात्रा में होगा और चाहे स्रोत कुछ भी हो, आपके पास अच्छा पैसा और संपत्ति होगी। महादशा के दौरान बहुत सारे अवसर आपके दरवाजे पर दस्तक देंगे। लंबी उम्र और बेहतरीन करियर कुछ अन्य वरदान हैं जो सकारात्मक केतु महादशा प्रभाव के साथ आते हैं ।नकारात्मक केतु महादशा प्रभाव:केतु महादशा के प्रभाव से भावनात्मक समस्याएं हो सकती हैं और मानसिक तनाव बढ़ सकता है। केतु एक नेतृत्वहीन ग्रह है जिसका अर्थ है कि ऐसी कई स्थितियाँ होंगी जहाँ आप ऐसे निर्णय ले रहे होंगे जो आधारहीन और गलत होंगे। साधारण परिस्थितियों में रहते हुए भी आप भ्रमित महसूस कर सकते हैं। आपकी ओर से अवांछित परिदृश्य और अस्पष्टीकृत तर्कहीन व्यवहार हो सकता है। केतु के गलत घर में होने पर आपके बंद लोगों, नौकरियों या व्यवसाय को खोना बहुत आम है। मुक्ति के मार्ग पर चलते हुए आप संकीर्ण मानसिकता और अलगाव का शिकार हो सकते हैं। अक्सर आप देखेंगे कि आपकी ऊर्जा अत्यधिक समाप्त हो गई है और आप पूरी तरह से थका हुआ महसूस करते हैं। आपके जीवन और दृष्टिकोण में इतने बड़े बदलाव के कारण आपके व्यवहार में क्रोध और चिड़चिड़ापन में तेजी से वृद्धि हो सकती है इसके अलावा स्वास्थ्य की दृष्टि से भी कमजोर होने की संभावना अधिक रहती है। आपके चार्ट में केतु के गलत स्थान पर होने पर आपको विभिन्न मानसिक और शारीरिक स्वास्थ्य समस्याएं हो सकती हैं। केतु महादशा के दौरान कई बाधाएं आ सकती हैं और आप अक्सर खुद को एक चौराहे पर पाएंगे, जो संतृप्ति का रास्ता ढूंढ रहा है। पारिवारिक और जीवनसाथी की समस्याएँ बहुत आम हैं और आसानी से दुःख और वैराग्य का कारण बन सकती हैं। केतु महादशा के दौरान अक्सर अलगाव महसूस किया जा सकता है लेकिन यह भी अच्छा साबित हो सकता है यदि आप इस समय को अपने जीवन और निर्णयों पर कुछ प्रकाश डालने के लिए उपयोग करें। इस दशा में वास्तविक हानि और हानि की एक अजीब भावना बहुत आम है।",
  "sunAntardasha":"वैदिक ज्योतिष के अनुसार, यह एक अनुकूल दशा नहीं है, क्योंकि केतु सूर्य के प्रति अक्षम है। इस दौरान व्यक्ति को जीवन के हर पहलू में कई समस्याओं और कठिनाइयों का सामना करना पड़ता है। कार्यस्थल पर वरिष्ठों से विवाद संभव है। जातक को अपना वह काम पाने के लिए भी संघर्ष करना पड़ता है, जो वह चाहता है या पाने का हकदार है। व्यावसायिक मामलों में सहयोग की कमी बनी रहेगी। इसके अलावा, जातक पहले की तुलना में अधिक आक्रामक भी हो जाता है, जिससे सभी प्रयासों में सफलता की दर प्रभावित होती है।",
  "venusAntardasha":"शुक्र एक लाभकारी ग्रह है, लेकिन केतु के प्रभाव के कारण, यह जातक के लाभ के लिए अपनी ऊर्जा का उपयोग करने में संघर्ष करता है। इस अवधि में दशा जातक के करियर में बाधा डालती है। जातकों में मित्रों और परिवार के साथ विवाद करने की प्रवृत्ति बन सकती है। विवाहित जोड़ों के लिए भी यह समय अनुकूल नहीं है। जीवनसाथी से अलगाव की संभावना भी संभव है। इस समय जातक बहुत संवेदनशील महसूस कर सकता है और प्रियजनों के साथ सहानुभूति की इच्छा रख सकता है। यह दशा जातक को आंखों से संबंधित परेशानियां भी दे सकती है।",
  "saturnAntardasha":"यह समय जातक के जीवन का कठिन दौर होता है। व्यावसायिक क्षेत्र में बहुत सारी बाधाएँ आती हैं। व्यक्ति सांसारिक मामलों से अलग-थलग महसूस करता है। यह आमतौर पर रिश्तों में विरोधाभासी दौर होता है। इस अवधि में खर्च भी बढ़ जाता है। इस दशा में मानसिक कष्ट और परेशानी बनी रहती है। कुछ शारीरिक कष्ट भी संभव है और व्यक्ति सुस्त और असंतुष्ट महसूस करता है। इस दौरान कोई जोखिम भरी यात्रा होने की संभावना है। यदि सावधानी न बरती जाए तो इस दौरान जातक कोई महत्वपूर्ण रिश्ता भी खो सकता है।",
  "rahuAntardasha":"यह दशा जातक को किसी भी दुर्भाग्य की स्थिति में अचानक धन और लाभ प्रदान करती है। हालाँकि, इस अवधि के दौरान जातकों को स्वास्थ्य संबंधी मोर्चे पर भी परेशानी हो सकती है। पूरे दशा काल में मानसिक कष्ट बना रहता है। जीवन में बहुत उलझन रहती है, जिसका असर व्यक्तिगत खुशी और संतुष्टि पर पड़ता है। छाती या पेट से जुड़ी स्वास्थ्य समस्याएं भी जातक को परेशान करती हैं। इस अवधि में अवांछित विचार जातक को परेशान करते हैं। हालाँकि, व्यक्ति में दुश्मनों से निपटने के लिए दृढ़ इच्छा शक्ति विकसित होती है।",
  "moonAntardasha":"चंद्रमा और केतु के बीच नकारात्मक संबंध के कारण वैदिक ज्योतिष में इस अंतर्दशा को हानिकारक माना जाता है। इनका संयुक्त प्रभाव व्यक्ति की ख़ुशी की संभावनाओं पर ग्रहण लगा देता है। यहां केतु चंद्रमा के शुभ प्रभाव को कम कर देता है, इसलिए जातक को इस अवधि के दौरान काफी परेशानी और अवसाद महसूस होता है। जातक अत्यधिक अवांछित विचारों से तनावग्रस्त रहता है या उसे अवांछित भय और चिंताओं से जूझना पड़ सकता है। असंतोष की भावना जातक को संसार से विरक्त कर देती है। इस अवधि के दौरान, दुखी जीवन को रोकने के लिए दूसरों के पोषण और समर्थन की सख्त आवश्यकता होती है।",
  "mercuryAntardasha":"ज्योतिष शास्त्र के अनुसार, इस पूरे अंतर्दशा काल में एकाग्रता की कमी रहती है। इस दौरान ग्रहों की स्थिति अत्यधिक खर्च का कारण बनती है। व्यक्ति के दिमाग पर अवांछित विचार हावी रहते हैं। जातक परिणामों के बारे में सोचे बिना कठोर बोलना शुरू कर सकते हैं। उसका मन हमेशा यात्रा और घूमने-फिरने के ख्यालों में खोया रहता है। फिर भी व्यक्ति धार्मिक प्रवृत्ति का अनुभव करता है। जहां केतु जीवन में कई समस्याएं लाता है, वहीं बुध जीवन के प्रति सकारात्मक दृष्टिकोण रखने में मदद करता है।",
  "ketuAntardasha":"यह अंतर्दशा अवधि जातक को आंतरिक शक्ति प्रदान करती है। व्यक्ति आध्यात्मिक गतिविधियों के प्रति अधिक प्रेरित महसूस करता है। इस स्थिति में कुछ धार्मिक यात्राएँ और तीर्थयात्राएँ भी संभव हैं। जातक भौतिक संसार में उदासीनता की भावना महसूस करते हैं और जीवन के आध्यात्मिक क्षेत्रों का पता लगाने के लिए इच्छुक होते हैं। कारोबार से जुड़ी कुछ यात्राएं भी संभव हैं। इस अवधि के दौरान जातक अद्वितीय और अत्यधिक आशावादी हो सकते हैं, इसलिए करियर या नौकरी परिवर्तन में कोई भी नया निर्णय लेने से बचें। यह दशा कई मानसिक भ्रमों और अनुचित आशंकाओं का काल है।",
  "marsAntardasha":"मंगल आक्रामकता और महत्वाकांक्षा का कारक है। केतु को मंगल की तरह ही बहुत क्रूर ग्रह कहा जाता है। जातक में अनुचित विवादों में उलझने की प्रवृत्ति विकसित हो जाती है। व्यक्तित्व में प्रबल, आक्रामक प्रवृत्ति जातक के दूसरों के साथ व्यवहार को प्रभावित करती है। जातक कई शारीरिक और मानसिक परेशानियों से गुजरता है। यह व्यक्ति को नकारात्मक तरंगों की तरह घेर लेता है। प्रोफेशन में भी रुकावटें आती हैं। जातक अपेक्षाकृत सीधा और छोटा हो जाता है, जिससे उसकी शक्ति और स्थिति को खतरा होता है। जातकों को दुर्घटनाओं, एलर्जी और चिकित्सा संक्रमण का सामना करने का भी जोखिम होता है। हालाँकि, यह दशा जातकों को विपक्ष को परास्त करने के लिए बहुत दृढ़ संकल्प और साहस देती है।",
  "jupiterAntardasha":"आध्यात्मिक प्रगति के लिए यह एक अच्छा समय है क्योंकि केतु और बृहस्पति दोनों मुक्ति और आध्यात्मिकता से संबंधित हैं। ज्योतिष शास्त्र के अनुसार इस दौरान जातक बहुत अधिक धार्मिक यात्राएं करता है और जातक पुण्य कार्यों पर काफी खर्च कर सकता है। ये ग्रह विदेश यात्रा की भी संभावनाएं बनाते हैं। यह अवधि करियर में काफी उलझन और एकाग्रता संबंधी कुछ समस्याओं का कारण बनती है। इस दशा के कारण दांपत्य जीवन में आंतरिक कलह संभव है।",
  
},
"venusDasha": {
  "venusMahadasha":"सकारात्मक शुक्र महादशा प्रभाव:शुक्र महादशा आपको एक रचनात्मक व्यक्ति, महान क्षमता वाला कलाकार बना सकती है। इस महादशा के दौरान आप अपने करियर में स्वत: ही बहुत सफल हो सकते हैं। यह आपको पिछली दशा के दौरान खोई हुई कोई भी चीज़ वापस पाने में मदद कर सकता है। इस महादशा के दौरान रिश्तों में बदलाव आ सकता है और प्रेम संबंध पनप सकते हैं। धन और सामाजिक स्थिति आपके जीवन में वापस आ सकती है या आपके जीवन में रास्ता बना सकती है। इस बात की प्रबल संभावना है कि आपको बेहद खूबसूरत और आकर्षक जीवनसाथी मिलेगा। आप विपरीत लिंग से भी बहुत अधिक ध्यान आकर्षित कर सकते हैं और बहुत लंबे समय तक वांछनीय बने रह सकते हैं। दीर्घायु भी शुक्र की महादशा के प्रभावों में से एक है। शुक्र विवाह, प्रेम, कला और विलासितापूर्ण जीवन का प्रतिनिधित्व करता है। आपके भाग्य में बहुत सारी शक्तियाँ प्रवेश करेंगी जो आपको प्रसिद्ध या एक लोकप्रिय व्यक्तित्व बनाएंगी। यदि इस महादशा के दौरान शुक्र की स्थिति सही हो तो प्रचुर मात्रा में धन आपके रास्ते में आएगा। चीज़ें आम तौर पर आपके पक्ष में हो जाती हैं और स्थिति चाहे जो भी हो; यह इस तरह ढल जाएगा कि अंत में इससे आपको ही लाभ होगा। शुक्र की महादशा आपके जीवन के सबसे समृद्ध और आनंददायक समयों में से एक हो सकती है। नकारात्मक शुक्र महादशा प्रभाव: प्रत्येक दशा किसी भी व्यक्ति के लिए न तो पूरी तरह से खराब होती है और न ही पूरी तरह से अच्छी होती है। किसी भी अवधि के परिणाम व्यक्ति और उसके कार्यों पर अत्यधिक निर्भर होते हैं। प्रभाव व्यक्ति दर व्यक्ति अलग-अलग होते हैं। अक्सर देखा जाता है कि शुक्र की महादशा लोगों को बहुत अधिक सुख-सुविधाएं देती है और जब शुक्र की महादशा में शनि आते हैं तो व्यक्ति के जीवन से सारी सुख-सुविधाएं खत्म होती नजर आती हैं। करियर के लिहाज से आपको महान ऊंचाइयों को प्राप्त करने के लिए बहुत कड़ी मेहनत करने की आवश्यकता हो सकती है और फिर भी आपको अपने साथियों से लापरवाही और आक्रामक व्यवहार का सामना करना पड़ सकता है। वैवाहिक समस्याओं या बड़ी मात्रा में कर्ज सहित विभिन्न कारकों के कारण शुक्र महादशा के दौरान घबराहट के दौरे और तनाव की घटनाएं बहुत आम हैं। शुक्र की महादशा की अच्छी स्थिति के साथ आने वाले सभी सकारात्मक प्रभाव गलत तरीके से बदल सकते हैं। आप अपना सारा पैसा और अब तक अर्जित विलासिता खो सकते हैं। आपके प्रेम संबंधों और वैवाहिक जीवन में भारी गिरावट आ सकती है। ऐसी संभावना है कि प्यार के मामले में आपको कई बुरे अनुभव होंगे, जिससे बेचैनी होगी। यदि शुक्र महादशा का प्रभाव नकारात्मक हो तो सफलता दूर का सपना बन सकती है। इस दौरान आप गरीब हो सकते हैं, अपनी सारी संपत्ति खो सकते हैं और कुछ मानसिक समस्याएं हो सकती हैं। साथ ही, कुछ बुरी आदतों के आपके जीवन में आने की प्रबल संभावना है। ",
  "sunAntardasha":"सूर्य और शुक्र के बीच का संबंध अनौपचारिक है, इसलिए सूर्य किसी तरह शुक्र के सकारात्मक प्रभाव को बढ़ाता है। हालाँकि धन में थोड़ी प्रगति होगी, लेकिन जीवन में कुछ चुनौतियाँ बनी रहेंगी। परिवार के सदस्यों और जीवनसाथी के साथ छोटे-मोटे विवाद होने की संभावना है। यही वह समय है जब ईमानदार प्रयास से ही अच्छे परिणाम मिल सकते हैं। कुछ शत्रु या विरोधी आपको नीचे खींचने की कोशिश भी कर सकते हैं। इसके अलावा आपको सहयोग की कमी भी महसूस होती है। यह दशा सबसे अधिक आपकी आंखों, सिर, पेट और हृदय को प्रभावित करती है।",
  "venusAntardasha":"शुक्र की अंतर्दशा से धन-संपत्ति और समृद्धि की प्राप्ति होती है। जातक को बहुत आराम, सुविधा, नए कपड़े, विलासिता आदि का आनंद मिलता है। शुक्र ग्रह समाज में नाम और प्रसिद्धि भी दिलाता है। आर्थिक लाभ के साथ-साथ निजी जीवन में इच्छाओं की तीव्रता का भी अनुभव होता है। यह मूड पुराने रिश्तों में नए रिश्ते और रोमांस लाता है। यह आपके वैवाहिक जीवन में प्यार और जुनून वापस लाता है। व्यक्ति का रुझान कलात्मक रूप से होता है और वह रचनात्मक गतिविधियों जैसे ललित कला आदि का शौकीन हो जाता है। इस अवधि के दौरान उसे बहुत खुशी और खुशी मिलती है।",
  "saturnAntardasha":"शनि पुरुष है, जबकि शुक्र स्त्री है। चूंकि दोनों ग्रह एक दूसरे के मित्र हैं इसलिए शनि का नकारात्मक प्रभाव कुछ हद तक कम हो जाता है। इस दशा के परिणाम औसत होते हैं। वहीं जातकों को दांपत्य जीवन में कलह का सामना करना पड़ सकता है। इस अवधि के दौरान जातक को अत्यधिक आराम और विलासिता का आनंद मिलता है। करियर और सामाजिक जीवन में रुकावटें जीवन में कुछ अशांति पैदा कर सकती हैं। बढ़ते खर्च के कारण स्वास्थ्य संबंधी समस्याएं और वित्तीय अस्थिरता भी बनी रहती है। एक सकारात्मक बात यह है कि यह अवधि धार्मिक झुकाव में वृद्धि से चिह्नित है। यह कठिन परिश्रम का काल है. यदि आप गंभीर प्रयासों में निवेश करेंगे तो परिणाम कुछ हद तक सकारात्मक रहेंगे।",
  "rahuAntardasha":"यह अवधि बच्चों और रिश्तेदारों से शुभ समाचार लेकर आती है। हालाँकि, जातक को आग, रसायन या ज़हर से जुड़ी स्थितियों में सावधानी बरतनी चाहिए। इस दौरान दवा के कारण कुछ संक्रमण भी संभव है। इस दौरान आप शत्रुओं को परास्त कर सकते हैं। राहु का नकारात्मक प्रभाव कुछ हद तक शुक्र के लाभकारी पहलुओं का ध्यान रखता है, इसलिए इस अवधि के दौरान कुछ चुनौतियाँ और कठिनाइयाँ बनी रहती हैं। जातक कार्यस्थल पर वरिष्ठों की कृपा से वंचित हो सकता है और कभी-कभी पद और धन खो सकता है। रिश्तों में भी कुछ कड़वाहट और गलतफहमियां बनी रहती हैं।",
  "moonAntardasha":"जब ये दोनों स्त्री जल ऊर्जाएं दशा में टकराती हैं, तो जातक कलात्मक खोज और सौंदर्य, जैसे संगीत, फूल, सुगंध, ललित कला आदि के शौकीन हो जाते हैं। ये दोनों ग्रह कोमल, स्त्री और लाभकारी हैं - सटीक परिणाम व्यक्तिगत कुंडली के भीतर भिन्न होते हैं। अत्यधिक विनम्र ऊर्जा करियर में समस्याओं का कारण बनती है। पारिवारिक जीवन में भी कठिनाइयों का सामना करना पड़ सकता है। जातक को नेक मार्ग पर चलना होगा। आध्यात्मिकता की ओर झुकाव मदद करता है।",
  "mercuryAntardasha":"शुक्र और बुध एक दूसरे के मित्र हैं। इसके अलावा, दोनों ग्रह लाभकारी हैं। यदि यह दशा अशुभ प्रभाव से मुक्त हो तो व्यक्ति संतान के साथ आरामदायक और सुखद जीवन का आनंद लेते हैं। जातक हर मामले में ख़ुशी महसूस कर सकता है। विरोधियों को परेशान करने और प्रसिद्धि पाने के लिए बुध उचित मात्रा में बुद्धि को प्रभावित करता है। यह उन लोगों के लिए एक उत्कृष्ट अवधि है जो वाद-विवाद, कला, कविता, लेखन या पेंटिंग जैसी रचनात्मक प्रतियोगिताओं में भाग लेते हैं। जातक मित्रों एवं परिवार के साथ संतोषप्रद जीवन व्यतीत करता है। जीवनसाथी और परिवार के अन्य सदस्यों के साथ रिश्ते स्थिर और खुशहाल रहते हैं। आप रिश्तों को लेकर अधिक ईमानदार हो जाते हैं।",
  "ketuAntardasha":"वैदिक ज्योतिष में केतु एक अशुभ ग्रह है, इसलिए यह यहां स्त्री शुक्र के सकारात्मक प्रभाव को कमजोर कर देता है। व्यक्तियों को रिश्तों में कड़वाहट बढ़ने का अनुभव होता है। इस अवधि में मानसिक शांति की कमी भी बनी रहती है। कई बाधाएँ आपको सफलता की ओर बढ़ने से रोकती हैं, खासकर आपके करियर में। जातक को कार्यस्थल पर अपना पद खोना पड़ सकता है या कोई नुकसान उठाना पड़ सकता है। इस दौरान कुछ अनचाही यात्राएं भी होती हैं। आपको बहुत सावधान रहना होगा क्योंकि आपके दुश्मन भी आपको नुकसान पहुंचाने की कोशिश करेंगे।",
  "marsAntardasha":"इस दशा काल में कई बार रक्त संबंधी परेशानियां उत्पन्न होती हैं। जातक आक्रामक और प्रतिशोधी हो जाते हैं। ज्योतिषी के अनुसार, कामकाज में कुछ रुकावटें आ सकती हैं, इसलिए आपको अपने व्यवहार पर नियंत्रण रखने की दिशा में काम करना चाहिए। बुखार, सर्दी, रक्त संक्रमण, एसिडिटी आदि जैसी स्वास्थ्य समस्याएं भी बनी रह सकती हैं। हालाँकि, इस अवधि के दौरान जातक धन, आभूषण, विलासितापूर्ण कपड़े आदि से भी आकर्षित होते हैं। अगर आप जमीन, तांबे या सोने से जुड़ा कारोबार करते हैं तो इस अवधि में भारी मुनाफा होगा। कुल मिलाकर यह दशा जातक के लिए मिश्रित परिणाम लेकर आती है।",
  "jupiterAntardasha":"जबकि बृहस्पति और शुक्र के बीच संबंध नकारात्मक है, ये दोनों ग्रह लाभकारी हैं। वैदिक ज्योतिष में बृहस्पति को सबसे लाभकारी ग्रह माना जाता है और इसका संबंध विस्तार से है। शुक्र के अंतर्विरोध के तहत, शुक्र जो देता है, बृहस्पति उसका विस्तार करता है। इस अवधि के दौरान जातक को अच्छी व्यावसायिक स्थिति, भौतिक सुख और पारिवारिक मामलों में खुशी मिलती है। इस अवस्था में आध्यात्मिकता की ओर भी कुछ झुकाव महसूस होता है। व्यक्ति को अपने सामाजिक दायरे में खूब पहचान मिलती है. बृहस्पति ज्ञान और बुद्धि का भी विस्तार करता है। जीवनसाथी और बच्चे एक साथ सुखद समय बिताते हैं और उन्हें करियर में उन्नति भी मिलती है।",
  
}
    }
    
    function dashaChecker(){
      let opt3 = document.getElementById("opt3").value;
    let opt4 = document.getElementById("opt4").value;
    
    if(opt3 == "sunMahadasha" && opt4 == ""){
      document.getElementById("print").innerHTML = dasha.sunDasha.sunMahadasha;
    }
     else if(opt3 == "sunMahadasha" && opt4 == "sunAntardasha"){
        document.getElementById("print").innerHTML = dasha.sunDasha.sunAntardasha;
      } 
      else if(opt3 == "sunMahadasha" && opt4 == "venusAntardasha"){
        document.getElementById("print").innerHTML = dasha.sunDasha.venusAntardasha;
      }
      else if(opt3 == "sunMahadasha" && opt4 == "saturnAntardasha"){
        document.getElementById("print").innerHTML = dasha.sunDasha.saturnAntardasha;
      }
      else if(opt3 == "sunMahadasha" && opt4 == "rahuAntardasha"){
        document.getElementById("print").innerHTML = dasha.sunDasha.rahuAntardasha;
      }
      else if(opt3 == "sunMahadasha" && opt4 == "moonAntardasha"){
        document.getElementById("print").innerHTML = dasha.sunDasha.moonAntardasha;
      }
      else if(opt3 == "sunMahadasha" && opt4 == "mercuryAntardasha"){
        document.getElementById("print").innerHTML = dasha.sunDasha.mercuryAntardasha;
      }
      else if(opt3 == "sunMahadasha" && opt4 == "ketuAntardasha"){
        document.getElementById("print").innerHTML = dasha.sunDasha.ketuAntardasha;
      }
      else if(opt3 == "sunMahadasha" && opt4 == "marsAntardasha"){
        document.getElementById("print").innerHTML = dasha.sunDasha.marsAntardasha;
      }
      else if(opt3 == "sunMahadasha" && opt4 == "jupiterAntardasha"){
        document.getElementById("print").innerHTML = dasha.sunDasha.jupiterAntardasha;
      }
      
      
      
      if(opt3 == "moonMahadasha" && opt4 == ""){
      document.getElementById("print").innerHTML = dasha.moonDasha.moonMahadasha;
    }
     else if(opt3 == "moonMahadasha" && opt4 == "sunAntardasha"){
        document.getElementById("print").innerHTML = dasha.moonDasha.sunAntardasha;
      } 
      else if(opt3 == "moonMahadasha" && opt4 == "venusAntardasha"){
        document.getElementById("print").innerHTML = dasha.moonDasha.venusAntardasha;
      }
      else if(opt3 == "moonMahadasha" && opt4 == "saturnAntardasha"){
        document.getElementById("print").innerHTML = dasha.moonDasha.saturnAntardasha;
      }
      else if(opt3 == "moonMahadasha" && opt4 == "rahuAntardasha"){
        document.getElementById("print").innerHTML = dasha.moonDasha.rahuAntardasha;
      }
      else if(opt3 == "moonMahadasha" && opt4 == "moonAntardasha"){
        document.getElementById("print").innerHTML = dasha.moonDasha.moonAntardasha;
      }
      else if(opt3 == "moonMahadasha" && opt4 == "mercuryAntardasha"){
        document.getElementById("print").innerHTML = dasha.moonDasha.mercuryAntardasha;
      }
      else if(opt3 == "moonMahadasha" && opt4 == "ketuAntardasha"){
        document.getElementById("print").innerHTML = dasha.moonDasha.ketuAntardasha;
      }
      else if(opt3 == "moonMahadasha" && opt4 == "marsAntardasha"){
        document.getElementById("print").innerHTML = dasha.moonDasha.marsAntardasha;
      }
      else if(opt3 == "moonMahadasha" && opt4 == "jupiterAntardasha"){
        document.getElementById("print").innerHTML = dasha.moonDasha.jupiterAntardasha;
      } 
      
      
      
      if(opt3 == "marsMahadasha" && opt4 == ""){
      document.getElementById("print").innerHTML = dasha.marsDasha.marsMahadasha;
    }
     else if(opt3 == "marsMahadasha" && opt4 == "sunAntardasha"){
        document.getElementById("print").innerHTML = dasha.marsDasha.sunAntardasha;
      } 
      else if(opt3 == "marsMahadasha" && opt4 == "venusAntardasha"){
        document.getElementById("print").innerHTML = dasha.marsDasha.venusAntardasha;
      }
      else if(opt3 == "marsMahadasha" && opt4 == "saturnAntardasha"){
        document.getElementById("print").innerHTML = dasha.marsDasha.saturnAntardasha;
      }
      else if(opt3 == "marsMahadasha" && opt4 == "rahuAntardasha"){
        document.getElementById("print").innerHTML = dasha.marsDasha.rahuAntardasha;
      }
      else if(opt3 == "marsMahadasha" && opt4 == "moonAntardasha"){
        document.getElementById("print").innerHTML = dasha.marsDasha.moonAntardasha;
      }
      else if(opt3 == "marsMahadasha" && opt4 == "mercuryAntardasha"){
        document.getElementById("print").innerHTML = dasha.marsDasha.mercuryAntardasha;
      }
      else if(opt3 == "marsMahadasha" && opt4 == "ketuAntardasha"){
        document.getElementById("print").innerHTML = dasha.marsDasha.ketuAntardasha;
      }
      else if(opt3 == "marsMahadasha" && opt4 == "marsAntardasha"){
        document.getElementById("print").innerHTML = dasha.marsDasha.marsAntardasha;
      }
      else if(opt3 == "marsMahadasha" && opt4 == "jupiterAntardasha"){
        document.getElementById("print").innerHTML = dasha.marsDasha.jupiterAntardasha;
      }
      
      
      
      if(opt3 == "rahuMahadasha" && opt4 == ""){
      document.getElementById("print").innerHTML = dasha.rahuDasha.sunMahadasha;
    }
     else if(opt3 == "rahuMahadasha" && opt4 == "sunAntardasha"){
        document.getElementById("print").innerHTML = dasha.rahuDasha.sunAntardasha;
      } 
      else if(opt3 == "rahuMahadasha" && opt4 == "venusAntardasha"){
        document.getElementById("print").innerHTML = dasha.rahuDasha.venusAntardasha;
      }
      else if(opt3 == "rahuMahadasha" && opt4 == "saturnAntardasha"){
        document.getElementById("print").innerHTML = dasha.rahuDasha.saturnAntardasha;
      }
      else if(opt3 == "rahuMahadasha" && opt4 == "rahuAntardasha"){
        document.getElementById("print").innerHTML = dasha.rahuDasha.rahuAntardasha;
      }
      else if(opt3 == "rahuMahadasha" && opt4 == "moonAntardasha"){
        document.getElementById("print").innerHTML = dasha.rahuDasha.moonAntardasha;
      }
      else if(opt3 == "rahuMahadasha" && opt4 == "mercuryAntardasha"){
        document.getElementById("print").innerHTML = dasha.rahuDasha.mercuryAntardasha;
      }
      else if(opt3 == "rahuMahadasha" && opt4 == "ketuAntardasha"){
        document.getElementById("print").innerHTML = dasha.rahuDasha.ketuAntardasha;
      }
      else if(opt3 == "rahuMahadasha" && opt4 == "marsAntardasha"){
        document.getElementById("print").innerHTML = dasha.rahuDasha.marsAntardasha;
      }
      else if(opt3 == "rahuMahadasha" && opt4 == "jupiterAntardasha"){
        document.getElementById("print").innerHTML = dasha.rahuDasha.jupiterAntardasha;
      }
      
      
      
      if(opt3 == "jupiterMahadasha" && opt4 == ""){
      document.getElementById("print").innerHTML = dasha.jupiterDasha.sunMahadasha;
    }
     else if(opt3 == "jupiterMahadasha" && opt4 == "sunAntardasha"){
        document.getElementById("print").innerHTML = dasha.jupiterDasha.sunAntardasha;
      } 
      else if(opt3 == "jupiterMahadasha" && opt4 == "venusAntardasha"){
        document.getElementById("print").innerHTML = dasha.jupiterDasha.venusAntardasha;
      }
      else if(opt3 == "jupiterMahadasha" && opt4 == "saturnAntardasha"){
        document.getElementById("print").innerHTML = dasha.jupiterDasha.saturnAntardasha;
      }
      else if(opt3 == "jupiterMahadasha" && opt4 == "rahuAntardasha"){
        document.getElementById("print").innerHTML = dasha.jupiterDasha.rahuAntardasha;
      }
      else if(opt3 == "jupiterMahadasha" && opt4 == "moonAntardasha"){
        document.getElementById("print").innerHTML = dasha.jupiterDasha.moonAntardasha;
      }
      else if(opt3 == "jupiterMahadasha" && opt4 == "mercuryAntardasha"){
        document.getElementById("print").innerHTML = dasha.jupiterDasha.mercuryAntardasha;
      }
      else if(opt3 == "jupiterMahadasha" && opt4 == "ketuAntardasha"){
        document.getElementById("print").innerHTML = dasha.jupiterDasha.ketuAntardasha;
      }
      else if(opt3 == "jupiterMahadasha" && opt4 == "marsAntardasha"){
        document.getElementById("print").innerHTML = dasha.jupiterDasha.marsAntardasha;
      }
      else if(opt3 == "jupiterMahadasha" && opt4 == "jupiterAntardasha"){
        document.getElementById("print").innerHTML = dasha.jupiterDasha.jupiterAntardasha;
      }
      
      
      
      if(opt3 == "saturnMahadasha" && opt4 == ""){
      document.getElementById("print").innerHTML = dasha.saturnDasha.sunMahadasha;
    }
     else if(opt3 == "saturnMahadasha" && opt4 == "sunAntardasha"){
        document.getElementById("print").innerHTML = dasha.saturnDasha.sunAntardasha;
      } 
      else if(opt3 == "saturnMahadasha" && opt4 == "venusAntardasha"){
        document.getElementById("print").innerHTML = dasha.saturnDasha.venusAntardasha;
      }
      else if(opt3 == "saturnMahadasha" && opt4 == "saturnAntardasha"){
        document.getElementById("print").innerHTML = dasha.saturnDasha.saturnAntardasha;
      }
      else if(opt3 == "saturnMahadasha" && opt4 == "rahuAntardasha"){
        document.getElementById("print").innerHTML = dasha.saturnDasha.rahuAntardasha;
      }
      else if(opt3 == "saturnMahadasha" && opt4 == "moonAntardasha"){
        document.getElementById("print").innerHTML = dasha.saturnDasha.moonAntardasha;
      }
      else if(opt3 == "saturnMahadasha" && opt4 == "mercuryAntardasha"){
        document.getElementById("print").innerHTML = dasha.saturnDasha.mercuryAntardasha;
      }
      else if(opt3 == "saturnMahadasha" && opt4 == "ketuAntardasha"){
        document.getElementById("print").innerHTML = dasha.saturnDasha.ketuAntardasha;
      }
      else if(opt3 == "saturnMahadasha" && opt4 == "marsAntardasha"){
        document.getElementById("print").innerHTML = dasha.saturnDasha.marsAntardasha;
      }
      else if(opt3 == "saturnMahadasha" && opt4 == "jupiterAntardasha"){
        document.getElementById("print").innerHTML = dasha.saturnDasha.jupiterAntardasha;
      }
      
      
      
      if(opt3 == "mercuryMahadasha" && opt4 == ""){
      document.getElementById("print").innerHTML = dasha.mercuryDasha.sunMahadasha;
    }
     else if(opt3 == "mercuryMahadasha" && opt4 == "sunAntardasha"){
        document.getElementById("print").innerHTML = dasha.mercuryDasha.sunAntardasha;
      } 
      else if(opt3 == "mercuryMahadasha" && opt4 == "venusAntardasha"){
        document.getElementById("print").innerHTML = dasha.mercuryDasha.venusAntardasha;
      }
      else if(opt3 == "mercuryMahadasha" && opt4 == "saturnAntardasha"){
        document.getElementById("print").innerHTML = dasha.mercuryDasha.saturnAntardasha;
      }
      else if(opt3 == "mercuryMahadasha" && opt4 == "rahuAntardasha"){
        document.getElementById("print").innerHTML = dasha.mercuryDasha.rahuAntardasha;
      }
      else if(opt3 == "mercuryMahadasha" && opt4 == "moonAntardasha"){
        document.getElementById("print").innerHTML = dasha.mercuryDasha.moonAntardasha;
      }
      else if(opt3 == "mercuryMahadasha" && opt4 == "mercuryAntardasha"){
        document.getElementById("print").innerHTML = dasha.mercuryDasha.mercuryAntardasha;
      }
      else if(opt3 == "mercuryMahadasha" && opt4 == "ketuAntardasha"){
        document.getElementById("print").innerHTML = dasha.mercuryDasha.ketuAntardasha;
      }
      else if(opt3 == "mercuryMahadasha" && opt4 == "marsAntardasha"){
        document.getElementById("print").innerHTML = dasha.mercuryDasha.marsAntardasha;
      }
      else if(opt3 == "mercuryMahadasha" && opt4 == "jupiterAntardasha"){
        document.getElementById("print").innerHTML = dasha.mercuryDasha.jupiterAntardasha;
      }
      
      
      
      if(opt3 == "ketuMahadasha" && opt4 == ""){
      document.getElementById("print").innerHTML = dasha.ketuDasha.sunMahadasha;
    }
     else if(opt3 == "ketuMahadasha" && opt4 == "sunAntardasha"){
        document.getElementById("print").innerHTML = dasha.ketuDasha.sunAntardasha;
      } 
      else if(opt3 == "ketuMahadasha" && opt4 == "venusAntardasha"){
        document.getElementById("print").innerHTML = dasha.ketuDasha.venusAntardasha;
      }
      else if(opt3 == "ketuMahadasha" && opt4 == "saturnAntardasha"){
        document.getElementById("print").innerHTML = dasha.ketuDasha.saturnAntardasha;
      }
      else if(opt3 == "ketuMahadasha" && opt4 == "rahuAntardasha"){
        document.getElementById("print").innerHTML = dasha.ketuDasha.rahuAntardasha;
      }
      else if(opt3 == "ketuMahadasha" && opt4 == "moonAntardasha"){
        document.getElementById("print").innerHTML = dasha.ketuDasha.moonAntardasha;
      }
      else if(opt3 == "ketuMahadasha" && opt4 == "mercuryAntardasha"){
        document.getElementById("print").innerHTML = dasha.ketuDasha.mercuryAntardasha;
      }
      else if(opt3 == "ketuMahadasha" && opt4 == "ketuAntardasha"){
        document.getElementById("print").innerHTML = dasha.ketuDasha.ketuAntardasha;
      }
      else if(opt3 == "ketuMahadasha" && opt4 == "marsAntardasha"){
        document.getElementById("print").innerHTML = dasha.ketuDasha.marsAntardasha;
      }
      else if(opt3 == "ketuMahadasha" && opt4 == "jupiterAntardasha"){
        document.getElementById("print").innerHTML = dasha.ketuDasha.jupiterAntardasha;
      }
      
      
      
      if(opt3 == "venusMahadasha" && opt4 == ""){
      document.getElementById("print").innerHTML = dasha.venusDasha.sunMahadasha;
    }
     else if(opt3 == "venusMahadasha" && opt4 == "sunAntardasha"){
        document.getElementById("print").innerHTML = dasha.venusDasha.sunAntardasha;
      } 
      else if(opt3 == "venusMahadasha" && opt4 == "venusAntardasha"){
        document.getElementById("print").innerHTML = dasha.venusDasha.venusAntardasha;
      }
      else if(opt3 == "venusMahadasha" && opt4 == "saturnAntardasha"){
        document.getElementById("print").innerHTML = dasha.venusDasha.saturnAntardasha;
      }
      else if(opt3 == "venusMahadasha" && opt4 == "rahuAntardasha"){
        document.getElementById("print").innerHTML = dasha.venusDasha.rahuAntardasha;
      }
      else if(opt3 == "venusMahadasha" && opt4 == "moonAntardasha"){
        document.getElementById("print").innerHTML = dasha.venusDasha.moonAntardasha;
      }
      else if(opt3 == "venusMahadasha" && opt4 == "mercuryAntardasha"){
        document.getElementById("print").innerHTML = dasha.venusDasha.mercuryAntardasha;
      }
      else if(opt3 == "venusMahadasha" && opt4 == "ketuAntardasha"){
        document.getElementById("print").innerHTML = dasha.venusDasha.ketuAntardasha;
      }
      else if(opt3 == "venusMahadasha" && opt4 == "marsAntardasha"){
        document.getElementById("print").innerHTML = dasha.venusDasha.marsAntardasha;
      }
      else if(opt3 == "venusMahadasha" && opt4 == "jupiterAntardasha"){
        document.getElementById("print").innerHTML = dasha.venusDasha.jupiterAntardasha;
      }
           }
