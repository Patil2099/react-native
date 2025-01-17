module.exports = {
  stories: [
    './components/**/*.stories.?(ts|tsx|js|jsx)',
    './other_components/AnotherButton/AnotherButton.stories.tsx',
  ],
  addons: ['@storybook/addon-ondevice-notes', '@storybook/addon-ondevice-controls'],
};
