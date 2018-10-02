// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import isUndefined from "lodash/isUndefined";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import "moment/locale/en-gb";

import Button from "antd/lib/button";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/button/style/css";

import Drawer from "antd/lib/drawer";
import "@bodhi-project/antrd/lib/futuristic/3.8.4/drawer/style/css";

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** EventDrawer */
class EventDrawer extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);

    this.state = {
      eventData: {},
    };

    this.pushEventData = this.pushEventData.bind(this);
  }

  /** componentDidUpdate */
  componentDidUpdate(prevProps) {
    const { index: oldIndex } = prevProps;
    const { index: newIndex } = this.props;

    if (oldIndex !== newIndex) {
      const { eventData } = this.state;
      const { data } = this.props;
      if (isUndefined(eventData[`event-${newIndex}`])) {
        if (!isUndefined(window)) {
          axios
            .get(
              `http://localhost:9000/events/rc-practice-groups/2018/2018-01-04.json`,
            )
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.log(error);
            });
        }
      }
    }
  }

  /** pushEventData */
  pushEventData(eventDataToAdd, newIndex) {
    const { eventData } = this.state;
    eventData[`event-${newIndex}`] = eventDataToAdd;
    this.setState({ eventData });
  }

  /** standard renderer */
  render() {
    const { data, index, visible, onClose } = this.props;
    const title = isUndefined(index)
      ? "Event"
      : `${data[index].node.frontmatter.title} @ ${
          data[index].node.fields.humanDate
        }`;

    return (
      <Drawer
        title={title}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width="62vw"
      >
        <h3>Event details…</h3>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            borderTop: "1px solid #e8e8e8",
            padding: "10px 16px",
            left: 0,
            background: "#f2f2f2",
          }}
        >
          <Button
            style={{
              marginRight: 8,
            }}
            onClick={onClose}
          >
            Close
          </Button>
          <Button type="primary">Register</Button>
        </div>
      </Drawer>
    );
  }
}

EventDrawer.propTypes = {
  data: PropTypes.array,
  index: PropTypes.number,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default EventDrawer;
