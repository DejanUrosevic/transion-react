import React from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

class BoxItem extends React.Component {
  // the things that appear in the boxes
  constructor(props) {
    super(props);
    this.state = {
      highlighted: false,
    };
  }

  highlight = () => {
    this.setState({highlighted: true});
  };

  unHighlight = () => {
    this.setState({highlighted: false});
  };

  handleDrop = (e) => {
    e.stopPropagation();
    this.unHighlight();
    this.props.swap(e.dragData.index, this.props.index, e.dragData);
    e.sourceElem.style.visibility="hidden";
  };

  deleteMe = () => {
    this.props.kill(this.props.uid);
  };

  render() {
    const styles = {
      color: 'white',
      borderRadius: 3,
      padding: 5,
      margin: 3,
      display: 'inline-block',
      backgroundColor: '#bbb'
    };
    let outerStyles = {
      paddingLeft: 1,
      marginLeft: 2,
      borderLeft: '3px solid transparent'
    };
    if (this.state.highlighted) {
      outerStyles.borderLeft = '3px solid darkblue';
    }
    return (
        <DragDropContainer
          targetKey="boxItem"
          returnToBase={true}
          dragData={{label: this.props.children, index: this.props.index}}
          onDrop={this.deleteMe}
        >
          <DropTarget
            onHit={this.handleDrop}
            onDragEnter={this.highlight}
            onDragLeave={this.unHighlight}
            targetKey="boxItem"
          >
            <div style={outerStyles}>
              <div style={styles}>{this.props.children}</div>
            </div>
        </DropTarget>
      </DragDropContainer>
    );
  }
}

export default BoxItem;