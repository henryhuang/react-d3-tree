import React from 'react';
import PropTypes from 'prop-types';

const BASE_MARGIN = 10;

export default class ForeignObjectElement extends React.PureComponent {
  render() {
    const { nodeData, nodeSize } = this.props;
    return (
      <foreignObject
        className={this.props.className}
        width={this.props.width || nodeSize.x - BASE_MARGIN}
        height={this.props.height || nodeSize.y - BASE_MARGIN}
        x={this.props.x}
        y={this.props.y}
        style={this.props.style}
      >
        {this.props.render(nodeData)}
      </foreignObject>
    );
  }
}

ForeignObjectElement.defaultProps = {
  className: null,
  width: null,
  height: null,
  x: null,
  y: 10,
  style: null,
};

ForeignObjectElement.propTypes = {
  render: PropTypes.func.isRequired,
  nodeData: PropTypes.object.isRequired,
  nodeSize: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};
