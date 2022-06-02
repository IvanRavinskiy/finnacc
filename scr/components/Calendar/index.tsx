import React, {FC, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {CalendarPropsType} from './type';
import {calendarStyles} from './style';

export const Calendar: FC<CalendarPropsType> = ({date, setDate}) => {
  const [open, setOpen] = useState(false);

  const confirmDate = (dateCur: Date) => {
    setOpen(false);
    setDate(dateCur);
  };

  const unconfirmDate = () => {
    setOpen(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <View style={calendarStyles.input}>
          <Text style={calendarStyles.dateText}>
            {date.toLocaleDateString()}
          </Text>
        </View>
      </TouchableOpacity>

      {open && (
        <DatePicker
          modal
          mode={'date'}
          open={open}
          date={date}
          onConfirm={dateCur => {
            confirmDate(dateCur);
          }}
          onCancel={unconfirmDate}
        />
      )}
    </View>
  );
};
