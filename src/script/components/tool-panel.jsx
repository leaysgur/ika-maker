'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';
import PartsModel from '../models/parts';
import PartsSelector from './parts-selector.jsx';

class ToolPanel extends Component {
  constructor() {
    super();

    this.state = {
      selectedTabIdx: 0
    };
  }

  onClickTab(idx) {
    this.setState({ selectedTabIdx: idx });
  }

  render() {
    let tabItems = PartsModel.getTabItems();
    let {settings} = this.props;
    let {selectedTabIdx} = this.state;

    return (
      <div className="tool-panel">
        <ul className="tab-body">
          {tabItems.map((item, idx) => {
            let isSelected = idx === selectedTabIdx;
            return (
              <li
                className={`
                  tab-body__item
                  tab-body__item--type-${item.group}
                  ${isSelected ? '' :  'is-hidden'}
                `}
                key={item.order}
              >
                <PartsSelector settings={settings} partsName={item.id} />
              </li>
            );
          })}
        </ul>

        <ul className="tab-header">
          {tabItems.map((item, idx) => {
            let isSelected = idx === selectedTabIdx;
            return (
              <li
                className={`
                  tab-header__item
                  tab-header__item--type-${item.group}
                  ${isSelected ? 'is-selected' : ''}
                  ft-ika
                `}
                onClick={() => { this.onClickTab(idx); }}
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

ToolPanel.propTypes = {
  settings: React.PropTypes.object.isRequired
};

export default ToolPanel;
