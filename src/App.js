import React, { useState } from 'react';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Card from '../src/components/Card';
import Select from '../src/components/Select';
import Table from './components/Table';
import logo from "./components/logo192.png"


const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');

  const array = [{
    Input:
    {
      type: "text",
      valeu: inputValue,
      placeholder: "Enter Text",
      onchange: (e) => setInputValue(e.target.value)
    },
    Button:
    {
      text: "Click me",
      onchange: () => alert('Button clicked')
    },
    Select:
    {
      options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ],
      value: selectValue,
      onChange: (e) => setSelectValue(e.target.value)
    },
    Card:
    {
      title: "Card Title",
      image: logo,
      content: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    Table:
    {
      tableData: [
        { Name: 'Ali', Age: 25 },
        { Name: 'Ahmed', Age: 30 },
        { Name: 'Saad', Age: 28 },
      ]
    },
  }]

  return (
    <div className="container">
      <div className="row">
        <div className='col'>
          {array?.map((item, i) => (
            <React.Fragment>
              <Input
                type={item.Input.type}
                placeholder={item.Input.placeholder}
                value={item.Input.value}
                onChange={item.Input.onchange}
              />

              <Button
                text={item.Button.text}
                onClick={item.Button.onchange}
              />

              <Select
                options={item.Select.options}
                value={item.Select.value}
                onChange={item.Select.onChange}
              />

              <Card
                title={item.Card.title}
                content={item.Card.content}
                image={item.Card.image}
              />
              <Table data={item.Table.tableData} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
