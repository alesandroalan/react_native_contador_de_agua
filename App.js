import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  Alert,
} from 'react-native';

export default class ContadorDeAgua extends Component{
  
  constructor(props){
    super(props);
    this.state = {meta:2000,consumido:0,status:'Ruim',pct:0};
    this.beber = this.beber.bind(this);
    this.addConsumo = this.addConsumo.bind(this);
    this.getPorcentagem = this.getPorcentagem.bind(this);
  }

  addConsumo(atual, adendo){
    return atual+adendo;
  }

  getPorcentagem(pct_atual){
    return Math.floor((pct_atual*100)/this.state.meta);
  }

  beber(){
    let s = this.state;
    s.consumido = this.addConsumo(s.consumido, 200);
    if(s.consumido > 1000 && s.consumido < 2000)
      s.status = 'Médio';
    else if(s.consumido >= 2000)
      s.status = 'Ótimo';
      s.pct = this.getPorcentagem(s.consumido);
    this.setState(s);
  }

  render(){
    return(
      <View style={style.body}>
        <ImageBackground style={style.imgbg} source={require('./images/waterbg.png')}>
          <View style={style.area}>
            <View style={style.v_titles}>
              <Text style={style.titles}>Meta</Text>
              <Text style={style.title_results}>{this.state.meta}ml</Text>
            </View>
            <View style={style.v_titles}>
              <Text style={style.titles}>Consumido</Text>
              <Text style={style.title_results}>{this.state.consumido}ml</Text>
            </View>
            <View style={style.v_titles}>
              <Text style={style.titles}>Status</Text>
              <Text style={style.title_results}>{this.state.status}</Text>
            </View>
          </View>
          <View style={style.area_pct}>
            <Text style={style.info_pct}>{this.state.pct}%</Text>
            <View style={style.btn}>
              <Button color="black" title="Beber água" onPress={this.beber}/>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const style = StyleSheet.create({
  body:{
    flex: 1,
  },
  imgbg:{
    flex:1,
    width:null,
  },
  area:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
  },
  v_titles:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
  },
  titles:{
    textAlign:'center',
    height:30,
    width:110,
    color:'#3a3a69',
    fontSize:20,
    fontWeight:'bold',
    backgroundColor:'cyan',
    borderRadius:5,
    marginTop:20
  },
  title_results:{
    textAlign:'center',
    height:30,
    width:110,
    color:'blue',
    fontSize:18,
    fontWeight:'bold',
    borderBottomWidth:1,
    borderBottomColor:'blue'
  },
  area_pct:{
    flex:1,
    alignItems:'center'
  },
  info_pct:{
    fontSize:80,
    color:'#FFFFFF',
  },
  btn:{
    height:60,
    width:100
  }
});