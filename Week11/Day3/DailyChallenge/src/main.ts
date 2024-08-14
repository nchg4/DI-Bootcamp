import FullList from "./model/FullList";
import ListItem from "./model/ListItem";
import ListTemplate from "./templates/ListTemplate";
import { v4 as uuidv4 } from "uuid";

const initApp = (): void => {
  const fullList = FullList.instance;
  const template = ListTemplate.instance;

  // add listner to the form
  const itemEntryForm = document.getElementById(
    "itemEntryForm"
  ) as HTMLFormElement;
  itemEntryForm.addEventListener("submit", (e: SubmitEvent): void => {
    e.preventDefault();

    // get the value from the input
    const input = document.getElementById("newItem") as HTMLInputElement;
    const newEntryText: string = input.value.trim();
    if (!newEntryText) return;

    // create a new ListItem
    const newItem = new ListItem(uuidv4(), newEntryText);
    // add new item to the list // fullList
    fullList.addItem(newItem);
    // re-render the list of items
    template.render(fullList);
  });

  const clearList = document.getElementById(
    "clearItemsButton"
  ) as HTMLButtonElement;

  clearList.addEventListener("click", () => {
    fullList.clearList();
    template.clear();
  });

  // load initial data
  fullList.load();
  // render first time on init
  template.render(fullList);
};

document.addEventListener("DOMContentLoaded", initApp);