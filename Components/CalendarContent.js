import React from 'react';
import { Text, View, StyleSheet, ToastAndroid } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useState } from 'react/cjs/react.development';

LocaleConfig.locales['kr'] = {
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
};
LocaleConfig.defaultLocale = 'kr';

function CalenderContent() {
    const [selected, setSelected] = useState();
    const [markedDates, setmarkedDates] = useState(null);
    const [date, setDate] = useState(null);

    const onDayPress = (day) => {
        setSelected(day.dateString);
    };
    // const INITIAL_DATE = day;
    // const onDayPress = (day) => {
    //     const setState = (day = {
    //         selected: day.dateString,
    //     });
    // };
    return (
        <>
            <View style={{ marginLeft: '10%', marginRight: '10%', marginBottom: '2%' }}>
                <Calendar
                    theme={{}}
                    markedDates={{}}
                    style={{ borderRadius: 20, height: 365, borderColor: '#c0c0c0', borderWidth: 1, shadowRadius: 2, shadowColor: '#c0c0c0' }} //달력 스타일 설정
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={'2020-01-01'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    maxDate={'2050-12-31'}
                    // Handler which gets executed on day press. Default = undefined

                    // markedDates={ }
                    onDayPress={onDayPress}
                    // style={styles.calendar}
                    // hideExtraDays
                    markedDates={{
                        [selected]: {
                            selected: true,
                            disableTouchEvent: true,
                            selectedColor: '#A1E1FD',
                            selectedTextColor: 'black',
                        },
                    }}
                    // markedDates={{ [onDayPress.setState.selected]: { selected: true } }}
                    // theme={{
                    //     selectedDayBackgroundColor: 'green',
                    //     todayTextColor: 'green',
                    //     arrowColor: 'green',
                    // }}
                    // onDayPress={(day) => {
                    // console.log(day);

                    // }}
                    // console.log('selected day', day);
                    //   "dateString": "2021-08-23",
                    //   "day": 23,
                    //   "month": 8,
                    //   "timestamp": 1629676800000,
                    //   "year": 2021,

                    //안드로이드 알림창
                    //ToastAndroid.showWithGravity(day.dateString + '이 선택되었어요', ToastAndroid.SHORT, ToastAndroid.CENTER);

                    // Handler which gets executed on day long press. Default = undefined
                    onDayLongPress={(day) => {
                        console.log('selected day', day);
                        return day;
                    }}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'yyyy' + '년' + '  M' + '월' + '  d' + '일'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={(month) => {
                        console.log('month changed', month);
                    }}
                    hideExtraDays={false}
                    // day from another month that is visible in calendar page. Default = false
                    disableMonthChange={false}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                    firstDay={1}
                    // Hide day names. Default = false
                    hideDayNames={false}
                    // Show week numbers to the left. D
                    showWeekNumbers={false}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                    onPressArrowLeft={(substractMonth) => substractMonth()}
                    // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                    onPressArrowRight={(addMonth) => addMonth()}
                    // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                    disableAllTouchEventsForDisabledDays={true}
                    /** Replace default month and year title with custom one. the function receive a date as parameter. */
                    //renderHeader={(date) => {/*Return JSX*/}}
                />
            </View>
        </>
    );
}
export default CalenderContent;
