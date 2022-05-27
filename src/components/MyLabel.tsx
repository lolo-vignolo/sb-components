import './myLabel.css';

export interface PropsLabel {
  /**
   * this string will be your label
   */
  label: string;
  /** you can choose between small, medium and large **/
  size: 'normal' | 'h1' | 'h2' | 'h3';

  /** here I will deide if I want the label to be all caps or not **/

  allCaps?: boolean;

  /** here you can choose the color of the label blue , light blue and orange **/

  color?: 'primary' | 'secondary' | 'tertiary';

  /** if this arg come , I will be able to change the color using a matrix  **/
  customerFontColor?: string;
}

export const MyLabel = ({ customerFontColor, ...props }: PropsLabel) => {
  let mode = '';

  if (props.color === 'primary') {
    mode = 'text-primary';
  } else if (props.color === 'secondary') {
    mode = 'text-secondary';
  } else if (props.color === 'tertiary') {
    mode = 'text-tertiary';
  }

  if (props.allCaps) {
    return (
      <span
        className={`label ${props.size} ${mode}`}
        style={{ color: customerFontColor }}
      >
        {props.label.toUpperCase()}
      </span>
    );
  }

  return (
    <span
      className={`label ${props.size} ${mode}`}
      style={{ color: customerFontColor }}
    >
      {props.label}
    </span>
  );
};
