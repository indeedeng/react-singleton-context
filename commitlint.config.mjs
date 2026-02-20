import versionConfig from './.versionrc.mjs';

export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', versionConfig.types.map(({ type }) => type)],
        'subject-case': [0],
        'header-max-length': [0, 'never']
    }
};
