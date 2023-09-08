const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.blockEditor;
const { Fragment } = wp.element;

const ALLOWED_BLOCKS = ['core/list'];

registerBlockType('changelog/block', {
    title: 'Changelog',
    icon: 'shield',
    category: 'common',
    attributes: {
        version: {
            type: 'string',
            source: 'text',
            selector: '.changelog-version',
        },
        date: {
            type: 'string',
            source: 'text',
            selector: '.changelog-date',
        },
    },
    edit: function(props) {
        const { attributes, setAttributes } = props;
        const { version, date } = attributes;

        return (
            <Fragment>
                <RichText
                    tagName="h2"
                    className="changelog-version"
                    value={version}
                    onChange={(newVersion) => setAttributes({ version: newVersion })}
                    placeholder="Enter version number..."
                />
                <RichText
                    tagName="p"
                    className="changelog-date"
                    value={date}
                    onChange={(newDate) => setAttributes({ date: newDate })}
                    placeholder="Enter release date..."
                />
                <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
            </Fragment>
        );
    },
    save: function(props) {
        const { attributes } = props;
        const { version, date } = attributes;

        return (
            <div className="changelog-block">
                <RichText.Content tagName="h2" className="changelog-version" value={version} />
                <RichText.Content tagName="p" className="changelog-date" value={date} />
                <InnerBlocks.Content />
            </div>
        );
    }
});
