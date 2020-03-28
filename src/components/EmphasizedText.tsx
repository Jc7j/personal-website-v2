import classNames from 'classnames';
import React from 'react';

import '../styles/EmphasizedText.css';

interface EmphasizedTextProps {
  boxedStyle?: boolean;
  children: React.ReactNode;
  color?: string;
  fontSize?: string;
  margin?: string;
  strong?: boolean;
  underline?: boolean;
}

const EmphasizedText = (props: EmphasizedTextProps) => {
  const {
    boxedStyle,
    children,
    color,
    fontSize,
    margin,
    strong,
    underline
  } = props;

  return (
    <span
      className={classNames({
        ['strongText']: strong,
        ['underlineText']: underline,
        ['boxedStyle']: boxedStyle
      })}
      style={{ color: color, margin: margin, fontSize: fontSize }}
    >
      {children}
    </span>
  );
};

export default EmphasizedText;
