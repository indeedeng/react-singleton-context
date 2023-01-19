const standardVersionConfig = require('./.versionrc.js');

module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', standardVersionConfig.types.map(({ type }) => type)],
        'subject-case': [0],
        'header-max-length': [0, 'never']
    }
};
