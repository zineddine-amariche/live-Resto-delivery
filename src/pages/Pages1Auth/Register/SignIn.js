import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Register = () => {
  return (
    <View>
      <Text>Register</Text>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({})


// import React ,{Component,useState}from 'react';
// import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
// import {COLORS} from '../../theme';
// import Button from '../../components/Button';
// import Input from '../../components/Input';
// import { Formik } from 'formik'
// import * as yup from 'yup'
// import CheckBox from '@react-native-community/checkbox';


// const SignIn = ({navigation}) => {
//   const [isSelected, setSelection] = useState(false);

//   return (
//     <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1,alignItems:'center'}}>
      
//       <View style={{ paddingTop:100,paddingHorizontal: 20}}>
//         <Text style={{color: COLORS.black, fontSize: 24, fontWeight: 'bold'}}>
//         Je me connecte a mon espace livreur
//         </Text>
//         <Formik 
//             initialValues={{ 
//               id: '',
//               password: '' 
//             }}
//             onSubmit={values => console.log(values)}
//             validationSchema={yup.object().shape({
//               id: yup
//                 .string()
//                 .required('Identifiant est obligatoire'),
                          
//               password: yup
//                 .string()
//                 .required('Mot de passe est obligatoire'),
//             })}
//         >
//         {({ values, errors, setFieldTouched, touched, handleChange, isValid, handleSubmit }) => (
//         <View style={{marginVertical: 20}}>
//           <Input
//             value={values.id}
//             onBlur={() => setFieldTouched('id')}
//               onChangeText={handleChange('id')}
//             label="Identifiant"
//             placeholder="Saisissez votre identifiant"
//             error={errors.id}
//           />
         
//           <Input
//             value={values.password}
//             onBlur={() => setFieldTouched('password')}
//             onChangeText={handleChange('password')}
//             label="Mot de passe"
//             placeholder="Saisissez votre mot de passe"
//             error={errors.password}
//             password
//           />
//         <View style={{display:'flex',flexDirection:'row'}}>
        
//         <CheckBox
//           value={isSelected}
//           onValueChange={(newValue) => setSelection(newValue)}
//           color="#AAC840"
//           style={{alignSelf: "center"}}
//         />
//         <Text style={{margin:8 ,fontSize:14}}>Se souvenir de moi</Text>
//       </View>
//           <Button title="Connexion"  onPress={handleSubmit}/>
//           <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
//           <TouchableOpacity
//             // onPress={() => {
//             //   navigation.navigate("");
//             //   }}
//             >
//           <Text 
//           style={{fontSize:12}}
//           >Mot de passe oublie</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             // onPress={() => {
//             //   navigation.navigate("");
//             //   }}
//             >
//           <Text 
//            style={{fontSize:12}} 
//           >Contacter live resto</Text>
//           </TouchableOpacity>
//         </View>
//         </View>
//          )}
//         </Formik>
        
//       </View>
//     </SafeAreaView>
//   );
// };

// export default SignIn;