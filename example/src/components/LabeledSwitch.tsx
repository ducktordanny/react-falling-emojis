import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import useTheme from '../hooks/useTheme';

interface LabeledSwitchProps {
  value?: boolean;
  label?: string;
  labelColor?: 'textPrimary' | 'textSecondary';
  switchColor?: 'default' | 'primary' | 'secondary';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabeledSwitch: React.FC<LabeledSwitchProps> = ({
  value,
  label,
  labelColor,
  switchColor,
  onChange
}: LabeledSwitchProps) => {
  const { primary: textPrimary, secondary: textSecondary } =
    useTheme().palette.text;

  const getLabelColor = (): string => {
    switch (labelColor) {
      case 'textPrimary':
        return textPrimary;
      case 'textSecondary':
        return textSecondary;
      default:
        return '';
    }
  };

  return (
    <FormControlLabel
      style={{ color: getLabelColor() }}
      control={
        <Switch
          color={switchColor!}
          onChange={(e) => (onChange ? onChange(e) : '')}
          value={value!}
        />
      }
      label={label!}
      // value={value!}
    />
  );
};

export default LabeledSwitch;
