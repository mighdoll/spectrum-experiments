import Sortable from "sortablejs";

main();

export function main():void {
  console.clear();
  console.log("hello");
  const el = document.querySelector("sp-accordion")!;
  new Sortable(el, {animation: 300});
}