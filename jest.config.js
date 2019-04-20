module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/es/'],
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  setupFilesAfterEnv: ['react-testing-library/cleanup-after-each']
};