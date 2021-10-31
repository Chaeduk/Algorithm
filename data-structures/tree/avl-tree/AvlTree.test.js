import AvlTree from "../avl-tree/AvlTree";

describe("AvlTree", () => {
  it("left-left rotation(1)", () => {
    const tree = new AvlTree();

    tree.insert(4);
    tree.insert(3);
    tree.insert(2);

    expect(tree.toString()).toBe("2,3,4");
    expect(tree.root.value).toBe(3);
    expect(tree.root.height).toBe(1);
  });
});