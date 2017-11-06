import React from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import BoxItem from './BoxItem';
import { PropTypes } from 'prop-types';

class Box extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: this.props.items
      };
    }
  
    handleDrop = (e) => {
      this.props.addItem(e.dragData);
      let items = this.state.items.slice();
      items.push(e.dragData);
      this.setState({items: items});
      e.sourceElem.style.visibility="hidden";
    };
  
    swap = (fromIndex, toIndex, dragData) => {
      let items = this.state.items.slice();
      const item = {label: dragData.label};
      items.splice(toIndex, 0, item);
      this.setState({items: items});
    };
  
    kill = (uid) => {
      let items = this.state.items.slice();
      const index = items.findIndex((item) => {
        return item.uid == uid
      });
      if (index !== -1) {
        items.splice(index, 1);
      }
      this.setState({items: items});
    };
  
    render() {
      const styles = {
        border: "2px solid black",
        borderRadius: 4,
        width: 400,
        height: 100,
        margin: 10,
        display: 'inline-block',
        position: 'relative',
      };
      // note two layers of DropTarget. This enables it to handle dropped items from outside AND items dragged between boxes.
      return (
        <DragDropContainer dragHandleClassName="grab_me">
          <DropTarget
            onHit={this.handleDrop}
            targetKey={this.props.targetKey}
            dropData={{name: this.props.name}}
          >
            <DropTarget
              onHit={this.handleDrop}
              targetKey="boxItem"
              dropData={{name: this.props.name}}
            >
              <div style={styles}>
                {this.props.items.map((item, index) => {
                  return (
                    <BoxItem key={item.uid} uid={item.uid} kill={this.kill} index={index} swap={this.swap}>
                      {item.name}
                    </BoxItem>
                  )
                })}
              </div>
            </DropTarget>
          </DropTarget>
        </DragDropContainer>
      );
    }
  }

Box.PropTypes = {
  items : PropTypes.array.isRequired,
  addItem : PropTypes.func.isRequired
}

export default Box;