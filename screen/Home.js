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
} from "react-native";

import Todobox from "../Components/Todobox";
import CalendarContent from "../Components/CalendarContent";

import { useState } from "react";
import IoIcons from "react-native-vector-icons/Ionicons";
import TaskInsert from "../Components/TaskInsert";
import { SwipeListView } from "react-native-swipe-list-view";

function Home({ navigation }) {
  var dt = new Date();
  var nowMonth = dt.getMonth() + 1;
  var nowDate = dt.getDate();

  if (dt.getMonth().toString().length == 1) {
    nowMonth = "0" + (dt.getMonth() + 1).toString();
  }
  if (dt.getDate().toString().length == 1) {
    nowDate = "0" + dt.getDate().toString();
  }

  var str = dt.getFullYear() + "-" + nowMonth + "-" + nowDate;

  const [taskItems, setTaskItems] = useState([]);
  const [day, setDay] = useState(str);
  const addDay = (date) => {
    setDay(date);
    // console.log('day: ' + day);
  };
  const deleteTask = (key) => {
    console.log("delete");
    setTaskItems((prevTask) => {
      return prevTask.filter((taskItems) => taskItems.key != key);
    });
  };
  const checkTask = (key) => {
    console.log("delete");
    setTaskItems((prevTask) => {
      return prevTask.filter((taskItems) => !taskItems.check);
    });
  };
  const AddTask = (text) => {
    setTaskItems((prevTask) => {
      return [
        { day: day, key: Math.random().toString(), text: text, check: false },
        ...prevTask,
      ];
    });
    Keyboard.dismiss();
    // taskItems.map((day) => {
    //     console.log(day.day);
    // });
    console.log(taskItems);
    // console.log('day:' + day);
  };

  // const checkedTask = () => {};
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
        onPress={() => deleteTask(data.item.key)}
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
      <ScrollView>
        <View style={Styles.TopIcon}>
          <IoIcons
            name="menu"
            size={30}
            onPress={() => navigation.openDrawer()}
          />
          <Text style={Styles.Header}>오늘 뭐 해야 되지?</Text>
        </View>
        <View style={Styles.Homepage}>
          <View style={Styles.Calendar_Task}>
            <View>
              <CalendarContent style={Styles.Calendar} onSelectDay={addDay} />
            </View>
            {/* <ScrollView style={Styles.taskview}> */}
            <View>
              <SwipeListView
                renderHiddenItem={renderHiddenItem}
                rightOpenValue={-145}
                previewRowKey={"0"}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                data={taskItems}
                renderItem={({ item }) => (
                  <Todobox item={item} deleteTask={deleteTask} />
                )}
              />
            </View>

            {/* </ScrollView> */}
          </View>
        </View>
      </ScrollView>
      <View style={{ marginTop: 85 }}>
        <TaskInsert AddTask={AddTask} />
      </View>
      {/* <TaskInsert onAddTodo={AddTask} /> */}
      {/* <KeyboardAvoidingView style={Styles.taskarea}>
                <TextInput
                    style={Styles.input}
                    placeholder={'할 일 추가하기'}
                    value={task}
                    onChangeText={(task) => {
                        setTask(task);
                    }}
                ></TextInput>
                <TouchableOpacity onPress={() => AddTask(task)}>
                    <View style={Styles.addbtn}>
                        <Text>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView> */}
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

  taskview: {
    height: "36%",
  },
  taskarea: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
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
  rowFront: {
    alignItems: "center",
    backgroundColor: "#CCC",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 50,
  },
  rowBack: {
    backgroundColor: "#fff",
    paddingLeft: 40,
    paddingRight: 15,
    paddingTop: 13,
    borderWidth: 1,
    borderColor: "#9f9f9f9f",
    borderRadius: 10,
    shadowRadius: 2,
    shadowColor: "#c0c0c0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 48,
    marginLeft: 160,
    marginRight: 35,
    marginTop: 15,
  },
  backTextWhite: {
    color: "white",
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
