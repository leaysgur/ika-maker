// @flow
'use strict';
const React = require('react'); // eslint-disable-line no-unused-vars
const { Component } = require('flumpt');
const PartsModel = require('../models/parts');
const PartsSelector = require('./parts-selector.jsx');
const TextForm = require('./text-form.jsx');

class ToolPanel extends Component {
  props: {
    settings: Parts,
  };
  state: {
    selectedTabIdx: number,
  };

  constructor() {
    super();

    this.state = {
      selectedTabIdx: 0
    };
  }

  onClickTab(idx: number): void {
    this.setState({ selectedTabIdx: idx });
  }

  render(): React$Element {
    const tabItems: TabItem[] = PartsModel.getTabItems();
    const { settings } = this.props;
    const { selectedTabIdx } = this.state;

    return (
      <div className="tool-panel">
        <ul className="tab-body">
          {tabItems.map((item, idx): React$Element => {
            const isSelected: boolean = idx === selectedTabIdx;
            let Selector: React$Element;
            if (item.id === 'text') {
              Selector = <TextForm settings={settings} partsName="text" />;
            } else {
              Selector = <PartsSelector settings={settings} partsName={item.id} />;
            }

            return (
              <li
                className={`
                  ${isSelected ? '' :  'is-hidden'}
                `}
                key={item.order}
              >
                {Selector}
              </li>
            );
          })}
        </ul>

        <ul className="tab-header">
          {tabItems.map((item, idx) => {
            const isSelected = idx === selectedTabIdx;
            return (
              <li
                className={`
                  tab-header__item
                  tab-header__item--type-${item.group}
                  ${isSelected ? 'is-selected' : ''}
                  ft-ika
                `}
                onTouchTap={() => { this.onClickTab(idx); }}
                key={item.order}
              >
                <h2>{item.name}</h2>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

module.exports = ToolPanel;
