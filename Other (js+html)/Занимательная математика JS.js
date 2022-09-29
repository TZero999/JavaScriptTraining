3  - 1  // -> 2
3  + 1  // -> 4
'3' - 1  // -> 2
'3' + 1  // -> '31'

'' + '' // -> ''
[''] + [] // -> ''
{} + [] // -> 0
[''] + {} // -> '[object Object]'
{} + {} // -> '[object Object][object Object]'

'222' - -'111' // -> 333

[4] * [4]       // -> 16
[''] * []         // -> 0
[4, 4] * [4, 4] // NaN

/*
В первых четырёх примерах происходят следующие преобразования:

Number  + Number  -> сложение
Boolean + Number  -> сложение
Boolean + Boolean -> сложение
Number  + String  -> конкатенация
String  + Boolean -> конкатенация
String  + String  -> конкатенация

В остальных - происходит вызов методов toString и toPrimitive.
*/
