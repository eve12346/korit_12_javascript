// 요소 선택
const todoInput = document.querySelector('#todo-input');
const countInput = document.querySelector('#count-input');
const priceInput = document.querySelector('#price-input');
const addBtn = document.querySelector('#add-btn');
const todoList = document.querySelector('#todo-list');
const totalPriceDisplay = document.querySelector('#total-price');



// 리스트 추가 함수
function addShoppingItem() {
  const name = todoInput.value.trim();
  const count = countInput.value.trim();
  const price = priceInput.value.trim();

  // 유효성 검사 (품목명은 필수)
  if (name === "") {
    alert("구매할 목록을 입력해주세요!");
    return;
  }

  // BEM 구조에 맞춘 li 요소 생성
  const li = document.createElement('li');
  li.className = 'todo__item';

  // 내용 구성 (품목, 갯수, 가격)
  li.innerHTML = `
    <div class="todo__info">
      <span class="todo__content"><strong>${name}</strong> (${count}개)</span>
      <span class="todo__price">${price ? Number(price).toLocaleString() + '원' : ''}</span>
    </div>
    <button class="todo__delete-btn">×</button>
  `;
  // 총합 계산
  





  // 삭제 이벤트 추가
  li.querySelector('.todo__delete-btn').addEventListener('click', () => {
    li.remove();
  });

  // 목록에 추가 후 입력창 초기화
  todoList.appendChild(li);
  todoInput.value = "";
  countInput.value = "";
  priceInput.value = "";
  todoInput.focus();
}

// 버튼 클릭 시 실행
addBtn.addEventListener('click', addShoppingItem);

// 엔터 키 입력 시 실행
[todoInput, countInput, priceInput].forEach(input => {
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addShoppingItem();
  });
});