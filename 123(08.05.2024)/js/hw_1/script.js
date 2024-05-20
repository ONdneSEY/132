const interactWithUser = () => {
    let name = prompt("Будь ласка, введіть ваше ім'я:");
    
    while (!name) {
      name = prompt("Будь ласка, введіть ваше ім'я:");
    }
    
    let age = prompt("Будь ласка, введіть ваш вік:");
    
    while (isNaN(age) && age <= 0) {
      age = prompt("Будь ласка, введіть ваш вік коректно:");
    }
    
    if (age < 18) {
      alert("Ви не можете скористатися цим сайтом.");
    } else if (age >= 18 && age <= 22) {
      const confirmResult = confirm("Ви впевнені, що бажаєте продовжити?");
      
      if (confirmResult) {
        alert(`Ласкаво просимо, ${name}!`);
      } else {
        alert("Вам заборонено відвідувати цей веб-сайт.");
      }
    } else {
      alert(`Ласкаво просимо, ${name}!`);
    }
  };
  
  interactWithUser();
   