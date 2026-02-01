interface Clickable {
    click(): void;
}

class Button implements Clickable {
    click(): void {
        console.log("Button clicked!");
    }
}

interface Droppable {
    drop(): void;
}

class DragAndDropItem implements Droppable {
    drop(): void {
        console.log("Item dropped!");
    }
}

const dropItem: Droppable = new DragAndDropItem();
dropItem.drop();