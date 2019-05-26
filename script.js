let data = {
    "Рыбы": {
        "Форель": {},
        "Щука": {}
    },

    "Деревья": {
        "Хвойные": {
            "Лиственница": {},
            "Ель": {}
        },
        "Цветковые": {
            "Берёза": {},
            "Тополь": {}
        }
    }
};

let container = document.getElementById('container');
createTree(container, data);

function createTree(parentNode, objectExemp) {
  let mainUl;
  if(Object.keys(objectExemp).length > 0) {
    mainUl = parentNode.appendChild(document.createElement('ul'));
  }

  for(item in objectExemp) {
      let mainLi = mainUl.appendChild(document.createElement('li'));
      mainLi.innerHTML = item;
      if(Object.keys(objectExemp).length > 0) {
        createTree(mainLi, objectExemp[item]);
      }
  };
};