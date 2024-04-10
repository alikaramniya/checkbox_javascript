let all = document.querySelector('#all');
let form = document.forms.formInsert;
let button = form.button;
let div = document.querySelector("div");

let ages = form.age;

for (let age of ages) {
  age.addEventListener("change", function () {
    if (age.checked) {
      div.innerHTML += " " + age.value;

      let count = 0, total = ages.length;

      ages.forEach(item => {
        if (item.checked) count++
      })

      if (count == total) {
        all.checked = true;
      }


    } else if (div.textContent.includes(age.value)) {
      if (all.checked) {
        all.checked = false;
      }

      div.textContent = div.textContent
        .split(" ")
        .filter((item) => item != age.value)
        .join(" ");
    }
  });
}

all.addEventListener('change', function(e) {
  if (e.target.checked) {
    ages.forEach(age => {
        age.checked = true;
        div.textContent += ' ' + age.value;
    });
  } else {
    ages.forEach(age => {
        age.checked = false;
        div.textContent = '';
    });
  }
});
