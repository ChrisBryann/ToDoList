import React from 'react';
import { Item } from './ToDoListProvider';

const ToDoListContext = React.createContext({
    items: [] as any,
    totalAmount: 0,
    addItem: (item: Item) => {},
    removeItem: (id: string) => {}
})

export default ToDoListContext;