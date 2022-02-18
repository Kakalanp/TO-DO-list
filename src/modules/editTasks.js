export default function edit() {
  const verticalBtns = document.getElementsByClassName('vertical-button');
  const verticalBtnsArr = Array.from(verticalBtns);

  const editBtns = document.getElementsByClassName('edit-button');
  const editBtnsArr = Array.from(editBtns);

  const deleteBtns = document.getElementsByClassName('delete-button');
  const deleteBtnsArr = Array.from(deleteBtns);

  verticalBtnsArr.forEach((el, i) => {
    el.addEventListener('click', () => {
      el.classList.toggle('off');
      editBtnsArr[i].classList.toggle('off');
      deleteBtnsArr[i].classList.toggle('off');
    });
  });
}