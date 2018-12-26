import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import { CheckBox, Radio } from "native-base";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    gender: "",
    lang: [{ key: "Telugu" }, { key: "English" }, { key: "Hindi" }],
    city: "",
    email: "",
    pswd: "",
    confirmPswd: "",
    mobile: "",
    checkGender: [false, false],
    check: [false, false, false],
    emsg: "",
    phMsg: "",
    fnMsg: "",
    lnMsg: "",
    gMsg: "",
    cMsg: "",
    lMsg: "",
    pswdMsg: "",
    cPswdMsg: "",
    success: ""
  };
  onSubmitPress() {
    let count = 0,
      ErrCount = 0,
      langKnown = [];
    for (let i = 0; i < 3; i++) {
      if (this.state.check[i]) {
        count++;
        langKnown.push(this.state.lang[i].key);
      }
    }
    if (count == 0) this.setState({ lMsg: "Select Atleast One Language" });
    else this.setState({ lMsg: "" });
    if (this.state.email == "")
      this.setState({ emsg: "Email Feild Cannot Be Empty" });
    else {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.(com)$/;
      if (reg.test(this.state.email) == false) {
        this.setState({ emsg: "Enter Valid Email" });
      } else this.setState({ emsg: "" });
    }
    if (this.state.firstName == "")
      this.setState({ fnMsg: "First Name Cannot Be Empty" });
    else this.setState({ fnMsg: "" });
    if (this.state.lastName == "")
      this.setState({ lnMsg: "Last Name Cannot Be Empty" });
    else this.setState({ lnMsg: "" });
    if (this.state.mobile == "")
      this.setState({ phMsg: "Mobile No. Cannot Be Empty" });
    else {
      let reg = /^[6-9]\d{9}$/;
      if (reg.test(this.state.mobile) == false)
        this.setState({ phMsg: "Please Enter a Valid Number" });
      else this.setState({ phMsg: "" });
    }
    if (this.state.pswd == "")
      this.setState({ pswdMsg: "Password Cannot Be Empty" });
    else {
      if (this.state.pswd.length < 8)
        this.setState({
          pswdMsg: "Password Length must be minimum 8 characters"
        });
      else this.setState({ pswdMsg: "" });
    }
    if (this.state.confirmPswd == "")
      this.setState({ cPswdMsg: "Enter Your confirm Password" });
    else {
      if (this.state.confirmPswd !== this.state.pswd)
        this.setState({ cPswdMsg: "Enter Correct Password" });
      else this.setState({ cPswdMsg: "" });
    }
    if (this.state.city == "")
      this.setState({ cMsg: "Please Select Your City" });
    else this.setState({ cMsg: "" });
    if (this.state.gender == "") this.setState({ gMsg: "Select Your Gender" });
    else this.setState({ gMsg: "" });
  }
  render() {
    return (
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text style={styles.headingStyle}>Registeration Form</Text>
            <View>
              <Text style={{ color: "red", fontSize: 15 }}>
                All Feilds Marked with * are Mandatory
              </Text>
            </View>
            <View style={styles.viewStyle}>
              <View style={styles.labelStyle}>
                <Text>
                  First Name
                  <Text style={{ color: "red", fontSize: 10 }}>*</Text>
                </Text>
              </View>
              <View style={{ flex: 3 }}>
                <TextInput
                  style={styles.TextInputStyle}
                  value={this.state.firstName}
                  underlineColorAndroid={"#fff"}
                  placeholder="Enter Your First Name"
                  onChangeText={firstName => {
                    this.setState({ firstName });
                  }}
                />
              </View>
            </View>
            <Text style={styles.ErrorMsg}>{this.state.fnMsg}</Text>
            <View style={styles.viewStyle}>
              <View style={styles.labelStyle}>
                <Text>
                  Last Name
                  <Text style={{ color: "red", fontSize: 10 }}>*</Text>{" "}
                </Text>
              </View>
              <View style={{ flex: 3 }}>
                <TextInput
                  style={styles.TextInputStyle}
                  value={this.state.lastName}
                  underlineColorAndroid={"#fff"}
                  placeholder="Enter Your Last Name"
                  onChangeText={lastName => {
                    this.setState({ lastName });
                  }}
                />
              </View>
            </View>
            <Text style={styles.ErrorMsg}>{this.state.lnMsg}</Text>
            <View style={styles.viewStyle}>
              <View style={styles.labelStyle}>
                <Text>
                  Mobile No.
                  <Text style={{ color: "red", fontSize: 10 }}>*</Text>
                </Text>
              </View>
              <View style={{ flex: 3 }}>
                <TextInput
                  keyboardType="numeric"
                  style={styles.TextInputStyle}
                  value={this.state.mobile}
                  maxLength={10}
                  underlineColorAndroid={"#fff"}
                  placeholder="Enter Your Mobile Number"
                  onChangeText={mobile => {
                    this.setState({ mobile });
                  }}
                />
              </View>
            </View>
            <Text style={styles.ErrorMsg}>{this.state.phMsg}</Text>
            <View style={styles.viewStyle}>
              <View style={styles.labelStyle}>
                <Text>
                  Email Id <Text style={{ color: "red", fontSize: 10 }}>*</Text>{" "}
                </Text>
              </View>
              <View style={{ flex: 3 }}>
                <TextInput
                  style={styles.TextInputStyle}
                  value={this.state.email}
                  underlineColorAndroid={"#fff"}
                  placeholder="Enter Your email Address"
                  onChangeText={email => {
                    this.setState({ email });
                  }}
                />
              </View>
            </View>
            <Text style={{ color: "green" }}>
              Your Email Id Will Be Your User Id
            </Text>
            <Text style={styles.ErrorMsg}>{this.state.emsg}</Text>
            <View style={styles.viewStyle}>
              <View style={styles.labelStyle}>
                <Text>
                  Password <Text style={{ color: "red", fontSize: 10 }}>*</Text>
                </Text>
              </View>
              <View style={{ flex: 3 }}>
                <TextInput
                  style={styles.TextInputStyle}
                  value={this.state.pswd}
                  secureTextEntry={true}
                  underlineColorAndroid={"#fff"}
                  placeholder="Enter Your Password"
                  onChangeText={pswd => {
                    this.setState({ pswd });
                  }}
                />
              </View>
            </View>
            <Text style={styles.ErrorMsg}>{this.state.pswdMsg}</Text>
            <View style={styles.viewStyle}>
              <View style={styles.labelStyle}>
                <Text>
                  Confirm Password{" "}
                  <Text style={{ color: "red", fontSize: 10 }}>*</Text>
                </Text>
              </View>
              <View style={{ flex: 3 }}>
                <TextInput
                  style={styles.TextInputStyle}
                  value={this.state.confirmPswd}
                  secureTextEntry={true}
                  underlineColorAndroid={"#fff"}
                  placeholder="Re-Enter Your Password"
                  onChangeText={confirmPswd => {
                    this.setState({ confirmPswd });
                  }}
                />
              </View>
            </View>
            <Text style={styles.ErrorMsg}>{this.state.cPswdMsg}</Text>
            <View style={styles.viewStyle}>
              <View style={styles.labelStyle}>
                <Text>
                  Languages Known
                  <Text style={{ color: "red", fontSize: 10 }}>*</Text>
                </Text>
              </View>
              <View style={{ flex: 3, flexDirection: "row" }}>
                <FlatList
                  data={this.state.lang}
                  extraData={this.state}
                  renderItem={({ item, index }) => (
                    <View style={{ flex: 1, flexDirection: "row", padding: 2 }}>
                      <View style={{ flex: 1 }}>
                        <CheckBox
                          color="#00bfff"
                          checked={this.state.check[index]}
                          onPress={() => {
                            this.state.check.splice(
                              index,
                              1,
                              !this.state.check[index]
                            );
                            this.setState({ check: this.state.check });
                          }}
                        />
                      </View>
                      <View style={{ flex: 4 }}>
                        <Text>{item.key}</Text>
                      </View>
                    </View>
                  )}
                />
              </View>
            </View>
            <Text style={styles.ErrorMsg}>{this.state.lMsg}</Text>
            <View style={styles.viewStyle}>
              <View style={styles.labelStyle}>
                <Text>
                  Gender <Text style={{ color: "red", fontSize: 10 }}>*</Text>{" "}
                </Text>
              </View>
              <View style={{ flex: 3, flexDirection: "row" }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Text style={{ paddingRight: 10 }}>Male</Text>
                  <Radio
                    color={"#f0ad4e"}
                    selectedColor={"#5cb85c"}
                    selected={this.state.checkGender[0]}
                    onPress={() => {
                      // this.state.gender = "Male";
                      let y = [];
                      y[0] = !this.state.checkGender[0];
                      if (this.state.checkGender[1]) y[1] = false;
                      this.setState({ checkGender: y, gender: "Male" });
                    }}
                  />
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Text style={{ paddingRight: 10 }}>Female</Text>
                  <Radio
                    color={"#f0ad4e"}
                    selectedColor={"#5cb85c"}
                    selected={this.state.checkGender[1]}
                    onPress={() => {
                      let x = [];
                      x[1] = !this.state.checkGender[1];
                      if (this.state.checkGender[1]) x[0] = false;
                      this.setState({ checkGender: x, gender: "Female" });
                    }}
                  />
                </View>
              </View>
            </View>
            <Text style={styles.ErrorMsg}>{this.state.gMsg}</Text>
            <View style={styles.viewStyle}>
              <View style={styles.labelStyle}>
                <Text>
                  City <Text style={{ color: "red", fontSize: 10 }}>*</Text>
                </Text>
              </View>
              <View style={{ flex: 3 }}>
                <Dropdown
                  itemColor="#000"
                  placeholder="select your city"
                  data={[
                    {
                      value: "Hyderabad"
                    },
                    {
                      value: "Delhi"
                    },
                    {
                      value: "Mumbai"
                    },
                    {
                      value: "Banglore"
                    }
                  ]}
                  value={this.state.city}
                  onChangeText={value => {
                    this.setState({ city: value });
                  }}
                />
              </View>
            </View>
            <Text style={styles.ErrorMsg}>{this.state.cMsg}</Text>
            <View>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={async () => {
                  await this.onSubmitPress();
                  if (
                    this.state.cMsg == "" &&
                    this.state.fnMsg == "" &&
                    this.state.lnMsg == "" &&
                    this.state.phMsg == "" &&
                    this.state.emsg == "" &&
                    this.state.pswdMsg == "" &&
                    this.state.lMsg == "" &&
                    this.state.gMsg == "" &&
                    this.state.cPswdMsg == ""
                  ) {
                    this.setState({
                      success: "Details Updated Successfully"
                    });
                    console.log(this.state);
                  } else this.setState({ success: "" });
                }}
              >
                <Text style={styles.buttonTextStyle}>Submit</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{ color: "green" }}>{this.state.success}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    padding: 10,
    backgroundColor: "#fff"
  },
  headingStyle: {
    alignSelf: "center",
    padding: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "#444"
  },
  TextInputStyle: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    margin: 5,
    height: 35,
    padding: 10
  },
  viewStyle: {
    flex: 1,
    flexDirection: "row"
  },
  buttonStyle: {
    alignSelf: "center",
    backgroundColor: "#000",
    height: 45,
    width: 180,
    borderRadius: 30,
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonTextStyle: {
    alignSelf: "center",
    color: "#fff",
    fontSize: 20
  },
  labelStyle: {
    flex: 1,
    justifyContent: "center"
  },
  ErrorMsg: { color: "red", fontSize: 12 }
});
