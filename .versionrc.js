module.exports = {
    releaseCommitMessageFormat: 'chore(release): {{currentTag}} [ci-skip]',
    types: [
        {
            type: 'feature',
            hidden: false,
            section: 'Features'
        },
        {
            type: 'feat',
            hidden: false,
            section: 'Features'
        },
        {
            type: 'fix',
            hidden: false,
            section: 'Bug Fixes'
        },
        {
            type: 'build',
            hidden: false,
            section: 'Build System'
        },
        {
            type: 'chore',
            hidden: false,
            section: 'Miscellaneous Chores'
        },
        {
            type: 'ci',
            hidden: false,
            section: 'Continuous Integration'
        },
        {
            type: 'docs',
            hidden: false,
            section: 'Documentation'
        },
        {
            type: 'style',
            hidden: false,
            section: 'Styles'
        },
        {
            type: 'refactor',
            hidden: false,
            section: 'Code Refactoring'
        },
        {
            type: 'perf',
            hidden: false,
            section: 'Performance Improvements'
        },
        {
            type: 'test',
            hidden: false,
            section: 'Tests'
        },
        {
            type: 'revert',
            hidden: false,
            section: 'Reverts'
        }
    ]
};
