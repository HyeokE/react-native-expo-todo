import React from 'react';
import { Text, View, StyleSheet, ToastAndroid } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useState } from 'react/cjs/react.development';
import { AntDesign } from '@expo/vector-icons';

LocaleConfig.locales['kr'] = {
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
};
LocaleConfig.defaultLocale = 'kr';

const CalenderContent = ({ onSelectDay }) => {
    const [selected, setSelected] = useState();

    const onDayPress = (day) => {
        setSelected(day.dateString);
        onSelectDay(day.dateString);
        // console.log('selected day', day);
    };
    // const INITIAL_DATE = day;
    // const onDayPress = (day) => {
    //     const setState = (day = {
    //         selected: day.dateString,
    //     });
    // };
    const getCurrentday = () => {
        const today = new Date();

        const year = String(today.getFullYear());
        let month = String(today.getMonth() + 1);
        let day = String(today.getDay());

        month = month.length === 1 ? `0${month}` : month;
        day = day.length === 1 ? `0${day}` : day;

        return `${year}-${month}-${day}`;
    };
    return (
        <>
            <View style={{ marginLeft: '10%', marginRight: '10%', marginBottom: '2%' }}>
                <Calendar
                    theme={{}}
                    current={getCurrentday()}
                    style={{ borderRadius: 20, height: 365, borderColor: '#c0c0c0', borderWidth: 1, shadowRadius: 2, shadowColor: '#c0c0c0' }} //달력 스타일 설정
                    minDate={'2020-01-01'}
                    maxDate={'2050-12-31'}
                    onDayPress={onDayPress}
                    markedDates={{
                        [selected]: {
                            selected: true,
                            disableTouchEvent: true,
                            selectedColor: '#A1E1FD',
                            selectedTextColor: 'black',
                        },
                    }}
                    //   "dateString": "2021-08-23",
                    //   "day": 23,
                    //   "month": 8,
                    //   "timestamp": 1629676800000,
                    //   "year": 2021,

                    //안드로이드 알림창
                    //ToastAndroid.showWithGravity(day.dateString + '이 선택되었어요', ToastAndroid.SHORT, ToastAndroid.CENTER);

                    onDayLongPress={(day) => {
                        console.log('selected day', day);
                        return day;
                    }}
                    monthFormat={'yyyy' + '년' + '  M' + '월' + '  d' + '일'}
                    onMonthChange={(month) => {
                        console.log('month changed', month);
                    }}
                    hideExtraDays={false}
                    disableMonthChange={false}
                    firstDay={1}
                    renderArrow={(direction) => (direction === 'left' ? <AntDesign name="left" size={20} color="#50cebb" /> : <AntDesign name="right" size={20} color="#50cebb" />)}
                    hideDayNames={false}
                    showWeekNumbers={false}
                    onPressArrowLeft={(substractMonth) => substractMonth()}
                    onPressArrowRight={(addMonth) => addMonth()}
                    disableAllTouchEventsForDisabledDays={true}
                />
            </View>
        </>
    );
};
export default CalenderContent;
