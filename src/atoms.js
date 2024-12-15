import { selector } from 'recoil';

export const todoListSelector = selector({
  key: 'todoListSelector', 
  get: async ({ get }) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      if (!response.ok) {
        throw new Error('Failed to fetch todos');
      }
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error('Error fetching todos:', error);
      throw error; 
    }
  },
});
