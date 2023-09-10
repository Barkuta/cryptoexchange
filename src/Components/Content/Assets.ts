import $ from "jquery";

// Выпадающие списки
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

//Выборка по ID (Монетки)

export let handelClick = (p: string) => {
  let coinId = $(`#${p}`);
  return coinId.attr("id");
};

// export const handleChange = (event: any) => {
//   writeText(event.target.value);
//   const name = event.target.name;
//   const value = event.target.value;
//   props.setInputs((values: any) => ({ ...values, [name]: value }));
// };
