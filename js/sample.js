// Получаем текущий URL-адрес страницы
var currentPage = window.location.href;

// Проверяем, соответствует ли текущий URL-адрес первой странице:

if (currentPage == 'http://example.com/page1%27) {

  // Если текущий URL-адрес соответствует первой странице, изменяем стиль header-partial на черный
  var headerPartial =
document.getElementById('header-partial');
  headerPartial.style.backgroundColor = 'black';
} else {

  // Иначе, если текущий URL-адрес соответствует другой странице, изменяем стиль header-partial на белый

  var headerPartial = document.getElementById('header-partial');
  headerPartial.style.backgroundColor = 'white';
}


