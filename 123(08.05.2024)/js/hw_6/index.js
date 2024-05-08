function filterBy(arr, dataType) {
    // Создаем новый массив для хранения отфильтрованных данных
    let filteredArray = [];

    // Применяем метод forEach к исходному массиву
    arr.forEach(function(item) {
        // Проверяем тип данных текущего элемента
        if (typeof item !== dataType) {
            // Если тип данных не совпадает с переданным, добавляем элемент в отфильтрованный массив
            filteredArray.push(item);
        }
    });

    // Возвращаем отфильтрованный массив
    return filteredArray;
}

// Пример использования функции
let array = ['hello', 'world',14, 23, '23', null];
let filteredResult = filterBy(array, 'string');
console.log(filteredResult); // [23, null]
