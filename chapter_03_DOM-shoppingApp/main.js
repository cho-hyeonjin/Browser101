const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

function onAdd() {
  // 1. 사용자가 입력한 텍스트 받아오기
  const text = input.value;
  if (text === "") {
    return;
  }
  // console.log(text);
  // 2. 새로운 아이템 만들기 ( 텍스트 + 삭제 버튼 )
  const item = createItem(text);
  // 3. items container 안에 새로 만든 item 추가하기
  items.appendChild(item);
  // 4. input 초기화하기
  input.value = "";
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const name = document.createElement("span");
  name.setAttribute("class", "item__name");
  name.innerText = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item__delete");
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteBtn.addEventListener("click", () => {
    items.removeChild(itemRow);
  });

  const itemDivider = document.createElement("div");
  itemDivider.setAttribute("class", "item__divider");

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);

  return itemRow;
}

// addBtn에 addEventListener를 등록해서, click 이벤트 발생시 onAdd()함수를 콜백함수로 호출할 것이다~
addBtn.addEventListener("click", () => {
  onAdd();
});
