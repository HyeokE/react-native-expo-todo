import React from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  Keyboard,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

import Todobox from "../Components/Todobox";
import CalendarContent from "../Components/CalendarContent";

import { useState } from "react";
import IoIcons from "react-native-vector-icons/Ionicons";
import TaskInsert from "../Components/TaskInsert";
import { SwipeListView } from "react-native-swipe-list-view";
import { AuthContext } from "../Components/context";

function Home({ navigation }) {
  let dt = new Date();
  let nowMonth = dt.getMonth() + 1;
  let nowDate = dt.getDate();

  if (dt.getMonth().toString().length == 1) {
    nowMonth = "0" + (dt.getMonth() + 1).toString();
  }
  if (dt.getDate().toString().length == 1) {
    nowDate = "0" + dt.getDate().toString();
  }
  let str = dt.getFullYear() + "-" + nowMonth + "-" + nowDate;
  const [day, setDay] = useState(str);
  const [taskItems, setTaskItems] = useState([]);
  const [task, setTask] = useState([]);

  const onSelectDay = (date) => {
    setDay(date);
    // console.log('day: ' + day);
    return date;
  };
  const filterItemsDay = (day) => {
    const taskList = taskItems.filter((item) => item.day == day);
    setTask(taskList);
  };
  const deleteTask = (key) => {
    console.log("delete");
    setTaskItems((prevTask) => {
      return prevTask.filter((taskItems) => taskItems.key != key);
    });
  };
  // checkTask: (key) => {
  //   console.log("check");
  //   setTaskItems((prevTask) => {
  //     return prevTask.filter((taskItems) => !taskItems.check);
  //   });
  // },
  const AddTask = (text) => {
    if (text.length < 3) {
      Alert.alert("2글자 이상 입력하세요.");
    } else {
      setTaskItems((prevTask) => {
        return [
          {
            day: day,
            key: Math.random().toString(),
            text: text,
            check: false,
            open: false,
          },
          ...prevTask,
        ];
      });
    }
    Keyboard.dismiss();
    console.log(taskItems);
  };

  const renderHiddenItem = (data, rowMap) => (
    <View style={Styles.rowBack}>
      <TouchableOpacity
        style={[Styles.backRightBtn, Styles.backRightBtnLeft]}
        onPress={() => closeRow(rowMap, data.item.key)}
      >
        <Text style={Styles.backTextWhite}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[Styles.backRightBtn, Styles.backRightBtnRight]}
        onPress={() => {
          deleteTask(data.item.key);
          filterItemsDay(day);
        }}
      >
        <Text style={Styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  return (
    <>
      <View style={Styles.TopIcon}>
        <IoIcons
          name="menu"
          size={30}
          onPress={() => navigation.openDrawer()}
        />
        <Text style={Styles.Header}>오늘 뭐 해야 되지?</Text>
      </View>

      <View style={Styles.Homepage}>
        <View style={Styles.CalendarTask}>
          <CalendarContent
            style={Styles.Calendar}
            onSelectDay={onSelectDay}
            filterItemsDay={filterItemsDay}
          />
        </View>
        <View style={Styles.TodoTask}>
          <ScrollView>
            <SwipeListView
              renderHiddenItem={renderHiddenItem}
              rightOpenValue={-145}
              previewRowKey={"0"}
              previewOpenValue={0}
              previewOpenDelay={100000}
              data={task}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <Todobox item={item} deleteTask={deleteTask} />
                </TouchableOpacity>
              )}
            />
          </ScrollView>
        </View>
        <View style={Styles.taskPart}>
          <TaskInsert
            AddTask={AddTask}
            filterItemsDay={filterItemsDay}
            onSelectDay={onSelectDay}
          />
        </View>
      </View>
    </>
  );
}

const Styles = StyleSheet.create({
  TopIcon: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingBottom: 10,
    flexDirection: "row",
  },
  Header: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 4,
    justifyContent: "center",
  },
  Homepage: {
    // backgroundColor: '#fff',
    height: "100%",
  },

  input: {
    marginLeft: 10,
    paddingHorizontal: 25,
    backgroundColor: "#fff",
    borderRadius: 20,
    width: "70%",
    height: 40,
    borderWidth: 1,
    borderColor: "#c0c0c0",
    shadowRadius: 2,
    shadowColor: "#c0c0c0",
  },
  addbtn: {
    backgroundColor: "#fff",
    height: 40,
    width: 40,
    borderWidth: 1,
    borderColor: "#c0c0c0",
    borderRadius: 30,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 2,
    shadowColor: "#c0c0c0",
  },
  CalendarTask: {
    height: 365,
  },
  TodoTask: {
    height: 300,
    // backgroundColor: "black",
  },
  taskPart: {
    paddingVertical: 25,
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: "#CCC",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 50,
  },
  rowBack: {
    backgroundColor: "transparent",
    paddingLeft: 40,
    paddingRight: 15,
    paddingTop: 13,
    borderColor: "#9f9f9f9f",
    borderRadius: 10,
    shadowRadius: 2,
    shadowColor: "#c0c0c0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 48,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  backTextWhite: {
    color: "black",
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: "#BBDEFB",
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: "#FFCDD2",
    right: 0,
    borderColor: "#9f9f9f9f",
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
  },
});

export default Home;
