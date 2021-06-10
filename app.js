// dom elements
let score1Input = document.querySelector(".score1");
let score1Grade = document.querySelector(".grade1");
let pointLabel1 = document.querySelector(".pointLabel1");

let score2Input = document.querySelector(".score2");
let score2Grade = document.querySelector(".grade2");
let pointLabel2 = document.querySelector(".pointLabel2");

let score3Input = document.querySelector(".score3");
let score3Grade = document.querySelector(".grade3");
let pointLabel3 = document.querySelector(".pointLabel3");

let score4Input = document.querySelector(".score4");
let score4Grade = document.querySelector(".grade4");
let pointLabel4 = document.querySelector(".pointLabel4");

let score5Input = document.querySelector(".score5");
let score5Grade = document.querySelector(".grade5");
let pointLabel5 = document.querySelector(".pointLabel5");

let score6Input = document.querySelector(".score6");
let score6Grade = document.querySelector(".grade6");
let pointLabel6 = document.querySelector(".pointLabel6");

let score7Input = document.querySelector(".score7");
let score7Grade = document.querySelector(".grade7");
let pointLabel7 = document.querySelector(".pointLabel7");

let score8Input = document.querySelector(".score8");
let score8Grade = document.querySelector(".grade8");
let pointLabel8 = document.querySelector(".pointLabel8");

let score9Input = document.querySelector(".score9");
let score9Grade = document.querySelector(".grade9");
let pointLabel9 = document.querySelector(".pointLabel9");

let calculateBtn = document.querySelector(".btn__value");

