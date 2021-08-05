import React from 'react';
import { Text, View, StyleSheet, ToastAndroid } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['kr'] = {
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
};
LocaleConfig.defaultLocale = 'kr';

function Home() {
    return (
        <View style={{ height: '100%', width: '100%', alignItems: 'center', backgroundColor: '#ffffff' }}>
            <Calendar
                markedDates={{}}
                style={{ width: 300 }}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                minDate={'2020-01-01'}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                maxDate={'2050-12-31'}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={(day) => {
                    console.log('selected day', day);
                    //안드로이드 알림창
                    //ToastAndroid.showWithGravity(day.dateString + '이 선택되었어요', ToastAndroid.SHORT, ToastAndroid.CENTER);
                }}
                // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={(day) => {
                    console.log('selected day', day);
                }}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={'yyyy' + '년' + '  M' + '월' + '  d' + '일'}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                onMonthChange={(month) => {
                    console.log('month changed', month);
                }}
                hideExtraDays={false}
                // day from another month that is visible in calendar page. Default = false
                disableMonthChange={true}
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
    );
}

export default Home;
