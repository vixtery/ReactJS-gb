import { memo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styled from "./message.module.css";

export const Message = memo(({ message }) => {
  const { author, value } = message;

  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: author === "User",
      })}
    >
      <h3>{author}</h3>
      <p>{value}</p>
      <p>08.10</p>
    </div>
  );
});

Message.protoTypes = {
  message: propTypes.shape({
    author: propTypes.string.isRequider,
    value: propTypes.string.isRequider,
  }).isRequider,
  test: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
    })
  ),
};
