export type SwitcherProps = {
  checked?: boolean;
  onChange?: (nextValue: boolean) => void;
  label?: string;
  htmlLabel?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  value?: string;
  variant?: 'lang' | 'default';
  checkedLabel?: string;
  unCheckedLabel?: string;
  control?: boolean;
};
