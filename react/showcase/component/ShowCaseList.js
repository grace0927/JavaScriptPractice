import React from 'react';
import ShowCase from './ShowCase';

class ShowCaseList extends React.Component {
  render() {
    const showcases = this.props.data.map((showcase) => {
      return (
        <ShowCase key={showcase.id} link={showcase.link} name={showcase.name} img={showcase.img} desc={showcase.desc} cname={showcase.class}/>
      );
    });

    return (
      <div className="show-case-list">
        {showcases}
      </div>
    );
  }
}

export default ShowCaseList;
