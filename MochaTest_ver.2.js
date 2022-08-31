describe("Testing of function pow", function() {

    describe("Возводит x в степень 3", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`Возводит ${x} в степень 3, ожидает ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }
  
    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  
  });

  // Здесь могут быть другие тесты. Можно вновт писать describe и it блоки, возводить уже не в 3-ю степень, а в 5-ую и т.д.
  // Или добавить другие поведенческие особенности, как, например, вот эта:

  describe("Для отрицательных и дробных n возвращает NaN", function(){
    
    it("Для отрицательных n возвращает NaN", function(){
    assert.isNaN(pow(2, -1));
    });

    it("Для дробных n возвращает NaN", function(){
    assert.isNaN(pow(2, 2.5));
  });
  
});

});
  /* 
  Здесь мы вложили наши it в в цикл for, чтобы не генерировать каждый тест вручную.
  */