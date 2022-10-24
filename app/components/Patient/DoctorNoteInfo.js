import React from 'react';
import { ScrollView, View, StyleSheet, ImageBackground, BackHandler, Image } from 'react-native';
import { Text, Card, Title, Surface, Paragraph, TextInput, DataTable, Button } from 'react-native-paper';
import BackAppBar from '../BackAppBar';
import { useNavigation } from '@react-navigation/native';
import { Grid, Row, Col } from 'react-native-paper-grid';


const DoctorNoteInfo = ({route}) => {

   

  const navigation = useNavigation();

  React.useEffect(() => {
   
    const backAction = () => {
        
        
          navigation.goBack();
            return true;
  

    };
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => backHandler.remove();
}, [])

  

  return (
    <View style={styles.container}>
      <BackAppBar message={"Doctor Note Details"} />
      <ImageBackground source={require('../../images/appBack.jpg')} resizeMode="cover" style={{height: '100%'}}>
     <ScrollView style={{marginTop: 70}}>
        <View style={{marginLeft: 20, marginRight: 20}}>


        <Image
                source={require('../../images/doctorNote.jpg')}
                style={styles.image}
                resizeMode='contain'
            />

        <Grid style={{borderRadius: 20}}>
          
            <Row style={styles.bordercolum}>
                <Col ><Text style={{fontWeight: 'bold'}}>Doctor Name: </Text></Col>
                <Col><Text>{route.params.paramKey.doctor.name}</Text></Col>
            </Row>
            <Row style={styles.bordercolum}>
                <Col ><Text style={{fontWeight: 'bold'}}>Note:</Text></Col>
                <Col ><Text>{route.params.paramKey.note}</Text></Col>
            </Row>
            <Row style={styles.bordercolum}>
                <Col ><Text style={{fontWeight: 'bold'}}>Visit Reason:</Text></Col>
                <Col ><Text>{route.params.paramKey.reason}</Text></Col>
            </Row>
            <Row style={styles.bordercolum}>
                <Col ><Text style={{fontWeight: 'bold'}}>Date of Visit:</Text></Col>
                <Col ><Text>{route.params.paramKey.date}</Text></Col>
            </Row>
           
        
           
        </Grid>

        </View>
      
      </ScrollView> 
      </ImageBackground>
     
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#b0e0e6',
    height: '100%'
  },
  texfield:{
    width: 220,
    marginEnd: 10,
   
  },
  rows: {
    marginTop: 20
  },
  card: {
    width: '90%',
    marginHorizontal: '5%',
    marginVertical: 10,
    borderRadius: 20,
    textAlign: 'center',
   
  }, 
  maincard:{
    borderRadius: 20, 
    backgroundColor: 'whitesmoke',
   
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 20,
    width: 180,
    height: 180
},
bordercolum:{
    borderColor: 'black',
    minHeight: 70,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    alignContent: 'center',
    padding: 10
},
borderRight:{
    borderRightColor: 'black',
    minHeight: 70,
    borderRightWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
},
  borderLeft:{
    borderLeftColor: 'black',
    minHeight: 70,
    borderLeftWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
   
  }
  

});

export default DoctorNoteInfo;
