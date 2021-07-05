import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

interface LabeledSwitchProps {
  value?: any;
  switchColor?: 'default' | 'primary' | 'secondary';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabeledSwitch: React.FC<LabeledSwitchProps> = ({
  value,
  switchColor,
  onChange
}: LabeledSwitchProps) => {
  return (
    <FormControlLabel
      color='primary'
      control={<Switch color={switchColor!} onChange={(e) => onChange!(e)} />}
      label='Shake'
      value={value!}
    />
  );
};

export default LabeledSwitch;
