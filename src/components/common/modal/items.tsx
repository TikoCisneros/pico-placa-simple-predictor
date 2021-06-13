import React from 'react';
import styled from 'styled-components';

interface ItemsProps {
  data: Array<string>;
}

const Item = styled.li`
  color: rgba(0, 0, 0, 0.54);
`;

const Items: React.FC<ItemsProps> = ({ data }) => (
  <ul>
    {data.map((itemText, index) => (
      <Item key={`i-${index + 1}`}>{itemText}</Item>
    ))}
  </ul>
);

export default Items;
