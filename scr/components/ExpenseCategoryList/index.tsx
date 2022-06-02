import React, {FC, useState} from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export type CategoryPropsType = {
  value: any;
  setValue: (value: any) => void;
  setCategory: (category: null | string) => void;
};

export const ExpenseCategoryList: FC<CategoryPropsType> = ({
  value,
  setValue,
  setCategory,
}) => {
  const [open, setOpen] = useState(false);
  // const [selectedCategory, setSelectedCategory] = useState<null | string>(null);

  // const [value, setValue] = useState<null | string>(null);

  const [items, setItems] = useState([
    {label: 'Food', value: 'Food'},
    {label: 'Car', value: 'Car'},
    {label: 'Pharmacy', value: 'Pharmacy'},
    {label: 'Service', value: 'Service'},
    {label: 'Baby', value: 'Baby'},
    {label: 'Household chemicals', value: 'Household chemicals'},
    {label: 'Appliances', value: 'Appliances'},
    {label: 'Cafe', value: 'Cafe'},
    {label: 'Entertainment', value: 'Entertainment'},
    {label: 'Traffic', value: 'Traffic'},
    {label: 'Communal', value: 'Communal'},
    {label: 'Clothes', value: 'Clothes'},
    {label: 'Medical services', value: 'Medical services'},
    {label: 'Gift', value: 'Gift'},
    {label: 'Other', value: 'Other'},
  ]);

  const onChangeCategory = (el: string | null) => {
    setCategory(el);
  };

  return (
    <View>
      <DropDownPicker
        placeholder="Select category"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={onChangeCategory}
      />
    </View>
  );
};