const getGradesAndPoints = (e) => {
  e.preventDefault();
  if (score1Input.value && !isNaN(score1Input.value)) {
    if (score1Input.value >= 75 && score1Input.value <= 100) {
      score1Grade.textContent = "A1";
      pointLabel1.textContent = "4.00";
    } else if (score1Input.value >= 70 && score1Input.value <= 74) {
      score1Grade.textContent = "A2";
      pointLabel1.textContent = "3.75";
    } else if (score1Input.value >= 65 && score1Input.value <= 69) {
      score1Grade.textContent = "B1";
      pointLabel1.textContent = "3.50";
    } else if (score1Input.value >= 60 && score1Input.value <= 64) {
      score1Grade.textContent = "B2";
      pointLabel1.textContent = "3.00";
    } else if (score1Input.value >= 55 && score1Input.value <= 59) {
      score1Grade.textContent = "C1";
      pointLabel1.textContent = "2.75";
    } else if (score1Input.value >= 50 && score1Input.value <= 54) {
      score1Grade.textContent = "C2";
      pointLabel1.textContent = "2.50";
    } else if (score1Input.value >= 45 && score1Input.value <= 49) {
      score1Grade.textContent = "D1";
      pointLabel1.textContent = "2.00";
    } else if (score1Input.value >= 40 && score1Input.value <= 44) {
      score1Grade.textContent = "D2";
      pointLabel1.textContent = "1.75";
    } else if (score1Input.value >= 0 && score1Input.value <= 39) {
      score1Grade.textContent = "F";
      pointLabel1.textContent = "0.00";
    } else {
      score1Input.value = "";
      score1Grade.textContent = "none";
      pointLabel1.textContent = "none";
      return alert("Invalid score");
    }
  }

  if (score2Input.value && !isNaN(score2Input.value)) {
    if (score2Input.value >= 75 && score2Input.value <= 100) {
      score2Grade.textContent = "A1";
      pointLabel2.textContent = "4.00";
    } else if (score2Input.value >= 70 && score2Input.value <= 74) {
      score2Grade.textContent = "A2";
      pointLabel2.textContent = "3.75";
    } else if (score2Input.value >= 65 && score2Input.value <= 69) {
      score2Grade.textContent = "B1";
      pointLabel2.textContent = "3.50";
    } else if (score2Input.value >= 60 && score2Input.value <= 64) {
      score2Grade.textContent = "B2";
      pointLabel2.textContent = "3.00";
    } else if (score2Input.value >= 55 && score2Input.value <= 59) {
      score2Grade.textContent = "C1";
      pointLabel2.textContent = "2.75";
    } else if (score2Input.value >= 50 && score2Input.value <= 54) {
      score2Grade.textContent = "C2";
      pointLabel2.textContent = "2.50";
    } else if (score2Input.value >= 45 && score2Input.value <= 49) {
      score2Grade.textContent = "D1";
      pointLabel2.textContent = "2.00";
    } else if (score2Input.value >= 40 && score2Input.value <= 44) {
      score2Grade.textContent = "D2";
      pointLabel2.textContent = "1.75";
    } else if (score2Input.value >= 0 && score2Input.value <= 39) {
      score2Grade.textContent = "F";
      pointLabel2.textContent = "0.00";
    } else {
      score2Input.value = "";
      score2Grade.textContent = "none";
      pointLabel2.textContent = "none";
      return alert("Invalid score");
    }
  }

  if (score3Input.value && !isNaN(score3Input.value)) {
    if (score3Input.value >= 75 && score3Input.value <= 100) {
      score3Grade.textContent = "A1";
      pointLabel3.textContent = "4.00";
    } else if (score3Input.value >= 70 && score3Input.value <= 74) {
      score3Grade.textContent = "A2";
      pointLabel3.textContent = "3.75";
    } else if (score3Input.value >= 65 && score3Input.value <= 69) {
      score3Grade.textContent = "B1";
      pointLabel3.textContent = "3.50";
    } else if (score3Input.value >= 60 && score3Input.value <= 64) {
      score3Grade.textContent = "B2";
      pointLabel3.textContent = "3.00";
    } else if (score3Input.value >= 55 && score3Input.value <= 59) {
      score3Grade.textContent = "C1";
      pointLabel3.textContent = "2.75";
    } else if (score3Input.value >= 50 && score3Input.value <= 54) {
      score3Grade.textContent = "C2";
      pointLabel3.textContent = "2.50";
    } else if (score3Input.value >= 45 && score3Input.value <= 49) {
      score3Grade.textContent = "D1";
      pointLabel3.textContent = "2.00";
    } else if (score3Input.value >= 40 && score3Input.value <= 44) {
      score3Grade.textContent = "D2";
      pointLabel3.textContent = "1.75";
    } else if (score3Input.value >= 0 && score3Input.value <= 39) {
      score3Grade.textContent = "F";
      pointLabel3.textContent = "0.00";
    } else {
      score3Input.value = "";
      score3Grade.textContent = "none";
      pointLabel3.textContent = "none";
      return alert("Invalid score");
    }
  }

  if (score4Input.value && !isNaN(score4Input.value)) {
    if (score4Input.value >= 75 && score4Input.value <= 100) {
      score4Grade.textContent = "A1";
      pointLabel4.textContent = "4.00";
    } else if (score4Input.value >= 70 && score4Input.value <= 74) {
      score4Grade.textContent = "A2";
      pointLabel4.textContent = "3.75";
    } else if (score4Input.value >= 65 && score4Input.value <= 69) {
      score4Grade.textContent = "B1";
      pointLabel4.textContent = "3.50";
    } else if (score4Input.value >= 60 && score4Input.value <= 64) {
      score4Grade.textContent = "B2";
      pointLabel4.textContent = "3.00";
    } else if (score4Input.value >= 55 && score4Input.value <= 59) {
      score4Grade.textContent = "C1";
      pointLabel4.textContent = "2.75";
    } else if (score4Input.value >= 50 && score4Input.value <= 54) {
      score4Grade.textContent = "C2";
      pointLabel4.textContent = "2.50";
    } else if (score4Input.value >= 45 && score4Input.value <= 49) {
      score4Grade.textContent = "D1";
      pointLabel4.textContent = "2.00";
    } else if (score4Input.value >= 40 && score4Input.value <= 44) {
      score4Grade.textContent = "D2";
      pointLabel4.textContent = "1.75";
    } else if (score4Input.value >= 0 && score4Input.value <= 39) {
      score4Grade.textContent = "F";
      pointLabel4.textContent = "0.00";
    } else {
      score4Input.value = "";
      score4Grade.textContent = "none";
      pointLabel4.textContent = "none";
      return alert("Invalid score");
    }
  }

  if (score5Input.value && !isNaN(score5Input.value)) {
    if (score5Input.value >= 75 && score5Input.value <= 100) {
      score5Grade.textContent = "A1";
      pointLabel5.textContent = "4.00";
    } else if (score5Input.value >= 70 && score5Input.value <= 74) {
      score5Grade.textContent = "A2";
      pointLabel5.textContent = "3.75";
    } else if (score5Input.value >= 65 && score5Input.value <= 69) {
      score5Grade.textContent = "B1";
      pointLabel5.textContent = "3.50";
    } else if (score5Input.value >= 60 && score5Input.value <= 64) {
      score5Grade.textContent = "B2";
      pointLabel5.textContent = "3.00";
    } else if (score5Input.value >= 55 && score5Input.value <= 59) {
      score5Grade.textContent = "C1";
      pointLabel5.textContent = "2.75";
    } else if (score5Input.value >= 50 && score5Input.value <= 54) {
      score5Grade.textContent = "C2";
      pointLabel5.textContent = "2.50";
    } else if (score5Input.value >= 45 && score5Input.value <= 49) {
      score5Grade.textContent = "D1";
      pointLabel5.textContent = "2.00";
    } else if (score5Input.value >= 40 && score5Input.value <= 44) {
      score5Grade.textContent = "D2";
      pointLabel5.textContent = "1.75";
    } else if (score5Input.value >= 0 && score5Input.value <= 39) {
      score5Grade.textContent = "F";
      pointLabel5.textContent = "0.00";
    } else {
      score5Input.value = "";
      score5Grade.textContent = "none";
      pointLabel5.textContent = "none";
      return alert("Invalid score");
    }
  }

  if (score6Input.value && !isNaN(score6Input.value)) {
    if (score6Input.value >= 75 && score6Input.value <= 100) {
      score6Grade.textContent = "A1";
      pointLabel6.textContent = "4.00";
    } else if (score6Input.value >= 70 && score6Input.value <= 74) {
      score6Grade.textContent = "A2";
      pointLabel6.textContent = "3.75";
    } else if (score6Input.value >= 65 && score6Input.value <= 69) {
      score6Grade.textContent = "B1";
      pointLabel6.textContent = "3.50";
    } else if (score6Input.value >= 60 && score6Input.value <= 64) {
      score6Grade.textContent = "B2";
      pointLabel6.textContent = "3.00";
    } else if (score6Input.value >= 55 && score6Input.value <= 59) {
      score6Grade.textContent = "C1";
      pointLabel6.textContent = "2.75";
    } else if (score6Input.value >= 50 && score6Input.value <= 54) {
      score6Grade.textContent = "C2";
      pointLabel6.textContent = "2.50";
    } else if (score6Input.value >= 45 && score6Input.value <= 49) {
      score6Grade.textContent = "D1";
      pointLabel6.textContent = "2.00";
    } else if (score6Input.value >= 40 && score6Input.value <= 44) {
      score6Grade.textContent = "D2";
      pointLabel6.textContent = "1.75";
    } else if (score6Input.value >= 0 && score6Input.value <= 39) {
      score6Grade.textContent = "F";
      pointLabel6.textContent = "0.00";
    } else {
      score6Input.value = "";
      score6Grade.textContent = "none";
      pointLabel6.textContent = "none";
      return alert("Invalid score");
    }
  }

  if (score7Input.value && !isNaN(score7Input.value)) {
    if (score7Input.value >= 75 && score7Input.value <= 100) {
      score7Grade.textContent = "A1";
      pointLabel7.textContent = "4.00";
    } else if (score7Input.value >= 70 && score7Input.value <= 74) {
      score7Grade.textContent = "A2";
      pointLabel7.textContent = "3.75";
    } else if (score7Input.value >= 65 && score7Input.value <= 69) {
      score7Grade.textContent = "B1";
      pointLabel7.textContent = "3.50";
    } else if (score7Input.value >= 60 && score7Input.value <= 64) {
      score7Grade.textContent = "B2";
      pointLabel7.textContent = "3.00";
    } else if (score7Input.value >= 55 && score7Input.value <= 59) {
      score7Grade.textContent = "C1";
      pointLabel7.textContent = "2.75";
    } else if (score7Input.value >= 50 && score7Input.value <= 54) {
      score7Grade.textContent = "C2";
      pointLabel7.textContent = "2.50";
    } else if (score7Input.value >= 45 && score7Input.value <= 49) {
      score7Grade.textContent = "D1";
      pointLabel7.textContent = "2.00";
    } else if (score7Input.value >= 40 && score7Input.value <= 44) {
      score7Grade.textContent = "D2";
      pointLabel7.textContent = "1.75";
    } else if (score7Input.value >= 0 && score7Input.value <= 39) {
      score7Grade.textContent = "F";
      pointLabel7.textContent = "0.00";
    } else {
      score7Input.value = "";
      score7Grade.textContent = "none";
      pointLabel8.textContent = "none";
      return alert("Invalid score");
    }
  }

  if (score8Input.value && !isNaN(score8Input.value)) {
    if (score8Input.value >= 75 && score8Input.value <= 100) {
      score8Grade.textContent = "A1";
      pointLabel8.textContent = "4.00";
    } else if (score8Input.value >= 70 && score8Input.value <= 74) {
      score8Grade.textContent = "A2";
      pointLabel8.textContent = "3.75";
    } else if (score8Input.value >= 65 && score8Input.value <= 69) {
      score8Grade.textContent = "B1";
      pointLabel8.textContent = "3.50";
    } else if (score8Input.value >= 60 && score8Input.value <= 64) {
      score8Grade.textContent = "B2";
      pointLabel8.textContent = "3.00";
    } else if (score8Input.value >= 55 && score8Input.value <= 59) {
      score8Grade.textContent = "C1";
      pointLabel8.textContent = "2.75";
    } else if (score8Input.value >= 50 && score8Input.value <= 54) {
      score8Grade.textContent = "C2";
      pointLabel8.textContent = "2.50";
    } else if (score8Input.value >= 45 && score8Input.value <= 49) {
      score8Grade.textContent = "D1";
      pointLabel8.textContent = "2.00";
    } else if (score8Input.value >= 40 && score8Input.value <= 44) {
      score8Grade.textContent = "D2";
      pointLabel8.textContent = "1.75";
    } else if (score8Input.value >= 0 && score8Input.value <= 39) {
      score8Grade.textContent = "F";
      pointLabel8.textContent = "0.00";
    } else {
      score8Input.value = "";
      score8Grade.textContent = "none";
      pointLabel8.textContent = "none";
      return alert("Invalid score");
    }
  }

  if (score9Input.value && !isNaN(score9Input.value)) {
    if (score9Input.value >= 75 && score9Input.value <= 100) {
      score9Grade.textContent = "A1";
      pointLabel9.textContent = "4.00";
    } else if (score9Input.value >= 70 && score9Input.value <= 74) {
      score9Grade.textContent = "A2";
      pointLabel9.textContent = "3.75";
    } else if (score9Input.value >= 65 && score9Input.value <= 69) {
      score9Grade.textContent = "B1";
      pointLabel9.textContent = "3.50";
    } else if (score9Input.value >= 60 && score9Input.value <= 64) {
      score9Grade.textContent = "B2";
      pointLabel9.textContent = "3.00";
    } else if (score9Input.value >= 55 && score9Input.value <= 59) {
      score9Grade.textContent = "C1";
      pointLabel9.textContent = "2.75";
    } else if (score9Input.value >= 50 && score9Input.value <= 54) {
      score9Grade.textContent = "C2";
      pointLabel9.textContent = "2.50";
    } else if (score9Input.value >= 45 && score9Input.value <= 49) {
      score9Grade.textContent = "D1";
      pointLabel9.textContent = "2.00";
    } else if (score9Input.value >= 40 && score9Input.value <= 44) {
      score9Grade.textContent = "D2";
      pointLabel9.textContent = "1.75";
    } else if (score9Input.value >= 0 && score9Input.value <= 39) {
      score9Grade.textContent = "F";
      pointLabel9.textContent = "0.00";
    } else {
      score9Input.value = "";
      score9Grade.textContent = "none";
      pointLabel9.textContent = "none";
      return alert("Invalid score");
    }
  }
};

