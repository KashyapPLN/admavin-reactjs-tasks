import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import './elementTransfer.css';

export default function ElementTransfer() {
  const initialItems = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];
  const [b1Items, setB1Items] = useState(initialItems);
  const [b2Items, setB2Items] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelection = (item) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((i) => i !== item)
        : [...prevSelected, item]
    );
  };

  const handleAdd = () => {
    const itemsToAdd = selectedItems.filter((item) => b1Items.includes(item));
    setB2Items([...b2Items, ...itemsToAdd]);
    setB1Items(b1Items.filter((item) => !itemsToAdd.includes(item)));
    setSelectedItems([]);
  };

  const handleRemove = () => {
    const itemsToRemove = selectedItems.filter((item) => b2Items.includes(item));
    setB1Items([...b1Items, ...itemsToRemove]);
    setB2Items(b2Items.filter((item) => !itemsToRemove.includes(item)));
    setSelectedItems([]);
  };

  const handleAddAll = () => {
    setB2Items([...b2Items, ...b1Items]);
    setB1Items([]);
    setSelectedItems([]);
  };

  const handleRemoveAll = () => {
    setB1Items([...b1Items, ...b2Items]);
    setB2Items([]);
    setSelectedItems([]);
  };

  return (
    <Container className="elementTransfer">
      <Container className="bucket">
        <h4 className="bucket-title mt-4">Bucket 1</h4>
        {b1Items.map((item) => (
          <div
            key={item}
            className="bucketlist"
            style={{ border: selectedItems.includes(item) ? '2px solid #2f76e8' : '2px solid grey' }}
            onClick={() => toggleSelection(item)}
          >
            {item}
          </div>
        ))}
      </Container>

      <Container className="buttons">
        <Button variant="outline-secondary" onClick={handleAdd}>Add</Button>
        <Button variant="outline-danger" onClick={handleRemove}>Remove</Button>
        <Button variant="outline-secondary" onClick={handleAddAll}>Add All</Button>
        <Button variant="outline-danger" onClick={handleRemoveAll}>Remove All</Button>
      </Container>

      <Container className="bucket">
        <h4 className="bucket-title mt-4">Bucket 2</h4>
        {b2Items.map((item) => (
          <div
            key={item}
            className="bucketlist"
            style={{ border: selectedItems.includes(item) ? '2px solid red' : '2px solid grey' }}
            onClick={() => toggleSelection(item)}
          >
            {item}
          </div>
        ))}
      </Container>
    </Container>
  );
}
