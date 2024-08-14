import ListItem, { Item } from "./ListItem";

export interface List {
  list: ListItem[];
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
  load(): void; // loading from localStorage
  clearList(): void;
  save(): void; // save to localStorage
}

export default class FullList implements List {
  private _list: ListItem[];
  static instance: FullList = new FullList(); // singleton pattern

  constructor(list: ListItem[] = []) {
    this._list = list;
  }

  get list(): ListItem[] {
    return this._list;
  }

  addItem(itemObj: ListItem): void {
    this._list.push(itemObj);
    // save
    this.save();
  }

  removeItem(id: string): void {
    this._list = this._list.filter((item) => item.id != id);
    // save
    this.save();
  }

  clearList(): void {
    this._list = [];
    // save
    this.save();
  }

  load(): void {
    // load from localStorage
    const storedList: string | null = localStorage.getItem("myList");
    if (typeof storedList !== "string") return;

    try {
      const parsedList: { _id: string; _item: string; _checked: boolean }[] =
        JSON.parse(storedList);

      parsedList.forEach((itemObj) => {
        const newListItem = new ListItem(
          itemObj._id,
          itemObj._item,
          itemObj._checked
        );
        this.addItem(newListItem);
      });
    } catch (error) {
      console.error("Failed to parse stored list:", error);
    }
  }

  save(): void {
    // save to localStorage
    localStorage.setItem("myList", JSON.stringify(this._list));
  }
}