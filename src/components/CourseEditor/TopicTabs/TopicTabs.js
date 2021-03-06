import './styles.scss';

import React from 'react';
import { connect } from 'react-redux';
import { EditableItem } from '../../EditableItem/EditableItem';

/**
 * Component for TopicTabs
 *
 * @component
 */

const TopicTabs = ({topics=[]}) =>
  <div className="topic-tabs">
    <ul className="topic-tabs__list">
      { topics.map(topic => <li className="topic-tabs__item">
        <EditableItem item={topic} /></li>
      )}
      <li className="topic-tabs__item">
        New topic
        <button className="topic-tabs__btn" role="button">Add</button>
      </li>
    </ul>
  </div>
;

const stpm = (state) => ({
  topics: state.TopicReducer.topics
});
const dtpm = (dispatch) => ({});

export default connect(stpm, dtpm)(TopicTabs);