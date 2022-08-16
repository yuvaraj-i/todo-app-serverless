export default {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    dueDate: { type: 'string' },
  },
  required: ['name', 'dueDate'],
} as const;
