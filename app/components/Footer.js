import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';
import style from './Footer.css';

.footer {
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
}

.footer:before {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 50px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
    0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2),
    0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

.filters {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;
}

.filters li {
  display: inline;
}

.filters li a {
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
}

.filters li a.selected,
.filters li a:hover {
  border-color: rgba(175, 47, 47, 0.1);
}

.filters li a.selected {
  border-color: rgba(175, 47, 47, 0.2);
}

.todoCount {
  float: left;
  text-align: left;
}

.todoCount strong {
  font-weight: 300;
}

.clearCompleted,
html .clearCompleted:active {
  float: right;
  position: relative;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
}

.clearCompleted:hover {
  text-decoration: underline;
}

@media (max-width: 430px) {
  .footer {
    height: 50px;
  }

  .filters {
    bottom: 10px;
  }
}


const FILTERS = [SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED];
const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
};

export default class Footer extends Component {

  static propTypes = {
    completedCount: PropTypes.number.isRequired,
    activeCount: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    onClearCompleted: PropTypes.func.isRequired,
    onShow: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    if (props.onShow) {
      this.filterHandlers = FILTERS.map(filter => () => props.onShow(filter));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.onShow) {
      this.filterHandlers = FILTERS.map(filter => () => nextProps.onShow(filter));
    }
  }

  renderTodoCount() {
    const { activeCount } = this.props;
    const itemWord = activeCount === 1 ? 'item' : 'items';

    return (
      <span className={style.todoCount}>
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
    );
  }

  renderFilterLink(filter, handler) {
    const title = FILTER_TITLES[filter];
    const { filter: selectedFilter } = this.props;

    return (
      <a
        className={classnames({ selected: filter === selectedFilter })}
        style={{ cursor: 'hand' }}
        onClick={handler}
      >
        {title}
      </a>
    );
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props;
    if (completedCount > 0) {
      return (
        <button
          className={style.clearCompleted}
          onClick={onClearCompleted}
        >
          Clear completed
        </button>
      );
    }
  }

  render() {
    return (
      <footer className={style.footer}>
        {this.renderTodoCount()}
        <ul className={style.filters}>
          {FILTERS.map((filter, i) =>
            <li key={filter}>
              {this.renderFilterLink(filter, this.filterHandlers[i])}
            </li>
          )}
        </ul>
        {this.renderClearButton()}
      </footer>
    );
  }
}
