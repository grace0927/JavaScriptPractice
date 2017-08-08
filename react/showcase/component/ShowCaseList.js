import React from 'react';
import ShowCase from './ShowCase';

/**
 * showcase list component
 */
class ShowCaseList extends React.Component {
  /**
   * render showcase list component
   * @return {XML} showcase list DOM
   */
  render() {
    const showcases = this.props.data.map(showcase => (
      <ShowCase
        key={showcase.id}
        link={showcase.link}
        name={showcase.name}
        img={showcase.img}
        description={showcase.description}
        classes={showcase.class}
      />
    ));

    return (
      <div className="show-case-list">
        {showcases}
      </div>
    );
  }
}

ShowCaseList.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object),
};

ShowCaseList.defaultProps = {
  data: [],
};

export default ShowCaseList;
