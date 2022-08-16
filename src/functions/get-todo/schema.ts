export default {
  type: 'object',
  properties: {
    date: { type: 'string' },
  },
  required: ['dueDate'],
} as const;
