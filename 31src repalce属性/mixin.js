export const hunhe = {
  // export 暴露要加{} 混合复用配置
    methods: {
        showName() {
          alert(this.name);
        },
      },
      mounted() {
        console.log('你好')
      },
}

export const hunhe2={
  data(){
    return{
      x:100,
      y:100,
    }
  }
}