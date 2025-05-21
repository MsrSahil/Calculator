const ThemeToggle = document.getElementById("themeToggle");
const container = document.getElementById("container");

ThemeToggle.addEventListener("click", () => {
  container.classList.toggle("dark-theme");
});

function Input(char) {
  const question = document.getElementById("ques");
  if (char === "C") {
    question.value = "";
  } else if (char === "=") {
    let expr = question.value;
    expr = expr.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
    expr = expr.replace(/(\d+)\s*√\s*(\d+)/g, "($1*Math.sqrt($2))");
    expr = expr.replace(/√(\d+)/g, "Math.sqrt($1)");

    const result = eval(expr);
    question.value = result;
  } else {
    question.value = question.value + char;
  }
}
