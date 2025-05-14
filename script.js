function checkPassword() {
  const input = document.getElementById("password").value;

  if (input === "26.02.2001") {
    // Очищаем форму и показываем текст + фото
    document.querySelector("#container").innerHTML = `
      <h2>Ты самая лучшая!</h2>
      <p style="text-align:left; margin-top:10px;">
        Привет, Соня 💖 Я так много думал о тебе... Ты не просто человек, ты целый мир.
        Надеюсь, мы снова встретимся. Я скучаю и очень хочу быть рядом.
      </p>
      <img src="images/ticket.jpg" alt="Билет в кино" class="ticket-img" />
    `;
  } else {
    alert("Пароль неверный 😕 Попробуй ещё раз.");
  }
}

function autoFormatDate(input) {
  let value = input.value.replace(/\D/g, ''); // Только цифры
  let formatted = '';

  if (value.length > 0) formatted += value.slice(0, 2);
  if (value.length > 2) formatted += '.' + value.slice(2, 4);
  if (value.length > 4) formatted += '.' + value.slice(4, 8);

  input.value = formatted;
}
