export let select = (
  selectItemCode: string,
  selectCode: string,
  currentCode: string
) => {
  let selectItem = document.querySelectorAll(`${selectItemCode}`);
  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectChoose(this: any) {
    let text = this.innerText;
    let currentText = this.closest(`${selectCode}`).querySelector(
      `${currentCode}`
    );
    currentText.innerText = text;
  }
};
