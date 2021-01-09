<template>
  <div>
    <div class="container">
      <div class="close">
         <button class="btn  glyphicon glyphicon-off" aria-hidden="true"></button>
      </div>
      <div class="img" >
        <img src="../assets/11.jpg"  width="100%"  />
      </div>
      <div class="top">
        <div class="logo">
          <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
          <span>SY办公系统</span>
          <input class="search" placeholder="搜索/"/>
        </div>
        <div class="info">
          <button class="btn btn-info btn-xs glyphicon glyphicon-comment" aria-hidden="true"></button>
          <button class="btn btn-info btn-xs glyphicon glyphicon-level-up" aria-hidden="true"></button>

        </div>



      </div>
        <div class="list">
          <div class="listoption" >
            <ul>
               <li style="margin-top:40px;">首页</li>
               <li>任务</li>
               <li>项目</li>
               <li>文件管理</li>
               <li>考勤管理</li>
               <li>员工列表</li>
               <li>申请管理</li>
            </ul>

          </div>

        </div>
        <div class="context">

        </div>
        <div class="news">

        </div>
    </div>




  </div>
</template>

<script>
</script>

<style scoped="">

  .img img {
    cursor: pointer;
  }

  .img{
      width: 30px;
      height: 30px;
      background: #D3D3D3;
      position: absolute;
      right: 50px;
      border-radius:50% ;
      overflow: hidden;


  }
  .close{
  position: absolute;
  right: 0;
  top: 0px;
  }
  .info button{
    margin-right:20px ;
  }
  .info{
    position: absolute;
    right: 30px;
    margin-right: 50px;
  }

  .search{
    height: 20px;
    width: 200px;
    margin-left: 50px;
    border-radius: 5px;
    font-size: 10px;
    text-indent: 10px;
    outline: none;
    border:lightgray solid;

  }
  .logo{

      font-size:20px ;
      font-weight: bold;
      margin-left: 30px;
      display: inline-block;
  }
  .listoption ul li:hover{
    background: gray;
  }
  .listoption ul li{

     text-align: center ;
     font-size:20px ;
     margin-top:20px ;
     height: 50px;
     vertical-align: middle;
     cursor: pointer;



  }

  .listoption ul{
  list-style: none;
  }


  .listoption{
    width: 100%;


    align-content: center;

  }

  .top{
    width: 99.7%;
    height: 50px;
    position: relative;



  }
  .news{
      width: 20%;
      height: 600px ;
      background: orange;

  }

  .context{
    width: 60%;
    height: 600px;
    background: skyblue;
    margin:0 10px ;
  }

  .list{
    height: 600px;
    width: 18%;
    background: papayawhip;
  }

  .container div{
    float: left;


  }
  .container{

    padding: 20px;
    margin-top:30px ;
    background: pink;
    position: relative;
  }

</style>