const calculateGPA = (e) => {
  e.preventDefault();
  const point1 = parseFloat(document.querySelector(".pointLabel1").textContent);
  const point2 = parseFloat(document.querySelector(".pointLabel2").textContent);
  const point3 = parseFloat(document.querySelector(".pointLabel3").textContent);
  const point4 = parseFloat(document.querySelector(".pointLabel4").textContent);
  const point5 = parseFloat(document.querySelector(".pointLabel5").textContent);
  const point6 = parseFloat(document.querySelector(".pointLabel6").textContent);
  const point7 = parseFloat(document.querySelector(".pointLabel7").textContent);
  const point8 = parseFloat(document.querySelector(".pointLabel8").textContent);
  const point9 = parseFloat(document.querySelector(".pointLabel9").textContent);

  const allPoints = [
    point1,
    point2,
    point3,
    point4,
    point5,
    point6,
    point7,
    point8,
    point9,
  ];

  const sumResult = allPoints
    .map((el) => {
      return el * 1;
    })
    .reduce((sum, el) => {
      return sum + el;
    });

  const GPAPoint = sumResult / allPoints.length;

  document.querySelector(".gpa__point-label").textContent = GPAPoint.toFixed(2);
};

document.addEventListener("input", getGradesAndPoints);

calculateBtn.addEventListener("click", calculateGPA);
