import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { createElement } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import './style.scss';
import './editor.scss';

const attributes = {
  version: {
    source: 'html',
    selector: '.changelog-block-version',
    default: 'Version 1.0.0'
  },
  date: {
    source: 'html',
    selector: '.changelog-block-date',
    default: 'April 3rd, 2019'
  },
  changelogList: {
    source: 'html',
    selector: 'ul',
    multiline: 'li',
    default: '',
  }
};

registerBlockType('changelog-block/block-changelog', {
  title: __('Changelog'),
  icon: 'editor-ul',
  category: 'common',
  keywords: [
    __('changelog'),
    __('plugins themes'),
  ],
  attributes,

  edit: function(props) {
    const { setAttributes } = props;
    const { version, date, changelogList } = props.attributes;

    return (
      <div className="changelog-block">
        <RichText
          tagName="h2"
          value={version}
          className={'changelog-block-version'}
          onChange={version => setAttributes({ version })}
          keepPlaceholderOnFocus
        />
        <RichText
          tagName="p"
          value={date}
          className={'changelog-block-date'}
          onChange={date => setAttributes({ date })}
          keepPlaceholderOnFocus
        />
        <RichText
          tagName="ul"
          multiline="li"
          value={changelogList}
          onChange={changelogList => setAttributes({ changelogList })}
          keepPlaceholderOnFocus
        />
      </div>
    );
  },

  save: function(props) {
    const { version, date, changelogList } = props.attributes;

    return (
      <div className="changelog-block">
        <RichText.Content
          tagName="h2"
          className={'changelog-block-version'}
          value={version}
        />
        <RichText.Content
          tagName="p"
          className={'changelog-block-date'}
          value={date}
        />
        <RichText.Content tagName="ul" value={changelogList} />
      </div>
    );
  },
});
