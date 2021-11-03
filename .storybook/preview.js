export const parameters = {
  controls: { expanded: true },
  backgrounds: {
    default: 'very_dark',
    values: [
      {
        name: 'light',
        value: '#f2f2f2',
      },
      {
        name: 'gray',
        value: '#1E222F',
      },
      {
        name: 'very_dark',
        value: '#090c15',
      },
      {
        name: 'dark',
        value: '#131723',
      },
    ],
  },
}
export const decorators = [
  (storyFn) => <div style={{ padding: '16px' }}>{storyFn()}</div>,
]
