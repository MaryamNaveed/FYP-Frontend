import React from 'react';
import { ScrollView, View, StyleSheet, Image, BackHandler, ImageBackground } from 'react-native';
import { Text,  Portal, TextInput, Provider, Modal, Button } from 'react-native-paper';
import BackAppBar from '../BackAppBar';
import { useNavigation } from '@react-navigation/native';

// import DateTimePicker from '@react-native-community/datetimepicker';
// import DatePicker from 'react-native-datepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DocumentPicker from 'react-native-document-picker';



const AddLabResults = () => {

  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = React.useState(false);

  const [patient,setPatient]=React.useState([]);
  const [testName,setTestName]=React.useState([]);
  const [result,setResult]=React.useState([]);
  const [remark,setRemark]=React.useState([]);

  const [date, setDate] = React.useState('');
  const [dateInput, setDateInput] = React.useState('');

  // const [fileResponse, setFileResponse] = React.useState([]);

  // const handleDocumentSelection = React.useCallback(async () => {
  //   try {
  //     const response = await DocumentPicker.pick({
  //       presentationStyle: 'fullScreen',
  //     });
  //     setFileResponse(response);
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // }, []);


  const add = () =>{
    setModalVisible(true);

  }

  

  const ok = ()=>{
    setModalVisible(false);
    navigation.navigate('MainDoctor');
  }

  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
    console.log(date);

    if(date!== ""){
        console.log(date);
        let newDate = new Date(date).toLocaleDateString();
        console.log(newDate);
        setDateInput(newDate);
    }
    else{
        setDateInput('');
    }
  };


  React.useEffect(() => {

    

    const backAction = () => {
          navigation.goBack();
            return true;
  

    };
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => backHandler.remove();
}, [])

  

  return (
    <Provider>
    <Portal>
      <Modal visible={modalVisible} onDismiss={ok} contentContainerStyle={styles.modalAge}>
          <View>
              
          <Text style={{margin: 10, textAlign: 'center'}}>Lab Test Result added successfully!</Text>

      
      <Button mode='contained' buttonColor='#00ced1' style={styles.okbutton} onPress={ok}>Ok</Button>
          </View>

     
      </Modal>
    </Portal>
   
    <View style={styles.container}>
      <BackAppBar message={"Add Lab Results"} />
      <ImageBackground source={require('../../images/appBack.jpg')} resizeMode="cover" style={{height: '100%'}}>
     <ScrollView style={{marginTop: 60}}>

     <Image
                source={require('../../images/labResult.jpg')}
                style={styles.image}
            />
            <TextInput
                label="Patient"
                value={patient}
                onChangeText={text => setPatient(text)}
                style={styles.textfield}
            />

          
            <TextInput
                label="Test Name"
                value={testName}
                onChangeText={text => setTestName(text)}
                style={styles.textfield}
            />

<TextInput
                label="Results"
                multiline
                numberOfLines={4}
                value={result}
                onChangeText={text => setResult(text)}
                style={styles.textfield}
            />


<TextInput
                label="Remarks"
                multiline
                numberOfLines={4}
                value={remark}
                onChangeText={text => setRemark(text)}
                style={styles.textfield}
            />


{/* <View style={{flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'}}> */}
<TextInput
label="Date"
          style={styles.textfield}
          value={dateInput} 
          onPressIn={showDatePicker}
        
        />
{/* 
<Button buttonColor='#00ced1' textColor='white' style={styles.alignRight} mode="contained" onPress={showDatePicker}>Select Date</Button>
</View> */}

<DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode='date'
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

{/* <View style={{flex:1, flexWrap:'wrap',margin: 20, flexDirection: 'row', backgroundColor: 'lightgrey'}}>
<Button style={{margin: 10, width: '30%'}} mode='contained' onPress={handleDocumentSelection} >Choose</Button> 

{fileResponse.map((file, index) => (
        <Text
          key={index.toString()}
          style={styles.uri}
          numberOfLines={1}
          ellipsizeMode={'middle'}>
          {file?.name}
        </Text>
      ))}
      
     

      </View> */}

            

      <Button buttonColor='royalblue' style={styles.button} mode="contained" onPress={add}>
                <Text style={{color: 'white'}}>Add</Text>
            </Button>

            

      
      
      </ScrollView> 
      </ImageBackground>
     
    </View>
    
    </Provider>
  );

};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#b0e0e6',
    height: '100%'
  },
  rows: {
    marginTop: 80
  },
  card: {
    width: '90%',
    height: 90,
    margin: '5%',
    borderRadius: 20,
    textAlign: 'center'
   
  }, 
  uri:{
    marginTop: 20
  },
  maincard:{
    borderRadius: 20, 
    height: 90,
    backgroundColor: 'whitesmoke',
   
  },
  okbutton:{
    margin: 10,
    
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 20,
    width: 180,
    height: 180
},
modalAge:{
    backgroundColor: 'white',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 20,
    borderRadius: 10

  },
  textfield: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10
},
button:{
    margin: 20
},
alignRight:{
    width: '35%',  
    alignSelf: 'flex-end', 
    marginHorizontal:5,
    marginTop: 10
  },
  alignLeft:{
    width: '50%', 
    alignSelf: 'flex-start', 
    marginStart: 20,
    marginTop: 10
     
    
  },

});

export default AddLabResults;
