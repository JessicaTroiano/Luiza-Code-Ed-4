
 class LigarTv {
    constructor(sensor_tv, sensor_controle){
        this.sensor_controle = sensor_controle;
        this.sensor_tv = sensor_tv;
        

    }

    controleOk(){
        return 'O controle está com pilha!';
    }

    tvOk(){
        return 'A TV está com energia!';
    }

    acionaControle(){
        return 'Aciona' + this.sensor_controle + 'conecta ' + this.sensor_tv + '\nTV ligada com sucesso!';
    }
  
  }
  
  
  let tv = new LigarTv(' sensor controle e ', 'sensor TV ').acionaControle();
  console.log(tv);